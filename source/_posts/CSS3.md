---
title: CSS3
category: 前端
tags: CSS3.0
abbrlink: e859d7a7
date: 2019-02-27 14:07:33
cover:

---

**补充**

``` html
<!-- 交集选择器 -->
<style>
.class1.class2{}
</style>
<div class="class1 class2"></div>
# 没有空格表示替换
```



# CSS3简介

- CSS3是css技术的升级版本，CSS3语言开发是朝着模块化发展的。以前的规范作为一个模块实在是太庞大而且比较复杂，所以，把它分解为一些小的模块，更多新的模块也被加入进来。这些模块包括： 盒子模型、列表模块、超链接方式 、语言模块 、背景和边框 、文字特效 、多栏布局等。
- css3的优点：CSS3将完全向后兼容，所以没有必要修改现在的设计来让它们继续运作。网络浏览器也还将继续支持CSS2。对我们来说，CSS3主要的影响是将可以使用新的可用的选择器和属性，这些会允许实现新的设计效果（譬如动态和渐变），而且可以很简单的设计出现在的设计效果（比如说使用分栏）

## 渐进增强
渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
[![62cijS.png](https://s3.ax1x.com/2021/03/18/62cijS.png)](https://imgtu.com/i/62cijS)

## 优雅降级
渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
[![62cABQ.png](https://s3.ax1x.com/2021/03/18/62cABQ.png)](https://imgtu.com/i/62cABQ)

## 渐进增强&优雅降级的区别
区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

# CSS3选择符

[![62ckng.png](https://s3.ax1x.com/2021/03/18/62ckng.png)](https://imgtu.com/i/62ckng)

## 属性选择器
  - 1、E[attr]：只使用属性名，但没有确定任何属性值
  - 2、E[attr=“value”]：指定属性名，并指定了该属性的属性值 
  - 3、E[attr~=“value”]：指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”必须的
  - 4、E[attr^=“value”]：指定了属性名，并且有属性值，属性值是以value开头的
  - 5、E[attr$=“value”]：指定了属性名，并且有属性值，而且属性值是以value结束的
  - 6、E[attr*=“value”]：指定了属性名，并且有属性值，而且属值中包含了value

  - 7、E[attr|=“value”]：指定了属性名，并且属性值仅是value或者以“value-”开头的值（比如说left-con）



## 伪类选择器
  - 结构性伪类选择器
    **X:first-child** 匹配子集的第一个元素。IE7就可以支持
    **X:last-child** 匹配父元素中最后一个X元素
    **X:nth-child(n)** 用于匹配索引值为n的子元素。索引值从1开始  odd奇数  even偶数
    **X:only-child** 这个伪类一般用的比较少，比如上述代码匹配的是div下的有且仅有一个的p，也就是说，如果div内有多个p，将不匹配。  
    **X:nth-last-child(n)** 从最后一个开始算索引。
    **X:first-of-type** 匹配同级兄弟元素中的第一个X元素
    **X:last-of-type** 匹配同级兄弟元素中的最后一个X元素
    **X:nth-of-type(n)** 匹配同类型中的第n个同级兄弟元素X
    **X:only-of-type** 匹配属于同类型中唯一兄弟元素的X
    **X:nth-last-of-type(n)** 匹配同类型中的倒数第n个同级兄弟元素X
    **:root** 匹配文档的根元素。在HTML（标准通用标记语言下的一个应用）中，根元素永远是HTML
    **X:empty** 匹配没有任何子元素（包括包含文本）的元素X
应用：
``` html
<style> 
    p:empty{
      width:100px;
      height:20px;
      background:#ff0000;
      }
</style> 
<body>
    <p></p>
    <p><span></span></p>
    <p>empty</p>
</body>
```





  - 目标伪类选择器
    E:target		选择匹配E的所有元素，且匹配元素被相关URL指向

``` html
<style> 
    div:target p{
      background: red;
      }
</style> 
<a href="#p1">吕布</a>
<a href="#p2">吕布</a>
<div id="p1">
    <p>太猛了</p>
</div> 
<div id="p2">
    <p>太帅了</p>
</div>
```





  - UI 元素状态伪类选择器
    * E: **enabled** 匹配所有用户界面（form表单）中处于可用状态的E元素
    * E: **disabled** 匹配所有用户界面（form表单）中处于不可用状态的E元素
    * E: **checked** 匹配所有用户界面（form表单）中处于选中状态的元素E
    * E:: **selection** 匹配E元素中被用户选中或处于高亮状态的部分（双冒号不能省略）
  - 动态伪类选择器
    * E **:link**
      链接伪类选择器  
      选择匹配的E元素，而且匹配元素被定义了超链接并未被访问过。常用于链接描点上
    * E **:visited**  
      链接伪类选择器
      选择匹配的E元素，而且匹配元素被定义了超链接并已被访问过。常用于链接描点上
    * E **:active**
      用户行为选择器
      选择匹配的E元素，且匹配元素被激活。常用于链接描点和按钮上
    * E **:hover**
      用户行为选择器
      选择匹配的E元素，且用户鼠标停留在元素E上。IE6及以下浏览器仅支持a:hover
    * E **:focus**
      用户行为选择器
      选择匹配的E元素，而且匹配元素获取焦点
  - 否定伪类选择器
    E **:not(s)** 用于为排除此元素的其他元素设置样式 （IE6-8浏览器不支持:not()选择器。）
应用：



``` html
<style>
    p:not(.p1){
      color: #f00;
      }
</style>
<body>
    <p class=”p1”>这是一个标题</p>
    <p>这是一个段落.</p>
    <p>这是另一个段落.</p>
</body>
```


## 层级选择器
  - **E>F**
    子选择器
    选择匹配的F元素，且匹配的F元素所匹配的E元素的子元素
  - **E+F**
    相邻兄弟选择器
    选择器表示在同一父元素中，E和F紧相邻，设置样式只在F身上实现；（选择紧位于E同级元素下的所有的F标签）
  - **E~F**
    通用选择器
    选择同级匹配的F元素，且位于匹配的E元素后的所有匹配的F元素

# CSS3属性

## 文本阴影属性
[![62s7U1.png](https://s3.ax1x.com/2021/03/18/62s7U1.png)](https://imgtu.com/i/62s7U1)

``` css
/* 水平、垂直阴影的位置允许负值，也可以设置多个阴影值，阴影值中间用“，”隔开； */
div{
  text-shadow: 5px 5px 10px red, 5px 15px 5px blue, 5px 25px 5px green;
}
```
[![62sTER.png](https://s3.ax1x.com/2021/03/18/62sTER.png)](https://imgtu.com/i/62sTER)

``` css
/* 火焰文字效果 */
div{
  text-shadow:0 0 4px white, 0 -5px 4px #ff3, 2px -10px 6px #fd3, -2px -15px 11px #f80, 2px -25px 18px #f20;
}
```
[![62sIb9.png](https://s3.ax1x.com/2021/03/18/62sIb9.png)](https://imgtu.com/i/62sIb9)

## 盒子阴影属性
``` css
/* 语法： */
div{
  box-shadow: 10px 10px 5px 10px #888888 inset;
          /* 阴影水平偏移量 阴影垂直偏移量 阴影模糊半径 阴影扩展半径 阴影颜色 none/inset;  */
  /* inset 为内阴影类型，none或不写就是外阴影 */
  /* 设置多阴影时用逗号隔开： */
  box-shadow:0 0 0 1px red, 0 0 0 5px blue, 0 0 0 8px blue, 0 0 0 12px blue, 0 0 0 16px blue;
}
```
[![62yC5t.png](https://s3.ax1x.com/2021/03/18/62yC5t.png)](https://imgtu.com/i/62yC5t)

## 文本换行
```txt
  1. Word-wrap
  属性用来标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。
  属性值：
  	normal 只在允许的断字点换行（浏览器保持默认处理）
  	break-word 属性允许长单词或 URL 地址换行到下一行

  2. Word-break
  属性值：
  	break-all 它断句的方式非常粗暴，它不会尝试把长单词挪到下一行，而是直接进行单词内的断句
  	Keep-all 文本不会换行，只能在半角空格或连字符处换行
  ```


## @font-face
@font-face是CSS3中的一个模块，他主要是把自己定义的Web字体嵌入到你的网页中，随着@font-face模块的出现，我们在Web的开发中使用字体不怕只能使用Web安全字体（@font-face这个功能早在IE4就支持）
```css
/* @font-face的语法规则: */
@font-face { 
	font-family: <YourWebFontName>;
	 src: <source> [<format>][, []]*; 
	[font-weight: <weight>]; 
	[font-style: <style>]; 
}
```

### iconfont字体图标库的使用

## 背景属性
``` 
1. Background-origin 背景原点(背景的显示位置)
说明: 指定background-origin属性应该是相对位置
属性值:
	padding-box	背景图像填充框的相对位置   默认值
	border-box	背景图像边界框的相对位置
	content-box	背景图像的相对位置的内容框   

2. Background-clip 背景裁切
说明: background-clip 属性规定背景的绘制区域。
属性值:
	border-box	背景被裁剪到边框盒。 默认值
	padding-box	背景被裁剪到内边距框。
	content-box	背景被裁剪到内容框。     

3. Background-size 背景尺寸
说明: background-size 规定背景图像的尺寸
属性值:
	length	(10px) 规定背景图的大小。第一个值宽度，第二个值高度。
	Percentage(%) 以百分比为值设置背景图大小
	cover 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
	contain 把图像图像扩展至最大尺寸，以使其宽度或高度完全适应内容区域。



​扩展：
从文字区域向外裁剪；
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;  设置文字填充色的（文字镂空效果）
font-weight:bold;font-size:50px;			

css3多背景图的设置
eg:background:url(),url();
   background:url(images/flower-green.png) repeat-x left bottom,url(images/flower-red.png) repeat-y,url(images/sky.jpg) no-repeat;
可以添加多个背景图，用逗号隔开，后书写的在后显示
```

## 颜色模式
- rgba 颜色模式
- Hsl 颜色模式（了解） 
- Hsla 颜色模式（了解）
	就是色调(Hue)、饱和度(Saturation)、亮度(Lightness)三个颜色通道的改变以及它们相互之间的叠加来获得各种颜色，色调(Hue)色调最大值360，饱和度和亮度有百分比表示0-100%之间。


## 图片边框

```txt
图片边框 border-image:url(border.png) 30 30 round;
	border-image属性是一个简写属性，用于设置以下属性:
    border-image-source 用在边框的图片的路径。
    border-image-slice 图片边框向内偏移(不加单位)。
    border-image-width 图片边框的宽度。
    border-image-outset 边框图像区域超出边框的量(值是一个倍数)
    border-image-repeat 图像边框是否应平铺(repeat)、铺满(round)或拉伸(stretch)
```
[![62sc40.png](https://s3.ax1x.com/2021/03/18/62sc40.png)](https://imgtu.com/i/62sc40)




## CSS圆角
+ border-radius: 5px 10px 20px 50px 
  [![62sYNt.png](https://s3.ax1x.com/2021/03/18/62sYNt.png)](https://imgtu.com/i/62sYNt)
+ border-radius: 2em/1em	
  [![62s8HA.png](https://s3.ax1x.com/2021/03/18/62s8HA.png)](https://imgtu.com/i/62s8HA)
+ border-radius:10px 20px 30px 40px/40px 30px 20px 10px
  [![62sJAI.png](https://s3.ax1x.com/2021/03/18/62sJAI.png)](https://imgtu.com/i/62sJAI)
+ css3 calc()方法详解
```txt
什么是calc()?
	学习calc()之前，我们有必要先知道calc()是什么？只有知道了他是个什么东东？在实际运用中更好的使用他。
	calc()从字面我们可以把他理解为一个函数function。其实calc是英文单词calculate(计算)的缩写，是css3的一个新增的功能，用来指定元素的长度。比如说，你可以使用calc()给元素的border、margin、pading、font-size和width等属性设置动态值。为何说是动态值呢?因为我们使用的表达式来得到的值。不过calc()最大的好处就是用在流体布局上，可以通过calc()计算得到元素的宽度。

calc()能做什么？
	calc()能让你给元素的做计算，你可以给一个div元素，使用百分比、em、px和rem单位值计算出其宽度或者高度，比如说“width:calc(50% + 2em)”，这样一来你就不用考虑元素DIV的宽度值到底是多少，而把这个烦人的任务交由浏览器去计算。

calc()语法
	calc()语法非常简单，就像我们小时候学加 （+）、减（-）、乘（*）、除（/）一样，使用数学表达式来表示：

	.elm {
  		width: calc(expression);
	}
	其中"expression"是一个表达式，用来计算长度的表达式。

calc()的运算规则
	calc()使用通用的数学运算规则，但是也提供更智能的功能：

	使用“+”、“-”、“*” 和 “/”四则运算；
	可以使用百分比、px、em、rem等单位；
	可以混合使用各种单位进行计算；
	表达式中有“+”和“-”时，其前后必须要有空格，如"widht: calc(12%+5em)"这种没有空格的写法是错误的；
	表达式中有“*”和“/”时，其前后可以没有空格，但建议留有空格。

浏览器的兼容性
	浏览器对calc()的兼容性还算不错，在IE9+、FF4.0+、Chrome19+、Safari6+都得到较好支持，同样需要在其前面加上各浏览器厂商的识别符，不过可惜的是，移动端的浏览器还没仅有“firefox for android 14.0”支持，其他的全军覆没。
大家在实际使用时，同样需要添加浏览器的前缀
 .elm {
	/*Firefox*/
	-moz-calc(expression);
	/*chrome safari*/
	-webkit-calc(expression);
	/*Standard */
	calc();
 }
 div{width:calc(100%/3 - 5px);
				height: calc(200px);
				background: red;
				float: left;
				margin-right: calc(5px*3 /2);}
```



## pointer-events
- 阻止用户的点击动作产生任何效果
- 阻止缺省鼠标指针的显示
- 阻止CSS里的 hover 和 active 状态的变化触发事件
- 阻止JavaScript点击动作触发的事件
- 提交页面，提交按钮点击后，添加这个样式属性（style="pointer-events"），来防止重复提交。
- 一些层的绝对定位，覆盖按钮，穿透可以点击它。


## 浏览器前缀
+ -ms- -ms-box-shadow	IE浏览器专属的CSS属性需添加-ms-前缀
+ -moz-	-moz-box-shadow	所有基于Gecko引擎的浏览器（如Firefox）专属的CSS属性需添加-moz-前缀
+ -o-	-o-box-shadow	Opera浏览器专属的CSS属性需添加-o-前缀
+ -webkit- -webkit-box-shadow	所有基于Webkit引擎的浏览器（如Chrome、Safari）专属的CSS需添加-webkit-前缀

## CSS3 渐变
  CSS3 渐变（gradient）可以让你在两个或多个指定的颜色之间显示平稳的过渡。 以前，你必须使用图像来实现这些效果，现在通过使用 CSS3 的渐变（gradients）即可实现。此外，渐变效果的元素在放大时看起来效果更好，因为渐变（gradient）是由浏览器生成的。

### 线性渐变

```txt
语法：
background: linear-gradient(direction, color-stop1, color-stop2, ...);
说明：
direction：默认为to bottom，即从上向下的渐变；
stop：颜色的分布位置，默认均匀分布，例如有3个颜色，各个颜色的stop均为33.33%。
```

+ 示例1：to left、top right、to bottom、to top
[![62g2dJ.png](https://s3.ax1x.com/2021/03/18/62g2dJ.png)](https://imgtu.com/i/62g2dJ)


+ 示例2：to right bottom、to right top、to left bottom、to left top
[![62g6LF.png](https://s3.ax1x.com/2021/03/18/62g6LF.png)](https://imgtu.com/i/62g6LF)


+ 示例3：使用角度渐变linear-gradient(10deg, red, blue)
```txt
角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。
但是，请注意很多浏览器(Chrome,Safari,fiefox等)的使用了旧的标准，即 0deg 将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。换算公式 90 - x = y 其中 x 为标准角度，y为非标准角度。
```
[![62ggZ4.png](https://s3.ax1x.com/2021/03/18/62ggZ4.png)](https://imgtu.com/i/62ggZ4)



### 径向渐变
 径向渐变不同于线性渐变，线性渐变是从“一个方向”向“另一个方向”的颜色渐变，而径向渐变是从“一个点”向四周的颜色渐变
```txt
语法：
     background: radial-gradient(center, shape, size, start-color, ..., last-color);
说明：
center：渐变起点的位置，可以为百分比，默认是图形的正中心。
shape：渐变的形状，ellipse表示椭圆形，circle表示圆形。默认为ellipse，如果元素形状为正方形的元素，则ellipse和circle显示一样。
size：渐变的大小，即渐变到哪里停止，它有四个值。 closest-side：最近边； farthest-side：最远边； closest-corner：最近角； farthest-corner：最远角。
```

+ 示例1：多颜色节点均匀分布
```css
div { background: -webkit-radial-gradient(50% 50%, farthest-corner, red, green, blue); } 
div { background: -webkit-radial-gradient(center, farthest-corner, red, green, blue); }
```

+ 示例2：多颜色节点均匀分布
```css
div { background: radial-gradient(circle, red, yellow, green); } 
div { background: radial-gradient(ellipse, red, yellow, green); }
```
+ 示例3：设置渐变形状
```txt
circle：渐变为最大的圆形； ellipse：根据元素形状渐变，元素为正方形是显示效果与circle无异
```
[![622VWq.png](https://s3.ax1x.com/2021/03/18/622VWq.png)](https://imgtu.com/i/622VWq)


+ 示例4：不同尺寸的渐变
```css
div { background: radial-gradient(60% 40%, closest-side, blue, green, yellow, black); } 
div { background: radial-gradient(60% 40%, farthest-side, blue, green, yellow, black); }
div { background: radial-gradient(60% 40%, closest-corner, blue, green, yellow, black); }
div { background: -webkit-radial-gradient(left bottom, farthest-corner, blue, green, yellow, black);}
```
[![622EYn.png](https://s3.ax1x.com/2021/03/18/622EYn.png)](https://imgtu.com/i/622EYn)



### 重复性渐变
1. 重复性线性渐变
```css
div { background: repeating-linear-gradient(red, yellow 10%, green 20%); }
```

2. 重复性径向渐变
```css
div { background: repeating-radial-gradient(red, yellow 10%, green 20%); }
```

### 拓展：文字渐变
background: linear-gradient(to left,red,blue,yellow);
-webkit-background-clip: text;
 color: transparent;


## CSS3 过渡
css3的transition允许css的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值

1. transition-property：检索或设置对象中的参与过渡的属性
2. transition-duration：检索或设置对象过渡的持续时间
3. transition-delay：检索或设置对象延迟过渡的时间
4. transition-timing-function：检索或设置对象中过渡的过渡类型
   [检索或设置对象中过渡的过渡类型:贝塞尔曲线值](http://cubic-bezier.com/)
    cubic-bezier(0, 1.15, 0.05, 1.24)  贝塞尔曲线值
[![6223k9.png](https://s3.ax1x.com/2021/03/18/6223k9.png)](https://imgtu.com/i/6223k9)

**简写：transition: all/具体属性值 运动时间s/ms 延迟时间s/ms 过渡类型**
**简写必须得有过渡的属性(all)和时间**


## 变形属性：transform

```txt
transform翻译成汉语具有"变换"或者"改变"的意思。
通过此属性具有非常强大的功能，比如可以实现元素的位移、拉伸或者旋转等效果
最能体现transform 属性强大实力的是实现元素的3D变换效果。
多个属性使用空格隔开
```

### 2D

```txt
2D变换，是在一个平面对元素进行的操作。
可以对元素进行水平或者垂直位移、旋转或者拉伸.
```

+ 明确一下坐标系

  [![622lTJ.png](https://s3.ax1x.com/2021/03/18/622lTJ.png)](https://imgtu.com/i/622lTJ)

```txt
对上面坐标系简单分析如下：
（1）.默认状态下，x轴是水平的，向右为正。
（2）.默认状态下，y轴是垂直的，向下为正，这与传统的数学坐标系不同。
```



#### 2D功能函数

#### 2D位移 translate()

+ 将元素向指定的方向移动，类似于position中的relative。
+ 水平移动：向右移动translate(tx,0)和向左移动translate(-tx,0)；
+ 垂直移动：向上移动translate(0,-ty)和向下移动translate(0,ty);
+ 对角移动：右下角移动translate(tx,ty)、右上角移动translate(tx,-ty)、左上角移动translate(-tx,-ty)和左下角移动translate(-tx,ty)。
+ translateX
+ translateY



#### 2D缩放scale()

+ 让元素根据中心原点对对象进行缩放。默认的值1。因此0.01到0.99之间的任何值，使一个元素缩小；而任何大于或等于1.01的值，让元素显得更大。

+ 缩放scale()函数和translate()函数的语法非常相似，他可以接受一个值，也可以同时接受两个值，如果只有一个值时，其第二个值默认与第一个值相等。例如，scale(1,1)元素不会有任何变化，而scale(2,2)让元素沿X轴和Y轴放大两倍。

+ scaleX()：相当于scale(sx,1)。表示元素只在X轴（水平方向）缩放元素，其默认值是1。

+ scaleY()：相当于scale(1,sy)。表示元素只在Y轴（纵横方向）缩放元素，其默认值是１。




#### 3、rotate()

	旋转rotate()函数通过指定的角度参数对元素根据对象原点指定一个2D旋转。它主要在二维空间内进行操作，接受一个角度值，用来指定旋转的幅度。如果这个值为正值，元素相对原点中心顺时针旋转；如果这个值为负值，元素相对原点中心逆时针旋转。
	 rotateX() 方法，元素围绕其 X 轴以给定的度数进行旋转
	 rotateY() 方法，元素围绕其 Y 轴以给定的度数进行旋转


#### 4、skew()

	倾斜skew()函数能够让元素倾斜显示。它可以将一个对象以其中心位置围绕着X轴和Y轴按照一定的角度倾斜。
	一个参数时：表示水平方向的倾斜角度；
	两个参数时：第一个参数表示水平方向的倾斜角度，第二个参数表示垂直方向的倾斜角度

[![622rtA.png](https://s3.ax1x.com/2021/03/18/622rtA.png)](https://imgtu.com/i/622rtA)




#### 变形原点

```txt
transform-origin
	transform-origin是变形原点，也就是该元素围绕着那个点变形或旋转，该属性只有在设置了transform属性的时候起作用；
	因为我们元素默认基点就是其中心位置，换句话说我们没有使用transform-origin改变元素基点位置的情况下，transform进行的rotate,translate,scale,skew等操作都是以元素自己中心位置进行变化的。
```





### 3D

```txt
2d场景，在屏幕上水平和垂直的交叉线x轴和y轴
3d场景，在垂直于屏幕的方法，相对于3d多出个z轴
Z轴：靠近屏幕的方向是正向，远离屏幕的方向是反向
```



[![622sfI.png](https://s3.ax1x.com/2021/03/18/622sfI.png)](https://imgtu.com/i/622sfI)



#### 实现3D场景

**transform-style属性**

```txt
transform-style属性是3D空间一个重要属性，指定嵌套元素如何在3D空间中呈现。他主要有两个属性值：flat和preserve-3d

其中flat值为默认值，表示所有子元素在2D平面呈现。preserve-3d表示所有子元素在3D空间中呈现。
也就是说，如果对一个元素设置了transform-style的值为flat，则该元素的所有子元素都将被平展到该元素的2D平面中进行呈现。沿着X轴或Y轴方向旋转该元素将导致位于正或负Z轴位置的子元素显示在该元素的平面上，而不是它的前面或者后面。如果对一个元素设置了transform-style的值为preserve-3d，它表示不执行平展操作，他的所有子元素位于3D空间中。
```



#### 3D位移

```txt
CSS3中的3D位移主要包括translateZ()和translate3d()两个功能函数；
```

+ translate3d(tx,ty,tz) 
  +  ty：代表纵向坐标位移向量的长度；
  +  tx：代表横向坐标位移向量的长度；
  +  tz：代表Z轴位移向量的长度。此值不能是一个百分比值，如果取值为百分比值，将会认为无效值。
+ translateZ(t)
  + 指的是Z轴的向量位移长度。



#### 3D旋转

```txt
CSS3中的3D旋转主要包括rotateX()、rotateY()、rotateZ()和rotate3d()四个功能函数；
```

+ rotateX(a)
  + rotateX()函数指定一个元素围绕X轴旋转，旋转的量被定义为指定的角度；如果值为正值，元素围绕X轴顺时针旋转；反之，如果值为负值，元素围绕X轴逆时针旋转。
+ rotateY(a)
  + rotateY()函数指定一个元素围绕Y轴旋转，旋转的量被定义为指定的角度；如果值为正值，元素围绕Y轴顺时针旋转；反之，如果值为负值，元素围绕Y轴逆时针旋转。
+ rotateZ(a)
  + rotateZ()函数和其他两个函数功能一样的，区别在于rotateZ()函数指定一个元素围绕Z轴旋转
+ rotate3d(x,y,z,a)(建议取值0或1)1表示旋转 0表示不旋转
  + x：是一个0到１之间的数值，主要用来描述元素围绕X轴旋转的矢量值；
  + y：是一个０到１之间的数值，主要用来描述元素围绕Y轴旋转的矢量值；
  + z：是一个０到１之间的数值，主要用来描述元素围绕Z轴旋转的矢量值；
  + a：是一个角度值，主要用来指定元素在3D空间旋转的角度，如果其值为正值，元素顺时针旋转，反之元素逆时针旋转。



#### 3D缩放

```txt
 3D缩放：CSS3中的3D缩放主要包括scaleZ()和scale3d()两个功能函数；
```

```txt
简介： CSS3 3D变形中的缩放主要有scaleZ()和scale3d()两种函数，当scale3d()中X轴和Y轴同时为1，即scale3d(1,1,sz)，其效果等同于scaleZ(sz)。通过使用3D缩放函数，可以让元素在Z轴上按比例缩放。默认值为１，当值大于１时，元素放大，反之小于１大于0.01时，元素缩小
```

+ scale3d()  如：transform: scale3d(2,1,1);

  + sx：横向缩放比例；
  + sy：纵向缩放比例；
  + sz：Z轴缩放比例；

+ scaleZ(s)

  + s：指定元素每个点在Z轴的比例。

+ 注：scaleZ()和scale3d()函数单独使用时没有任何效果，需要配合其他的变形函数一起使用才会有效果

2)、**perspective**  设置3d元素居视图的距离，也就是视点距离；允许你改变3D元素是怎样查看透视图 

​            景深(value) 离屏幕多远的距离去观察元素，值越大幅度越小

<http://www.zhangxinxu.com/study/201209/transform-perspective-same-rotate.html> 

两种方式：一种可以给父元素写，一种给子元素加

两个都设置会发生冲突，建议只设置父元素，通常的数值在900-1200之间 
如果当你的视线距离物体足够远的时候，基本上就不会有近大远小的感觉    

定义时的perspective属性，它是一个元素的子元素，透视图，而不是元素本身；常用的设置 ：perspective：600px;   perspective：1200px; 

例：.container {

  display: block;

  width: 200px;

  height: 200px;

  margin-bottom: 50px;

  border: 1px solid #bbb;

  perspective: 600px;

}

.box {

  width: 200px;

  height: 200px;

  opacity: .75;

  background-color: darkblue;

  transform: rotateY(45deg);

}                           







## css3动画

```txt
通过 CSS3，我们能够创建动画，这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript。
```



## 关键帧的定义

```txt
不同于过渡动画只能定义首尾两个状态，关键帧动画可以定义多个状态，或者用关键帧的话来说，过渡动画只能定义第一帧和最后一帧这两个关键帧，而关键帧动画则可以定义任意多的关键帧，因而能实现更复杂的动画效果。
```

```css
@keyframes mymove{
 from{初始状态属性}
to{结束状态属性}
}
或
@keyframes mymove{
 0%{初始状态属性}
50%（中间再可以添加关键帧）
100%{结束状态属性}
}
```

￼￼￼

[![622xAJ.png](https://s3.ax1x.com/2021/03/18/622xAJ.png)](https://imgtu.com/i/622xAJ)
[![622j74.png](https://s3.ax1x.com/2021/03/18/622j74.png)](https://imgtu.com/i/622j74)



## animation  vs  transition

+ 相同点：都是随着时间改变元素的属性值。
+ 不同点：transition需要触发一个事件(hover事件或click事件等)才会随时间改变其css属性；
  而animation在不需要触发任何事件的情况下也可以显式的随着时间变化来改变元素css的属性值，从而达到一种动画的效果，css3的animation就需要明确的动画属性值 ，animation可以帧动画，突然transition不可以实现帧动画



## animation

+ animation-name
  + 检索或设置对象所应用的动画名称
  + 必须与规则@keyframes配合使用，
    eg:@keyframes mymove{}  animation-name:mymove;
+ animation-duration 
  - 检索或设置对象动画的持续时间
  - 说明：animation-duration:3s;    动画完成使用的时间为3s
+ animation-timing-function 
  - 检索或设置对象动画的过渡类型
  - 属性值
    - linear：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
    - ease：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
    - ease-in：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
    - ease-out：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
    - ease-in-out：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
    - step-start:马上跳到动画每一结束桢的状态
    - step-end
+ animation-delay
  + 检索或设置对象动画延迟的时间
  + 说明：animation-delay:0.5s;     动画开始前延迟的时间为0.5s)
+ animation-iteration-count 
  + 检索或设置对象动画的循环次数
  + 属性值
    + animation-iteration-count: infinite | number;
    + infinite：无限循环
    + number: 循环的次数
+ animation-direction 
  + 检索或设置对象动画在循环中是否反向运动
  + 属性值
    + normal：正常方向
    + reverse：反方向运行
    + alternate：动画先正常运行再反方向运行，并持续交替运行
    + alternate-reverse：动画先反运行再正方向运行，并持续交替运行
+ animation-play-state 
  + 检索或设置对象动画的状态
  + 属性值
    + animation-play-state:running | paused;
    + running:运动
    + paused: 暂停
    + animation-play-state:paused;       当鼠标经过时动画停止，鼠标移开动画继续执行



## 简写

[![62RR81.png](https://s3.ax1x.com/2021/03/18/62RR81.png)](https://imgtu.com/i/62RR81)




## [animate.css动画库的使用](https://www.cnblogs.com/xiaohuochai/p/7372665.html)

https://unpkg.com/animate.css@3.5.2/animate.min.css在线地址

animate.css里面的类，主要包括Attention(晃动效果)、bounce(弹性缓冲效果)、fade(透明度变化效果)、flip(翻转效果)、rotate(旋转效果)、slide(滑动效果)、zoom(变焦效果)、special(特殊效果)

 

https://daneden.github.io/animate.css/ 动画库效果









扩展：

animation-fill-mode规定对象动画时间之外的状态。

none 不改变默认行为

forwards当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）

 

Backface-visibility:hidden/ visible   元素背景是否可见

## 动画案例







css3盒模型（重点）

css3 弹性盒模型（重点）

多列布局 



# 怪异盒模型
[![62Rfv6.png](https://s3.ax1x.com/2021/03/18/62Rfv6.png)](https://imgtu.com/i/62Rfv6)
[![62R4KK.png](https://s3.ax1x.com/2021/03/18/62R4KK.png)](https://imgtu.com/i/62R4KK)


``` css
div{
  box-sizing: content-box;(标准盒模型)
  /* 这是由 CSS2.1 规定的宽度高度行为。宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。 */
  box-sizing: border-box;(怪异盒模型)
  /* 为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。 */
}
```

# flex布局
- Flex容器：采用 Flex 布局的元素的父元素；
- Flex项目：采用 Flex 布局的元素的父元素的子元素；
- 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
- 项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
[![62RWgx.png](https://s3.ax1x.com/2021/03/18/62RWgx.png)](https://imgtu.com/i/62RWgx)

## flexbox布局功能主要具有以下几点：
1. 屏幕和浏览器窗口大小发生变化也可以灵活调整布局；
2. 指定伸缩项目沿着主轴或侧轴按比例分配额外空间，从而调增伸缩项目的大小；
3. 指定伸缩项目沿着主轴或侧轴将伸缩容器额外空间，分配到伸缩项目之前. 之后或之间；
4. 指定如何将垂直于元素布局轴的额外空间分布到该元素的周围；
5. 控制元素在页面上的布局方向；
6. 按照不同于标准流所指定的排序方式对屏幕上的元素重新排序。

## flex容器属性

1. display:flex、inline-flex
```txt
注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
```
2. flex-direction属性 决定主轴的方向（即项目的排列方向）
```
flex-direction: row从左向右 | row-reverse与row相反 | column从上到下 | column-reverse;与column相反
```
3. flex-wrap属性，定义子元素是否换行显示
```
flex-wrap: nowrap 不换行    默认值，不管超出还是不超出都不会换行
wrap   换行    一旦伸缩项目超出伸缩容器，那么就会换行
wrap-reverse; 换行反向    主轴水平时，上下反向，主轴垂直时，左右反向；
```
4. flex-flow 
```
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap;
```
5. justify-content属性 定义了项目在主轴（）上的对齐方式。
```
justify-content: 
flex-start  伸缩项目向一行的起始位置靠齐；
 flex-end   伸缩项目向一行的结束位置靠齐；
 center     伸缩项目向一行的中间位置靠齐；
 space-between  伸缩项目会平均的分布在行里；
 space-around;  伸缩项目会平均的分布在行里，两端保留一半的空间；
```
6. align-items属性定义项目在交叉轴上如何对齐。
```
align-items:
	flex-start：伸缩项目在侧轴起点边的外边距 紧靠住 该行在侧轴起始边；
	flex-end：伸缩项目在侧轴终点边的外边距 紧靠住 该行在侧轴终点边；
	center：伸缩项目的外边距盒 在该行的侧轴上居中放置；
	baseline：伸缩项目根据伸缩项目的基线对齐；
	（有内容时，按照文字的基线对齐，没有内容时会按元素的基线对齐）
	stretch：伸缩项目拉伸填充整个伸缩容器。(默认值)
	注：stretch是把它的高度进行拉伸，确保没有高度的情况下，如果有高度会跟高度走，没有高度会进行拉伸，不定	议高度是默认值拉伸
```
7. align-content属性定义了多根轴线的对齐方式。对于单行子元素，该属性不起作用。
```
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
align-content在侧轴上执行样式的时候，会把默认的间距给合并。对于单行子元素，该属性不起作用
align-content 定义多个伸缩行的对齐方式，往往要与换行同时应用（换行时才用）
flex-start：各行向伸缩容器的起点位置堆叠；
flex-end：各行向伸缩容器的结束位置堆叠；
center：各行向伸缩容器的中间位置堆叠；
space-between：各行在伸缩容器中平均分布；
space-around：各行在伸缩容器中平均分布，两端保留一半的空间；
stretch：各行将伸展以占用额外空间。（默认值)

```



## flex项目属性

1. align-self属性
```txt
Internet Explorer 和 Safari 浏览器不支持 align-self 属性
说明：
	align-self 属性规定灵活容器内被选中项目的对齐方式。
	注意：align-self 属性可重写灵活容器的 align-items 属性。
	属性值
		auto 		默认值。元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。
		Stretch		元素被拉伸以适应容器。
		Center		元素位于容器的中心。
		flex-start		元素位于容器的开头。
		flex-end		元素位于容器的结尾。
```
2. order
```
说明：
	number排序优先级，数字越大越往后排，默认为0，支持负数。
```
3. flex
```
说明：
	复合属性。设置或检索弹性盒模型对象的子元素如何分配空间
	详细属性值：
		缩写「flex: 1」, 则其计算值为「1 1 0%」
		缩写「flex: auto」, 则其计算值为「1 1 auto」
		flex: none」, 则其计算值为「0 0 auto」
		flex: 0 auto」或者「flex: initial」, 则其计算值为「0 1 auto」，即「flex」初始值
```
4. flex-xxx
```
flex-grow
	一个数字，规定项目将相对于其他灵活的项目进行扩展的量。
flex-shrink
	一个数字，规定项目将相对于其他灵活的项目进行收缩的量。
flex-basis
	项目的长度 分配多余空间之前，项目占据的主轴空间（Flex元素在主轴方向的初始大小，如果主轴是x轴，相当于width，如果主轴是Y，相当于height）
```



# 移动端项目布局类型
1. **rem布局（等比缩放布局、百分比布局）**
[![62c6UA.png](https://s3.ax1x.com/2021/03/18/62c6UA.png)](https://imgtu.com/i/62c6UA)

2. **弹性布局（100%布局、流式布局）**
[![62crHH.png](https://s3.ax1x.com/2021/03/18/62crHH.png)](https://imgtu.com/i/62crHH)

   + 弹性布局特点：
     - 顶部与底部的bar不管分辨率怎么变,它的⾼度和位置都不变;中间每条招聘信息不管分辨率怎么变，招聘公司的图标等信息都位于条目的左边，薪资都位于右边.
     - 特点：关键元素高宽和位置都不变，只有容器元素在做伸缩变换。对于这类app，记住一个开发原则就好：文字流式，控件弹性，图片等比缩放.
    [![62cdgK.png](https://s3.ax1x.com/2021/03/18/62cdgK.png)](https://imgtu.com/i/62cdgK)


3. **混合布局案例 （ rem布局结合弹性布局 ）**
[![62cyEd.png](https://s3.ax1x.com/2021/03/18/62cyEd.png)](https://imgtu.com/i/62cyEd)


4. 什么是DPR
  + 设备的物理像素和逻辑像素（真实像素/css像素）的对应关系，即物理像素（设备像素）/逻辑像素，默认缩放为100%的情况下，设备像素和CSS像素的比值。例如iphone6，屏幕逻辑像素为375PX，而购买时所知的750PX，这就是屏幕的物理像素。
  + 其实每个手机的DPR不全都是一样的，例如我们的iphone6它的DPR是2，但是iphon6Plus它的DPR却是3，在早先的移动设备中呢，是没有DPR这个概念的，随着我们技术的发展，移动设备的屏幕像素密度越来越高，苹果公司从iphone4开始推出了视网膜屏幕，之所以叫视网膜屏幕，是因为屏幕的PPI，也就是屏幕像素密度太高了，人的视网膜无法分辨出屏幕上的像素点。
  + iphone4的分辨率提高了一倍，但屏幕尺寸却没有变化，这意味着同样大小的屏幕上，像素多了一倍，于是DPR = 2
  ```
  DPR = 设备像素 / 逻辑像素
  实际上从来用不上设备像素 ，唯一的例外是screen.width/height
  ```

5. 常见的移动端屏幕尺寸
  `2.4英寸，3.5英寸，3.7英寸，4.2英寸，4.7英寸，5.0英寸，5.5 英寸，6.0英寸，这是我们移动端页面重构最基本的概念。`
  devicePixelRatio设备像素比

6. **移动端页面重构常用单位**
因为要适应所有的移动端屏幕尺寸，所以传统的px布局页面在移动端就不太适用。
Em是父盒子的倍数，rem是根元素的倍数
   1. Rem是指相对于根元素的字体大小单位，能等比例适配所有屏幕，根据变化html也就是根元素的字体大小来控制rem的大小
JS计算：通过获取视口的宽度/实际设计图的宽度*html的font-size 
   2. CSS3新增单位 VW，VH
      + VW:视窗宽度，1VW等于视窗宽度的百分之一
      + VH:视窗高度，1VH等于视窗高度的百分之一
        我们也可以把VW转换成PX赋值给font-size，
        元素所展示的大小（设计图固定大小）=（VW*设计稿宽度）/100 
        VW = 元素所展示的大小（设计图固定大小）*100/设计稿宽度
        例如：设备的分辨率为640*1136，逻辑像素为320*568，1VW就等于3.2px，我们把font-size：100px，转换成VW就等于31.25VW;
        1rem等31.25VW获取到根元素大小一起结合写等比例绽放布局。
        VW，VH是CSS3新增的单位，它只能有着自己的兼容性，IE9+局部支持，chrome/firefox/safari/opera支持，iOS safari 8+支持，Android browser4.4+支持，chrome for android39支持。
        [![62REHe.png](https://s3.ax1x.com/2021/03/18/62REHe.png)](https://imgtu.com/i/62REHe)

# 多列布局
```txt
多列布局类似报纸或杂志中的排版方式，主要用以控制大篇幅文本。
```
## 多列属性
  1. column-count（最大列数）

  `
  属性规定元素应该被分隔的列数
  适用于：除table外的非替换块级元素, table cells, inline-block元素
  `
  2. column-gap

  `
  属性规定列之间的间隔大小
  `
  3. column-rule

  `
  设置或检索对象的列与列之间的边框。复合属性。
  olumn-rule-color规定列之间规则的颜色。
  olumn-rule-style规定列之间规则的样式。
  olumn-rule-width规定列之间规则的宽度。
  `
  4. column-fill

  `
  设置或检索对象所有列的高度是否统一
  uto：列高度自适应内容
  alance：所有列的高度以其中最高的一列统一
  `
  5. column-span
  `
  设置或检索对象元素是否横跨所有列。
  one：不跨列
  ll：横跨所有列
  `
  6. column-width
  `
  设置或检索对象每列的宽度（最小宽）
  `
  7. columns

  `设置或检索对象的列数和每列的宽度。复合属性`
  `<column-width> || <column-count>`

**注**: 
  + Internet Explorer 10 和 Opera 支持多列属性。
  + Firefox 需要前缀 -moz-。
  + Chrome 和 Safari 需要前缀 -webkit-。


# 媒体查询 + rem
## 计算方法

```txt
 计算rem方法：
        结合媒体查询   -》   随着设备的改变 更改html  font-size的值。

        媒体查询确定范围？？

        移动端设计图 ： 640px   750px   1080px;
        dpr              2       2         3
        范围            320px   375px     
```

```css
@media screen and (max-width:320px){
    html{
        font-size:12px;
    }
}
@media screen and (min-width:321px) and (max-width:375px){
    html{
        font-size:14px;
    }
}
@media screen and (min-width:376px){
    html{
        font-size:16px;
    }
}
```

## 实现流程

```txt
ui设计图  640px
dpr    2
ps量出height  88px;
88px / 2 ==  44px;
设计图640px  dpr 2
640px  /  2 == 320px
44px / 12px == rem
```


# vw + rem
```txt
为了方便计算，可以把html的font-size值 设置成100px;        1rem == 100px;
100px是一个固定值，没办法随着设备的改变而改变。
能跟随设备发生改变 
vw 根据视口大小进行改变。
100px == ?vw   
```

## 根据设计图分配情况
```
第一种情况：
        如果UI设计图为 640px 
        考虑的dpr    2
        适配的核心设备   320px;		
        100vw == 320px
        1vw == 3.2px
        ?vw == 100px
        31.25vw == 100px
```

```
第二种情况
        如果设计图为750px
        考虑dpr    2
        适配的核心设备   375px
        100vw == 375px
        1vw == 3.75px
        ?vw == 100px
        26.67vw == 100px;
```

## 设置方法

```
如果设计图为 640px    html设置{font-size:31.25vw}
如果设计图为 750px    html设置{font-size:26.67vw}
```

## 计算流程

```
vw  结合 rem   计算流程
因为设计图 640px
所以html设置{font-size:31.25vw;}
ps中获取height 88px
dpr     2
88 / 2 == 44px
44 / 100 == 0.44rem;
```



# flxible.js  插件 
## 计算流程

```
1：引入flxible.js插件
        <script src=""></script>
2:去掉html里面默认的meta标签
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## flxible.js原理

```
在页面中引入flexible.js后，flexible会在<html>标签上增加一个data-dpr属性和font-size样式（如下图）。
为了方便计算可以设置成100px;
```

``` javascript
//js首先会获取设备型号，然后根据不同设备添加不同的data-dpr值，比如说1、2或者3，从源码中我们可以看到。
if (!dpr && !scale) {
    var isAndroid = win.navigator.appVersion.match(/android/gi);
    var isIPhone = win.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = win.devicePixelRatio;
    if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
            dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
            dpr = 2;
        } else {
            dpr = 1;
        }
    } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
    }
    scale = 1 / dpr;
}
```

```
页面中的元素用rem单位来设置，rem就是相对于根元素<html>的font-size来计算的，flexible.js能根据<html>的font-size计算出元素的盒模型大小。这样就意味着我们只需要在根元素确定一个px字号，因此来算出各元素的宽高，从而实现屏幕的适配效果
```

## 把视觉稿中的px转换成rem

工作中我们常见的视觉稿大小大至可为640、750、1080三种。不过flexible.js并没有限制只能用这三种，所以你还可以根据自身情况来调整，具体如何转换，我们以视觉稿为640px的宽来举例子，把640px分为100份，每一份称为一个单位a，那么每个a就是6.4px，而1rem单位被认定为10a，此时，1rem=1(a)X10X6.4(px)即64px。

```
640px/100=6.4px                              1个单位a为6.4px
1rem = 10a                                   1rem单位被认定为10a
1rem = 1(a)*10*6.4(px) = 64px
```

Vw=87/750*100





现在Web朝着响应式的趋势发展，媒体查询在创建响应式网站中起到了主要作用。没有媒体查询几乎不能实现响应式设计，利用媒体查询，我们可以针对特定的设备，如显示器、智能手机和平板，写CSS。

媒体查询可以让我们根据设备显示器的特性（如视口宽度、屏幕比例、设备方向：横向或纵向）为其设定CSS样式，媒体查询由媒体类型和一个或多个检测媒体特性的条件表达式组成。媒体查询中可用于检测的媒体特性有 width 、 height 和 color （等）。使用媒体查询，可以在不改变页面内容的情况下，为特定的一些输出设备定制显示效果。



媒体类型引用方法：
```
1、link方式

<link rel="stylesheet" href="css/wide.css" media="screen and (max-width:641px)" />
<link rel="stylesheet" href="css/mobile.css" media="screen and (min-width:640px) and (max-width:960px)" />

2、@import方式

<style>
@import url(style.css) screen and (max-width:641px);
@import url(style2.css) screen and (min-width:640px) and (max-width:960px);
</style>

3、写在内部样式中
<head>
<style type="text/css">   
@media screen and (max-width:641px){
    h1{
        background: red;
    }
}
​@media screen and (min-width:640px) and (max-width:960px) {
    h1 {
        background: red;
    }
}
</style>    

@media写在页面里比link相比可以减小页面请求
常见设备类型(media type):
all          所有设备
screen               电脑显示器
print            打印用纸或打印预览视图
handheld    便携设备
tv           电视机类型的设备
speech        语意和音频盒成器
braille          盲人用点字法触觉回馈设备
embossed  盲文打印机
projection  各种投影设备
tty         使用固定密度字母栅格的媒介，比如电传打字机和终端
u **and** 被称为关键字，**only**(限定某种设备)
u **(min-width: 400px)** 就是媒体条件，其被放置在一对圆括号中。
```

**响应式（Responsive）设计**

响应式是指根据不同设备浏览器分辨率或尺寸来展示不同页面结构、行为、表现的设计方式。

响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。页面头部必须有meta声明viewport：

<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
/>


有了CSS的媒体查询这个功能，自然有了所谓的响应式，响应式由Ethan Marcotte在A List Apart发表了率先发表了响应式的创新文章，将三种开发技术整合起来（弹性网格布局、弹性图片、媒体和媒体查询），将其命名为RWD（Responsive Web Design 响应式网页设计）。

 

1.设置Meta标签

 

手机浏览器是把页面放在一个虚拟的“窗口”（viewport）中，通常这个虚拟的“窗口”（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

 

如何识别手机尺寸通过设置meta语句：

<meta
name="viewport"
content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
/>




width                   可视区域的宽度；

height                  可视区域的高度；

device-width        设备屏幕分辨率的宽度值(视口宽度)

initial-scale          初始的缩放比例（0-10.0），取值为1时页面按实际尺寸显示，无任何缩放

minimum-scale          允许用户缩放到的最小比例 

maximum-scale         允许用户缩放到的最大比例

user-scalable        设定用户是否可以缩放（yes/no）


扩展：

u 忽略将页面中的数字识别为电话号码

<meta name="format-detection"
content="telephone=no" />


u 忽略Android平台中对邮箱地址的识别

<meta name="format-detection"
content="email=no" />




/*设备横向放置是*/

**/\*** **竖屏 \*/**

@media screen and (orientation:portrait) and (max-width: 720px) {

​      h1 {

​                 background: yellow;

​           }

 

}

**/\*** **横屏 \*/**

@media screen and (orientation:landscape){

h1 {

​                 background: yellow;

​           }

 

}

 

orientation: landscape方向为横向

orientation: portrait方向纵向

 

 

 

#  常见的布局方案

```txt
固定布局：以像素作为页面的基本单位，不管设备屏幕及浏览器宽度，只设计一套尺寸；

可切换的固定布局：同样以像素作为页面单位，参考主流设备尺寸，设计几套不同宽度的布局。通过识别的屏幕尺寸或浏览器宽度，选择最合适的那套宽度布局；

弹性布局：以百分比作为页面的基本单位，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空间展现最佳效果；

混合布局：同弹性布局类似，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空间展现最佳效果；只是混合像素、和百分比两种单位作为页面单位。


布局响应：对页面进行响应式的设计实现，需要对相同内容进行不同宽度的布局设计，有两种方式：pc优先（从pc端开始向下设计）；移动优先（从移动端向上设计）；无论基于那种模式的设计，要兼容所有设备，布局响应时不可避免地需要对模块布局做一些变化（发生布局改变的临界点称之为断点），
```

# 常见响应式布局方案

+ （1）模块中内容：挤压－拉伸（布局不变）
  [![6Rb9rd.png](https://s3.ax1x.com/2021/03/19/6Rb9rd.png)](https://imgtu.com/i/6Rb9rd)

+ （2）模块中内容：换行－平铺（布局不变）
  [![6RbkIP.png](https://s3.ax1x.com/2021/03/19/6RbkIP.png)](https://imgtu.com/i/6RbkIP)

+ （3）模块中内容：删减－增加（布局不变）
  [![6RbEPf.png](https://s3.ax1x.com/2021/03/19/6RbEPf.png)](https://imgtu.com/i/6RbEPf)

+ （4）模块位置变换（布局改变）
  [![6RbpKH.png](https://s3.ax1x.com/2021/03/19/6RbpKH.png)](https://imgtu.com/i/6RbpKH)

+ （5）模块展示方式改变：隐藏－展开（布局改变）
  [![6RbFat.png](https://s3.ax1x.com/2021/03/19/6RbFat.png)](https://imgtu.com/i/6RbFat)

+ （6）模块数量改变：删减－增加（布局改变）
  [![6RbiVI.png](https://s3.ax1x.com/2021/03/19/6RbiVI.png)](https://imgtu.com/i/6RbiVI)

# 响应式开发的特点

```txt
设计特点：
	面对不同分辨率设备灵活性强 
	能够快捷解决多设备显示适应问题
```

```
缺点：
	兼容各种设备工作量大，效率低下
	代码累赘，会出现隐藏无用的元素，加载时间加长
	其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果
	一定程度上改变了网站原有的布局结构，会出现用户混淆的情况
```





# 图片整合

```txt
把网站里面的小图标有规则的整合在一起，利用   background-position 改变背景图的位置，每个图标应用。
```



```txt
优点:
	（1）CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；
	（2）CSS Sprites能减少图片的字节；
	（3）CSS Sprites解决了网页设计师在图片命名上的困扰，只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率。
	（4）CSS Sprites只需要修改一张或少张图片的颜色或样式来改变整个网页的风格。
	
缺点:
	（1）图片合并麻烦：图片合并时，需要把多张图片有序的合理的合并成一张图片，并留好足够的空间防止版块出现不必要的背景。
	（2）图片适应性差：在高分辨的屏幕下自适应页面，若图片不够宽会出现背景断裂。
	（3）图片定位繁琐：开发时需要通过工具测量计算每个背景单元的精确位置。
	（4）可维护性差：页面背景需要少许改动，可能要修改部分或整张已合并的图片，进而要改动css。在避免改动图片的前提下，又只能（最好）往下追加图片，但这样增加了图片字节。
```







# 浏览器兼容

## 浏览器

[![62sPcF.png](https://s3.ax1x.com/2021/03/18/62sPcF.png)](https://imgtu.com/i/62sPcF)

[![62smh6.png](https://s3.ax1x.com/2021/03/18/62smh6.png)](https://imgtu.com/i/62smh6)




## 浏览器大战

[![62sAB9.png](https://s3.ax1x.com/2021/03/18/62sAB9.png)](https://imgtu.com/i/62sAB9)


```txt
第一次浏览器大战发生在上个世纪90年代，微软发布了它的IE浏览器，和网景公司的Netscape Navigator浏览器大打出手。

第二次浏览器大战发生在20世纪。

    战争产物：Internet Explorer 9
```



- 13年市场比重

[![62sC1U.png](https://s3.ax1x.com/2021/03/18/62sC1U.png)](https://imgtu.com/i/62sC1U)


- 14年市场比重

[![62sknJ.png](https://s3.ax1x.com/2021/03/18/62sknJ.png)](https://imgtu.com/i/62sknJ)


- 15年市场比重

[![62sZA1.png](https://s3.ax1x.com/2021/03/18/62sZA1.png)](https://imgtu.com/i/62sZA1)


- 17年市场比重

[![62sE7R.png](https://s3.ax1x.com/2021/03/18/62sE7R.png)](https://imgtu.com/i/62sE7R)


- 19年市场比重

[![62setx.png](https://s3.ax1x.com/2021/03/18/62setx.png)](https://imgtu.com/i/62setx)

## 浏览器内核 ( 现代4大内核 )

+ Trident   代表作：IE  -ms-
```txt
元老级内核之一，由微软开发，并于1997年10月首次在ie 4.0中使用，凭借其windows垄断优势，Trident市场占有率一直很高。然而垄断并非，没有竞争就没有进步，长期以往，Trident内核一度停滞不前，更新缓慢，甚至一度与W3C标准脱节。2011年，从ie 9开始，Trident开始支持HTML5和CSS 3，因此我们也经常会看到有些网站在浏览时会提示用户（在Internet Explorer 9.0+以上浏览效果最佳）。前端程序员做浏览器兼容一般也不再会考虑ie 8之前的浏览器了。
```

+ Gecko 代表作：Mozilla -moz-
```txt	
元老级内核之一，由Netscape公司Mozilla组织开发。1998年，Netscape在于IE浏览器竞争失利之后，成立了非正式组织Mozilla，由其开发新一代内核，后命名为“Gecko”。FireFox也是这班人开发出来了，因此这也就是Mozilla一直使用的内核。
Gecko的特点是代码完全公开，因此其开发程度很高，全世界的程序员都可以为其编写代码，增加功能。
```

+ WebKit : 苹果 & 谷歌旧版本 -webkit-
```txt
这是苹果公司开发的内核，也是其旗下产品Ssfari浏览器使用的内核。Webkit引擎包含了WebCode排版引擎和JavaScriptCode解析引擎，分别是从KDE的KHTML和KJS衍生而来，它们都是自由软件，在GPL条约下授权，同时支持BSD系统开发。
Chrome、360极速浏览器以及搜狗高速浏览器也使用Webkit作为内核（在脚本理解方面，Chorome使用自己研发的V8引擎）。
```

+ Blink : 代表作：谷歌 & 欧鹏  -o-
```
这是由Google和Opera Software开发的浏览器排版引擎，Google计算将这个渲染引擎作为Chromium计划的一部分，并且在2013年4月公布了这一消息。这一渲染引擎是开源引擎Webkit中WebCore组件的一个分支，并且在Chrome（28及往后版本）、Opera（15及往后版本）和Yandex浏览器中使用
```

+ Presto   ( Opera前内核 已经废弃 )

## 为什么会出现浏览器兼容问题？
  + 由于各大主流浏览器由不同的厂家开发，所用的核心架构和代码也很难重和，这就为各种莫名其妙的Bug(代码错误）提供了温床。再加上各大厂商出于自身利益考虑而设置的种种技术壁垒，都让CSS应用起来比想象得要麻烦。浏览器的兼容问题是我们必须去克服的。

# CSS Bug、CSS Hack和Filter

+ CSS Bug: CSS样式在各浏览器中解析不一致的情况，或者说CSS样式在浏览器中不能正确显示的问题称为CSS bug.

+ CSS Hack:  CSS中，Hack是指一种兼容CSS在不同浏览器中正确显示的技巧方法，因为它们都属于个人对CSS代码的非官方的修改，或非官方的补丁。有些人更喜欢使用patch(补丁)来描述这种行为。

+ Filter:表示过滤器的意思，它是一种对特定的浏览器或浏览器组显示或隐藏规则或声明的方法。本质上讲，Filter是一种用来过滤不同浏览器的Hack类型。

  

## 常见的BUG

### IE低版本常见CSS解析Bug及hack

```txt
1)图片有边框BUG**
当图片加<a href=“#”></a>在IE上会出现边框
Hack:给图片加border:0;或者border:0    none;


2)图片间隙**
div中的图片间隙BUG
描述：在div中插入图片时，图片会将div下方撑大大约三像素。
hack1:将<img>加个vertical-align:top
hack2:将<img>转为块状元素，给<img>添加声明：display:block;
hack3:将div加个font-size:0; 不推荐使用


3)  双倍浮向（双倍边距）（只有IE6出现）
描述：当Ie6及更低版本浏览器在解析浮动元素时，会错误地把浮向边边界（margin）加倍显示。
hack:给浮动元素添加声明：_display:inline;


4)默认高度（IE6、IE7）
描述：在IE6及以下版本中，部分块元素拥有默认高度（在16px左右；）
hack1:给元素添加声明：font-size:0;
hack2：给元素添加声明：overflow:hidden;

```



### 非IE  BUG

```txt
5)表单元素对齐不一致
描述：表单元素行高对齐方式不一致
hack:给表单元素添加声明：float:left;


6)按钮元素默认大小不一

描述：各浏览器中按钮元素大小不一致
hack1： 统一大小/（用a标记模拟）
hack2:input外边套一个标签，在这个标签里写按钮的样式，把input的边框去掉。
hack3:如果这个按钮是一个图片，直接把图片作为按钮的背景图即可。


8)鼠标指针bug **
描述：cursor属性的hand属性值只有IE9以下浏览器识别，其它浏览器不识别该声明，cursor属性的pointer属性值IE6.0以上版本及其它内核浏览器都识别该声明。
hack:    如统一某元素鼠标指针形状为手型，
应添加声明：cursor:pointer


cursor:         ;
auto默认
crosshair加号
text文本
wait等待
help帮助
progress过程
inherit继承
move移动
ne-resize向上或向右移动
pointer手形



9)透明属性 **
兼容其他浏览器写法：opacity:value;(value的取值范围0-1;
	例：opacity:0.5;)
IE浏览器写法：filter:alpha(opacity=value);取值范围 1-100(整数)

10) 当给子元素加上margin-top值，错误的加给了父元素 **
	 解决方法：给父元素加overflow:hidden
	 加了边框就不会出错此bug

```



## 过滤器

```txt
  1.下划线属性过滤器
  当在一个属性前面增加了一个下划线后，由于符合标准的浏览器不能识别带有下划线的属性而忽略了这个声明，但是在IE6及更低版本浏览器中会继续解析这个规则。
  
  语法：选择符{_属性：属性值；}
 

  2. !important关键字过滤器
  
  它表示所附加的声明具有最高优先级的意思。但由于IE6及更低版本不能识别它，
我们可以利用IE6的这个Bug作为过滤器来兼容ＩＥ６和其它标准浏览器。

  语法：选择符{属性：属性值!important;}
 

  3. *属性过滤器

  当在一个属性前面增加了*后，该属性只能被IE7浏览器识别，其它浏览器混略该属
性的作用。

 语法：选择符{*+属性：属性值；}


  4.   \9  ：IE版本识别；其它浏览器都不识别
语法：选择符{属性：属性值\9;}

  5.   \0  :   IE8 及以上版本识别；其它浏览器都不识别

```



# 优化
  1. 页面主题优化
  ```
  实事求是的写下自己网站的名字，网站的名字要合理，最好包含网站的主要内容。
  ```
  2. 页面头部优化
  ``` html
  <!-- 向搜索引擎说明你的网页的关键词； -->
  <meta name="keywords"   content="" />
  <!-- 告诉搜索引擎你的站点的主要内容； -->
  <meta name="description"    content=""/>
  <!-- 说明
	1、“描述”部分应该用近乎描述的语言写下一段介绍你网站的文字，在这其中，你应该适当的对你网站的特色内容加以重复以求突出；
	2、“关键字”部分应该列出你认为合适的，能突出网站内容的关键字就可以了，关键字不要设置太多，可设置10---8个，搜索引擎只会浏览靠前的几个关键字。 -->
  ```
  3. 超链接优化
  ```
  1、采用纯文本链接，少用，最好是别用Flash动画设置链接，因为搜索引擎无法识别Flash上的文字.
  2、按规范书写超链接，这个title属性，它既可以起到提示访客的作用，也可以让搜索引擎知道它要去哪里.
  3、最好别使用图片热点链接，理由和第一点差不多
  ```
  4. 图片优化
  ```
  图片优化并不是修改图片的大小、颜色，而是你应该为每个标签加上alt属性，alt属性的作用是当图片无法显示时以文字作为  替代显示出来，而对于SEO来说，它可以令搜索引擎有机会索引你网站上的图片，对于一些确实没什么意义的图片，最好也不要 省略alt，而应该留空，即 alt=""。
  ```
  5. PageRank（pr值,友情链接）
  ```
  PR值是Google提出的一个重要参数，它标明了某个网站的重要程度，那么pr值是如何确定的呢？目前普通的解释为：假如有  ABC三个网站，彼此互作友情链接，那么当一个访客通过A上的友情链接来到B时，Google就认为A为B投了“一票”，同理，如果 有人从C访问B，那么B又得一票，如果全世界的网站上都有B的友情链接，B就是世界上最重要的网站了！
  ```
## 扩展：回流(reflow)&重绘(repaint)
[什么是回流，什么是重绘，有什么区别？](https://www.jianshu.com/p/e081f9aa03fb)

