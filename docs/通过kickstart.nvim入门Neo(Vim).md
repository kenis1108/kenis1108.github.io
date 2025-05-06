# 通过 kickstart.nvim 入门 Neo(Vim)

## 什么是 kickstart.nvim？

`kickstart.nvim` 是一个 NeoVim 的起步配置模板，旨在帮助用户快速搭建一个功能齐全的 NeoVim 环境。它包含了一些常用的插件和配置，适合初学者使用，同时也为高级用户提供了一个良好的起点。

---

## 安装步骤

### 1. 安装必要的程序

请自行阅读官方指南，根据不同系统/发行版使用不同方式安装对应的程序

[Install-Recipes](https://github.com/nvim-lua/kickstart.nvim/tree/master#Install-Recipes)

### 2. 克隆 kickstart.nvim 仓库


```bash
git clone https://github.com/nvim-lua/kickstart.nvim.git ~/.config/nvim
```

+ `~/.config/nvim` 是NeoVim在Linux下的默认配置文件路径，其他系统需要改成对应系统的

+ 也可以通过环境变量/PowerShell配置将Windows/Linux/macOS下的默认配置文件路径统一成同一个，方便dotfiles manager。

### 3. 启动 NeoVim

克隆完成后，直接启动 NeoVim：

首次启动时，kickstart.nvim 会自动安装所需的插件。

```bash
nvim
```

### 4. 运行 checkhealth 检查依赖项、配置、插件以及运行环境的兼容性

```bash
:checkhealth
```

### 5. 打开配置文件

```bash
:e $MYVIMRC
```

## 配置解析

推荐观看这个视频
[The Only Video You Need to Get Started with Neovim](https://www.youtube.com/watch?v=m8C0Cq9Uv9o&t=103s)

kickstart.nvim 的配置文件位于 ~/.config/nvim/init.lua。以下是一些关键配置的解析：

+ 插件管理：使用 lazy.nvim 管理插件，方便安装和更新。
+ 快捷键映射：预设了一些常用的快捷键，提升编辑效率。
+ LSP 支持：内置了对语言服务器协议 (LSP) 的支持，提供代码补全、语法检查等功能。

## 常用插件介绍
kickstart.nvim 默认包含了一些实用的插件，例如：

+ Telescope：强大的模糊搜索工具。
+ Treesitter：提供更好的语法高亮和代码解析。
+ Lualine：美观的状态栏插件。

你可以根据需要添加或移除插件，定制属于自己的 NeoVim 配置。

## 进阶使用
在熟悉了 kickstart.nvim 的基础配置后，你可以尝试以下进阶操作：

1. 自定义快捷键：根据自己的习惯修改 init.lua 中的快捷键映射。
2. 添加新插件：在 packer 配置中添加新的插件。
3. 优化性能：根据自己的需求精简配置，提高启动速度。
