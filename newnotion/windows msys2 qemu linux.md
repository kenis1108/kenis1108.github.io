## Install MSYS2

[https://www.msys2.org/](https://www.msys2.org/)

## Install QEMU with MSYS2 UCRT64

open `ucrt64.exe`

```bash
pacman -Syu
pacman -S mingw-w64-ucrt-x86_64-qemu
```

## Prepare the mirror image

[https://mirrors.tuna.tsinghua.edu.cn](https://mirrors.tuna.tsinghua.edu.cn)
access to the windows disk drive via `/c`、`/d`

```bash
cp /c/Users/<username>/Downloads/xxx.iso ./
```

## Create virtual disk

```bash
qemu-img create -f qcow2 ubuntu26.04.qcow2 60G
```

## Start installation system

```bash
qemu-system-x86_64 \
-m 12G -smp 4 -accel whpx \
-cpu kvm64 \
-vga virtio -display gtk \
-netdev user,id=n0,hostfwd=::2222-:22 \
-device virtio-net-pci,netdev=n0 \
-drive file=ubuntu26.04.qcow2,format=qcow2 \
-cdrom ./ubuntu-26.04-live-server-amd64.iso
```

## Reboot and start installed system

```bash
qemu-system-x86_64 \
-m 12G -smp 4 -accel whpx \
-cpu kvm64 \
-vga virtio -display gtk \
-netdev user,id=n0,hostfwd=::2222-:22 \
-device virtio-net-pci,netdev=n0 \
-drive file=ubuntu26.04.qcow2,format=qcow2
```

## Shutdown automatically discards all changes

```bash
qemu-system-x86_64 \
-m 12G -smp 4 -accel whpx \
-cpu kvm64 \
-snapshot \
-vga virtio -display gtk \
-netdev user,id=n0,hostfwd=::2222-:22 \
-device virtio-net-pci,netdev=n0 \
-drive file=ubuntu26.04.qcow2,format=qcow2
```

## Connect with ssh

```bash
ssh localhost -p 2222
```

## Offline snapshot management

```bash
# snapshot name: install_done，mirror: ubuntu26.04.qcow2

# 创建快照（先关机）
qemu-img snapshot -c install_done ubuntu26.04.qcow2

# 查看所有快照
qemu-img snapshot -l ubuntu22.04.qcow2

# 回滚恢复（先关机）
qemu-img snapshot -a install_done ubuntu26.04.qcow2

# 删除快照
qemu-img snapshot -d install_done ubuntu26.04.qcow2
```
