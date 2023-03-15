---
title: ng-alain的使用
tags: Javascript
category: 前端
abbrlink: 44d63540
date: 2021-07-13 13:56:33
cover:
hidden: true
---

# NG-ALAIN

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
