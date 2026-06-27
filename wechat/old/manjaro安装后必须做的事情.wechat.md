## 标题备选

1. 实用工具折腾记：Manjaro 安装后必须做的事情
2. 手把手教你：Manjaro 安装后必须做的事情，少走一些配置弯路
3. Manjaro 安装后必须做的事情怎么用？这篇把关键步骤讲清楚

## 摘要

这篇文章面向喜欢折腾工具和开发环境的同学，围绕「Manjaro 安装后必须做的事情」整理关键步骤、配置点和注意事项，方便按需复用。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**工具类文章最重要的价值，就是让你下次遇到同类场景时能直接复用。**

无论是开发环境、系统配置，还是小工具折腾，真正耗时间的往往都是那些不起眼的细节。

这篇围绕「Manjaro 安装后必须做的事情」把原始操作笔记整理成更清晰的步骤版，方便大家按需参考。

## 操作步骤整理

下面进入具体内容。工具类配置建议一步一步来，改完一个关键点就验证一次结果。

如果你也遇到类似配置场景，可以先按本文步骤跑通，再根据自己的环境微调。

## 系统版本

## 更换国内源

```bash
sudo pacman-mirrors -i -c China -m rank
```

## 添加 archlinuxcn 源,antergos源,arch4edu源

+ 编辑 `/etc/pacman.conf` 添加以下内容

  ```code
  [archlinuxcn]
  SigLevel = Optional TrustedOnly
  #中科大源
  Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
  #清华源
  Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch

  [antergos]
  SigLevel = TrustAll
  Server = https://mirrors.tuna.tsinghua.edu.cn/antergos/$repo/$arch

  [arch4edu]
  SigLevel = TrustAll
  Server = https://mirrors.tuna.tsinghua.edu.cn/arch4edu/$arch
  ```

+ 防止签名错误

    ```bash
    sudo pacman -S archlinuxcn-keyring
    ```

## 更新源列表

```bash
sudo pacman-mirrors -g
```

## 更新系统

```bash
sudo pacman -Syyu
```

## 安装软件
+ `sudo pacman -S base-devel`
+ 包管理工具  **yay**  `sudo pacman -S yay`

+ 显示有关相应系统的简要信息工具 **neofetch** `yay -S neofetch`

+ 谷歌浏览器 `yay -S google-chrome`

+ **neovim** `yay -S neovim`

+ 中文输入法 **fcitx-im** `yay -S fcitx-im`
  + 设置 IM 环境变量
  + `nvim ~/.pam_environment` 添加以下内容

    ```
    GTK_IM_MODULE DEFAULT=fcitx
    QT_IM_MODULE  DEFAULT=fcitx
    XMODIFIERS    DEFAULT=\@im=fcitx
    ```

  + 重启电脑
+ 安装 fcitx 的GUI配置工具 `yay -S kcm-fcitx fcitx-configtool`
+ Fcitx 自带剪贴板，其快捷键为 `Ctrl + ;`, 小小功能拯救世界。
+ 云拼音 **fcitx-cloudpinyin** `yay -S fcitx-cloudpinyin`
  + 安装好后重启fcitx,进入配置切换云拼音来源为百度，默认是Google
+ 终端文件管理器 **ranger** `yay -S ranger`
+ windows模拟器 **wine** `yay -S wine wine-gecko wine-mono`
+ **ocs-url** `yay -S ocs-url`
+ **nodejs** `yay -S nodejs npm`
+ deb包转换工具 **debtap** `yay -S debtap`
+ **dmenu** **rofi** **feh** **picom** **w3m** **python-pip** **bat**
+ **deepin-wine-qq** 安装好后是一个安装包，安装包安装好后重启系统或者等一会才能打开，不然会报错，报错就重启系统就行了
+ **ffmpegthumbnailer**
+ **mpv** **ttf-font-awesome** **ttf-font-icons**
+ **xorg-xrandr**
+ **gvim**
+ `pip install quickswitch-i3 i3-py` 在用demu的时候使用的脚本
+ `yay -S wqy-microhei wqy-bitmapfont wqy-zenhei wqy-microhei-li`
+ `yay -S adobe-source-han-sans-cn-fonts adobe-source-han-serif-cn-fonts`

## 配置zsh
### 安装oh-my-zsh
+ `git clone https://gitee.com/huang_jian_hua/oh-my-zsh.git`
+ 运行 `oh-my-zsh/tools/install.sh`
+ 安装完毕删除 **oh-my-zsh** 文件夹
+ 使用**konsole**的需手动更改bash为zsh

### 安装语法高亮和自动建议插件
+ oh-my-zsh插件安装方法
  1. 将插件放到`~/.oh-my-zsh/custom/plugins/`下
  2. 在配置文件`~/.zshrc`里添加插件名称

+ 进入 `~/.oh-my-zsh/custom/plugins/`
+ 自动建议 `git clone https://gitee.com/huang_jian_hua/zsh-autosuggestions.git`
+ 语法高亮 `git clone https://gitee.com/huang_jian_hua/zsh-syntax-highlighting.git`
+ 配置文件 **71行** 修改为`plugins=(git zsh-syntax-highlighting zsh-autosuggestions)`
+ 重启终端

### 配置zsh主题

- `.zshrc` 文件第**11**行 `ZSH_THEME="robbyrussell"`
- 修改成**random**为随机主题
- 可填参数在`~/.oh-my-zsh/themes`文件夹里面可自行查看
- 自定义的主题应该放在`~/.oh-my-zsh/custom/themes`

## 配置ranger

- 生成配置文件
  - `ranger --copy-config=all`
- 安装文件图标
  - 终端字体需换成Nerd Font字体
  - 运行以下两句命令
    - `git clone https://gitee.com/huang_jian_hua/ranger_devicons.git ~/.config/ranger/plugins/ranger_devicons`
    - `echo "default_linemode devicons" >> $HOME/.config/ranger/rc.conf`
  - 重启ranger
- 修改配置文件 **rc.conf** 和 **scope.sh**

## 美化折腾

### 动态壁纸

1. 右键桌面
    [![gYPh0f.png](https://z3.ax1x.com/2021/05/09/gYPh0f.png)](https://imgtu.com/i/gYPh0f)

2. 获取新插件
	[![gYPRXt.png](https://z3.ax1x.com/2021/05/09/gYPRXt.png)](https://imgtu.com/i/gYPRXt)

3. 安装插件
	[![gYPfnP.png](https://z3.ax1x.com/2021/05/09/gYPfnP.png)](https://imgtu.com/i/gYPfnP)

4. 选择壁纸类型
	[![gYP26I.png](https://z3.ax1x.com/2021/05/09/gYP26I.png)](https://imgtu.com/i/gYP26I)

5. 选择视频文件
	[![gYPg1A.png](https://z3.ax1x.com/2021/05/09/gYPg1A.png)](https://imgtu.com/i/gYPg1A)

## 如果是在vmware的话,安装open-vm-tools
`yay -S open-vm-tools`
`systemctl enable vmtoolsd.service`
`systemctl start vmtoolsd.service`

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你有没有折腾过「Manjaro 安装后必须做的事情」这类工具或环境配置？如果有更省事的方案，也欢迎在评论区补充。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Manjaro、软件使用和配置、Linux、工具配置、效率工具
