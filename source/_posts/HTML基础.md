---
title: HTML基础
category: 前端
tags: HTML
abbrlink: e173abca
date: 2018-02-24 09:56:49
cover:

---


# 网站的建站流程

[![6D69hQ.png](https://s3.ax1x.com/2021/03/15/6D69hQ.png)](https://imgtu.com/i/6D69hQ)

# 页面图例

[![6D6Z7T.jpg](https://s3.ax1x.com/2021/03/15/6D6Z7T.jpg)](https://imgtu.com/i/6D6Z7T)



# 网页的结构


[![6Dyv0f.png](https://s3.ax1x.com/2021/03/15/6Dyv0f.png)](https://imgtu.com/i/6Dyv0f)



# WEB标准

```txt
WEB标准是网页制作的标准，它不是一个标准，它是根据网页的不同组成部分生成的一系列标准。这些标准大部分由W3C起草发布，也有部分标准由ECMA起草发布
```

[![6Dyx78.png](https://s3.ax1x.com/2021/03/15/6Dyx78.png)](https://imgtu.com/i/6Dyx78)

```txt
（1）W3C( World Wide Web Consortium )万维网联盟，创建于1994年是Web技术领域最具权威和影响力的国际中立性技术标准机构；是专门负责网络标准制定的非赢利组织。制定了结构标准和样式标准；
（2）ECMA：欧洲电脑网商联合会（厂商协会），制定了行为标准；
```




# HTML

```txt
HTML 指的是超文本标记语言 (Hyper Text Markup Language) www万维网的描述性语言。

XHTML指可扩展超文本标记语言（标识语言）（EXtensible HyperText Markup Language）是一种置标语言，表现方式与超文本标记语言（HTML）类似，不过语法上更加严格。

HTML5指的是HTML的第五次重大修改（第5个版本）
```



## HTML发展

[![6D6ptg.png](https://s3.ax1x.com/2021/03/15/6D6ptg.png)](https://imgtu.com/i/6D6ptg)



## 编辑器

[![6D6Ppj.png](https://s3.ax1x.com/2021/03/15/6D6Ppj.png)](https://imgtu.com/i/6D6Ppj)



## 建立站点


+ 规划网站的所有内容和代码
+ 整合资源


## 文件的命名规范

+ 小写英文字母、数字、下划线的组合，
+ 其中不得包含汉字、空格和特殊字符；
+ 必须以英文字母开头。



# HTML开始

## HTML架构

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

有三种：  Strict（严格型)、Trasitional（过渡型）、Frameset（框架型）
```



## HTML5基本结构


[![6D6Fcn.png](https://s3.ax1x.com/2021/03/15/6D6Fcn.png)](https://imgtu.com/i/6D6Fcn)

## HTML语言

+ HTML语言组成

  + 标签
    + 写在尖角号<>里的第一个单词，叫做标记，也叫做标签，也称作元素；
      
  + 属性
    + 标记和属性用空格隔开，属性和属性值用等号连接，属性值必须放在双引号内一个标记可以有多个属性，属性和属性之间用空格隔开，属性不分先后顺序
      

+ **HTML语法**

  + 常规标记(双标记)：
    <标记名称 属性1名="属性1值" 属性2名="属性2值" ………… ></标记名>
  + 空标记（单标记）：<标记名 属性1名="属性1值" />



# 常用标签

## 文本标题标签

``` html
文本标题共有6个（h1-h6）
<h1>一级标题</h1>(唯一性,放网站LOGO)
<h2>二级标题</h2>
...
<h6>六级标题</h6> 
```



## 字体倾斜&加粗标记

``` html
文本倾斜:
	<i></i>
	<em></em>
	
文本加粗：
	<b></b>
	<strong></strong>
```



## 下划线&删除线

``` html
<u></u> 下划线
<del></del> 删除线
```



## 换行&水平线

``` html
<br>
<hr>
```



## 上标&下标

``` html
<sup></sup>
<sub></sub>
```



## 段落标记

``` html
<p></p>
```



## 字符 （ 小段文本 ）

``` html
<span></span>
```



## 常用转义字符

```txt
&nbsp;     空格
&gt;       >右尖括号
&lt;       <左尖括号
&copy;     备案中图标版权 ©
```



## 列表

（1） 无序列表

``` html	
<ul>
    <li>列表项内容</li>
    <li>列表项内容</li>
    <li>列表项内容</li>
</ul>
```



（2）有序列表

``` html
<ol>
    <li>列表项内容</li>
    <li>列表项内容</li>
    <li>列表项内容</li>
</ol>

type:规定列表中的列表项目的项目符号的类型
语法：<ol type=“ a"></ol>
1 数字顺序的有序列表（默认值）（1, 2, 3, 4）。
a 字母顺序的有序列表，小写（a, b, c, d）。
A 字母顺序的有序列表，大写（A,B,C,D)
i 罗马数字，小写（i, ii, iii, iv）。
I 罗马数字，大写（i, ii, iii, iv）。

start 属性规定有序列表的开始点。(start的属性值必须是数字)
语法：<ol start="5"></ol>

```

​（3）自定义列表

``` html
<dl>
	<dt></dt>
	<dd></dd>
</dl>
```



## 超链接

```txt
<a></a>
	属性：
		href = 'url'
		target = "_blank  /表示的是新窗口打开（打开新的标签页）  _self" 默认的，表示的是当前的窗口打开
		title = '文本提示'
		
	拓展：
		rel = 'nofollow'; 告诉搜索引擎不要此网页上的链接或不要追踪此特定链接
```

## 图片

``` html
<img>
	属性：
		src = 'url';
		alt = ' 标签 实例 带有指定替代文本的图像'  
        title = '文本提示'
		width = ''
		height = ''
		border = ''
```

## 图片 title 和 alt区别：

```txt
	alt:
        1、alt属性是考虑到不支持图像显示或者图像显示被关闭的浏览器的用户，以及视觉障碍的用户和使用屏幕阅读器的用户。当图片不显示的时候，图片的替换文字。
        2、alt属性值得长度必须少于100个英文字符
        3、alt属性是img标签的必须属性，如果没有特别意义的图片，可以写alt=""
        4、alt属性是搜索引擎判断图片与文字是否相关的重要依据，alt属性添加到img主要的目的才是为了SEO
        
    title:
    	1、title属性并不是必须的。
        2、title属性规定元素的额外信息，有视觉效果，当鼠标放到文字或是图片上时有文字显示。
        3、title属性并不作为搜索引擎抓取图片的参考，更多倾向于用户体验的考虑。
```

## 相对路径

```txt
（同级）
	1)当当前文件与目标文件在同一目录下，直接书写目标文件的文件名+扩展名；
（上级找下级）
	2)当当前文件与目标文件所处的文件夹在同一目录下，写法如下：
	文件夹名/目标文件全称+扩展名；
（下级找上级）
	3)当当前文件所处的文件夹和目标文件在同一目录下，写法如下：
	../目标文件文件名+扩展名；
```

## DIV
``` html
<div></div>
```



## HTML注释

``` html
<!-- 注释 -->  	ctrl+/ 
```



# 表格

[![6D6i1s.png](https://s3.ax1x.com/2021/03/15/6D6i1s.png)](https://imgtu.com/i/6D6i1s)

## 表格基本结构

``` html
<table>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>

<!-- 
	table 为表格
	tr 行
	td 列（每一个单元格）
-->
```



## 表格的html属性

```txt
1）width="表格的宽度"
2）height="表格的高度"
3）border="表格的边框"
4）bordercolor="边框色"
5）cellspacing="单元格与单元格之间的间距"
6）cellpadding=“单元格与内容之间的距离"
7）align="表格水平对齐方式"
   取值：left 左边、right 右边、center 居中、
   valign=“垂直对齐” top 上边\bottom 下边\middle 居中
8）合并单元格属性：(td)
  合并列： colspan=“所要合并的单元格的列数"
  合并行： rowspan=“要合并单元格的行数”
```





# 表单

**表单的作用：获取用户信息的**

## 表单标签

``` html
<form></form>
	属性 ： 
		action = '接口地址'
		method = 'get / post'
		name = '表单名称'
```



## 表单控件

``` html
<input>
	属性：
		type = '控件类型'
		name：属性标识表单域的名称；
		Value：属性定义表单域的默认值，其他属性根据type的不同而有所变化。
		maxlength：控制最多输入的字符数，
		Size：控制框的宽度（以字符为单位）



1)文本框
	<input type="text" value="默认值"/>
2)密码框
	<input type="password" />
3)提交按钮
	<input type="submit" value="按钮内容" />
4)重置按钮
	<input type="reset" value="按钮内容" />
5)空按钮
	<input type="button" value="按钮内容" />
```







# 拓展：post/get

+ 从功能上讲，GET一般用来从服务器上获取资源，POST一般用来更新服务器上的资源；
+ 从REST服务角度上说，GET是幂等的，即读取同一个资源，总是得到相同的数据，而POST不是幂等的，因为每次请求对资源的改变并不是相同的；进一步地，GET不会改变服务器上的资源，而POST会对服务器资源进行改变；
+ 从请求参数形式上看，GET请求的数据会附在URL之后，即将请求数据放置在HTTP报文的 请求头 中，以?分割URL和传输数据，参数之间以&相连。特别地，如果数据是英文字母/数字，原样发送；否则，会将其编码为 application/x-www-form-urlencoded MIME 字符串(如果是空格，转换为+，如果是中文/其他字符，则直接把字符串用BASE64加密，得出如：%E4%BD%A0%E5%A5%BD，其中％XX中的XX为该符号以16进制表示的ASCII)；而POST请求会把提交的数据则放置在是HTTP请求报文的 请求体 中。
+ 就安全性而言，POST的安全性要比GET的安全性高，因为GET请求提交的数据将明文出现在URL上，而且POST请求参数则被包装到请求体中，相对更安全。
+ 从请求的大小看，GET请求的长度受限于浏览器或服务器对URL长度的限制，允许发送的数据量比较小，而POST请求则是没有大小限制的。





# 表格补充

## 数据行分组

``` html
<thead></thead>
<tbody></tbody>
<tfoot></tfoot>
```



## 数据列分组

``` html
<colgroup span="value"></colgroup>
<col />
<!--span属性为把几列分为一组-->
1）col和colgroup元素会根据从左到右的顺序依次对数据表格进行分组。
2）span属性显示指定相邻几列组成一组，span属性值默认为1，默认时仅定义一列为一组。
3）可以通过给table添加rules="groups"属性来给分组列添加组分割线。
４）rules="groups/rows/cols/all/none"    添加组分隔线 加给table标签上
说明：
rows:位于行之间的线条
cols:位于列之间的线条
all：位于行和列之间的线条
none:没有线条
groups:位于行组和列组之间的线条

注意：虽然col和colgroup具有相同的功能，但是，我们只能使用colgroup元素来设置表格内容部分分割线（rules）应该处于的位置，而col没有这个功能。
```



## 列标题

```html
<th></th>
```

## 表格标题

``` html
<caption></caption>
表格标题位置：caption-side:top/right/bottom/left
说明：定义表格的caption对象放于表格的哪个位置，与caption对象一起使用；
  top为默认值；
  left,right位置只有火狐识别，
  top,bottom IE6以上版本支持，IE6以下        版本不支持其它属性值，只识别top;
```



## 表格属性

**1、单元格间距：border-spacing:value;**

​			说明：单元格间距(该属性必须给table添加) 表示单元格边框之间的距离， 不可取负值

**2、合并相邻单元格边框：border-collapse:separate/collapse;**

​			说明：合并相邻单元格边框 (该属性必须给table添加) separate(边框分开)默认值； collapse(边框合并)

**3、无内容时单元格的设置：empty-cells:show/hide;**

​		   说明：定义当单元格无内容时，是否显示该单元格的边框区域；show：显示 ；hide：隐藏；

**注，不能和****border-collapse：collapse一起使用，否则无效

**4、显示单元格行和列的算法(加快运行的速度)： table-layout:auto/fixed;**



[![6DyjnP.png](https://s3.ax1x.com/2021/03/15/6DyjnP.png)](https://imgtu.com/i/6DyjnP)

[![6D6En0.png](https://s3.ax1x.com/2021/03/15/6D6En0.png)](https://imgtu.com/i/6D6En0)

# 表单补充

```
1）单选按钮组
    <input type=“radio” name=“ral” />男
    <input type=“radio” name=“ral”
    checked=“checked”/>(默认选中)女
2）复选框组
    <input type="checkbox" name="" />
    <input type="checkbox" name="" disabled="disabled" />
     *  disabled="disabled" (禁用)
     *  checked="checked"   (默认选中)
3）下拉列表（菜单）内联块元素：
	<select >
   		<option>下拉选项1</option>
   		<option>下拉选项2</option>
   		…………
	</select>
	表示下拉列表，name属性不是必须的
	默认选择项用selected属性；
4）表单域多行文本定义（内联块）：
	语法:	<textarea name=""  cols=""  rows="" ></textarea>
	多行文本。rows属性和cols属性用来设置文本输入窗口的高度和宽度，单位是字符。
	阻止浏览器对窗口的拖动设置:{resize:none;}（css属性）
5)上传文件：
	语法：<input type="file">
```

## 表单标签

``` html
1）表单字段集
语法：<fieldset></fieldset>

说明：相当于一个方框，在字段集中可以包含文本和其他元素。该元素用于对表单中的元素进行分组并在文档中区别标出文本。fieldset元素可以嵌套，在其内部可以在设置多个fieldset对象。

2）字段集标题：
语法：<legend align="left/center/right/justify"></legend>
说明：legend元素可以在fieldset对象绘制的方框内插入一个标题。legend元素必须是fieldset内的唯一个元素。
3)提示信息标签：
语法：<label for="绑定控件id名"></label>
		<input tpye="radio" id="绑定控件id名" />

说明：label元素用来定义标签，为页面上的其他元素指定提示信息。要将label元素绑定到其他的控件上，可以将label元素的for属性设置为与该控件的id属性值相同。

4)定义选项组：
<optgroup label="组名"></optgroup>
用于组合选项。当使用一个长的选项列表时，对相关的选项进行组合会使处理更加容易。
例如：
         <select>
	    <optgroup label="西安">
		<option>雁塔区</option>
		<option>灞桥区</option>
		<option>高新区</option>
	    </optgroup>
         </select>

```



[![6D6VBV.png](https://s3.ax1x.com/2021/03/15/6D6VBV.png)](https://imgtu.com/i/6D6VBV)