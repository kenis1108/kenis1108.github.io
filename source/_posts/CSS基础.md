---
title: CSS基础
category: 前端
tags: CSS
abbrlink: 599b70c0
date: 2019-02-25 10:03:22
cover:
hidden: true
---






# CSS简介

- CSS(cascading style sheet) 汉译为**层叠样式表**,用于控制网页样式;
- WEB标准中的表现标准语言,在网页中主要对网页信息的显示进行控制;
- 目前推荐遵循的是W3C发布的CSS3.0版本;
- 用来表现HTML或者XHTML等样式文件的计算机语言;
- 1998年5月21日由w3C正式推出的css2.0;

## 优点

- 弥补html语言的不足
- 缩减页面代码，提高访问速度;
- 代码减少，页面文件就会小，占用网络带宽就少，客户端打开速度就快，用户体验就会更好
- 结构清晰，有利于seo优化
- 有利于搜索引擎优化
- 缩短改版时间
- 对网站的重构有很好的支持

# CSS语法

```txt
选择符 {属性: 属性值 ;属性:属性值}
选择符表示要定义样式的对象(标签名字)，可以是元素本身，也可以是一类元素或者制定名称的元素,简单来说就是给对应的元素起个名称。

1）每个CSS样式由两部分组成，即选择符和声明，声明又分为属性和属性值；
2）属性必须放在花括号中，属性与属性值用冒号连接。
3）每条声明用分号结束。
4）当一个属性有多个属性值的时候，属性值与属性值不分先后顺序,用空格隔开。
5）在书写样式过程中，空格、换行等操作不影响属性显示。
```



# CSS样式表

## 内部样式表

``` html
语法：
    <style type="text/css">
         css语句 
    </style>

注：使用style标记创建样式时，最好将该标记写在<head></head>;
例：<style type="text/css">
		p{color:red;}
	</style>
```

## 外部样式表

``` html
(1)  语法：<link rel="stylesheet" type="text/css" href="目标文件的路径及文件名全称" />

说明：使用link元素导入外部样式表时，需将该元素写在文档头部，即<head>与</head>之间。
      rel：用于定义文档关联，表示关联样式表；
      type：定义文档类型；

      
(2) 导入外部样式表
      <style type="text/css">
			@import  url("目标文件的路径及文件名全称");
	  </style>

说明：@和import之间没有空格 url和小括号之间也没有空格；括号内部加引号，必须结尾以分号结束；
```

## link  和  @import区别


1. 老祖宗的差别：link属于XHTML标签，而@import完全是CSS提供的一种方式。 link标签除了可以加载CSS外，还可以做很多其它的事情，比如定义RSS，定义rel连接属性等，@import就只能加载CSS。

2. 加载顺序的差别：当一个页面被加载的时候（就是被浏览者浏览的时候），link引用的CSS会同时被加载，而@import引用的CSS 会等到页面全部被下载完再被加载。所以有时候浏览@import加载CSS的页面时开始会没有样式。

3. 兼容性的差别。：@import是CSS2.1提出的，所以老的浏览器不支持，@import只在IE5以上的才能识别，而link标签无此问题。

4. 使用dom控制样式时的差别：当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的.


## 内联（行内）样式

```txt
<标签 style="属性1:值1;属性2:值2; ……"></标签>
```



# CSS样式表的权重关系

+ 内联样式表的优先级别最高
+ 内部样式表与外部样式表的优先级和书写的顺序有关，后书写的优先级别高。
+ 同在一个样式表中的优先级和书写的顺序也有关，后书写的优先级别高。(被覆盖的只是相同属性的样式)



# CSS选择符

```txt
CSS基本选择符：类型选择符、id选择符、class选择符(类选择符)

Css选择符分类：
    类型选择符（标记选择器）
    类选择符 （class选择符）
    ID选择符 （id选择器）
    伪类选择器
    通配符（*）设置全局属性
    群组选择符（集合选择器）
    包含选择符（后代选择器）
    属性选择符
    伪对象选择符
```

## 类型选择符(标签选择器)

```txt
类型选择符是根据html语言中的标记来直接定义
语法：标签名称 `{属性：属性值；}`

a)类型选择符就是以文档对象html中的标签作为选择符，即使用结构中元素名称作为选择符。例如body、div、p,img,em,strong,span......等。
b)所有的页面元素都可以作为选择符;
用法：
（1）如果想改变某个元素的默认样式时，可以使用类型选择符；（如：改变一个p段落样式）
（2）当统一文档某个元素的显示效果时，可以使用类型选择符；（如：改变文档所有p段落样式）
```



## 类（class）选择符

[![6rbAOK.png](https://s3.ax1x.com/2021/03/16/6rbAOK.png)](https://imgtu.com/i/6rbAOK)

```txt
语法 ：  .class名（你自己取的名字）{属性：属性值;}

用法：class选择符更适合定义一类样式；
(1)当我们使用类选择符时，应先为每个元素定义一个类名称，
(2)类选择符的语法格式：
        如：<div class="top"></div>
               .top{属性:属性值;}
```



## ID选择符

```txt
语法： <标签 id=“名”></标签>
      #id名`{属性：属性值;}`

（1）可以给每个元素使用id选择符，但id是元素的唯一标识符，不可出现重复的id名；
      如：<div id="top"></div>
（2）id选择符的语法格式是“#”加上自定义的id名
      如：#box`{width:300px; height:300px;}`
 (3) 起名时要取英文名，不能用关键字：(所有的标记和属性都是关键字)
      如：div标记
 (4)一个id名称只能在文档中出现一次，因为id是唯一的
 (5) 最大的用处：创建网页的外围结构。(唯一性、起名字不能使用关键字)
```



## 伪类选择器

```txt
a:link `{color: red;}`                    /* 未访问的链接状态 */
a:visited `{color: green;}`				/* 已访问的链接状态 */
a:hover `{color: blue;}`                  /* 鼠标滑过链接状态 */
a:active `{color: yellow;}`               /* 鼠标按下去时的状态 */

说明：
1）当这4个超链接伪类选择符联合使用时，应注意他们的顺序，正常顺序为：
a，a:link,a:visited,a:hover,a:active,错误的顺序有时会使超链接的样式失效；lvha
2）为了简化代码，可以把伪类选择符中相同 的声明提出来放在a选择符中；
例如：a`{color:red;}`     a:hover`{color:green;}` 
表示超链接的三种状态都相同，只有鼠标划过变化颜色
```



## 通配符

```txt
语法：*`{属性：属性值;}`

说明：通配选择符的写法是“*”，其含义就是所有标签；    
		表示该样式适用所有网页元素；

用法：常用来重置样式。
例：*`{margin:0;padding:0;}`
```



## 群组选择符

```txt
语法：选择符1，……，选择符5 `{属性：属性值;}`

说明：当有多个选择符应用相同的样式时，可以将选择符用“，”分隔的方式，合并为一组。
   
     实例：.top, #nav, p`{width:100px;}`
```



## 包含选择器（后代选择器）

```txt
语法：选择符1(父)  选择符2（后代）`{属性：属性值;}` 
                   选择符父级  选择符子级`{属性：属性值;}`

说明：选择符1和选择符2用空格隔开，含义就是选择符1中包含的所有选择符2;
	实例： div   ul  li`{height:200px;}`
```



## 伪对象选择符（伪元素）

```
1）::after
   说明：与content属性一起使用，定义在对象后的内容。对象就是元素内容。
        语法：选择符::after{content:”文字”;}
	        选择符::after{content:url(图片路径)；}
   如：div::after{content:url(logo.jpg);}
      div::after{content:"文本内容";} 

2）::before    
   说明：与content属性一起使用,定义在元素内容前的内容。
   如：div::before{content:"在其前放内容";}

3）::first-letter 
   说明：定义对象内第一个字符的样式。(该伪元素只能用于块级元素)

4）::first-line
   说明：定义对象内第一行的样式。(该伪元素只能用于块级元素。)
```
## 选择符权重

```txt
css中用四位数字表示权重，
权重的表达方式如：0，0，0，0；
    权重规则：HTML标签(类型选择符)的权重是1，class的权重是10，id的权重是100。
    类型选择符的权重为0001
    class选择符的权重为0010
    id选择符的权重为0100
    属性选择符的权重为0010
    伪类选择符的权重为0010
    伪元素（对象）选择符的权重为0001
    包含选择符的权重：为包含选择符的权重之和
    内联样式的权重为1000
    继承样式的权重为0000
    群组集合选择符权重为他本身
     注：如果权重相同时，则执行后写的样式；
     
     内联>id>类，属性，伪类>标签，伪对象>继承
     1000 100    10         1        0
```

## 作用域
```txt
行内只作用于当前标签
内部只作用于当前文件
外部作用于所有文件
```

# CSS层叠性

```txt
css层叠指的是样式的优先级，当产生冲突时以优先级高的为准。

1. 开发者样式>读者样式>浏览器样式（除非使用!important标记 ）
2. id选择符>（伪）类选择符>元素选择符
3. 权重相同时取后面定义的样式

```



# CSS属性

```txt
属性：属性是指定选择符所具有的属性，它是css的核心，css2共有150多个属性
属性值：属性值包括法定属性值及常见的数值加单位，如25px，或颜色值等。
```



## 文本属性

## 文本大小 font-size

```txt
说明：
	1） 属性值为数值型时，必须给属性值加单位，属性值为0时除外。
	2）单位还可以是pt，9pt=12px;
	3）为了减小系统间的字体显示差异，IE Netscape Mozilla的浏览器制作商于1999年召开会议，共同确定16px/ppi为标准字体大小默认值,即1em.默认情况下，1em=16px,0.75em=12px;
	4）使用绝对大小关键字
         xx-small =9px
         x-small =11px
         small =13px
         medium =16px
         large =19px
         x-large =23px
         xx-large =27px
```

## 文本颜色  color

```txt
说明：

用十六进制(是计算机中数据的一种表示方法)表示颜色值：
	0 1 2 3 4 5 6 7 8 9
	0 1 2 3 4 5 6 7 8 9 A B C D E F
颜色模式：光色模式
	R G B
	FF 00 00
颜色值的缩写：
	当表示三原色的三组数字同时相同时，可以缩写为三位;
	当用十六进制表示颜色值时，需要在颜色值前加“#”
	# fa 00 00
```

## 文本类型  font-family:字体1，字体2，字体3......

```txt
说明：
	浏览器首先会寻找字体1、如存在就使用改字体来显示内容，如在字体1不存在的情况下，则会寻找字体2，如字体2也不存在，按字体3显示内容，如果字体3 也不存在；则按系统默认字体显示；
	当字体是中文字体时，需加双引号；
	当英文字体中有空格时，需加双引号如（“Times New Roman”）
	当英文字体只有一个单词组成是不加双引号；如：（Arial）；
	Windows中文版本操作系统下，中文默认字体为宋体或者新宋体，英文字体默认为Arial.
```

## **文字加粗font-weight:bolder(更粗的)/bold（加粗）/normal（常规）/100—900;**

```txt
说明：

在css规范中，把字体的粗细分为9个等级，分别为100——900，其中100对应最轻的字体变形，而900对应最重的字体变形，
100-400 一般 500常规字体 600-900加粗字体
```

## **font-style：italic/oblique/normal（取消倾斜，常规显示）;**

```txt
说明：

italic和oblique都是向右倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果.
```

## **文字行高 `{line-height:normal/value;}`**

```txt
说明：
当单行文本的行高等于容器高时，可实现单行文本在容器中垂直方向居中对齐；
当单行文本的行高小于容器高时，可实现单行文本在容器中垂直中齐以上；
当单行文本的行高大于容器高时，可实现单行文本在容器中垂直中齐以下（IE6及以下版本存在浏览器兼容问题）
*文字属性简写：font:12px/24px "宋体";
font属性的简写：字号，行高，字体
font-size:12px; line-height:24px; font-family:”宋体”；
font属性的简写：
说明:font的属性值应按以下次序书写(各个属性之间用空格隔开)
顺序: font-style font-weight font-size / line-height font-family
注意：

(1)简写时 , font-size和line-height只能通过斜杠/组成一个值，不能分开写。
(2) 顺序不能改变 ,这种简写法只有在同时指定font-size和font-family属性时才起作用,而且,你没有设定font-weight , font-style , 他们会使用缺省值（默认值）。
```

## 水平对齐方式

```txt
text-align:left/right/center/justify（两端对齐中文不起作用）
```

## **文本修饰**

```txt
text-decoration:
说明：
	none:没有修饰
	underline:添加下划线
	overline:添加上划线
	line-through:添加删除线
```

## **首行缩进**

```txt
1）text-indent可以取负值；
2）text-indent属性只对第一行起作用。
```

## 字间距、词间距

```txt
字间距`{letter-spacing:value;}`控制英文字母或汉字的字距。

词间距`{word-spacing:value;}`控制英文单词词距。
```

## 检索或设置对象中的文本的大小写(只对英文起作用)

```txt
`{text-transform:none/capitalize/uppercase/lowercase}` 
capitalize:首字母大写;uppercase:全部大写;lowercase:全部小写 


font-variant：属性设置小型大写字母的字体显示，意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小
font-variant:small-caps浏览器会显示小型大写字母的字体
normal：默认值。浏览器显示一个标准的字体
例：把段落设置为小型大写字母字体：
p.small `{font-variant: small-caps}`
<p class="small">This is a paragraph</p>


```

## 垂直对齐方式

```txt
{vertical-align:top/bottom/middle;}
说明：图文排列中常用；此属性无法单独使用，需要支持的条件； 只会对inline-block元素类型起作用；

```



## 列表属性

## 1、定义列表符号样式

list-style-type：disc(实心圆)/circle(空心圆)/square(实心方块)/none(去掉列表符号)；list-style-type:none===（简写）list-style:none;

## 2、使用图片作为列表符号

list-style-image：url(所使用图片的路径及全称)；

## 3、定义列表符号的位置

list-style-position:outside(外边)/inside(里边)；

*list-style:none;去掉列表符号*



## 边框属性

```txt
border:边框宽度 边框风格 边框颜色;
	例如：border:5px solid #ff0000


边框：border,网页中很多修饰性线条都是由边框来实现的。
边框宽度：border-width:
边框颜色：border-color:
边框样式：border-style:solid(实线)/dashed(虚线)dotted(点划线)double(双线) none(没有线)可单独设置一方向边框，



可单独设置一方向边框，
    border-bottom:边框宽度 边框风格 边框颜色;  底边框
    border-left:边框宽度 边框风格 边框颜色;   左边框
    border-right:边框宽度 边框风格 边框颜色;  右边框
    border-top:边框宽度 边框风格 边框颜色;   上边框
```



## 背景属性

- **1、背景颜色 `{background-color:颜色值;}`**
- **2、背景图片的设置 background-image：url(背景图片的路径及全称)；**背景图片的显示原则
  1）容器尺寸等于图片尺寸，背景图片正好显示在容器中
  2）容器尺寸大于图片尺寸，背景图片将默认平铺，直至铺满元素；
  3）容器尺寸小于图片尺寸，只显示元素范围以内的背景图。
  网页上有两种图片形式：插入图片、背景图；
  *插入图片：*属于网页内容，也就是结构。
  *背景图：*属于网页的表现，背景图上可以显示文字、插入图片、表格等。
- **3、背景图片平铺属性`{background-repeat:no-repeat/repeat/repeat-x/repeat-y }`**
- **4、背景图的位置 性`{background-position:left/center/right/数值 top/center/bottom/数值;}`**水平方向上的对齐方式（left/center/right）或值
  垂直方向上的对齐方式(top/center/bottom)或值
  background-position:值1 值2;
  两个值 ：第一个值表示水平位置的值，第二个值：表示垂直的位置。
  当两个值都是center的时候写一个值就可以代表的是水平位置和垂直位置
  说明：向左方向，向上方向是负值
  *背景属性的缩写语法：*
  background:属性值1 属性值2 属性值3；
  背景缩写：background:url（背景图片的路径及全称） no-repeat center top #f00；

  *网页上常用的图片格式（压缩图片）*
  1)jpg :有损压缩格式，靠损失图片本身的质量来减小图片的体积，适用于颜色丰富的图像;(像素点组成的，像素点越多会越清晰 )如果网页中
  2）gif：有损压缩格式，靠损失图片的色彩数量来减小图片的体积，支持透明，支持动画，适用于颜色数量较少的图像;
  3)png:有损压缩格式，损失图片的色彩数量来减小图片的体积，支持透明，不支持动画，是fireworks的 源文件格式，适用于颜色数量较少的图像;
- **5、背景图的固定 性`{`{background-attachment:scroll(滚动)/fixed(固定);}`**fixed 固定，不随内容一块滚动；
  scroll:随内容一块滚动。







## 浮动

语法：float:none/left/right;

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

浮动框是脱离了普通的文档流

常见的浮动现象：

[![6rbZwD.jpg](https://s3.ax1x.com/2021/03/16/6rbZwD.jpg)](https://imgtu.com/i/6rbZwD)



清除浮动属性 

语法：`{clear： ;}`

属性值：none：  允许两边都可以有浮动对象

both：  清除元素两边浮动

left：    清除元素左边浮动

right:    清除元素右边浮动 







清除浮动方法

1，在想清除的浮动元素后面添加一个空元素，并给这个空元素添加一个样式属性，clear: both;

 

高度自适应详细说明

2，通过：after为父容器添加一个后置伪元素，并通过display: block;转换成块元素，在设置clear: both;以达到清楚子元素浮动的效果*/

/*overflow:hidden，控制元素内容移除，可以将溢出元素内容隐藏。*/

.clearfix:after`{ content: "."; display: block; clear: both; font-size: 1px;/*将文字设置到最小，为了解决一些老版本浏览器文字默认高度的问题*/ height: 0px; overflow:hidden;visibility:hidden;}`

 

 

什么情况下需要清浮动

最外面的盒子给了固定的高所以没清除浮动，如果最外面的盒子不给高，出现**高度塌陷**，需要清除浮动



# css属性继承

```txt
不可继承的：display、margin、border、padding、background、height、min-height、max- height、、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align

所有元素可继承：visibility和cursor。
内联元素可继承：letter-spacing、word-spacing、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform。
块状元素可继承：text-indent和text-align
列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
表格元素可继承：border-collapse。
```



# 盒模型

```txt
盒模型是css布局的基石，它规定了网页元素如何显示以及元素间相互关系。css定义所有的元素都可以拥有像盒子一样的外形和平面空间。即都包含内容区、补白（填充）、边框、边界(外边距)这就是盒模型。
```

[![6rHxwF.png](https://s3.ax1x.com/2021/03/16/6rHxwF.png)](https://imgtu.com/i/6rHxwF)

[![6rbFQx.png](https://s3.ax1x.com/2021/03/16/6rbFQx.png)](https://imgtu.com/i/6rbFQx)



## padding

| padding用法: |                                                                                                                                  |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------- |
|              | 1:padding是在盒子里面，在盒子与内容之间。                                                                                        |
|              | 2：padding的作用：控制子元素在父元素里面的位置关系。                                                                             |
|              | 3：padding会把盒子撑大。                                                                                                         |
|              | 4：如果想让盒子保持原有的大小：在宽高基础上减掉。（ 如果一个元素是被内容撑开的，没有设置固定的宽高，padding直接撑开。不用减掉 ） |
|              | 5:如果给单一方向添加padding                                                                                                      |
|              | padding-top/bottom/left/right                                                                                                    |
|              | 6:padding的设置特点：                                                                                                            |
|              | padding:30px;    四周                                                                                                            |
|              | padding:10px 30px;     上下     左右                                                                                             |
|              | padding:10px 30px 50px    上   左右    下                                                                                        |
|              | padding:10px 30px 50px 100px     上右下左                                                                                        |
|              | 7:padding不会对背景图的位置造成影响。                                                                                            |

## margin

| margin用法    （外边距、边界） |                                                                                                 |
| :----------------------------: | :---------------------------------------------------------------------------------------------- |
|                                | 1:margin在元素外围，不会撑大元素的大小                                                          |
|                                | 2:作用:控制元素与元素之间的间距。                                                               |
|                                | 3：给单一方向添加margin                                                                         |
|                                | margin-left/right/top/bottom                                                                    |
|                                | 4 :margin设置方法：                                                                             |
|                                | margin:30px;    四周                                                                            |
|                                | margin:10px 30px;     上下     左右                                                             |
|                                | margin:10px 30px 50px    上   左右    下                                                        |
|                                | margin:10px 30px 50px 100px     上右下左                                                        |
|                                |                                                                                                 |
|                                | 5:margin:0 auto;                                                                                |
|                                | 让当前元素在父元素里面左右居中。                                                                |
|                                | 6:margin常出现的bug                                                                             |
|                                | a:两个相邻元素上下的margin值 不会叠加 按照较大值设置。                                          |
|                                | b:如果父元素和第一个子元素没有浮动的情况下，给第一个子元素添加margin-top,会错误放在父元素上面。 |



## 盒子大小计算

[![6rHveU.png](https://s3.ax1x.com/2021/03/16/6rHveU.png)](https://imgtu.com/i/6rHveU)

[![6rHXLT.png](https://s3.ax1x.com/2021/03/16/6rHXLT.png)](https://imgtu.com/i/6rHXLT)

# 文本溢出

## overflow

```txt
visible:默认值，内容不会被修剪，会呈现在元素框之外；
hidden：内容会被修剪，并且其余内容是不可见的；
scroll：内容会被修剪，但是浏览器会显示滚动条，以便查看其余的内容;
auto：如果内容被修剪，则浏览器会显示滚动条，以便查看其他的内容;
inherit：规定应该从父元素继承overflow属性的值。
```



## white-space

```txt
normal：默认值，多余空白会被浏览器忽略只保留一个；
pre：空白会被浏览器保留；
pre-wrap：保留一部分空白符序列，但是正常的进行换行；
pre-line:合并空白符序列，但是保留换行符；
nowrap:文本不会换行，文本会在同一行上继续，直到遇到<br/>标签为止;
```



## text-overflow

```txt
clip：不显示省略号（...），而是简单的裁切;
ellipsis：当对象内文本溢出时，显示省略标记；
```





## 文本溢出变省略号设置

```txt
省略号设置：
text-overflow属性仅是：当文本溢出时是否显示省略标记，并不具备其它的样式属性定义，要实现溢出时产生省略号的效果还需定义：
1、容器宽度：width：value；（px、%，都可以）
2、强制文本在一行内显示:white-space：nowrap;
3、溢出内容为隐藏：overflow：hidden；
4、溢出文本显示省略号：
     text-overflow：ellipsis;
                        
注：必须是单行文本才能设置本文溢出！！！
```



# 元素类型

```txt
根据css显示分类，XHTML元素被分为

三种类型:
	块状元素，内联元素，可变元素

&&

三种类型：	
	块状元素，内联元素，内联块元素(css2.1增加)
```



## 块状元素的特点

```txt
A:块状元素在网页中就是以块的形式显示，所谓块状就是元素显示为矩形区域，
B:默认情况下，块状元素都会占据一行，通俗地说，两个相邻块状元素不会出现并列显示的现象；默认情况下，块状元素会按顺序自上而下排列。
C:块状元素都可以定义自己的宽度和高度。 
D:块状元素一般都作为其他元素的容器，它可以容纳其它内联元素和其它块状元素。我们可以把这种容器比喻为一个盒子。
```



## 内联元素的特点

```txt
A:内联元素的表现形式是始终以行内逐个进行显示；
B:内联元素没有自己的形状，不能定义它的宽和高,它显示的宽度、高度只能根据所包含内容的高度和宽度来确定，它的最小内容单元也会呈现矩形形状；
C:内联元素也会遵循盒模型基本规则，如可以定义padding,border,margin,background等属性，但个别属性不能正确显示;(padding-top:;margin-top/bottom:;)
D:内联元素加了浮动就相当于自动转换为内联块元素。
当display为none时不显示。
```



## 可变元素

```txt
需要根据上下文关系确定该元素是块元素或者内联元素。
```



## 常见的标签

## 块

```txt
div -最常用的块级元素
dl - 和dt-dd 搭配使用的块级元素
form - 交互表单
h1 -h6- 大标题
hr - 水平分隔线
ol – 有序列表
p - 段落
ul - 无序列表
li
fieldset - 表单字段集
colgroup-col - 表单列分组元素
table-tr-td  表格及行-单元格
```

##  内联

```txt
a –超链接（锚点）                               
b - 粗体(不推荐)                         
i - 斜体
em - 强调                                                         
span - 常用内联容器，定义文本内区块
strong - 粗体强调
sub - 下标   
sup - 上标
u - 下划线
```



## 内联块元素

```txt
img - 图片                         
input - 输入框               
label - 表单标签                  
textarea - 多行文本输入框
select - 项目选择  
```



## 元素类型的转换

## display属性

```txt
盒子模型可通过display属性来改变默认的显示类型
```



## display的属性值

| none               | 此元素不会被显示。                                                 |
| ------------------ | ------------------------------------------------------------------ |
| **block**          | **此元素将显示为块级元素，此元素前后会带有换行符。**               |
| **inline**         | 此元素会被显示为内联元素，元素前后没有换行符。**                   |
| **inline-block**   | **行内块元素。（CSS2.1 新增的值）**                                |
| **list-item**      | **此元素会作为列表显示。**                                         |
| run-in             | 此元素会根据上下文作为块级元素或内联元素显示。                     |
| compact            | CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。   |
| marker             | CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。    |
| table              | 此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符。 |
| inline-table       | 此元素会作为内联表格来显示（类似 `<table>`），表格前后没有换行符。 |
| table-row-group    | 此元素会作为一个或多个行的分组来显示（类似 `<tbody>`）。           |
| table-header-group | 此元素会作为一个或多个行的分组来显示（类似 `<thead>`）。           |
| table-footer-group | 此元素会作为一个或多个行的分组来显示（类似 `<tfoot>`）。           |
| table-row          | 此元素会作为一个表格行显示（类似 `<tr>`）。                        |
| table-column-group | 此元素会作为一个或多个列的分组来显示（类似 `<colgroup>`）。        |
| table-column       | 此元素会作为一个单元格列显示（类似 `<col>`）                       |
| table-cell         | 此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）            |
| table-caption      | 此元素会作为一个表格标题显示（类似 `<caption>`）                   |
| inherit            | 规定应该从父元素继承 display 属性的值。                            |



```txt
A、大部分块元素display属性值默认为block，其中列表li的默认值为list-item。
B、大部分内联元素的display属性值默认为inline,其中img,input，默认为inline-block（行内块元素）。
```



## 元素在容器中垂直居中

**设置一个元素在一个容器中垂直居中，必须更改默认的display属性值为inline-block;并加上同级元素（标尺）（同级元素[标尺]样式设置为vertical-align:middle;width:0;height:100%;display:inline-block;）**
	三个条件：
		1：必须给容器（父元素）加上text-align:center;
		2:必须给当前元素转成行内块元素（display:inline-block;）再给当前元素加上vertical-align:middle;
		3：在当前元素的后面（没有回车）加上同级元素span;并对span进行vertical-align:middle;width:0;height:100%;display:inline-block 





## 置换元素

```txt
一、引题
在之前的浅谈HTML中的块级元素和内联元素中了解到了内联元素一般是不能设置宽高的，但是也有特殊。比如img是内联元素，但可以设置宽高，这肯定让不少人迷惑。这样我们就要引入HTML中置换元素的概念（非置换元素在w3c中没有给出明确的解释，姑且我们就把除置换元素外的元素当作非置换元素吧）。

二、置换元素与非置换元素
a) 置换元素：浏览器根据元素的标签和属性，来决定元素的具体显示内容。 
例如：浏览器会根据<img>标签的src属性的值来读取图片信息并显示出来，而如果查看(x)html代码，则看不到图片的实际内容；<input>标签的type属性来决定是显示输入框，还是单选按钮等。 (x)html中的<img>、<input>、<textarea>、<select>都是置换元素。这些元素往往没有实际的内容，即是一个空元素。

置换元素在其显示中生成了框，这也就是有的内联元素（img,input）能够设置宽高的原因。

b) 不可替换元素（非置换元素）：(x)html 的大多数元素是不可替换元素，即其内容直接表现给用户端（如浏览器）。
```






# CSS定位

- CSS 有三种基本的定位机制：**普通流、浮动流、定位流**。

## position

+ position定位属性，检索或设置对象的定位方式

## position属性值

| **static**   | **默认值。位置设置为 static 的元素会正常显示，它始终会处于文档流给予的位置（static元素会忽略任何 top、bottom、left或 right 声明）**                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **absolute** | **相对于父级元素、的绝对定位，浮出、脱离布局流，它不占据空间，就是我们所说的层，其位置相对于最近的已定位父元素而言的位置，可直接指定“left”、“top”、“right” 以及 “bottom”属性。若父级都没有定位，则以html（根元素）。(层叠的顺序z-index:value)** |
| **relative** | **是相对于默认位置的相对定位，通过设置left、top、right、bottom值可将其移至相对于其正常位置的地方（相对于自己的开始的位置发生的位置上的移动，【不会破坏正常的布局流，占据空间】）**                                                              |
| **fixed**    | **相对浏览器的绝对定位，是相对于浏览器窗口的指定坐标进行定位。此元素的位置可通过 "left"、"top"、"right" 以及"bottom" 属性来规定。不论窗口滚动与否，元素都会留在那个位置。**                                                                     |
| **sticky**   | **可以看出是`position:relative`和`position:fixed`的结合体——当元素在屏幕内，表现为relative，就要滚出显示器屏幕的时候，表现为fixed。**                                                                                                            |



[![6rbVeO.png](https://s3.ax1x.com/2021/03/16/6rbVeO.png)](https://imgtu.com/i/6rbVeO)



```txt
二、绝对定位和相对定位的区别

1、参照物不同，绝对定位的参照物是包含块（已定位的父元素），相对定位的参照物是元素本身默认的位置；

2、绝对定位将对象从文档流中拖离出来因此不占据空间，相对定位不破坏正常的文档流顺序无论是否进行移动，元素仍然占据原来的空间。
```



## 包含块

```txt
包含块是绝对定位的基础，包含块就是为定位元素提供坐标，偏移和显示范围的参照物，即确定绝对定位的偏移起点和百分比 长度的参考；

默认状态下，html是一个大的包含块，所有绝对定位的元素都是根据窗口来定自己所处的位置和百分比大小的显示的，如果我们定义了包含元素为包含元素块以后，对于被包含的绝对定位元素来说，就会根据最接近的具有定位功能的上级包含元素来定位自己的显示位置。

定义元素为包含块：给绝对定位元素的父元素添加声明position：relative；
```



## 定位元素层次关系

```txt
z-index : auto |number

检索或设置对象的层叠顺序。
auto：默认值。
number:无单位的整数值。可为负数
没有设置z-index时，最后写的对象优先显示在上层，设置后，数值越大，层越靠上；
必须有定位才能使用该属性
```




## 元素在浏览器窗口居中的方法

``` css
/* 让一个元素始终在窗口水平、垂直位置居中 */
/* 第一种 */
div{
     width:200px;
     height:200px;
     background:#f00;
     position:fixed;
     left:0;
     right:0;
     top:0;
     bottom:0;
     margin:auto;
}
/* 第二种 */
div{
     width:200px;
     height:200px;
     background:#f00;
     position:fixed;
     left:50%;
     top:50%;
     margin:-100px 0 0 -100px;
}
```



# **透明度的设置**

```
IE10以下浏览器写法：

filter:alpha(opacity=value);取值范围 1-100

IE9两种都支持，但是优先显示上面的方法；

兼容其他浏览器写法：

opacity:  .value（0.2）

(value的取值范围0-1,0.1,0.2,0.3-----0.9)

例如：opacity: .8 ; filter:alpha(opacity=80);

Background:rgba(255,255,255,0.5)仅仅只是透明背景颜色，不透明文字
```



# **marquee滚动字幕的应用**

``` html
<marquee behavior=“scroll/alternate” direction="up/down/left/right" scrollamount=“5s ” height="" width="">这里放的是内容</marquee>

<!--
behavior（行为）="scroll(滚动)/alternate（晃动） 
direction（方向）="up(从下向上)/down（从上向下）/left（从右向左）/right（从左向右）"
scrollamount（滚动速度）="value" 
height="" (上下滚动范围)
width=""(左右滚动范围)  
-->
```

# 锚点

```
命名锚点链接的应用：

命名锚点的作用：在同一页面内的不同位置进行跳转。
制作锚标记：
1、给元素定义命名锚记名
语法：<标签 id="命名锚记名"></标签>

2、命名锚记连接
语法：<a href="#命名锚记名称"></a>
```

[![6rbky6.png](https://s3.ax1x.com/2021/03/16/6rbky6.png)](https://imgtu.com/i/6rbky6)




# 宽高自适应

```txt
	网页布局中经常要定义元素的宽和高。但很多时候我们希望元素的大小能够根据窗口或子元素自动调整，这就是pc自适应。
自适应的优点：
	元素自适应在网页布局中非常重要，它能够使网页显示更灵活，可以适应在不同设备、不同窗口和不同分辨率下显示。

```

## 宽度自适应

```txt
 元素宽度设置为100%。（块元素宽度默认为100%）
 或者不设置宽度（width）;（宽度是父元素的宽度）
```

## 高度自适应

```txt
1)自适应元素高度：height:auto;或者不设置;（是子元素撑开父元素的高度）

2)元素高度自适应窗口高度
   	设置方法：html,body`{height:100%;}`
	注：如果设置子元素的高度跟随父元素的高度变化而变化，那么父元素必须有高度。
```



## 最小高度的自适应

```txt
min-height属性：最小高度；(IE6浏览器不识别该属性)

hack1:min-height:value;_height:value;

hack2:min-height:value;  height:auto!important;height:value; 
max-height属性：最大高度
max-width属性：最大宽度
min-width属性：最小宽度


```



## 浮动元素父元素高度自适应（高度塌陷）

```txt
当子元素有浮动并且父元素没有高度的情况下父元素会出现高度塌陷
```

## 高度塌陷的解决方法

```txt
hack1：给父元素添加声明overflow:hidden;(触发一个BFC)

hack2:在浮动元素下方添加空div,并给该元素添加
        声明：div`{clear:both; height:0; overflow:hidden;}`
        
hack3:万能清除浮动法
选择符:after`{content:“";clear:both;display:block;height:0;overflow:hidden;visibility:hidden;}`
```



## visibility:hidden/隐藏

```txt
visibility:hidden;和display:none;的区别：
visibility:hidden;属性会使对象不可见，但该对象在网页所占的空间没有改变，等于留出了一块空白区域，而 display:none属性会使这个对象彻底消失不显示，也不再占用位置。
```







# 扩展

``` html
<!-- iframe框架 -->
<!-- 语法： -->
<iframe src="规定在 iframe 中显示的文档的 URL" width="" height="" frameborder="1/0" name="iframe名称" scrolling="yes/no/auto"></iframe>

<!-- frameborder="1/0"  1 代表有框架边框/ 0 代表无框架边框 -->
<!-- scrolling="yes/no/auto" yes:有  no:无  auto：自动 -->
<a href="" target="iframe的name属性值"></a><!-- 表示超链接的目标地址在框架中打开 -->
<a href="news.html#top">返回我原来页面的原来位置</a>
```


# BFC

**BFC(Block formatting context)直译为“块级格式化上下文”。它是一个独立的渲染区域，只有Block-level box（块）参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。**


## BFC的布局规则


1. 内部的Box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠（按照最大margin值设置）
3. 每个元素的margin box的左边， 与包含块border box的左边相接触
4. BFC的区域不会与float box重叠。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
6. 计算BFC的高度时，内部的浮动元素也参与计算，就是不会出现高度塌陷


## 哪些元素或属性能触发BFC


+ 根元素(html)
+ float属性不为none
+ position为absolute或fixed
+ display为inline-block, table-cell, table-caption, flex, inline-flex
+ overflow不为visible 

## BFC的应用

1. 自适应两栏布局
2. 清除内部浮动
3. 防止margin上下重叠

<a href="http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/">详细讲解：CSS深入理解流体特性和BFC特性下多栏自适应布局</a>
