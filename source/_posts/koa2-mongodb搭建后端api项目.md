---
title: koa2+mongodb搭建后端api项目
tags: Node.js
category: 后端
abbrlink: 80d480ac
date: 2021-11-22 11:28:28
cover:
---

# 使用koa2+mongodb搭建后端api项目

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
#### mongodb文件夹结构
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
