---
title: Docker安装Guacamole+MySQL实现浏览器访问远程桌面等等服务
category: Linux
tags: Docker
abbrlink: 9006
date: 2024-08-07 10:03:22
---

## Docker的安装就不赘叙了,宿主机器是windows/linux/macos都行

> [Guacamole官方文档](https://guacamole.incubator.apache.org/doc/gug/guacamole-docker.html)
 

## 获取镜像

```powershell
docker pull guacamole/guacamole # 前端客户端页面
docker pull guacamole/guacd # 后端服务端处理各种连接协议
docker pull mysql # 存储用户身份验证信息,还有其他数据和其他非数据库的方案可以选择
```

## 启动容器

1. 生成数据库初始化文件
    
    ```powershell
    docker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --mysql > initdb.sql
    ```
    
2. 启动mysql容器并导入初始化数据库文件
    
    ```bash
    docker run  -d --name mysql -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=guac -v ./initdb.sql:/docker-entrypoint-initdb.d/initdb.sql mysql
    ```
    
3. 20s后再检查initdb.sql文件是否导入成功
    
    ```bash
    docker exec -it mysql bash -c "mysqlcheck --check --databases guac -uroot -p123456"
    ```
    
    成功的截图
    
   ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker安装Guacamole+MySQL实现浏览器访问远程桌面等等服务-2024-09-05-15-08-49Untitled.png) 
    
4. 启动guacd容器和guacamole容器
    
    ```powershell
    # 启动guacd容器
    docker run --name guacd -d guacamole/guacd
    
    # 启动guacamole容器
    docker run --name guacamole --link guacd:guacd --link mysql:mysql -e MYSQL_DATABASE=guac -e MYSQL_USER=root -e MYSQL_PASSWORD=123456 -d -p 8080:8080 guacamole/guacamole
    
    ```
    

## 浏览器访问[http://127.0.0.1:8080/guacamole](http://127.0.0.1:8080/guacamole)即可,账号密码默认都为guacadmin

![Untitled 1](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker安装Guacamole%2BMySQL实现浏览器访问远程桌面等等服务-2024-09-05-15-00-14Untitled%201.png)

## 添加连接信息

![Untitled 2](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker安装Guacamole+MySQL实现浏览器访问远程桌面等等服务-2024-09-05-15-02-18Untitled%202.png)

![Untitled 3](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker安装Guacamole+MySQL实现浏览器访问远程桌面等等服务-2024-09-05-15-03-08Untitled%203.png)

注意: 如果是连接windows远程桌面使用rdp协议的话,记得指定认证方式为网络级别身份认证(NLA)且勾选忽略证书错误,否者连接不上

![Untitled 4](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker安装Guacamole+MySQL实现浏览器访问远程桌面等等服务-2024-09-05-15-03-43Untitled%204.png)

![Untitled 5](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/Docker安装Guacamole+MySQL实现浏览器访问远程桌面等等服务-2024-09-05-15-03-43Untitled%205.png)


## 可以配置下nginx反向代理直接访问ip/域名或者可能需要改guacamole的配置文件来实现,懒得去看java的代码了

## 下面用Docker compose来实现一遍

1. 删除之前的容器
    
    ```powershell
    docker rm -f guacamole guacd mysql
    ```
    
2. 新建`docker-compose.yml`文件
    
    ```yaml
    services:
      mysql:
        image: mysql:latest
        container_name: mysql
        environment:
          MYSQL_ROOT_PASSWORD: 123456
          MYSQL_DATABASE: guac
        volumes:
          - ./initdb.sql:/docker-entrypoint-initdb.d/initdb.sql
        # restart: always
    
      guacd:
        image: guacamole/guacd:latest
        container_name: guacd
        # restart: always
    
      guacamole:
        image: guacamole/guacamole:latest
        container_name: guacamole
        environment:
          MYSQL_DATABASE: guac
          MYSQL_USER: root
          MYSQL_PASSWORD: 123456
          GUACD_HOSTNAME: guacd # 不用link,好像是因为compose启动的服务默认都是可以互相访问的,但是需要指定这两个HOSTNAME的环境变量,试了不用compose不指定link使用这两环境变量却没用
          MYSQL_HOSTNAME: mysql
        ports:
          - "8080:8080"
        # restart: always
    
      # 使用nginx反向代理实现直接访问ip即可访问服务
      nginx:
        image: nginx:latest
        container_name: nginx
        ports:
          - "80:80"
        volumes:
          - ./nginx.conf:/etc/nginx/nginx.conf
    ```
    
3. 生成数据库初始化文件
    
    ```powershell
    docker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --mysql > initdb.sql
    ```
    
4. 新建`nginx.conf` 文件
    
    ```bash
    events {}
    
    http {
        server {
            listen 80;
            
            location / {
                proxy_pass http://guacamole:8080/guacamole/;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
            }
        }
    }
    
    ```
    
5. 使用 Docker Compose 启动容器
    
    ```powershell
    docker-compose up -d
    ```
    
6. 浏览器访问[http://127.0.0.1](http://127.0.0.1:8080/guacamole)