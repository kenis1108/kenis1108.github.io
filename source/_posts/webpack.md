---
title: webpack
tags: Webpack
category: 前端
abbrlink: b9f20a20
date: 2021-06-18 21:21:33
cover:
---



# WebPack

# 一、概述

官网：https://webpack.js.org

中文网：https://www.webpackjs.com



目的：

- 为了react的学习
- 为了了解vue的脚手架的2个命令操作的实现
  - npm run serve（启动开发服务器）
  - npm run build（打包上线的代码）

## 1、webpack是什么？

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/45b0f95bb1c04f3f8c5c2d3f16bcea63c0dd1170.gif?sign=0d1284b61f08ec87b1f742c3e170a432&t=5f8d1bd4)

webpack是**一种前端资源构建（打包）工具（npm run build）**，一个静态模块打包器。在webpack看来，前端的所有资源文件（js/json/css/image/less/sass...）都会作为模块处理。它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源。webpack可以解决当前web开发中所面临的困境，webpack提供了：

- 友好的模块化支持
- 代码压缩混淆
- 处理js兼容问题
- 性能优化

目前绝大多数企业中的前端项目，都是基于webpack进行打包构建的。

![webpack](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/08/3ed87fed6859579595666cc45aabe79a5b41bce1.png?sign=d9bb626d5bf10643dc0625447a0b6312&t=5f436a97)

**示例：使用==模块化开发思想（能拆就拆原则）==创建一个隔行换色的效果**

先初始化一个空项目`npm init -y`

~~~html
<body>
    <ul>
        <li>这是第1个li标签</li>
        <li>这是第2个li标签</li>
        <li>这是第3个li标签</li>
        <li>这是第4个li标签</li>
        <li>这是第5个li标签</li>
        <li>这是第6个li标签</li>
        <li>这是第7个li标签</li>
    </ul>
</body>

<script src="./index.js"></script>
~~~

~~~javascript
// 先需要安装jQuery，npm i -S jquery
import $ from "jquery";

$(function () {
    $("li:odd").css("backgroundColor", "blue");
    $("li:even").css("backgroundColor", "green");
});
~~~

在浏览器中执行的时候会报错，需要注意，代码是没有问题的，问题是浏览器不兼容（浏览器不认识模块化的语法，需要使用特定的工具进行转化）。



## 2、webpack的核心概念

核心概念即webpack的**五个核心配置项**。

-  **entry入口**

本项目应该使用哪个模块来作为构建其内部依赖图的开始（指定打包入口文件）。**打包入口文件默认为`src/index.js`**

- **output输出**

在哪里输出它所创建的 bundles，以及如何命名这些文件，**打包输出文件默认值为`dist/main.js`**

- **loader加载器**

loader让webpack能够去处理那些非js文件（webpack自身只理解js并且是非高级语法）

- **plugins插件**

插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

- **mode 模式**

通过选择 development（打包出来的代码是没有经过压缩的） 或 production（默认值，代码经过压缩的） 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化



# 二、webpack的使用

> webpack学习的时候很多包都指定了版本，都是被`webpack-dev-server`包给害的。被指定版本号的包新的大版本都不兼容老的`webpack-dev-server`包。如果不采用低版本号安装其它的包，安装`webpack-dev-server`包的时候就会报错。

## 1、基本的安装与配置

webpack是运行在node环境中的，需要Node>= 8.10和npm>=5.6的版本支持。在项目中安装webpack的方式如下：

~~~shell
npm i -D webpack@4 webpack-cli@3
# 由于目前这个2个工具大版本号已经升级，并且不兼容后续使用的工具，所以这边使用指定的低版本号
~~~

安装好后可以通过先前提及过的`npx`命令来检查webpack的版本以确定是否安装成功：

~~~shell
npx webpack --version
# npx可以帮助我们快速执行一些模块内部的命令
~~~

确认能够通过上述命令输出`webpack`的版本信息后，再在package.json文件中的`scripts`节点配置webpack运行脚本命令（**==指令名称自行决定==**）：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/7cf1f69b852d4fb5fb1762fe90d4bc977df70b79.png?sign=27c5dfa96c85c20a85be0ea5533135d0&t=5f8d5e64)

此时，我们可以在终端中运行自定义命令`npm run compact`来对项目使用webpack打包，例如打包之前写的`隔行换色`代码：

~~~shell
npm run compact
~~~

打包完毕后会在当前项目目录下产生`dist`目录，里面会包含一个`main.js`文件，修改`src/index.html`文件，将原先的JavaScript文件引入修改为打包好的文件：

~~~html
<!-- <script src="./index.js"></script> -->
<script src="../dist/main.js"></script>
~~~

最终效果如下（说明先前写的代码已经生效）：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/a5e76f3aed14e3d9a3ccb5b40501e3f5fb7b8f48.png?sign=dbe83f863acf3e3d6d494fc4d574c2c9&t=5f8d4e65)

## 2、webpack的配置文件

### 2.1、基本配置

我们在第一节的概述中提及了webpack的五个核心概念，这五个核心概念都属于webpack的配置，因此，如果需要更好的运用webpack，我们需要掌握其配置文件的相关知识点。

配置的方式有两种：单配置文件形式、**多配置文件形式**。（**二选一即可**）

首先来看单配置文件方式：在**项目根目录下面创建一个webpack.config.js文件**，webpack运行的环境为nodejs环境，所以此文件中的模块化规范为commonjs规范写法。**该配置文件创建好后会被webpack在打包时自动使用（因此，文件名不能写错）。**

~~~javascript
const path = require("path");

module.exports = {
    // 打包模式  development |  production
    mode: "development",
    // 项目入口
    entry: "./src/index.js",
    // 项目出口
    output: {
        path: path.resolve(__dirname, "dist"),
        // [name]默认的名称为main（如果需要分目录，可以在名字前加文件夹名字）
        filename: "js/[name].js",
    },
};
~~~

另一种配置方式是：在项目根目录中创建一个config目录（为了便于后期管理，提前预设两套或多套webpack配置），专门用于存放webpack的相关配置文件：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/ed0eb82cb3084bd87c4529e898190cc6d1546296.png?sign=70a8523c5a74e2b889f1595aaeddcb47&t=5f8d5069)

由于这两个文件不似`/webpack.config.js`文件会被webpack自动使用，因此需要在`package.json`文件中进行分别引入指定：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/b08ecfb54a5a2ab474e11d0873764f03e26cbe14.png?sign=bdee15a05acace3d9606539902b6e7c9&t=5f8d6a12)

这样一来，后续如果需要将项目打包成开发环境需要的代码则执行命令：

~~~shell
npm run compact:dev
~~~

如果需要将项目打包成生产环境需要的代码则执行命令：

~~~shell
npm run compact:pro
~~~

注意：由于在config下面的配置文件中指定了输出的路径，此时路径也需要做一下修改，否则打包的dist目录就会在"config/dist"这个位置。只需要给“dist”加上“../”即可：==该路径一定要求是绝对路径==

~~~text
path: path.resolve(__dirname, "../dist"),
~~~

**在实际开发的时候推荐使用多套配置文件的方案，便于管理不同环境下需要的打包的配置，避免来回切换配置。**



### 2.2、配置默认预览页

问题：在打包好的代码中并没有index.html，还需要手动在src目录中将html代码复制到dist目录中（或者可以在index.html中修改js脚本文件的引入路径），这个操作比较麻烦，能不能像vue项目一样，直接将html复制过去？

答：有



首先需要安装一个扩展模块，安装命令如下：

~~~shell
npm i -D html-webpack-plugin@4
~~~

然后修改webpack的配置文件（此时需要注意你使用的是哪种配置文件方式，单一or多个，并做对应的修改），增加以下配置项：

~~~javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // ....
    plugins: [
        new HtmlWebpackPlugin({
            // template是必须的
            template: "./src/index.html",
        }),
    ],
}
~~~

使用该款插件后，会自动在视图中去帮我们引入打包好的文件`main.js`：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/050e6d3f07322775279da4f5fc783d703e004db7.png?sign=1bd7a3d7bfaa2b99b4c787b41870fbea&t=5f9131f3)

这款插件在工作的时候帮我们实现了2个操作：

- 复制对应的template模版文件到dist目录下
- 将打包好的js文件，自动引入到模板文件中
  - 需注意：**最好将自己原先在html中引入的外部文件给去掉**，因为它会自己加，自己写的不去除会出现以下两种情况之一：
    - 重复引入（无意义）
    - 引入文件出现404情况



### 2.3、配置实时打包预览

通过上一节，我们已经可以使用打包工具去将写好的代码进行打包了，但是在操作的过程中大家可能会发现有一个比较麻烦的地方：修改一次代码就得重新打包一次，这种感觉有点类似于之前的`node xxx.js`一样，那么在webpack这里是否有类似于`nodemon`那么好用的自动化工具能帮助我们自动检测文件的变化并自动执行呢？答案是有的，它就是`webpack-dev-server`自动化打包工具。

> 类似于：
>
> 在vue中，我们并不是每次改完代码都打包看效果，而是在开发过程中有一个测试服务器，自动帮我们产生预览效果，但是并会真的去打包，只有等上线的时候我们才去打包。实时预览服务器可以通过工具webpack-dev-server。

`webpack-dev-server`的安装指令如下：

~~~shell
npm i -D webpack-dev-server@3.11.0
~~~

自动打包服务支持一系列配置选项，可以根据以下代码取所需的配置：

~~~javascript
module.exports = {
    devServer: {
        // 运行web根目录
        contentBase: path.resolve(__dirname, "../dist"),
        // 监视目录下的所有文件，一旦文件有变化则就会reload重载
        watchContentBase: true,
        watchOptions: {
            // 忽略文件
            ignored: /node_modules/,
        },
        // gzip压缩
        compress: true,
        // 端口号
        port: 8080,
        // 域名
        host: "localhost",
        // 自动打开浏览器
        open: true,
        // 不要显示启动服务器的日志信息
        clientLogLevel: "none",
        // 除了一些基本的启动信息以外，其他的内容都不要显示
        quiet: true,
        // 如果出错，不要全屏提示
        overlay: false,
        // 服务器代理 --> 解决开发环境跨域问题
        proxy: {
            // 一旦devServer服务器接受到 /api开头的请求，就会把请求转发到另一个服务器
            "/api": {
                target: "http://localhost:3000",
                // 发送请求时，请求路径重写: 将/api 去除
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
};
~~~

安装好后同样也需要在`package.json`中配置自定义执行的指令：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/01/2b624dae8885d4b490f34b55d272ce5cd5787de4.png?sign=3b529b1657fa01d85095207dcfcb531a&t=5ff1e553)

随后即可通过自定义指令来运行自动打包服务：

~~~shell
# 该命令执行完后命令行会如同执行`nodemon`一样处于实时检测的状态
npm run compact
~~~

启动打包服务后，即可通过浏览器访问http://127.0.0.1:8080来浏览自动打包好的项目。

> **注意点**
>
> - 上述过程中，会自动产生并运行一个临时性的服务器供我们预览，访问地址是：http://127.0.0.1:8080
> - 上述过程中，**打包生成的输出文件会托管在项目根下**，但文件是虚拟的，是**无法看见**的，也就是说该操作并不会产生前面所谓的`dist`目录，如果需要得到打包好的目录，还是得运行之前的打包命令
> - 在此处系统会自动引入需要的外部文件，如果此前我们自己已经引入了，则需要去除自己引入的外部文件





## 3、加载器

### 3.1、加载器概述

在实际开发中，webpack只能打包处理以`.js`为后缀的模块（并且是其中一部分比较简单的JavaScript代码），其他非`.js`后缀的模块webpack默认处理不了，而需要调用loader加载器才能正常打包，否则会报错！

loader加载器可以协助webpack打包处理特定的文件模块了，例如：

- less-loader可以打包处理`.less`相关的文件
- sass-loader可以打包处理`.scss`相关的文件
- ...

![loader调用过程](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/08/5177ca4ed032a9d921e0a89019cae57688b548af.jpeg?sign=c490e9acb5a3903e934656c30956c3ac&t=5f4385a2)

### 3.2、处理样式

#### 3.2.1、处理css文件

正如前面所说，webpack默认不能打包css文件，如果在没有安装css加载器的时候打包包含css文件的项目则会报错：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/559ee2aeb72b89df60471e0f3b74c72b50f3c908.png?sign=9ca06130d30cfb12403a245b0d8f9b9a&t=5f8e53fa)

根据报错提示，我们需要安装一个合适的加载器才能继续。

所以要想打包css文件，则需要安装css加载器，该加载器的安装命令为：

~~~shell
npm i -D style-loader css-loader
~~~

安装好需要的加载器后需要对webpack进行配置，告诉webpack当遇到css后缀的文件应该交由哪个加载器去处理。在webpack打包命令**对应**的`module`的`rules`数组中添加css-loader规则：

~~~javascript
module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
},
~~~

在写加载器`use`的时候，需要注意：

- use数组中指定的加载器顺序是**固定**的，==顺序不能随意调换==

- 多个加载器调用的顺序是：**从后往前、从下往上**调用（倒序执行）

在配置好对应的css加载器后，webpack才能打包对应的css文件（提醒：配置好之后需要重新启动自动打包服务让配置文件生效）。



#### 3..2.2、处理less文件

要想通过webpack打包less文件，同样需要安装对应的加载器：

> 受webpack-dev-server包的影响，less-loader包只能安装7.x。

~~~shell
npm i -D less-loader@7 less
~~~

安装好后也需要在对应的webpack配置文件中配置针对less文件打包的规则：

~~~javascript
module: {
    rules: [
        {test: /\.less$/,use: ["style-loader","css-loader","less-loader"]}
    ]
}
~~~

也是一样，需要注意顺序问题。



#### 3.2.3、处理scss文件

同上，打包scss文件也是需要进行对应加载器安装与配置的。

首先需要安装对应的加载器：

~~~shell
npm i -D sass-loader@10 node-sass
~~~

> **注意：**在安装sass加载器的时候，需要使用到Windows的vs环境（C++桌面开发环境），届时可能会卡住或者直接报错，如果出现报错，则根据命令行的提示去解决（耐心去看英文报错），如果只是卡住了，则稍等片刻。Python2.7

安装好之后再在webpack的配置文件中配置打包规则：

~~~javascript
module: {
    rules: [
        {test: /\.scss$/,use: ["style-loader","css-loader","sass-loader"]}
    ]
}
~~~



#### 3.2.4、抽取css（优化）

通过前面的学习，细心的同学会发现，打包好的html文件在浏览器运行时，“审查元素”时 能够看到所有的样式代码都以“style”标签写入了html，这些样式都是由JavaScript动态生成的，每次都这样动态生成：

- 消耗性能
  - 在html中本身是没有style代码的，而是通过js后续生成的，再塞入到html中
- 无法做静态资源加速（CDN）

因此，此处可以对该部分进行改善操作。我们可以让webpack在打包时直接将这些样式抽成一个样式文件。步骤如下：

- 安装插件

  - npm i -D mini-css-extract-plugin

- 导入插件

  - const MiniCssExtractPlugin = require('mini-css-extract-plugin')

- 配置插件

  - ~~~javascript
    new MiniCssExtractPlugin({
        filename: "css/[name]_[hash:6].css",
    }),
    ~~~

- 使用插件

  - MiniCssExtractPlugin.loader（使用它去**替换**之前的“style-loader”）



### 3.3、处理图片

如果在样式表/视图中使用了图片（远程图片不受影响，本地图片受加载器的影响），则也需要配置对应的加载器才能进行正确的打包操作。加载器的安装命令如下：

~~~shell
npm i -D url-loader file-loader html-loader@1
~~~

安装好后也需要在webpack配置文件中进行对应的规则配置：

~~~javascript
module: {
    rules: [
        {
            test: /\.(png|jpeg|jpg|gif)$/i,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        // 图片小于8kb，就会被base64处理
                        // 优点: 减少请求数量(减轻服务器压力)
                        // 缺点：图片体积会更大(文件请求速度更慢)
                        limit: 8 * 1024,
                        // 打包后的路径和文件名称 [ext]扩展名
                        name: "img/[name].[ext]",
                        // 打包后的文件指定访问路径前缀
                        publicPath: "/",
                    },
                },
            ],
        },
        {
            test: /\.html$/,
            // 处理html中的img(负责引入img,从而能被url-loader进行处理)
            loader: ["html-loader"],
        },
    ]
}
~~~



### 3.4、处理js文件高级语法

webpack在不需要引入任何loader不可以对于js进行打包处理，但是它不会对于js兼容性进行任务的处理，而我们编写的项目是需要在不同的浏览器中运行的，此时就需要对于js的兼容性在打包过程中进行对应的处理。我们可以使用babel来完成对应的js兼容处理。

首先先需要去安装babel转换器相关的包：

~~~shell
npm i -D babel-loader @babel/core @babel/runtime
~~~

再去安装babel语法插件相关的包：

~~~shell
npm i -D @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties
~~~

然后再去在项目根目录下创建babel配置文件babel.config.js并初始化：

~~~javascript
module.exports = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
}
~~~

最后再在webpack的配置文件中设置打包规则：

~~~javascript
module: {
    rules: [
        {
            test: /\.js$/,
            use: "babel-loader",
            exclude: /node_modules/
        }
    ]
}
~~~

配置完毕后，webpack即支持打包处理js中的高级语法。

常见的加载器就介绍到这里，如果后续其他文件加载器的需求，请百度解决！



## 4、webpack的其他细节

> **该章节需要产生实际打包的结果以观察细节，所以不能使用自动打包服务器的命令，建议新建一个自定义命令用于区别自动打包指令。**

### 4.1、entry多入口

前面我所使用webpack打包方式是针对单一入口的项目，那么如果项目中有多个入口需要处理该如何进行打包呢？

如果有类似的情况，只需要将webpack的入口配置配置成多入口的形式即可。

例如，我们有`index.js`和`login.js`两个入口，则需要将entry入口配置写成以下形式：

~~~javascript
entry: {
    main: "./src/index.js",
    login: "./src/login.js",
    // ....
},
~~~



### 4.2、路径别名与默认后缀（优化）

在先前学习Vue的时候提及并使用过`@`，当时说`@`表示`src`目录，这样一来，在我们自己写的代码中作文件导入的时候路径写起来比较轻松，但是当前的项目中如果使用`@`导入在打包时就会出现类似如下的错误：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/e4a3ceb328a3125e9036d3673132ca3db05967af.png?sign=ba05f1ab98d80657d5f387fb091e9bae&t=5f9158f8)

这就说明，当前项目并不支持我们在导入路径中使用`@`符号，如果想要支持之前的这种简化写法，需要我们配置解析规则（vue项目中是工具已经帮我们配置好了，所以当时可以直接使用）。

**配置方式如下：**修改webpack的配置文件，在配置选项中添加`resolve`选项，增加别名配置：

~~~javascript
resolve: {
    // 配置解析模块路径别名：优点简写路径，缺点路径没有提示
    alias: {
        // 定义一个@，可在import引入时使用
        "@": path.join(__dirname, "../src"),
    },
    // 设置可以忽略不写的后缀
    extensions: [".js"],
},
~~~

这时，再写模块导入路径的时候即可简化路径写法。



### 4.3、忽略打包（优化）

webpack中的`externals`选项提供了不从bundle捆绑中使用依赖的方式。

在开发项目时，有些外部模块通过`CDN链接`使用`script`标签引入到页面中可能要比通过打包使用更加方便，例如jQuery库。此时就可以使用`externals`忽略打包的方式去指定哪些库不需要webpack进行打包。

请注意，不被webpack打包的外部依赖，后期依旧可以通过以下方式在项目中使用：

- `script`标签链入远程/本地js文件（推荐）
- import导入
  - `import ... from 'xxx'`
  - `import { a,b,c } from 'xxx'`

`externals`选项指定实现的方式比较简单，**只需要在webpack配置文件中添加externals选项指定需要忽略的包信息即可**。

例如，需要忽略对jQuery的打包，则可以写成：

~~~javascript
externals: {
    jquery: 'jQuery',
    // .....
}
~~~

这种方式有2个好处：

- 有些模块，script标签引入可能比通过打包导入来的效率更高、更简单；
- 模块不参与打包，会相对减小打包结果的体积，这样上线之后，用户访问效率会得到提高；



### 4.4、打包处理vue文件

与前面的css、less、scss等文件一样，webpack默认是不能处理vue后缀的文件的，如果需要让其支持打包处理vue文件，也需要安装和配置对应的loader加载器。

可以先在项目中安装vue，随后写一个vue文件供测试使用：

~~~shell
npm i -S vue
~~~

所提供的demo测试vue文件代码`/src/vue/h5.vue`：

~~~vue
<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "你好世界！",
        };
    },
};
</script>
~~~

再去创建vue的访问入口文件`/src/vue/app.js`：

~~~javascript
import Vue from "vue";
import App from "@/vue/h5.vue";

new Vue({
    el: '#app',
    render: h => h(App)
})
~~~

不要忘记在html文件中写上渲染的容器：

~~~html
<div id="app">
    
</div>
~~~

在打包入入口中指定vue文件的入口：

~~~javascript
entry: {
    h5: "./src/vue/app.js",
    // .....
},
~~~

如果在打包时出错，则需要安装对应的loader并且配置，安装指定如下：

~~~shell
npm i -D vue-loader vue-template-compiler
~~~

安装好对应的加载器后需要进一步配置打包规则，首先需要在webpack的配置文件中引入vue-loader的插件：

~~~javascript
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ]
    }
}
~~~

