## 标题备选

1. Node.js 后端实战：用 Koa2 + MongoDB 搭建 API 项目
2. 手把手教你：Koa2 + MongoDB 搭建后端 API 项目
3. Koa2 + MongoDB 项目怎么起步？这篇把主流程讲清楚

## 摘要

这篇文章适合想用 Node.js 写后端接口的同学，围绕 Koa2 + MongoDB 项目的搭建流程和目录思路，整理一份可复用的入门笔记。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**写后端 API，最关键的是先把项目骨架和数据链路跑通。**

Koa2 负责处理请求，MongoDB 负责存数据，两者组合起来很适合做 Node.js 后端入门练习。

这篇围绕原始笔记，把 Koa2 + MongoDB 搭建后端 API 项目的主流程重新梳理一遍。

## 实操步骤整理

下面进入项目搭建流程。建议大家边创建文件边启动服务验证，避免最后才集中排错。

如果你准备拿这个结构继续扩展接口，建议先把路由、控制器、数据库连接这些职责拆清楚。

## 使用koa2+mongodb搭建后端api项目

## 一、环境搭建
```txt
自行安装 node + npm
```

## 二、安装脚手架并创建项目
```sh
npm i -g koa-generator
koa2 <pro_name>
```
![](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20211122113926.png)

## 三、安装依赖并启动项目
```sh
npm i
npm i koa2-cors mongoose (跨域还有操作数据库的库)
npm dev (启动命令自行查看package.json)
```

## 四、数据库操作(模块化开发)
### 脚手架生成的初始文件目录结构
![](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20211122114218.png)

### 创建mongodb文件夹
### mongodb文件夹结构
![](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20211122114700.png)
```txt
controller文件夹: 存放对数据库增删改查的函数的文件,文件名对应数据库中的一个表(集合);
models文件夹: 存放由schemas生成的表,文件名同理;
schemas文件夹: 存放schemas文件
```
### 模块化开发
1. 先创建mongodb/index.js文件,再在app.js中导入,导入时注意模块导入顺序
```js
/**
 * mongodb/index.js
 * @file 连接数据库
 * @author kenis
 */
const mongoose = require("mongoose");

mongoose.connect("mongodb://192.168.43.158:27017/car");
mongoose.Promise = global.Promise;

let db = mongoose.connection;

// 监听打开成功还是失败
db.on("error", err => {
  // 链接失败
  console.log(err, "链接失败");
});
db.once("connected", function () {
  // 链接成功
  console.log("链接成功");
});
db.once("disconnected", function () {
  // 断开链接
  console.log("断开链接");
});

module.exports = db;
```

```js
/**
 * app.js
 */
const Koa = require("koa");
const app = new Koa();
// const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const db = require("./mongodb");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// 跨域处理
const cors = require("koa2-cors");
app.use(cors());

// 视图配置
// app.use(
//   views(__dirname + "/views", {
//     extension: "pug",
//   })
// );

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// router 修改路由的注册方式，通过遍历routes文件夹读取文件
const fs = require("fs");
fs.readdirSync("./routes").forEach(route => {
  let api = require(`./routes/${route}`);
  app.use(api.routes(), api.allowedMethods());
});

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;

```

2. 创建数据库集合的模板类型和模型
```js
/**
 * mongodb/schemas/car.js
 * 创建模板类型
 */
const mongoose = require("mongoose");
const sportsCarSchema = new mongoose.Schema({
  // 说明集合中要存储的字段，字段类型
  name_zh_CN: String,
  name_en_US: String,
});

module.exports = { sportsCarSchema };
```

```js
/**
 * mongodb/models/car.js
 */
const { sportsCarSchema } = require("../schemas/car");
const mongoose = require("mongoose");
let SportsCarModel = mongoose.model("SportsCar", sportsCarSchema);
module.exports = { SportsCarModel };
```

3. 创建操作数据库的控制器文件
```js
/**
 * mongodb/controller/car.js
 */
const { SportsCarModel } = require("../mongodb/models/car");

/**
 * 查询所有数据
 * @param {*} ctx
 * @returns
 */
const findAll = async ctx => {
  let code = 0; // 状态码 0:成功 -1:失败
  let result = ""; // 返回内容
  try {
    let doc = await SportsCarModel.find({});
    code = 0;
    result = "查找成功";
    data = doc;
  } catch (err) {
    code = -1;
    result = "查找失败";
    data = err;
  }

  ctx.response.body = {
    code,
    result,
    data,
  };
  return result;
};

/**
 * 删除
 * @param {*} ctx
 * @returns
 */
const delOne = async ctx => {
  let code = 0; // 状态码 0:成功 -1:失败
  let result = ""; // 返回内容
  try {
    let doc = await SportsCarModel.deleteOne(ctx.request.body);
    code = 0;
    result = "删除成功";
    data = doc;
  } catch (err) {
    code = -1;
    result = "删除失败";
    data = err;
  }

  ctx.response.body = {
    code,
    result,
    data,
  };
  return result;
};

/**
 * 添加
 * @param {*} ctx
 * @returns
 */
const addOne = async ctx => {
  let code = 0; // 状态码 0:成功 -1:失败
  let result = ""; // 返回内容
  try {
    let doc = await SportsCarModel.create(ctx.request.body);
    code = 0;
    result = "添加成功";
    data = doc;
  } catch (err) {
    code = -1;
    result = "添加失败";
    data = err;
  }

  ctx.response.body = {
    code,
    result,
    data,
  };
  return result;
};

/**
 * 通过id修改数据
 * @param {*} ctx
 * @returns
 */
const updateOne = async ctx => {
  let code = 0; // 状态码 0:成功 -1:失败
  let result = ""; // 返回内容
  try {
    const { id, update } = ctx.request.body;
    let doc = await SportsCarModel.findByIdAndUpdate(id, update);
    code = 0;
    result = "修改成功";
    data = doc;
  } catch (err) {
    code = -1;
    result = "修改失败";
    data = err;
  }

  ctx.response.body = {
    code,
    result,
    data,
  };
  return result;
};

module.exports = { findAll, delOne, addOne, updateOne };
```

4. 创建路由文件
```js
/**
 * routes/cars.js
 */
const router = require("koa-router")();
const {
  findAll,
  delOne,
  addOne,
  updateOne,
} = require("../mongodb/controller/car");

router.prefix("/cars");

/**
 * 查询所有
 */
router.get("/list", findAll);

/**
 * 删除
 */
router.delete("/del", delOne);

/**
 * 添加
 */
router.post("/add", addOne);

/**
 * 修改
 */
router.post("/update", updateOne);

module.exports = router;
```

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你更想看 Koa2 + MongoDB 的哪一块后续：登录鉴权、接口分层，还是部署上线？可以直接留言。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

koa2、编程相关、Node.js、Koa2、MongoDB
