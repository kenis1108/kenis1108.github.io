## 标题备选

1. 手把手梳理：Windows手动安装OpenSSH Server到任何地方
2. Windows手动安装OpenSSH Server到任何地方 学习笔记：核心概念和实践步骤一次讲清楚
3. 从零理解 Windows手动安装OpenSSH Server到任何地方：把容易混淆的地方说明白

## 摘要

这篇文章围绕「Windows手动安装OpenSSH Server到任何地方」整理核心概念、实践步骤和注意事项，适合需要快速复习或动手验证的技术同学阅读。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**把零散笔记整理成可复用的方法，才是真的学到手。**

这类知识点如果只看一遍，很容易停留在“好像懂了”的阶段。

这篇围绕「Windows手动安装OpenSSH Server到任何地方」把关键概念和操作步骤重新梳理，方便后续复习和实践。

## 正文整理

下面进入正文整理。建议大家按自己的使用场景挑重点看，再回到实践里验证。

如果你也在整理自己的技术笔记，可以把本文当作一个结构参考：先讲问题，再讲步骤，最后补注意点。

## Github Release 下载 zip 包

https://github.com/PowerShell/Win32-OpenSSH/releases/download/v9.8.2.0p2-Preview/OpenSSH-Win64.zip

可以使用 Github Proxy 加速下载：https://github.akams.cn/

## 随意解压到任意路径

```powershell
7z x OpenSSH-Win64.zip
```

- 后续操作不需要管理员权限，普通的 powershell 即可
- 不使用自带的 install-sshd.ps1 安装成服务
- 可以将自己写的启动脚本设置成开机自动启动也可以实现跟系统服务同样的效果

## 生成密钥

需要生成三个类型的密钥（rsa、ecdsa、ed25519）

密钥保存的路径需要填写到配置文件里的

```powershell

# cd zip包解压出来的目录 or 将解压出来的目录添加到环境变量

.\ssh-keygen.exe -t rsa -f "xxx\ssh_host_rsa_key"
.\ssh-keygen.exe -t ecdsa -f "xxx\ssh_host_ecdsa_key"
.\ssh-keygen.exe -t ed25519 -f "xxx\ssh_host_ed25519_key"

```

## 编写配置文件

直接复制解压出来的 sshd_config_default 为 sshd_config

```powershell
cp sshd_config_default sshd_config

nvim sshd_config
```

主要是修改 `HostKey` 位置才能正常启动 sshd，其他配置项根据实际情况自行配置

```
HostKey xxx/ssh_host_rsa_key
HostKey xxx/ssh_host_ecdsa_key
HostKey xxx/ssh_host_ed25519_key
```

完整配置，我修改了 `HostKey` 并注释了最后的 `Match Group administrators`

```
#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

HostKey xxx/ssh_host_rsa_key
HostKey xxx/ssh_host_ecdsa_key
HostKey xxx/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m
#PermitRootLogin prohibit-password
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

PubkeyAuthentication yes

# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile      .ssh/authorized_keys

#AuthorizedPrincipalsFile none

# For this to work you will also need host keys in %programData%/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
PasswordAuthentication yes
#PermitEmptyPasswords no

# GSSAPI options
#GSSAPIAuthentication no

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
#PermitTTY yes
#PrintMotd yes
#PrintLastLog yes
#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#UseDNS no
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# override default of no subsystems
Subsystem       sftp    sftp-server.exe

# Example of overriding settings on a per-user basis
#Match User anoncvs
#       AllowTcpForwarding no
#       PermitTTY no
#       ForceCommand cvs server

#Match Group administrators
#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys
```

## 编写启动脚本和终止脚本

在解压出来的目录下编写一个启动脚本，方便启动

```powershell
nvim start-sshd.ps1
```

```powershell
# start-sshd.ps1
Start-Process powershell.exe -ArgumentList "-WindowStyle Hidden", "-Command", "./sshd.exe -f ./sshd_config"
```

```powershell
nvim stop-sshd.ps1
```

```powershell
# stop-sshd.ps1
Get-Process sshd | Stop-Process -Force
```

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你还想看「Windows手动安装OpenSSH Server到任何地方」相关的哪一块展开？可以把你的使用场景或具体问题留言给我。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

技术笔记
