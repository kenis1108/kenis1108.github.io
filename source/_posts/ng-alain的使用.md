---
title: ng-alain的使用
tags: JavaScript
category: 前端
abbrlink: 44d63540
date: 2021-07-13 13:56:33


---

## 标题备选

1. Angular 实战基础：ng-alain 的使用，核心用法一次讲清楚
2. 手把手梳理 ng-alain 的使用：从概念到项目配置
3. ng-alain 的使用入门别慌，这篇先把主线理顺

## 摘要

这篇文章适合 Angular 技术栈学习者，围绕「ng-alain 的使用」整理核心概念、配置流程和常见用法，帮助你快速建立实践路径。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**Angular 体系相对完整，入门时最重要的是先抓住主线。**

不管是组件、模块、服务还是脚手架配置，单点学习容易碎，放到项目流程里理解会更顺。

这篇围绕「ng-alain 的使用」把关键内容重新整理一遍，方便大家建立整体认识。

## 知识点整理

下面进入正文。建议先把概念和目录结构对应起来，再去看具体代码。

如果你正在用 Angular 做后台项目，可以对照自己的模块、服务和页面结构看一遍。

## NG-ALAIN

## 介绍

## ng g

~~~powershell
ng g ng-alain:module xxx
ng g ng-alain:empty yyy -m=xxx
~~~

## 使用iconfont

> 第一步：iconfont 生成js在线链接
>
>![](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210713143820.png)

> 第二步：在startup.service.ts中引入
>
>```ts
>// src/app/core/startup/startup.service.ts
>export class StartupService {
>  constructor(
>    iconSrv: NzIconService,
>    private menuService: MenuService,
>    private translate: TranslateService,
>    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
>    private settingService: SettingsService,
>    private aclService: ACLService,
>    private titleService: TitleService,
>    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
>    private httpClient: HttpClient,
>    private injector: Injector
>  ) {
>    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
>    // 使用iconfont
>    iconSrv.fetchFromIconfont({
>      scriptUrl: 'https://at.alicdn.com/t/font_2670501_nkbj7jrr0sp.js'
>    })
>  }
>```

> 第三步：在组件中使用
>
>```html
><i nz-icon nzIconfont="icon-tubiaozhizuomoban-09"></i>
><!--
>    nz-icon
>    nzIconfont
> -->
>```

## 自定义管道
运行`ng g pipe pipes/xxx -m=shared`

## @delon/mock
数据存放位置`_mock/_user.ts`
```ts
export const USERS = {
  '/user': (req: MockRequest) => genData(req.queryString),
  '/user/:id': (req: MockRequest) => list.find((w) => w.id === +req.params.id),
  'POST /user/:id': (req: MockRequest) => saveData(+req.params.id, req.body),
  '/user/current': {
    name: 'Cipchk',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'cipchk@qq.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注撩妹',
      },
      {
        key: '2',
        label: '帅~',
      },
      {
        key: '3',
        label: '通吃',
      },
      {
        key: '4',
        label: '专职后端',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    country: 'China',
    geographic: {
      province: {
        label: '上海',
        key: '330000',
      },
      city: {
        label: '市辖区',
        key: '330100',
      },
    },
    address: 'XX区XXX路 XX 号',
    phone: '你猜-你猜你猜猜猜',
  },
  'POST /user/avatar': 'ok',
  'POST /login/account': (req: MockRequest) => {
    const data = req.body;
    if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
      return { msg: `Invalid username or password（admin/ng-alain.com）` };
    }
    return {
      msg: 'ok',
      user: {
        token: '123456789',
        name: data.userName,
        email: `${data.userName}@qq.com`,
        id: 10000,
        time: +new Date(),
      },
    };
  },
  'POST /register': {
    msg: 'ok',
  },
  'GET /fruit': {
    name: '苹果',
  },
};
```

## ellipsis 文本自动省略号组件
[API](https://ng-alain.com/components/ellipsis/zh?#API)
>功能:
>1. 按行数省略
>2. 按字符数省略
>3. 自定义省略显示字符

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你用 Angular 时最常踩坑的是模块、路由、表单，还是 ng-alain 配置？可以把你的场景留言给我。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

JavaScript、前端、Angular、前端基础
