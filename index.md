---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Kenis Blog"
  text: Casual Notes、Miscellaneous Jottings
  tagline: "随笔杂记"
  actions:
    - theme: brand
      text: Articles
      link: /articles
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: 待完成文章
    details: 通用任务队列 - 用于控制并发任务数量 - 多文件上传 - 分片上传
  - title: 待完成文章
    details: 大文件分片上传，根据网络质量实时修改分片大小
  - title: 待完成文章
    details: 前端实战：文件虚拟列表 实现缩略图的缓存，以及图标的缓存，不要在滚动的时候重复请求同一个图片
  - title: 待完成文章
    details: 如何将 Unicode 代码点转换为 \u 转义序列格式，每种编程语言表示Unicode 代码点有点差异
  - title: 待完成文章
    details: 使用 father 4 快速开发自己的前端工具npm包
  - title: 发现问题
    details: windows openssh server在加入了域的计算机上无法使用密码验证方式，只能使用密钥验证方式
  - title: 编码风格
    details: 先写注释，再填充代码；先整体再细节；
  - title: ACM 竞赛
    details: 跟对项目，年包50
  - title: TS类型体操
    details:
  - title: 柯里化
    details:
  - title: 前端监控
    details: 数据埋点，前端操作录制引擎，录制脚本，直接跑脚本复现生产环境问题，减少沟通成本。
  - title: 待完成文章
    details: Windows（VcXsrv）通过X11转发显示远程Linux上的图形界面，Windows（X11服务端）安装VcXsrv服务器，Linux（SSH服务端）配置sshd_config开启X11转发，Windows（SSH客户端）配置~/.ssh/config开启X11转发，Linux（X11客户端）配置DISPLAY环境变量为X11服务端`IP:显示号.屏幕号`。https://zhuanlan.zhihu.com/p/16034352413
  - title: 待完成文章
    details: 配置Window自带的RemoteApp功能
  - title: 待完成文章
    details: 将各种shell的function用python/node.js什么的脚本语言实现，不用每一种shell都单独编写了
  - title: 待完成文章
    details: github actions配置自动merge PR
  - title: 发现问题
    details: windows下 为什么删除 .git-credentials 后能自动恢复？主存储位置是 Windows 凭证管理器：.git-credentials 只是一个“影子文件”，真正的凭据安全存储在系统密钥链中。Git 的自动同步行为：当检测到 .git-credentials 不存在时，Git 会从凭证管理器读取凭据并重新生成该文件（设计如此，为了兼容旧工具）。
  - title: bash 的 fc 命令
    details: fc




---
