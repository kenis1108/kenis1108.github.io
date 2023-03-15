---
title: aliyun+Ubuntu20.04+xfce4+vnc+xdrp
tags: Ubuntu
category: Linux
abbrlink: 6aafa0a1
date: 2021-01-01 15:35:00
cover:
---

# 阿里云安全组添加端口5901,3389
# apt update && apt upgrade --fix-missing
# apt install xfce4 xfce4-terminal
# apt install tightvncserver xdrp
# vncserver
# 此时可以连接但是是灰色的
# vncserver -kill :1
# mv ~/.vnc/xstartup ~/.vnc/xstartup.bak
# vim ~/.vnc/xstartup
~~~sh
#!/bin/sh
# Uncomment the following two lines for normal desktop:
# unset SESSION_MANAGER
# unset DBUS_SESSION_BUS_ADDRESS 
# exec /etc/X11/xinit/xinitrc
[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
vncconfig -iconic &
x-terminal-emulator -geometry 80x24+10+10 -ls -title "$VNCDESKTOP Desktop" &
# x-window-manager &
x-session-manager & 
xfdesktop & xfce4-panel &     
xfce4-menu-plugin &     
xfsettingsd &     
xfconfd &     
xfwm4 &
~~~
# 修改文件权限（无论什么用户都得修改）
~~~sh
chmod +x ~/.vnc/xstartup
~~~

# 重新运行`vncserver`就可以使用vncviewer连接vnc了
# 配置xdrp
+ echo "xfce4-session" >~/.xsession
+ 在/etc/xrdp/startwm.sh开头插入xfce4-session
+ sudo systemctl restart xrdp
+ 使用win10自带远程桌面连接

# 配置vnc默认分辨率
+ 修改/usr/bin/vncserver里的$geometry
+ $geometry = "1920x1080";