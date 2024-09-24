---
title: Docker搭建Tailscale私有DERP中继服务器
category: Linux
tags: Docker
date: 2024-09-06 10:03:22
---

## 准备一个域名并添加到cloudflare中
这里就偷懒不写了

## 使用certbot生成证书,需要暂时关闭服务器占用80端口的服务……其实用cloudflare生成的证书也可以

```bash
# 安装certbot
sudo snap install --classic certbot
# 生成证书 --standalone 选项告诉 Certbot 运行一个临时的 Web 服务器来进行认证
sudo certbot certonly --standalone 
# 填写邮箱和域名
```

![Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-07-42Untitled 1](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-07-42Untitled%201.png)

## 启动容器

```bash
docker run -d -p 0.0.0.0:3478:3478/udp -p 0.0.0.0:50443:50443 \
  -v /etc/letsencrypt/live/derper.example.com/fullchain.pem:/app/certs/derper.example.com.crt \
  -v /etc/letsencrypt/live/derper.example.com/privkey.pem:/app/certs/derper.example.com.key \
  -e DERP_DOMAIN=derper.example.com \
  -e DERP_ADDR=:50443 \
  -e DERP_CERT_MODE=manual \
  --name derper --restart=always \
fredliang/derper
```

## 浏览器访问看看服务是否启动成功

[https://derper.example.com:50443/](https://derper.example.com:50443/)

![Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-08-10Untitled 2](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-08-10Untitled%202.png)

## 配置ACL

浏览器登录账号选择Access controls,添加下面的derpMap

![Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-08-32Untitled 3](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-08-32Untitled%203.png)

```bash
"derpMap": {
    "OmitDefaultRegions": true, // 不使用官方的derp服务器
    "Regions": {
      "900": {
        "RegionID": 900, // tailscale 900-999 是保留给自定义 derper 的
        "RegionCode": "myderp",
        "RegionName": "HongKong",
        "Nodes": [
          {
            "Name": "900",
            "RegionID": 900,
            "HostName": "derper.example.com", // 域名
            "DERPPort": 50443,  // 端口
          }
        ]
      }
    }
  }
```

## 客户端验证

```bash
tailscale netcheck 
```

![Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-09-02Untitled 4](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-09-02Untitled%204.png)

延迟比官方的香港节点快了5倍

![Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-09-21Untitled 5](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker搭建Tailscale私有DERP中继服务器-2024-09-10-18-09-21Untitled%205.png)

## 防止白嫖

需要在服务器上也安装tailscale客户端并登录

```bash
# 安装tailscale客户端
curl -fsSL https://tailscale.com/install.sh | sh
# 获取登录链接复制到浏览器里登录
tailscale up
```

添加两个参数 `-e DERP_VERIFY_CLIENTS=true` `-v /var/run/tailscale/tailscaled.sock:/var/run/tailscale/tailscaled.sock`重新启动容器 

```bash
docker run -d -p 0.0.0.0:3478:3478/udp -p 0.0.0.0:50443:50443 \
  -v /etc/letsencrypt/live/derper.example.com/fullchain.pem:/app/certs/derper.example.com.crt \
  -v /etc/letsencrypt/live/derper.example.com/privkey.pem:/app/certs/derper.example.com.key \
  -e DERP_DOMAIN=derper.example.com \
  -e DERP_ADDR=:50443 \
  -e DERP_CERT_MODE=manual \
  -e DERP_VERIFY_CLIENTS=true \
  -v /var/run/tailscale/tailscaled.sock:/var/run/tailscale/tailscaled.sock \
  --name derper --restart=always \
fredliang/derper
```

或者使用compose.yml

```powershell
services:
    derper:
        ports:
            - 0.0.0.0:3478:3478/udp
            - 0.0.0.0:50443:50443
        volumes:
            - /etc/letsencrypt/live/derper.example.com/fullchain.pem:/app/certs/derper.example.com.crt
            - /etc/letsencrypt/live/derper.example.com/privkey.pem:/app/certs/derper.example.com.key
            - /var/run/tailscale/tailscaled.sock:/var/run/tailscale/tailscaled.sock
        environment:
            - DERP_DOMAIN=derper.example.com
            - DERP_ADDR=:50443
            - DERP_CERT_MODE=manual
            - DERP_VERIFY_CLIENTS=true
        container_name: derper
        restart: always
        image: fredliang/derper
```

## 迁移到另一台机器上

1. 更改域名的DNS记录指向新的机器
2. 备份证书文件夹到本地`/etc/letsencrypt/live/derper.example.com`
    
    ```bash
    tsz /etc/letsencrypt/live/derper.example.com/fullchain.pem
    tsz /etc/letsencrypt/live/derper.example.com/privkey.pem
    ```
    
3. 上传证书文件到新机器
    
    ```bash
    trz
    mkdir -p /etc/letsencrypt/live/derper.example.com
    cp ./*.pem /etc/letsencrypt/live/derper.example.com/
    ```
    
4. 关闭当前机器的容器
5. 退出当前客户端的登录(可选)
    
    ```bash
    tailscale down
    ```
    
6. 在新机器上安装客户端(可选) (命令参考上面内容)
7. 在新机器上启动容器 (命令参考上面内容)
8. 客户端验证 (命令参考上面内容)

## 参考链接

[Custom DERP Servers · Tailscale Docs](https://tailscale.com/kb/1118/custom-derp-servers)

[fredliang/derper - Docker Image | Docker Hub](https://hub.docker.com/r/fredliang/derper)

[Tailscale docker自建derp服务器 自定义端口_tailscale自建服务器-CSDN博客](https://blog.csdn.net/baidu_15707443/article/details/137582347)