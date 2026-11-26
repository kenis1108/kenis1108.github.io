# Mole 安装脚本分析

> 核查时间：2026 年 11 月 26 日 10:42（UTC+8）
>
> 说明：本文结论基于上述时间点从 GitHub 获取的 `tw93/mole/main/install.sh` 内容；脚本后续更新后，安装行为可能发生变化。

默认这条命令**不会编译主程序**。它先下载最新正式版的**源码包**（主体是 shell 脚本），再单独下载两个 **Go 预编译二进制**。

```bash
curl -fsSL https://raw.githubusercontent.com/tw93/mole/main/install.sh | bash
```

这条命令没有额外参数，走的是 stable 安装，不是 `main` 那种 edge 安装。

## 它实际做了什么

1. **拒绝 root。** 用 `sudo` 跑会直接退出，提示不要用 sudo；写 `/usr/local/bin` 时脚本自己再要管理员权限。
2. **只支持 macOS 12 及以上。**
3. **如果当前 `mole` 已经是 Homebrew 装的**（`Cellar/mole` 的符号链接），脚本会停下来，让你运行 `brew upgrade mole`，或者先 `brew uninstall --force mole` 再手动安装。
4. **拉源码，不编译主程序。**
   - 查最新 tag：`https://api.github.com/repos/tw93/mole/releases/latest`（形如 `V1.60.0`）
   - 下载源码包：`https://github.com/tw93/mole/archive/refs/tags/<tag>.tar.gz`
   - 解压到临时目录。管道执行时没有本地仓库，所以一定走下载。
5. **把文件拷到本机：**
   - `mole`、`mo` → `/usr/local/bin/`（目录不可写时使用 sudo）
   - `bin/`、`lib/` → `~/.config/mole/`
   - 再修改已安装的 `mole`，把里面的 `SCRIPT_DIR` 指向 `~/.config/mole`
6. **再下载两个 Go 辅助程序** `analyze` 和 `status`，校验 SHA256（有已登录的 `gh` 时还会验证 GitHub Actions 的构建证明），放到 `~/.config/mole/bin/`，文件名是 `analyze-go`、`status-go`。

## 可执行文件从哪来

| 组件 | 来源 | 地址 |
|---|---|---|
| `mole` / `mo` | 源码包里的 **shell 脚本**，直接拷贝 | `github.com/tw93/mole/archive/refs/tags/V<版本>.tar.gz` |
| `analyze`、`status` | **Release 预编译二进制**，按 CPU 选 `arm64` 或 `amd64` | `github.com/tw93/mole/releases/download/V<版本>/analyze-darwin-<arch>`，`status` 同理 |
| 校验文件 | 同一 Release | `.../download/V<版本>/SHA256SUMS` |

Apple Silicon 上就是 `analyze-darwin-arm64` 和 `status-darwin-arm64`。

## 什么时候才会 `go build`

源码编译只覆盖 `cmd/analyze` 和 `cmd/status`，而且要求本机已有 `go`。

- **默认安装不会编译。** 二进制下载成功就使用 Release 文件。
- **下载没完成**（网络失败、这个 tag 还没发布二进制）时，才会尝试本地 `go build -ldflags="-s -w"`。
- **校验失败不会退回编译**，直接中止，避免用未校验的构建顶替。
- 显式安装 edge 才会优先编译：

  ```bash
  curl -fsSL https://raw.githubusercontent.com/tw93/mole/main/install.sh | bash -s -- main
  ```

  这等价于设置 `MOLE_VERSION=main`、`MOLE_EDGE_INSTALL=true`。这种情况下源码来自 `main` 分支的 tarball 或 `git clone`，不是某个 Release tag。
