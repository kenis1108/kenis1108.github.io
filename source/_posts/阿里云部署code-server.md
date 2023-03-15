---
title: 阿里云部署code-server
tags: 
- [Linux,Ubuntu]
category: 
- 软件使用和配置
abbrlink: ebb73e0
date: 2021-02-21 17:51:22
cover:
---
## 服务器放行8080端口

## 执行安装脚本
~~~bash
curl -fsSL https://code-server.dev/install.sh | sh
~~~

## 先启动一次，让他生成配置文件
~~~bash
code-server --bind-addr=0.0.0.0:8080
~~~

## 修改配置文件**~/.config/code-server/config.yaml**
+ bind-addr为0.0.0.0才能远程访问
+ password设置密码
>修改后
>~~~yaml
>bind-addr: 0.0.0.0:8080
>auth: password
>password: 123456
>cert: false
>~~~

## 配置系统管理进程
~~~bash
systemctl enable --now code-server@$USER
~~~

常用命令
~~~bash
systemctl status code-server@$USER # 查看 code-server 进程状态
systemctl start code-server@$USER    # 启动 code-server 进程
systemctl stop code-server@$USER    # 停止 code-server 进程
systemctl restart code-server@$USER    # 重启 code-server 进程
~~~