---
title: oh-my-posh的使用
tags: powershell
category: 前端
abbrlink: 9cb524da
date: 2021-03-26 16:37:11
cover:
---

## 修改主题
+ 修改主题需要修改powershell的配置文件
  + $profile(C:\Users\pyz\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1)
  + 加入代码
  + Invoke-Expression (oh-my-posh --init --shell pwsh --config "$(scoop prefix oh-my-posh)/themes/jandedobbeleer.omp.json")
+ 或者(没成功)
  + `Set-PoshPrompt -Theme ~/.mytheme.omp.json`

## 修改字体修改的是windowterminal的配置文件settings.json
+ `C:\Users\pyz\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json`


``` json
{
    "profiles":
    {
        "defaults":
        {
            "fontFace": "DejaVuSansMono NF", // 字体
            "useAcrylic": true, // 开启毛玻璃特效
            "acrylicOpacity": 0.7 // 毛玻璃透明度
        }
    }
}
```




[![gPfUyQ.png](https://z3.ax1x.com/2021/04/28/gPfUyQ.png)](https://imgtu.com/i/gPfUyQ)

## windows terminal分屏快捷键

+ 左右分屏：Alt+Shift+=
+ 上下分屏：Alt+Shift+-
+ 取消分屏：Ctrl+Shift+w