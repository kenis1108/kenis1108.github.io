> 首次进入仓库时间：2025-04-19 14:24:41+08:00

## 标题备选

1. 手把手梳理：VMware Linux 配置 共享文件夹
2. VMware Linux 配置 共享文件夹 学习笔记：核心概念和实践步骤一次讲清楚
3. 从零理解 VMware Linux 配置 共享文件夹：把容易混淆的地方说明白

## 摘要

这篇文章围绕「VMware Linux 配置 共享文件夹」整理核心概念、实践步骤和注意事项，适合需要快速复习或动手验证的技术同学阅读。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀

## 前言

**把零散笔记整理成可复用的方法，才是真的学到手。**

这类知识点如果只看一遍，很容易停留在“好像懂了”的阶段。

这篇围绕「VMware Linux 配置 共享文件夹」把关键概念和操作步骤重新梳理，方便后续复习和实践。

## 正文整理

下面进入正文整理。建议大家按自己的使用场景挑重点看，再回到实践里验证。

如果你也在整理自己的技术笔记，可以把本文当作一个结构参考：先讲问题，再讲步骤，最后补注意点。

## ubuntu desktop

### 安装 vm-tools

```bash
sudo apt update
sudo apt install open-vm-tools-desktop -y
```

### 虚拟机设置开启共享文件夹

设置-》选项-》共享文件夹-》总是启用-》添加-》主机路径-》名称（后面命令会用到这个名称）

### 命令行手动挂载

```bash
sudo mkdir /mnt/shared # 创建挂载路径
sudo vmhgfs-fuse .host:/shared /mnt/shared -o subtype=vmhgfs-fuse,allow_other
# or `sudo vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other`

```

or

```bash
sudo mkdir /mnt/hgfs
sudo mount -t fuse.vmhgfs-fuse .host:/ /mnt/hgfs -o allow_other
```

- 命令解释

  - vmhgfs-fuse

    - VMware 提供的工具，用于挂载 VMware 虚拟机中的共享文件夹。

  - .host:/shared

    - 表示共享文件夹的路径：
    - .host 指代主机系统。
    - /shared 是主机系统中共享文件夹的名称。

  - /mnt/shared

    - 挂载点，表示虚拟机中共享文件夹将被挂载到的路径。这里是 /mnt/shared。

  - -o subtype=vmhgfs-fuse,allow_other
    - -o 表示挂载选项，后面是具体的选项：
    - subtype=vmhgfs-fuse：指定文件系统的子类型为 vmhgfs-fuse。
    - allow_other：允许非挂载用户访问挂载的文件夹。

此命令的作用是将主机系统中的共享文件夹 /shared 挂载到虚拟机的 /mnt/shared 路径下，使虚拟机能够访问主机的共享文件夹内容。

### 配置自动挂载

```bash
# 编辑 /etc/fstab 文件
sudo nano /etc/fstab
```

在文件末尾添加以下内容：

```
.host:/shared /mnt/shared fuse.vmhgfs-fuse allow_other,defaults 0 0
```

- 配置解释：
  - `.host:/shared`：主机系统中共享文件夹的路径。
  - `/mnt/shared`：虚拟机中共享文件夹的挂载点。
  - `fuse.vmhgfs-fuse`：指定使用 vmhgfs-fuse 文件系统。
  - `allow_other,defaults`：挂载选项，`allow_other` 允许其他用户访问，`defaults` 使用默认挂载选项。
  - `0 0`：文件系统检查选项，通常设置为 0。

保存并退出后，运行以下命令以重新挂载所有文件系统：

```bash
sudo mount -a
sudo systemctl daemon-reload
```

此配置将在每次系统启动时自动挂载共享文件夹。

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你还想看「VMware Linux 配置 共享文件夹」相关的哪一块展开？可以把你的使用场景或具体问题留言给我。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

技术笔记
