## 标题备选

1. 手把手教你：用 Docker 搭建 RustDesk 中继服务器
2. RustDesk 中继服务器 部署太绕？这一篇把端口和配置讲清楚
3. Docker 实战笔记：从 Compose 到客户端配置，一次搞懂 Docker 部署 RustDesk 中继服务器

## 摘要

这篇文章面向想自建服务的同学，围绕「Docker 部署 RustDesk 中继服务器」整理部署流程、关键配置、端口说明和常见注意点，适合照着一步步落地。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**自建服务最怕的不是命令多，而是端口、配置和客户端参数对不上。**

很多同学折腾 Docker 部署 RustDesk 中继服务器 时，前面 Docker 容器跑起来了，后面却卡在端口映射、服务地址、客户端配置这些细节上。

这篇我们就把原来的部署笔记整理成一份更适合照着操作的版本：先看整体思路，再按步骤配置，最后补上容易踩坑的地方。

## 实操步骤整理

下面进入具体操作。建议大家先把域名、端口、防火墙和挂载目录确认好，再开始改 compose 文件。

如果你也在自建远程访问或内网穿透相关服务，可以重点对照端口映射和客户端配置这两块，很多问题都出在这里。

[RustDesk官方文档](https://rustdesk.com/docs/zh-cn/self-host/rustdesk-server-oss/install/)

## 新建compose.yml

```bash
networks:
  rustdesk-net:
    external: false

services:
  hbbs:
    container_name: hbbs
    ports:
      - 21115:21115
      - <hbbs_port>:21116 # 自定义 hbbs 映射端口
      - <hbbs_port>:21116/udp # 自定义 hbbs 映射端口
    image: rustdesk/rustdesk-server
    command: hbbs -r <your_domain>:<hbbr_port> # 填入个人域名或 IP + hbbr 暴露端口
    volumes:
      - <mount_path>:/root # 自定义挂载目录
    networks:
      - rustdesk-net
    depends_on:
      - hbbr
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 64M

  hbbr:
    container_name: hbbr
    ports:
      - <hbbr_port>:21117 # 自定义 hbbr 映射端口
    image: rustdesk/rustdesk-server
    command: hbbr
    volumes:
      - <mount_path>:/root # 自定义挂载目录
    networks:
      - rustdesk-net
    restart: unless-stopped
    deploy:
      resources:
        limits:
          memory: 64M

```
## 启动
```bash
docker compose up -d # 想像后面一样看到日志的,可以先把-d去掉
```

> 🔔 有些云服务器的防火墙需要放行几个用到的端口

## 配置客户端(被控端+主控端)

![Docker部署RustDesk中继服务器-2024-09-06-16-49-54image](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-49-54image.png)

![Docker部署RustDesk中继服务器-2024-09-06-16-50-12image 1](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-50-12image%201.png)

## 填ID服务器和中继服务器和KEY,不填KEY也可以,但是链接无法加密

![Docker部署RustDesk中继服务器-2024-09-06-16-50-56image 2](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-50-56image%202.png)

 ID 服务器指的是 hbbs 主机或 ip 地址（21116）端口。

中继服务器指的是 hbbr 主机或 ip 地址（21117）端口。

在之前docker映射出来的hbbs目录里查看key

```bash
cat ./hbbs/id_ed25519.pub
```

应用之后关闭客户端重新打开等到网络就绪,服务器的日志会输出下面一样的一条日志

![Docker部署RustDesk中继服务器-2024-09-06-16-51-18image 3](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-51-18image%203.png)

![Docker部署RustDesk中继服务器-2024-09-06-16-51-18image 4](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-51-18image%204.png)

## 禁止没有key的用户建立非加密连接

在上面的compose.yml里的hbbs和hbbr命令加`-k _` 参数

```bash
hbbs -r <relay-server-ip[:port]> -k _
hbbr -k _
```

## 杂话

一般情况: RustDesk首先尝试建立直接P2P连接，如果P2P失败，将使用中继服务器。
确认连接方式，首先连接到远程主机，可以将鼠标移动到工具栏图标（绿色图标/红色图标），将显示它是直接连接还是通过中继服务器连接。

![Docker部署RustDesk中继服务器-2024-09-06-16-51-31image 5](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-51-31image%205.png)

按道理来说如果使用tailscale或其他vpn将两台机器放在同一个局域网里,rustdesk能否探测到两台机器是同一局域网的,然后直接走P2P了,就没必要再搭建rustdesk中继服务器

下面试一下开启允许IP直接访问,然后用tailscale给的ip进行连接

![Docker部署RustDesk中继服务器-2024-09-06-16-51-38image 6](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-51-38image%206.png)

是的,使用直连了,验证了猜想

![Docker部署RustDesk中继服务器-2024-09-06-16-51-45image 7](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker部署RustDesk中继服务器-2024-09-06-16-51-45image%207.png)

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在自建服务更常用 Docker Compose，还是面板工具？如果你在配置「Docker 部署 RustDesk 中继服务器」时遇到端口、防火墙或客户端连接问题，也可以把现象留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Docker、Linux、自建服务、远程访问
