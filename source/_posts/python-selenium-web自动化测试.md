---
title: python+selenium webdriver自动化测试
tags: selenium
category: Python
abbrlink: 730667ac
date: 2021-07-23 10:18:50
cover:
---


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