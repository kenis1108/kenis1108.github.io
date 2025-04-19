---
title: electron
tags: 
- Electron
category: 
- [软件使用和配置]
- [编程相关,Node.js]
abbrlink: ccd37491
date: 2021-07-22 10:16:27

---

## 安装
+ 设置镜像 `npm config set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/`

## 打包
### electron-packager
打包全平台 `electron-packager ./ --all`
### nativefier
介绍: 基于electron的一键封装url为桌面应用的工具
使用: `nativefier url`
例子: `nativefier https://www.baidu.com`

## 替代品 **tauri**
[参考](https://www.cnblogs.com/Grewer/p/12789261.html)
[官网](https://tauri.studio/en/docs/usage/development/integration/)
+ 官网说tauri原始程序打包后比electron小140多MB

