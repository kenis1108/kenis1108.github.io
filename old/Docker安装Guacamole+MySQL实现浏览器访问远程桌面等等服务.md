## 标题备选

1. 手把手教你：用 Docker 搭建 Guacamole + MySQL，实现浏览器访问远程桌面
2. Guacamole + MySQL，实现浏览器访问远程桌面 部署太绕？这一篇把端口和配置讲清楚
3. Docker 实战笔记：从 Compose 到客户端配置，一次搞懂 Docker 安装 Guacamole + MySQL，实现浏览器访问远程桌面

## 摘要

这篇文章面向想自建服务的同学，围绕「Docker 安装 Guacamole + MySQL，实现浏览器访问远程桌面」整理部署流程、关键配置、端口说明和常见注意点，适合照着一步步落地。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**自建服务最怕的不是命令多，而是端口、配置和客户端参数对不上。**

很多同学折腾 Docker 安装 Guacamole + MySQL，实现浏览器访问远程桌面 时，前面 Docker 容器跑起来了，后面却卡在端口映射、服务地址、客户端配置这些细节上。

这篇我们就把原来的部署笔记整理成一份更适合照着操作的版本：先看整体思路，再按步骤配置，最后补上容易踩坑的地方。

## 实操步骤整理

下面进入具体操作。建议大家先把域名、端口、防火墙和挂载目录确认好，再开始改 compose 文件。

如果你也在自建远程访问或内网穿透相关服务，可以重点对照端口映射和客户端配置这两块，很多问题都出在这里。

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

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在自建服务更常用 Docker Compose，还是面板工具？如果你在配置「Docker 安装 Guacamole + MySQL，实现浏览器访问远程桌面」时遇到端口、防火墙或客户端连接问题，也可以把现象留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Docker、Linux、自建服务、远程访问
