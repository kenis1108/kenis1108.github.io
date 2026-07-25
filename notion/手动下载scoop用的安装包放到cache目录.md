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
