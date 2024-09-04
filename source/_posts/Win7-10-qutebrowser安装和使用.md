---
title: Win7/10 qutebrowser安装和使用
tags: 
- QuteBrowser
- Vim
category: 
- [软件使用和配置,Windows]
abbrlink: c8833c04
date: 2021-04-23 09:22:40

---

## 安装

+ 使用 powershell 的包管理工具安装
    `Install-Package qutebrowser`

    



+ 使用 Scoop 安装

    `scoop bucket add extras`
    `scoop install qutebrowser`



+ 使用 Chocolatey 安装

    `choco install qutebrowser`



+ 手动安装

    1. 安装python3.6以上的版本
    2. 更换pip源
    3. 克隆到本地:`git clone https://github.com/qutebrowser/qutebrowser.git`
    4. 进入项目根目录:`cd qutebrowser`
    5. 安装生成文档的工具:`pip install asciidoc`
    6. `python3 scripts/mkvenv.py`

+ 注意

    - 除了`手动安装`其他方式安装的都是基于`python3.9`版本的
    - 所以只有win7需要手动安装
    - 手动安装的启动程序在项目根目录下的`.venv\Scripts`目录中有个`qutebrowser.exe`

## 使用

### 基础操作

[![20210530094550.png](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210530100106.jpg
)](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210530100106.jpg
)

### 设置

1. 进入设置界面步骤:按下`o`,输入`qute://settings`，回车
2. 修改首页和搜索引擎(eg:不同搜索引擎url格式不同)
   + 首页
        [![20210530094728.png](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210530100220.png
)](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210530100220.png
)
   + 搜索引擎
        [![20210530094816.png](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210530100105.jpg
)](https://gitee.com/huang_jian_hua/blog-images-bed/raw/master/20210530100105.jpg
)




