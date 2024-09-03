---
title: HTML5
category: 前端
tags: HTML5
abbrlink: 98f3a6d9
date: 2019-02-26 14:41:40
cover:

---






# HTML5发展史


HTML5草案的前身名为 Web Applications 1.0，于2004年被WHATWG提出，于2007年被W3C接纳，并成立了新的 HTML 工作团队。
1. HTML 5 的第一份正式草案已于2008年1月22日公布。HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。

2. 2012年12月17日，万维网联盟（W3C）正式宣布凝结了大量网络工作者心血的HTML5规范已经正式定稿。根据W3C的发言稿称：“HTML5是开放的Web网络平台的奠基石。”

3. 2013年5月6日， HTML 5.1正式草案公布。该规范定义了第五次重大版本，第一次要修订万维网的核心语言：超文本标记语言（HTML）。在这个版本中，新功能不断推出，以帮助Web应用程序的作者，努力提高新元素互操作性。

4. 本次草案的发布，从2012年12月27日至今，进行了多达近百项的修改，包括HTML和XHTML的标签，相关的API、Canvas等，同时HTML5的图像img标签及svg也进行了改进，性能得到进一步提升

[![6rXQUS.jpg](https://s3.ax1x.com/2021/03/16/6rXQUS.jpg)](https://imgtu.com/i/6rXQUS)

由上面的图可以得知，现在的HTML5还不是一个最终统一的版本，所以说HTML5用在手机端的开发


# 浏览器兼容

```txt
支持Html5的浏览器包括Firefox（火狐浏览器），IE9及其更高版本，Chrome（谷歌浏览器），Safari，Opera等；国内的 遨游浏览器（Maxthon），以及基于IE或Chromium（Chrome的工程版或称实验版）所推出的360浏览器、搜狗浏览器、QQ浏览器、猎豹 浏览器等国产浏览器同样具备支持HTML5的能力。
```



[![6rX3CQ.jpg](https://s3.ax1x.com/2021/03/16/6rX3CQ.jpg)](https://imgtu.com/i/6rX3CQ)

[![6rXGgs.jpg](https://s3.ax1x.com/2021/03/16/6rXGgs.jpg)](https://imgtu.com/i/6rXGgs)

不同的浏览器显示的效果可能不一样。因为HTML5没有一个统一的标准，不同的浏览器解析时不一样的，现在还处于一个推广的阶段，但是大部分的还是一样的



# 语法

+ 内容类型（ContentType）

  + HTML5的文件扩展符与内容类型保持不变，仍然为".html"或".htm"

+ DOCTYPE声明

  + `<!DOCTYPE html>不区分大小写`

+ 指定字符集编码
  
  + `<meta charset="UTF-8">`
  
+ 可省略标记的元素
  
  + 不允许写结束标记的元素：br、col、embed、hr、img、input、link、meta	  
  + 可以省略结束标记的元素：li、dt、dd、p、option、colgroup、thead、tbody、tfoot、tr、td、th
  + 可以省略全部标记的元素：html、head、body、colgroup、tbody

+ 属性值可以使用双引号，也可以使用单引号。



# 语义化标签

扩展：语义化的重要性：
   1. 当页面加载失败的时候，还能够呈现出清晰的结构
   2. 有利于SEO优化，利于被搜索引擎收录（即便于网络爬虫的识别）
   3. 在项目开发及维护时，语义化的也很大程度上降低开发难度，节省成本


```txt
在HTML 5出来之前，我们用div来表示页面章节，但是这些div都没有实际意义。（即使我们用css样式的id和class形容这块内容的意义）。这些标签只是我们提供给浏览器的指令，只是定义一个网页的某些部分。但现在，那些之前没“意义”的标签因为因为html5的出现消失了，这就是我们平时说的“语义”。
```



+ section元素 表示页面中的一个区块
+ article元素 表示一块与上下文无关的独立的内容
+ aside元素 在article之外的，与article内容相关的辅助信息 
+ header元素 表示页面中一个内容区块或整个页面的标题
+ footer元素 表示页面中一个内容区块或整个页面的脚注
+ nav元素 表示页面中导航链接部分
+ figure元素 表示一段独立的内容，使用figcaption元素为其添加标题(第一个或最后一个子元素的位置)
+ main元素 表示页面中的主要的内容(ie不兼容)
+ hgroup标题的一个分组
+ mark定义高亮显示的文本(span)
+ dialog标记定义一个对话框(会话框)类似微信 
+ embed 标记定义外部的可交互的内容或插件 比如flash 
  	

[![6rX83j.png](https://s3.ax1x.com/2021/03/16/6rX83j.png)](https://imgtu.com/i/6rX83j)



# 多媒体标签

```html
<video src=""></video>
ogg 文件，适用于Firefox、Opera 以及 Chrome 浏览器。 
 <video> 元素支持三种视频格式： .MP4, .WebM, 和.ogg:

<audio src=""></audio>
    音频文件必须是 MP3 或 Wav 类型 mpeg。 
     <video   controls="controls" autoplay="autoplay">
          <source src="video/movie.ogg" type="video/ogg" >
          <source src="video/movie.webm" type="video/webm">
          <embed src="video/oceans.mp4" >   
    </video>
```

+ 属性
  + controls属性：如果出现该属性，则向用户显示控件，比如播放按钮。
  + autoplay属性：如果出现该属性，则视频在就绪后马上播放。
  + loop属性：重复播放属性。
  + muted属性：静音属性。
  + poster属性：规定视频正在下载时显示的图像，直到用户点击播放按钮。

+ source
  			<source> 标签为媒介元素（比如 <video> 和 <audio>）定义媒介资源。
    			<source> 标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。
    			Type属性值：
    				用于视频：video/ogg   video/mp4     video/webm
    				用于音频：audio/ogg   audio/mpeg

## 新增web应用标签：

progress  表示进程

meter     表示测量尺度

details   描述文档或文档细节（只有Chrome 支持）

datalist   定义选项列表。

（1）progress标签：

状态标签，显示进度，（任务过程：安装、加载）；Ie9及更低版本不支持，多用于js控制（ 此标签不常用）

属性：value: 设置已经完成的情况

​           max：设置最终要完成的情况

应用代码：

<progress  id=“pr”  value=“30”  max=“100”  > </progress>

（2）meter标签：

用于表示已知范围或分数值内的标量测量,也被称为尺度；属性仅用于已知最大和最小值的度量；ie浏览器不支持（  此标签不常用）

常用属性：value：设置 规定度量的当前值 

​                  min：规定范围的最小值 

​                  max：规定范围的最大值 

应用代码： 

<meter  id="mt"  value="30"  min="10"  max="100"> </meter>

（3）details标签：折叠区块

用于描述文档或文档某个部分的细节；

目前只有 Chrome 和 Safari 6 支持 <details> 标签。

 <summary>在其内，配合使用，为其定义标题；并且该是其内第一个标签           

属性：open =”open” :设置信息是否可见 

应用：

 <details open="open">

​     <summary>标题</summary>

     <p>详细内容描述</p>

</details>

4，datalist   必须和list属性结合使用。做提示信息。

```
<input type="url"     list="url_list"    name="link" />
<datalist    id="url_list"> 
    <option label="W3School" value="http://www.W3School.com.cn" /> 
    <option label="Google" value="http://www.google.com" /> 
    <option label="Microsoft" value="http://www.microsoft.com" /> 
</datalist>
```



# HTML5表单



Html表单一直都是web的核心技术之一，html5为表单添加了新的js功能和结构上更加自由的写法，极大的提高了开发效率，xhtml中需要放在form中，而html5中表单元素可以放在页面任何位置；

**新增表单类型元素：**

email       邮箱

url            网址

number    数值

range       范围数值

date        日期

search     搜索

color        颜色 



 

1、 email： 邮箱类型的文本框验证

应用：    

​        <input  name="email1"   type="email"   required   />
 multiple     选择（上传）多个

2、  url  :      输入URL地址的文本框

​      应用：    <input  name=”url1”   type="url"  required  />

3、  color ：  用来选取颜色。

  应用： <input  name=”color1”  type="color"  required />

4、 number：   用来输入数字的文本框。

   属性：min ：允许的最小值

​         max： 允许的最大值

​         step： 规定的间隔值

​         value：默认值

  应用：<input  name=”number1”  type="number"  value="20"  minn="10"  max="100"         

​          step="5"  required />

 

5、   range： 用来只允话输入一段范围内数值的文本框

   属性：   min  最小值

​                max  最大值

​                step  拖动的步幅间隔值

​                value：默认值

 

 应用： <input  name="range1"  type="range"  value="25"  min="0"  max="100"   

​         step="5"  />

6、   search : 用于搜索域，显示为常规的文本框，除了火狐浏览

器其他都会在输入框里显示一个取消搜索的符号

   

应用：<input  name=”search1”   type="search"  />

7、    date :   提供多个选取日期和时间的新输入类型 

   属性：

·date -   选取日、月、年

·month - 选取月、年

·week -  选取周和年

·time -   选取时间（小时和分钟）

·datetime - 选取时间、日、月、年（UTC世界标准时间）

·datetime-local - 选取时间、日、月、年（本地时间）

8、    output ：用于不同类型的输出，比如计算或脚本输出，显    示计算结果 

注：必须从属于某个表单。即，必须将它书写在表单内部，或对它添加form属性。

应用：

第一种：

```
<form oninput="out.value=parseInt(a.value)+parseInt(b.value)">

    <input type="range" id="a" value="50" > +

	 <input type="number" id="b" value="50" >

        "="

        <output name="out" for="a b"></output>

  </form>


```

对新元素样式的使用： 

注意，跟 input  标签设置样式一样，但是要设置标签中局部的样式不能实现。如改变日历的背景色，颜色框的按钮效果，等，这些都不可以实现



**表单验证**

HTML5增加了大量在提交时对表单及表单元素内容有效性验证的功能。

1、自动验证 

   1）、required

​      可以应用在大多数输入元素上（除了隐藏元素和图片），在提交时如果元素内容为空白，则不允许提交，同时显示提示文字。 

  2）、pattern

​      将属性值设为某个格式的正则表达式，在提交时会检查其内容是否符合给定格式。 

​    例：<input pattern = “[0-9][A-Z]{3}" title="输入内容：一个数与三个大写字母" placeholder='输入内容：一个数与三个大写字母'>

 1:用户名验证规则 : 用户名长度为6~12并且由字母组成 

​    pattern="[A-z]{6,12}" 

  2:密码验证规则 : 密码必须是数组与字母组合 

​    pattern="[A-Za-z].*[0-9]|[0-9].*[A-Za-z]" 

 

**（3****）   placeholder属性：(文本框的提示信息) 

文本框处于未输入状态时文本框中显示的输入提示。

**（4****） autofocus属性：**给文本框、选择框、或者按钮控件加上该属性，当打开页面时，该控件自动获得焦点，一个页面只能有一个。

**（5****）  autocomplete属性：输入富足和所用的自动完成功能，是一个节省输入时间，同时也十分方便的功能。只有三种：on/off/""。on可显示指定候补输入的数据列表，使用datalist元素与list属性提供候补输入的数据列表，自动完成时，可以将该datalist元素中的数据作为候补输入的数据在文本框中显示： (autocomplete    是否自动提示信息    属性值   on    off)

<input type="text" name="greeting" **autocomplete**="on"  list ="greeting">

(6)**Novalidate****属性**  **取消验证**     可以对form表单添加**novalidate**属性，即使form表单中的input添加了required，也将不进行验证

在 Safari 和 Internet Explorer 9 及之前的版本中不支持 novalidate 属性。  	
(7)**disabled**禁用



# **html5**与html4的区别

1. 废除了一些过时的html4标签：center、font、u 
2. 添加了一些新的元素
      - 更加智能的表单元素：date、email、url等；
      - 更加合理的结构标签：section、nav、aside等；
1. 新的全局属性：meta、lang、等
2. 文档类型声明：`<!doctype html > 的简化`
3. 新的js API

**HTML5学习参考的网站：**

http://www.runoob.com （学习文档网站） 
http://caniuse.com  （查看不同浏览器版本对html5标签的支持情况）
http://www.w3school.com.cn （w3c文档）
https://developer.mozilla.org/zh-CN/  （学习文档网站）