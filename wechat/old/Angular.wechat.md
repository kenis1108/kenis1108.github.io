## 标题备选

1. Angular 实战基础：Angular，核心用法一次讲清楚
2. 手把手梳理 Angular：从概念到项目配置
3. Angular 入门别慌，这篇先把主线理顺

## 摘要

这篇文章适合 Angular 技术栈学习者，围绕「Angular」整理核心概念、配置流程和常见用法，帮助你快速建立实践路径。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**Angular 体系相对完整，入门时最重要的是先抓住主线。**

不管是组件、模块、服务还是脚手架配置，单点学习容易碎，放到项目流程里理解会更顺。

这篇围绕「Angular」把关键内容重新整理一遍，方便大家建立整体认识。

## 知识点整理

下面进入正文。建议先把概念和目录结构对应起来，再去看具体代码。

如果你正在用 Angular 做后台项目，可以对照自己的模块、服务和页面结构看一遍。

[Angular中文官网](https://angular.cn/)

## AngularJS 和 Angualr 的区别
![AngularJS 和 Angualr 的区别](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210804085948.png)

## Angular CLI

1. 安装CLI
   `npm install -g @angular/cli`
2. 创建新项目
   `ng new demo --skip-install`
3. 安装依赖
   `cd Demo && yarn`
4. 启动应用
   `yarn start`

## 组件

### 创建组件

+ 使用CLI创建组件
  + `ng g component path/componentName`
  + path ==> 组件存放的路径
  + componentName ==> 组件的名称
  + 运行成功后会在src/app下创建path文件夹,path文件夹下创建componentName文件夹,componentName文件夹里面有四个文件(.ts、.html、.css、.spec.ts)
+ 手动创建组件
  + 创建一个componentName.component.ts
    ```ts
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-componentName',
      // template: '<h1>Hello World!</h1>',
      templateUrl: './componentName.component.html',
      // styles: ['h1 { font-weight: normal; }'],
      styleUrls: ['./componentName.component.css']
    })

    export class ComponentOverviewComponent {

    }
    ```

### 组件生命周期
![生命周期顺序](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210804094515.png)

### 组件样式
### 特殊的选择器
### :host
>`使用 :host 伪类选择器，用来选择组件宿主元素中的元素（相对于组件模板内部的元素）。要把宿主样式作为条件，就要像函数一样把其它选择器放在 :host 后面的括号中。`
>```css
>// 把宿主元素作为目标，但是只有当它同时带有 active CSS 类的时候才会生效
>:host(.active) { border-width: 3px; }
>```

### :host-context()
>`:host-context()在当前组件宿主元素的祖先节点中查找 CSS 类， 直到文档的根节点为止。`
>```css
>// 只有当某个祖先元素有 CSS 类 `theme-light` 时，才会把 `background-color` 样式应用到组件内部的所有 `<h2>` 元素中。
>:host-context(.theme-light) h2 { background-color: #eef; }
>```

### 组件通讯
### 父传子（@Input装饰器）
>```html
><!-- 父组件模板 -->
><app-son [name]="sonName"></app-son>
><!--
>    name为子组件接受的变量名
>    sonName为父组件传的值 -->
>```
>```ts
>// 子组件
>import { Component, Input, OnInit } from >'@angular/core';
>
>@Component({
>  selector: 'app-son',
>  templateUrl: './son.component.html',
>  styleUrls: ['./son.component.less']
>})
>export class TopComponent implements OnInit {
>  // 接受父组件传的值
>  @Input() name;
>
>  constructor() { }
>
>  ngOnInit(): void {
>  }
>
>}
>```

### 通过 setter 截听输入属性值的变化
### 通过ngOnChanges()来截听输入属性值的变化
### 子传父 (@Output装饰器)
>1. 在子组件中引入`import { Output, EventEmitter } from '@angular/core';`
>2. 在子组件定义自定义事件`@Output() newItemEvent = new EventEmitter<string>();`
>3. 在子组件中定义触发事件的方法`addNewItem(value: string) {this.newItemEvent.emit(value);}`
>4. 子组件模板中添加按钮来触发自定义事件
>5. 父组件中定义触发自定义事件的处理函数来接收数据
>6. 在父组件模板中子组件标签上绑定自定义事件
>```ts
>//子组件
>import { Component OnInit, Output, EventEmitter } from '@angular/core';
>@Component({
>  selector: 'app-son',
>  templateUrl: './son.component.html',
>  styleUrls: ['./son.component.less']
>})
>export class TopComponent implements OnInit {
>  // new EventEmitter<string>()使用 Angular 来创建一个新的事件发射器，它发出的数据是 string 类型的。
>  @Output() newItemEvent = new EventEmitter<string>();
>  constructor() { }
>
>  ngOnInit(): void {
>  }
>  // 定义触发事件的方法
>  addNewItem(value: string) {
>    this.newItemEvent.emit(value);
>  }
>}
>```
>
>```html
><!-- 父组件模板 -->
><app-son (newItemEvent)="父组件接收方法(接收的数据$event)"></app-son>
>```

### 跨组件 (服务&&Subject)
### 内容投影(插槽)
### 单插槽内容投影(ng-content)

### 管道
### 纯管道和非纯管道
>纯管道:
>Angular只有检查到输入值发生纯变更时，才会执行纯管道。纯变更指的是，原始类型值(String,Number,Boolean,Symbol)的改变，或者对象引用的改变(对象值改变不是纯变更，不会执行)。
>
>非纯管道:
>Angular会在每个组件的变更检测周期执行非纯管道。所以，如果使用非纯管道，我们就得注意性能问题了。

>![](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210805162221.png)
### 自定义管道
>第一步：CLI创建管道`ng g pipe path/pipeName`会生成.pipe.ts文件
>
>```ts
>import { Pipe, PipeTransform } from '@angular/core';
>
>Pipe({
> // 模板中 | 后使用的名称
> name: 'format'
>)
>xport class FormatPipe implements PipeTransform {
>
> transform(value: number, ...args: number[]): number {
>   const [a, b] = args
>   if (value === 100) {
>     return value + a - b
>   }
>   return null;
> }
>```

>第二步：在.module.ts文件里导入，在@NgModule的declarations里引入
>```ts
>import { NgModule } from '@angular/core';
>import { BrowserModule } from '@angular/platform-browser';
>import { FormsModule } from '@angular/forms';
>import { AppRoutingModule } from './app-routing.module';
>import { AppComponent } from './app.component';
>import { HomeComponent } from './components/home/home.component';
>import { TopComponent } from './components/home/top/top.component';
>import { FooterComponent } from './components/home/footer/footer.component';
>import { CenterComponent } from './components/home/center/center.component';
>import { FormatPipe } from './pipes/format.pipe';
>import { FormatChPipe } from './pipes/format-ch.pipe';
>
>@NgModule({
>  declarations: [
>    AppComponent,
>    HomeComponent,
>    TopComponent,
>    FooterComponent,
>    CenterComponent,
>    FormatPipe,
>    FormatChPipe
>  ],
>  imports: [
>    BrowserModule,
>    AppRoutingModule,
>    FormsModule
>  ],
>  providers: [],
>  bootstrap: [AppComponent]
>})
>export class AppModule { }
>```

>第三步：模板中使用，若需传递参数使用:隔开，若需串联之间|后继续写下去
>```html
><h2>
>    {{1000|format:1:2|formatCh}}
></h2>
>```

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
