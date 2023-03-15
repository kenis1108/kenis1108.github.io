---
title: Event Loop
tags:
category:
- [编程相关,JavaScript] 
abbrlink: 2a798ab5
date: 2019-03-26 15:44:57
cover:
---



## 调用栈（执行栈）
+ 专门用来执行代码的栈
+ 不是栈内存
+ LIFO: last in first out

## 队列
+ 异步任务排队的位置
  + 事件队列：Event Queue
  + 微任务队列：Microsoft Queue
    + Promise.then()
  + 宏任务队列：Macrosoft Queue
    + 整体代码
    + 定时器
  + FIFO: first in first out

[![gPRW3F.png](https://z3.ax1x.com/2021/04/28/gPRW3F.png)](https://imgtu.com/i/gPRW3F)

## Web APIs
+ 提供异步机制的
+ 分配任务到哪一个队列
+ 会在每一次调用栈空的时候进行 计时 并 分配

## 事件轮询（客户端 事件循环）
+ 就是 JS 代码的同步异步执行机制
+ 轮流询问 宏任务队列 和 微任务队列
+ 从 宏任务 开始，一个宏任务，清空一次微任务队列
  + 再一个宏任务，清空一次微任务队列
  + 直到微任务队列清空完毕，再次访问宏任务队列也没有任务的时候
  + Event Loop暂停


[![gPWTMQ.png](https://z3.ax1x.com/2021/04/28/gPWTMQ.png)](https://imgtu.com/i/gPWTMQ)
## 面试题
[![gPRfc4.png](https://z3.ax1x.com/2021/04/28/gPRfc4.png)](https://imgtu.com/i/gPRfc4)

[![gPRcNV.png](https://z3.ax1x.com/2021/04/28/gPRcNV.png)](https://imgtu.com/i/gPRcNV)