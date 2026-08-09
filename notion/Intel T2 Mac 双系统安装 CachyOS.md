# Intel T2 Mac 双系统安装 CachyOS

本文记录在带 Apple T2 安全芯片的 Intel Mac 上保留 macOS，并安装 CachyOS 双系统的完整过程。

本文方案已在以下设备上实际验证：

| 项目 | 配置 |
| --- | --- |
| 机型 | MacBook Pro 16-inch, 2019 |
| Model Identifier | `MacBookPro16,1` |
| 处理器 | 8-Core Intel Core i9 |
| 内存 | 64 GB |
| 内置硬盘 | 500 GB Apple SSD |
| 安装方式 | macOS 250 GB + CachyOS 250 GB |
| Bootloader | systemd-boot |
| 桌面环境 | KDE Plasma |

> 本文仅适用于 `x86_64` 架构并带 Apple T2 芯片的 Intel Mac。M1、M2、M3、M4 等 Apple Silicon 机型不能使用此方案。

## 1. 安装前须知

### 1.1 推荐保留 macOS

不建议删除整个 macOS，原因包括：

- Apple Wi-Fi 和部分蓝牙固件需要从 macOS 合法提取；
- macOS 更新可能同时更新设备固件；
- macOS 可用于恢复系统和排查启动问题；
- 完全删除 macOS 会增加数据丢失和恢复失败的风险。

开始前应使用 Time Machine 或其他方式完整备份重要数据。条件允许时，另外制作一个可启动的 macOS 安装 U 盘。

### 1.2 已知硬件限制

T2 Mac 上的 Linux 可以日常使用，但仍有一些限制：

- Touch ID 不可用；
- 触控板没有 Force Touch，防误触效果不如 macOS；
- 蓝牙和睡眠在部分机型上可能不稳定；
- 带 AMD 独显的机型可能遇到混合显卡或电源管理问题；
- 内置麦克风输入音量可能较低。

具体状态以 [t2linux 硬件支持列表](https://wiki.t2linux.org/state/) 为准。

## 2. 确认机型

在 macOS 终端执行：

```bash
uname -m
system_profiler SPHardwareDataType SPiBridgeDataType
```

应满足以下条件：

- `uname -m` 输出 `x86_64`；
- Hardware Overview 中的处理器是 Intel；
- Controller 或 iBridge 中显示 `Apple T2 安全芯片` 或 `Apple T2 chip`。

Apple 官方列出的 T2 MacBook 主要包括 2018 至 2020 年发布的 Intel MacBook Pro 和 MacBook Air。具体可查看 [Apple T2 机型列表](https://support.apple.com/103265)。

## 3. 准备安装介质

需要准备：

- 一个至少 8 GB 的 U 盘，写入镜像时会被清空；
- 稳定的网络连接；
- CachyOS Desktop ISO；
- 可选的 USB 有线网卡或手机 USB 网络共享。

### 3.1 下载并验证 ISO

从 [CachyOS 官方下载页面](https://wiki.cachyos.org/cachyos_basic/download/)下载 Desktop ISO 和同名 `.sha256` 文件。

在 macOS 中验证：

```bash
cd ~/Downloads
shasum -a 256 cachyos-desktop-linux-*.iso
cat cachyos-desktop-linux-*.iso.sha256
```

两个 SHA-256 值必须完全一致。不要把教程中的旧哈希直接用于新版本 ISO，应始终以本次下载的 `.sha256` 文件为准。

### 3.2 写入 U 盘

推荐使用 balenaEtcher：

1. 选择 `Flash from file`，打开 CachyOS ISO；
2. 选择正确的 U 盘；
3. 点击 `Flash`；
4. 写入完成后安全弹出 U 盘。

选择目标盘时务必核对容量，避免覆盖其他磁盘。

## 4. 在 macOS 中提取 Apple 固件

由于授权限制，CachyOS 不能在 ISO 中直接分发 Apple 的 Wi-Fi 固件。安装 Linux 前，在 macOS 终端执行：

```bash
curl -sL https://wiki.t2linux.org/tools/firmware.sh | bash -s copy_to_efi
```

脚本将执行以下操作：

1. 挂载 Apple EFI 分区；
2. 从 macOS 获取 Wi-Fi 和蓝牙固件；
3. 将固件和 `firmware.sh` 保存到 EFI 分区；
4. 卸载 EFI 分区。

看到类似以下输出表示成功：

```text
Getting Wi-Fi and Bluetooth firmware
Copying this script to EFI
Volume EFI ... unmounted
```

这里只是把固件保存到 EFI，并不会自动把固件安装进 CachyOS。进入 Linux 后仍需手动运行脚本。

## 5. 为 CachyOS 创建磁盘空间

### 5.1 使用磁盘工具缩小 macOS

在 macOS 中打开“磁盘工具”：

1. 点击“显示”并选择“显示所有设备”；
2. 选择 `Macintosh HD` 所在的内部磁盘或 APFS 容器；
3. 点击“分区”；
4. 点击饼图下方的 `+`；
5. 必须选择“添加分区”，不要选择“添加 APFS 宗卷”；
6. 名称填写 `CachyOS`；
7. 格式选择 `ExFAT`，方便在安装器中识别；
8. 分配容量并应用。

CachyOS 最低建议 50 GB。如果准备安装开发环境、游戏或虚拟机，建议分配 120 至 250 GB。

不要在 Linux 安装器中直接缩小 macOS 的 APFS 容器。

### 5.2 核对分区

在 macOS 终端执行：

```bash
diskutil list
```

本次安装在分区前的磁盘结构如下：

```text
/dev/disk0
  disk0s1   EFI                         314.6 MB
  disk0s2   Apple_APFS Container        250.0 GB
  disk0s4   Microsoft Basic Data        250.0 GB  CachyOS
```

其中：

- `disk0s1` 是 Apple EFI，不能删除或格式化；
- `disk0s2` 是 macOS，不能删除或格式化；
- 约 250 GB 的 `CachyOS` ExFAT 分区是安装目标。

分区编号可能因设备而异，应以名称、文件系统和容量共同判断，不能只照抄编号。

## 6. 关闭 T2 安全启动限制

1. 关闭 Mac；
2. 开机后立即按住 `Command + R`，进入 macOS 恢复模式；
3. 选择管理员账户并输入密码；
4. 打开“实用工具” -> “启动安全性实用工具”；
5. 将安全启动设置为 `无安全性（No Security）`；
6. 选择 `允许从外部或可移动介质启动`。

详细说明参见 [Apple 启动安全性实用工具](https://support.apple.com/102522)。

安装完成后可以重新禁止从外部介质启动，但运行 CachyOS 通常仍需保持 `No Security`。

## 7. 启动 CachyOS Live 环境

1. 插入 CachyOS U 盘；
2. 重启 Mac，并立即按住 `Option`；
3. 在 Apple Startup Manager 中选择橙色的 `EFI Boot`；
4. 如果出现两个 `EFI Boot`，可先尝试最右侧的一个；
5. 进入 CachyOS Live 桌面。

如果出现“需要软件更新才能使用此启动磁盘”，通常表示安全启动设置没有生效，或者选择了错误的 `EFI Boot`。

## 8. Live 环境联网

CachyOS 使用在线安装器，安装时必须联网。

如果已有 USB 网卡或 USB 网络共享，可以直接使用，并在安装完成后再导入 Apple 固件。

如果安装阶段只能使用内置 Wi-Fi，先确认 Apple EFI 分区：

```bash
lsblk -f
```

T2 Mac 的 Apple EFI 通常是 `/dev/nvme0n1p1`，容量约 300 MB、文件系统为 FAT32。确认后执行：

```bash
sudo mkdir -p /tmp/apple-wifi-efi
sudo mount /dev/nvme0n1p1 /tmp/apple-wifi-efi
bash /tmp/apple-wifi-efi/firmware.sh
```

脚本询问固件来源时选择：

```text
1. Retrieve the firmware from the EFI partition.
```

即输入 `1` 并按回车。脚本完成后执行：

```bash
sudo umount /tmp/apple-wifi-efi
```

注意：Live 环境是临时系统。在 Live 环境中导入固件后，安装完成进入正式系统时仍需再执行一次。

## 9. 安装 CachyOS

### 9.1 选择 Bootloader

在安装器的 Bootloader 页面选择：

```text
systemd-boot
```

本文不复用 Apple 原有约 300 MB 的 EFI，而是在 CachyOS 空间中创建独立的 2 GB FAT32 `/boot` 分区。这样可以满足 CachyOS 对 systemd-boot 启动分区的容量要求，也能避免修改 Apple EFI。

### 9.2 手动分区

选择 `Manual partitioning`，然后：

1. 找到之前创建的约 250 GB ExFAT `CachyOS` 分区；
2. 只删除这个 ExFAT 分区，使其变为空闲空间；
3. 在空闲空间中新建 2048 MiB FAT32 分区；
4. 将该 FAT32 分区挂载到 `/boot`，并启用 `boot` 标志；
5. 使用剩余空间创建 Btrfs 分区，挂载到 `/`；
6. 不修改 Apple EFI；
7. 不修改 macOS APFS 分区。

本次验证成功的最终布局如下：

| 分区 | 大小 | 文件系统 | 挂载点 | 操作 |
| --- | ---: | --- | --- | --- |
| Apple EFI | 约 300 MiB | FAT32 | 无 | 保留，不格式化 |
| macOS | 约 232.81 GiB | APFS | 无 | 保留，不格式化 |
| Boot | 2 GiB | FAT32 | `/boot` | 新建，设置 boot 标志 |
| CachyOS | 约 230.81 GiB | Btrfs | `/` | 新建并安装系统 |

安装摘要应当只包含：

- 删除原 CachyOS ExFAT 分区；
- 创建 2048 MiB FAT32 `/boot`；
- 创建 Btrfs 系统分区；
- 在 Btrfs 分区安装 CachyOS。

如果摘要显示将格式化约 300 MB 的 Apple EFI 或 macOS APFS，应立即返回检查，不能继续安装。

### 9.3 其他安装选项

按需要设置时区、键盘、桌面环境、软件包和用户账户，然后开始安装。安装器中的 CachyOS Hardware Detection 应自动应用必要的 T2 启动参数和配置。

安装结束后重启。需要手动选择系统时，开机按住 `Option`：

- macOS 仍从原来的 macOS 启动项进入；
- CachyOS 通常显示为 `EFI Boot`。

## 10. 在正式系统中安装 Wi-Fi 和蓝牙固件

首次进入新安装的 CachyOS 后，打开终端执行：

```bash
sudo mkdir -p /tmp/apple-wifi-efi
sudo mount /dev/nvme0n1p1 /tmp/apple-wifi-efi
bash /tmp/apple-wifi-efi/firmware.sh
```

出现以下选择时输入 `1`：

```text
How do you want to copy the firmware to Linux?
1. Retrieve the firmware from the EFI partition.
```

脚本安装并重新加载 Wi-Fi、蓝牙驱动后，会询问是否继续在 EFI 中保留固件和脚本：

```text
Do you want to keep a copy? (y/N)
```

输入 `y`，以便以后重装或修复。脚本结束后卸载 EFI：

```bash
sudo umount /tmp/apple-wifi-efi
```

检查网络设备：

```bash
nmcli device status
```

正常情况下会出现 Wi-Fi 设备，并且 KDE 网络菜单能够扫描无线网络。

### 10.1 Wi-Fi 仍未出现

先让 NetworkManager 使用 iwd 后端：

```bash
sudo mkdir -p /etc/NetworkManager/conf.d
printf '[device]\nwifi.backend=iwd\n' | sudo tee /etc/NetworkManager/conf.d/wifi_backend.conf
sudo systemctl restart NetworkManager
```

仍未出现时重新加载内核模块：

```bash
sudo modprobe -r brcmfmac_wcc
sudo modprobe -r brcmfmac
sudo modprobe brcmfmac
```

不要安装 `broadcom-wl`。T2 Mac 使用从 macOS 提取的 Apple 固件和内核中的 `brcmfmac` 驱动。

## 11. 更新和验证

联网后更新系统：

```bash
sudo pacman -Syu
```

测试网络：

```bash
ping -c 4 archlinux.org
```

最后重启：

```bash
reboot
```

重启后检查以下项目：

- 按 `Option` 可以分别进入 macOS 和 CachyOS；
- Wi-Fi 重启后仍能使用；
- 蓝牙能够扫描设备；
- 键盘、触控板、Touch Bar、声音和亮度调节正常；
- 合盖睡眠和恢复没有导致系统失去响应。

## 12. 常见问题

### 启动 U 盘时提示需要软件更新

重新进入恢复模式，确认安全启动是 `No Security`，并允许从外部介质启动。如果启动菜单中有两个 `EFI Boot`，尝试另一个。

### 安装器提示 EFI 分区太小

不要扩大或格式化 Apple 原有约 300 MB 的 EFI。按照本文方案，从 CachyOS 目标空间单独创建 2 GB FAT32 `/boot`，并选择 systemd-boot。

### 固件脚本没有自动运行

这是正常现象。macOS 中执行 `copy_to_efi` 只负责保存固件。进入 Live 环境或正式系统后，需要挂载 Apple EFI 并运行其中的 `firmware.sh`。

### 重启后 Wi-Fi 再次消失

确认固件脚本是在正式安装的 CachyOS 中执行，而不是只在 Live 环境中执行。之后检查：

```bash
nmcli device status
ls /lib/firmware/brcm
```

### AMD 独显不稳定

`MacBookPro16,1` 带 Intel 核显和 AMD 独显，Linux 下的混合显卡支持仍不完整。不要一开始就永久添加 `nomodeset`，因为它会禁用正常的图形加速。遇到黑屏或崩溃时，应记录内核日志，并参考 [t2linux Hybrid Graphics 指南](https://wiki.t2linux.org/guides/hybrid-graphics/)针对具体显卡处理。

## 13. 参考资料

- [CachyOS: T2 MacBook 安装指南](https://wiki.cachyos.org/installation/installation_t2macbook/)
- [CachyOS: 安装准备与 U 盘制作](https://wiki.cachyos.org/installation/installation_prepare/)
- [CachyOS: Desktop/Laptop 安装与手动分区](https://wiki.cachyos.org/installation/installation_on_root/)
- [t2linux: 安装前准备](https://wiki.t2linux.org/guides/preinstall/)
- [t2linux: 设备支持状态](https://wiki.t2linux.org/state/)
- [Apple: 配备 T2 安全芯片的 Mac](https://support.apple.com/103265)
- [Apple: 启动安全性实用工具](https://support.apple.com/102522)

---

本文记录于 2026 年 8 月。CachyOS 是滚动发行版，安装器界面、ISO 文件名和固件脚本选项可能随版本变化。执行涉及磁盘的操作前，应以安装摘要中实际显示的分区名称、容量和文件系统为准。
