---
title: python+selenium webdriver自动化测试
tags: 
- Selenium
- 自动化测试
category: 
- [编程相关,Python]
abbrlink: 730667ac
date: 2021-07-23 10:18:50

---

## 标题备选

1. Python 自动化测试入门：用 Selenium 跑通 Web 页面操作
2. 手把手教你：Python + Selenium Web 自动化测试，从环境到浏览器驱动
3. 想做 Web 自动化？先用这篇搞懂 Selenium 基础流程

## 摘要

这篇文章适合想入门 Web 自动化测试的同学，围绕 Selenium 的安装、浏览器驱动和基础操作流程，帮你先跑通第一条测试链路。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**自动化测试不是一上来就写复杂框架，先让浏览器被代码控制起来。**

很多同学想学 Selenium，会先卡在环境、浏览器驱动、元素定位这些基础步骤上。

这篇围绕原始笔记，把 Python + Selenium Web 自动化测试的入门流程整理清楚，适合先跑通最小闭环。

## 实操步骤整理

下面进入实操流程。建议先确认 Python、浏览器和浏览器驱动版本都能正常配合。

如果你第一次跑 Selenium，最容易出问题的通常是驱动路径、浏览器版本和元素定位方式，可以重点留意。

## 安装selenium和浏览器驱动
`pip install selenium`

Linux:
下载各浏览器驱动然后解压到`/usr/bin/`下即可或者配置环境变量
eg:`/usr/bin/chromedriver`

## 各浏览器驱动下载地址(根据浏览器的版本下载对应驱动)

+ [chrome:http://npm.taobao.org/mirrors/chromedriver/](http://npm.taobao.org/mirrors/chromedriver/)
+ [firefox:http://npm.taobao.org/mirrors/geckodriver/](http://npm.taobao.org/mirrors/geckodriver/)

## selenium使用
~~~python
# coding = utf-8
from selenium import webdriver
import time

# 使用chrome浏览器
browser = webdriver.Chrome()
# 打开浏览器并跳转到百度
browser.get("https://www.baidu.com")
# 找到搜索框输入selenium
browser.find_element_by_id("kw").send_keys("selenium")
# 点击搜索按钮
browser.find_element_by_id("su").click()
# 10秒后关闭浏览器
time.sleep(10)
browser.quit()

~~~

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你做 Web 自动化时最常卡在哪一步：环境安装、驱动配置，还是元素定位？可以把报错或页面场景留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Selenium、编程相关、Python、自动化测试
