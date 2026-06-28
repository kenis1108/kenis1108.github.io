---
title: Javascript运动函数
tags: JavaScript
category: 前端
abbrlink: 3ee5605f
date: 2019-03-18 20:54:55


---

## 标题备选

1. JavaScript 基础补课：JavaScript 运动函数，核心知识点一次讲清楚
2. 前端人绕不开：JavaScript 运动函数 从概念到代码示例
3. 手把手梳理 JavaScript 运动函数：面试和实战都能用上

## 摘要

这篇文章适合前端基础巩固和面试复习，围绕「JavaScript 运动函数」整理概念、示例和易混点，帮助你把 JavaScript 基础打扎实。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**前端基础不是背概念，而是知道每个知识点在代码里怎么用。**

JavaScript 的知识点很多：语法、事件、正则、面向对象、异步、模块化、性能优化，每一块都能影响真实项目。

这篇围绕「JavaScript 运动函数」把原始笔记重新梳理成更适合阅读和复习的版本。

## 知识点整理

下面进入正文。代码示例建议直接敲一遍，很多细节只有运行起来才会真正记住。

如果你正在准备前端面试，可以把这里的代码示例当作复习清单逐个过一遍。

## 运动

- 运动原理：使用计时器，持续改变元素的属性
- 运动速度：取决于每次所走距离的多少
- 运动停止：判断什么时候到达目标位置，并清除计时器

### 匀速运动

- 运动频率和运动速度保持不变!
- 运动频率：计时器时间
- 运动速度：每次改变的量

```
function move(dom,target) {
    clearInterval(timer);
    timer = setInterval(function () {
        if (target > dom.offsetLeft) {//判断运动方向
            var speed = 5;//右走
        } else {
            var speed = -5;//左走
        }
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetLeft - target) <= Math.abs(speed)) {
            clearInterval(timer);//运动结束
            dom.style.left = target + 'px';//手动设置终点
        } else {
            dom.style.left = dom.offsetLeft + speed + 'px';//每次的运动
        }
    },20);
}
```

### 缓冲运动

- 运动速度发生变化，由快到慢

缓冲运动的关键：

1.频率不变，速度逐渐变慢

​	var speed = (target - obj.offsetLeft) / 10;

2.对速度取整，避免数据丢失

​	speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

```
function move(dom,target) {
    clearInterval(timer);
    timer = setInterval(function () {
        var speed = (target - dom.offsetLeft) / 10;//持续变化的速度
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//对速度取整，避免数据丢失
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetLeft - target) <= Math.abs(speed)) {
            clearInterval(timer);//运动结束
            dom.style.left = target + 'px';//手动设置终点
        } else {
            dom.style.left = dom.offsetLeft + speed + 'px';//每次的运动
        }
    },20);
}
```

### 透明度运动

- 透明度变量：var opa=30;
- IE浏览器：box.style.filter = 'alpha(opacity:' + opa + ')';
- 其他浏览器：box.style.opacity = opa/100;

```
function move(dom,target) {
    clearInterval(timer);
    timer = setInterval(function () {
        if (target > opa) {//运动方向
            var speed = 2;//透明度增加
        } else {
            var speed = -2;//透明度减少
        }
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(opa - target) <= Math.abs(speed)) {
            clearInterval(timer);//运动结束
            dom.style.opacity = target / 100;//手动设置终点
        } else {
            opa += speed;
            dom.style.opacity = opa / 100;//每次的运动
        }
    },30);
}
```

多元素进行相同的运动，属性都不能共用！

```
var box = document.querySelectorAll('.box');

for(var i = 0; i < box.length; i++){
    box[i].opa = 30;
    box[i].timer = null;
    box[i].onmouseover = function () {
        move(this,100);
    }
    box[i].onmouseout = function () {
        move(this,30);
    }
}

function move(dom,target) {
    clearInterval(dom.timer);
    dom.timer = setInterval(function () {
        if (target > dom.opa) {//运动方向
            var speed = 2;//透明度增加
        } else {
            var speed = -2;//透明度减少
        }
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.opa - target) <= Math.abs(speed)) {
            clearInterval(dom.timer);//运动结束
            dom.style.opacity = target / 100;//手动设置终点
        } else {
            dom.opa += speed;
            dom.style.opacity = dom.opa / 100;//每次的运动
        }
    },30);
}
```

swiper插件制作轮播图：<https://www.swiper.com.cn/>

### 多属性运动

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你最近复习 JavaScript 最头疼的是原型链、事件循环、正则，还是异步？评论区留一个关键词，后面可以单独展开。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

JavaScript、前端、前端基础
