---
title: Javascript运动函数
tags: JavaScript
category: 前端
abbrlink: 3ee5605f
date: 2019-03-18 20:54:55
cover:
hidden: true
---


## 运动 


- 运动原理：使用计时器，持续改变元素的属性
- 运动速度：取决于每次所走距离的多少
- 运动停止：判断什么时候到达目标位置，并清除计时器

#### 匀速运动 

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

#### 缓冲运动 

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

#### 透明度运动

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
