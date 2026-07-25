# 核心结论（你之前搞错根源了）
缓存文件名里第三段短哈希 **不是安装包exe的sha256**，而是**下载URL字符串本身的SHA256前7位小写**。
所以你手里文件sha256和缓存文件名7位串完全无关，自然没有重叠。

## 1. 源码证明 cache 文件名生成逻辑（core.ps1）
```powershell
# 1. 把完整url字符串转utf8字节流
$urlStream = [System.IO.MemoryStream]::new([System.Text.Encoding]::UTF8.GetBytes($url))
# 2. 对【URL文本】算SHA256，转小写，截取前7字符
$sha = (Get-FileHash -Algorithm SHA256 -InputStream $urlStream).Hash.ToLower().Substring(0, 7)
# 3. 拼接缓存文件名：app#version#7位sha.后缀
$filePath = "$app#$version#$sha$extension"
```
你例子：`clash-verge-rev#2.4.2#1271c54.7z`
`1271c54` = 该版本manifest里`url`字符串的sha256前7位，和exe文件哈希无关。

## 2. manifest 里 `"hash"` 和缓存文件名哈希完全两码事
| 字段 | 计算对象 | 用途 |
|------|----------|------|
| manifest `hash` | 安装包exe二进制文件 | 安装时校验文件完整性，防止篡改 |
| cache文件名7位短sha | 下载链接URL文本字符串 | 用来区分同一软件同版本、不同下载链接，避免文件名过长 |

## 3. 你手动复用2.5.2安装包的完整操作
### 步骤1：拿到2.5.2完整下载URL
```
https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.2/Clash.Verge_2.5.2_x64-setup.exe
```
### 步骤2：计算该URL字符串的SHA256，截取前7位
PowerShell执行：
```powershell
$url = "https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.2/Clash.Verge_2.5.2_x64-setup.exe"
$bytes = [Text.Encoding]::UTF8.GetBytes($url)
$ms = [IO.MemoryStream]::new($bytes)
$sha256 = (Get-FileHash -InputStream $ms -Algorithm SHA256).Hash.ToLower()
$shortSha = $sha256.Substring(0,7)
Write-Host "URL SHA256前7位: $shortSha"
```
### 步骤3：重命名你的exe，后缀强制.7z
模板：
```
clash-verge-rev#2.5.2#你算出的7位sha.7z
```
### 步骤4：放入 `~/scoop/cache/`
### 步骤5：关键前提，否则缓存不会生效
bucket内`clash-verge-rev.json`中2.5.2对应的`hash`值，**必须是你本地2.5.2 exe文件的sha256**，否则安装校验失败，依旧重新下载。

## 补充误区澄清
1. 不要用exe文件的sha256去做缓存文件名，永远是URL的sha256；
2. 就算同一个安装包，换一个下载镜像URL，缓存文件名7位串会完全改变；
3. 缓存后缀`.7z`只是统一命名格式，不要求原始文件是7z压缩包。


# 核心根源：你漏掉了 URL 末尾的 `#/dl.7z` 片段
## 1. 源码完整逻辑（core.ps1 cache_path）
```powershell
function cache_path($app, $version, $url) {
    # 1. 先生成旧版长文件名（URL全字符转下划线）
    $underscoredUrl = $url -replace '[^\w\.\-]+', '_'
    $filePath = Join-Path $cachedir "$app#$version#$underscoredUrl"

    # 2. 如果旧版长文件名存在，直接返回（兼容老缓存）
    if (Test-Path $filePath) {
        return $filePath
    }

    # 3. 新版：对【完整原始url字符串】算SHA256，取前7位
    $urlStream = [System.IO.MemoryStream]::new([System.Text.Encoding]::UTF8.GetBytes($url))
    $sha = (Get-FileHash -Algorithm SHA256 -InputStream $urlStream).Hash.ToLower().Substring(0, 7)
    
    # 4. 取url后缀（`.exe` / `#/dl.7z` 最终会变成 `.7z`）
    $extension = [System.IO.Path]::GetExtension($url)
    $filePath = $filePath -replace "$underscoredUrl", "$sha$extension"
    return $filePath
}
```

## 2. 你算出来对不上的唯一原因
clash-verge-rev 的 manifest 里 **URL 不是裸 exe 链接，末尾带 `#/dl.7z`**
### 真实 manifest url：
```
https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_x64-setup.exe#/dl.7z
```
### 你大概率只用了不带 `#/dl.7z` 的链接去计算哈希，字符串不一样，SHA256 完全不同，7位前缀自然对不上。

## 3. 正确计算脚本（复制直接跑）
把 `$url` 替换成 bucket json 里**完整带#/dl.7z**的链接：
```powershell
# 必须和manifest内完全一致，包含 #/dl.7z
$url = "https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_x64-setup.exe#/dl.7z"
$bytes = [System.Text.Encoding]::UTF8.GetBytes($url)
$ms = [System.IO.MemoryStream]::new($bytes)
$fullSha = (Get-FileHash -InputStream $ms -Algorithm SHA256).Hash.ToLower()
$shortSha = $fullSha.Substring(0,7)
Write-Host "完整URL SHA256: $fullSha"
Write-Host "缓存文件名7位hash: $shortSha"
```

## 4. 针对你手动缓存复用 2.5.2 的完整步骤
1. 打开 clash-verge-rev.json，复制**完整带 `#/dl.7z`** 的 2.5.2 url；
2. 上面脚本填入该完整URL，算出7位短sha；
3. 重命名本地下载的 exe 文件为：
   ```
   clash-verge-rev#2.5.2#算出的7位hash.7z
   ```
4. 放入 `~/scoop/cache/`；
5. 关键前提：bucket json 中 2.5.2 的 `hash` 值必须是你本地 exe 文件的 sha256，否则校验失败仍会重新下载。

## 补充：两种缓存文件名共存机制
- 老版本 Scoop：缓存文件名是 `app#version#URL转下划线`；
- 新版本 Scoop：优先查找老文件名，不存在才用「7位URL哈希.后缀」；
- 你看到的 `clash-verge-rev#2.4.2#1271c54.7z` 是新版哈希命名规则，计算基准是**带#/dl.7z的完整URL字符串**。
