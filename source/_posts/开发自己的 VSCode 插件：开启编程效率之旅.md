---
title: 开发自己的 VSCode 插件：开启编程效率之旅
tags: 
- VSCode
category: 
- [编程相关,VSCode]
date: 2024-09-18 10:00:00

---

## 标题备选

1. 实用工具折腾记：开发自己的 VSCode 插件：开启编程效率之旅
2. 手把手教你：开发自己的 VSCode 插件：开启编程效率之旅，少走一些配置弯路
3. 开发自己的 VSCode 插件：开启编程效率之旅怎么用？这篇把关键步骤讲清楚

## 摘要

这篇文章面向喜欢折腾工具和开发环境的同学，围绕「开发自己的 VSCode 插件：开启编程效率之旅」整理关键步骤、配置点和注意事项，方便按需复用。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**工具类文章最重要的价值，就是让你下次遇到同类场景时能直接复用。**

无论是开发环境、系统配置，还是小工具折腾，真正耗时间的往往都是那些不起眼的细节。

这篇围绕「开发自己的 VSCode 插件：开启编程效率之旅」把原始操作笔记整理成更清晰的步骤版，方便大家按需参考。

## 操作步骤整理

下面进入具体内容。工具类配置建议一步一步来，改完一个关键点就验证一次结果。

如果你也遇到类似配置场景，可以先按本文步骤跑通，再根据自己的环境微调。

## 1. 准备开发环境

- 安装 Node.js 和 npm
- 安装 VSCode
- 安装 Yeoman 和 VSCode Extension Generator

## 2. 创建插件项目

打开终端，运行以下命令：

```bash
npm install -g yo generator-code
yo code
```

按照提示设置你的插件项目。

## 3. 了解插件结构

主要文件包括：

- `package.json`：插件的配置文件
- `extension.ts`：插件的主要代码
- `README.md`：插件的说明文档

## 4. 编写插件代码

在 `extension.ts` 中实现你的插件功能。

开发过程中可以安装推荐的几个vscode插件(.vscode\extensions.json)

## 5. 调试和测试

使用 VSCode 的调试功能来测试你的插件。

- 按下F5后查看调试控制台可以看到日志输出
- 直接在编辑器里打断点,调用栈里查看变量和其他信息
- yo脚手架生成的代码已经实现了热重载,更新代码后只需要reload(快捷键:ctrl+shift+r)一下调试窗口即可

## 6. 发布插件

[发布扩展 | Visual Studio 代码扩展 API --- Publishing Extensions | Visual Studio Code Extension API](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

使用 `vsce` 工具打包并发布到 VSCode 市场。

- 全局安装vsce

    ```bash
    npm install -g @vscode/vsce
    ```

- 打包插件生成name.vsix文件

    ```bash
    vsce package
    ```

- 发布插件
    1. 用微软账户登录[dev.azure.com](http://dev.azure.com/)
    2. 创建token

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image_1726912025709_d9e3c892.png)

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%201_1726912029217_51191025.png)

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%202_1726912032764_735cb8f8.png)

    3. 创建发布者

        用和**Azure DevOps登录的微软账户同一个微软账户登录在浏览器里**直接访问链接创建[https://marketplace.visualstudio.com/manage](https://marketplace.visualstudio.com/manage)

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%203_1726912036368_a04ee99d.png)

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%204_1726912040370_9eafe61e.png)

    4. 登录一下发布者账号

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%205_1726912043864_c9163369.png)

        妈的报错了说要密码

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%206_1726912049297_cbca7433.png)

        再试了一次就可以了

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%207_1726912052597_366675ae.png)

    5. 自动发布插件

        ```bash
        vsce publish
        ```

        ![](https://cdn.jsdelivr.net/gh/kenis1108/imgbed@main/image%208_1726912055666_f80501c5.png)

        **自动增加扩展版本**

        发布扩展时，您可以通过指定要递增的[SemVer](https://semver.org/)兼容号或版本（ `major` 、 `minor`或`patch` ）来自动递增其版本号。例如，要将扩展的版本从 1.0.0 更新到 1.1.0，您可以指定：

        ```bash
        vsce publish minor
        ```

        或者

        ```
        vsce publish 1.1.0
        ```

        这两个命令都会首先修改扩展的`package.json`[版本](https://code.visualstudio.com/api/references/extension-manifest#fields)属性，然后使用更新后的版本进行发布。

        > 注意：如果您在 git 存储库中运行vsce publish ，它还将通过npm-version创建版本提交和标记。默认提交消息将是扩展的版本，但您可以使用-m标志提供自定义提交消息。 （可以使用%s从提交消息中引用当前版本）。
        >
    6. 手动发布插件

        使用`vsce package`将扩展打包成可安装的 VSIX 格式，然后上传到[Visual Studio Marketplace 发布者管理页面](https://marketplace.visualstudio.com/manage)

        ![https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/add-extension.png](https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/add-extension.png)

## 7. 插件配置详解

- VS Code 扩展清单 (package.json)

    https://code.visualstudio.com/api/references/extension-manifest

    这个文档详细介绍了 package.json 中所有可用的字段及其用途。

- 发布内容配置

    https://code.visualstudio.com/api/references/contribution-points

    这个文档详细说明了 contributes 字段中可以使用的所有配置项。

- 本地化支持

    https://code.visualstudio.com/api/working-with-extensions/bundling-extension#localizing-the-manifest-file

    这个文档解释了如何为你的扩展添加多语言支持,包括 README 和 package.json 的本地化。

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你有没有折腾过「开发自己的 VSCode 插件：开启编程效率之旅」这类工具或环境配置？如果有更省事的方案，也欢迎在评论区补充。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

VSCode、编程相关、工具配置、效率工具
