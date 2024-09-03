---
title: Javascript基础
abbrlink: b18b9acc
date: 2019-02-27 20:35:09
tags: JavaScript
category: 前端
cover: 

---



# JavaScript发展历史

```txt
1. 1994年，网景公司(Netscape)发布了Navigator浏览器0.9版，这是世界上第一款比较成熟的网络浏览器，轰动一时。但是这是一款名副其实的浏览器--只能浏览页面，浏览器无法与用户互动,当时解决这个问题有两个办法，一个是采用现有的语言,许它们直接嵌入网页。另一个是发明一种全新的语言。
	liveScript ==> javaScript ==> ECMAscript

2. 1995年Sun公司将Oak语言改名为Java，正式向市场推出。Sun公司大肆宣传，许诺这种语言可以"一次编写，到处运行"(Write Once, Run Anywhere)，它看上去很可能成为未来的主宰。

3. 网景公司动了心，决定与Sun公司结成联盟

4. 34岁的系统程序员Brendan Eich登场了。1995年4月，网景公司录用了他,他只用10天时间就把Javascript设计出来了。（多肽语言）

5.  (1)借鉴C语言的基本语法;
    (2)借鉴Java语言的数据类型和内存管理;
    (3)借鉴Scheme语言，将函数提升到"第一等公民"(first class)的地位;
    (4)借鉴Self语言，使用基于原型(prototype)的继承机制。

JavaScript兼容于ECMA标准，通常也称为ECMAScript
ECMAScript（简称ES）版本名称了解：
1997年7月，ECMAScript 1.0发布。
1998年6月，ECMAScript 2.0版发布。
1999年12月，ECMAScript 3.0版发布，成为JavaScript的通行标准，得到了广泛支持。（ES3）
2008年7月ECMAScript 4.0版本比较激进被废弃，替代方案将现有功能小幅度升级发布为ECMAScript 3.1，之后改名为ECMAScript 5，所以各类文章所说的ECMAScript 3.1等同于ECMAScript 5（ES5）
2011年6月，ECMAscript 5.1版发布，到了2012年底，所有主要浏览器都支持ECMAScript 5.1版的全部功能。
在这之后，版本发布规则发生变化， 标准委员会决定，标准在每年的6月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的6月份，草案就自然变成了新一年的版本，只要用年份标记就可以了。
2015年6月发布了ECMAScript 6.0 版本正式名称就是《ECMAScript 2015标准》（简称 ES2015）-> ES6
2016年6月小幅修订的《ECMAScript 2016标准》如期发布（简称 ES2016）
2017（简称 ES2017）
......
```

# JavaScript是什么

```
JavaScript是一种基于对象（Object）和事件驱动（Event Driven）的弱类型脚本语言，使用JavaScript可以轻松的实现与HTML的交互操作，并且完成丰富的页面交互效果

基于对象：
指的是程序的内部已经为用户提供好了若干个对象，用户直接使用这些对象即可。

面向对象：
java属于面向对象的语言，面向对象是指用户自己定义类，对象需要用户自己产生。

脚本：凡是不能独立执行需要依赖其他程序的，通常都叫做脚本。

弱类型：允许变量类型的隐式转换，允许强制类型转换
```



# JavaScript能干什么

```txt
1. 常见的网页效果【表单验证，轮播图...】
2. 与H5配合实现游戏【水果忍者： http://www.jq22.com/demo/html5-fruit-ninja/】
3. 实现应用级别的程序【http://naotu.baidu.com】
4. 实现统计效果【http://echarts.baidu.com/examples/】
5. 地理定位等功能【http://lbsyun.baidu.com/jsdemo.htm#i4_5】
6. 在线学编程【https://codecombat.163.com/play/】
7. js可以实现人工智能【面部识别】
8. ...
```



# JavaScript特点 

```
(1)脚本语言。JavaScript是一种解释型的脚本语言,C、C++等语言先编译后执行,而JavaScript是在程序的运行过程中逐行进行解释。
(2)基于对象。JavaScript是一种基于对象的脚本语言,它不仅可以创建对象,也能使用现有的对象。
(3)简单。JavaScript语言中采用的是弱类型的变量类型,对使用的数据类型未做出严格的要求,是基于Java基本语句和控制的脚本语言,其设计简单紧凑。
(4)动态性。JavaScript是一种采用事件驱动的脚本语言,它不需要经过Web服务器就可以对用户的输入做出响应。在访问一个网页时,鼠标在网页中进行鼠标点击或上下移、窗口移动等操作JavaScript都可直接对这些事件给出相应的响应。
(5)跨平台性。JavaScript脚本语言不依赖于操作系统,仅需要浏览器的支持。因此一个JavaScript脚本在编写后可以带到任意机器上使用,前提上机器上的浏览器支持JavaScript脚本语言,目前JavaScript已被大多数的浏览器所支持。
```



# JavaScript的组成

```txt
1. ECMASCRIPT: 定义了javascript的语法规范,描述了语言的基本语法和数据类型
2. BOM (Browser Object Model): 浏览器对象模型
   有一套成熟的可以操作浏览器的 API，通过 BOM 可以操作浏览器。比如： 弹出框、浏览器跳转、获取分辨率等
3. DOM (Document Object Model): 文档对象模型
   有一套成熟的可以操作页面元素的 API，通过 DOM 可以操作页面中的元素。比如： 增加个 div，减少个 div，给div 换个位置等
```

总结： **JS 就是通过固定的语法去操作 浏览器 和 标签结构 来实现网页上的各种效果**



# JavaScript代码的书写位置

- 和 `css` 一样，我们的 `js` 也可以有多种方式书写在页面上让其生效
- `js` 也有多种方式书写，分为 **行内式**， **内嵌式**，**外链式**



## 行内式 JS 代码（不推荐）

- 写在标签上的 js 代码需要依靠事件（行为）来触发

  ```html
  <!-- 写在 a 标签的 href 属性上 -->
  <a href="javascript:alert('我是一个弹出层');">点击一下试试</a>

  <!-- 写在其他元素上 -->
  <div onclick="alert('我是一个弹出层')">点一下试试看</div>

  <!-- 
  	注：onclick 是一个事件（点击事件），当点击元素的时候执行后面的 js 代码
  -->
  ```



## 内嵌式 JS 代码

- 内嵌式的 js 代码会在页面打开的时候直接触发

  ```html
  <!-- 在 html 页面书写一个 script 标签，标签内部书写 js 代码 -->
  <script type="text/javascript">
  	alert('我是一个弹出层')
  </script>

  <!-- 
  	注：script 标签可以放在 head 里面也可以放在 body 里面
  -->
  ```



## 外链式 JS 代码（推荐）

- 外链式 js 代码只要引入了 html 页面，就会在页面打开的时候直接触发
- 新建一个 `.js` 后缀的文件，在文件内书写 js 代码，把写好的 js 文件引入 html 页面

  ```javascript
  // 我是 index.js 文件
  alert('我是一个弹出层')
  ```

  ```html
  <!-- 我是一个 html 文件 -->

  <!-- 通过 script 标签的 src 属性，把写好的 js 文件引入页面 -->
  <script src="index.js"></script>

  <!-- 一个页面可以引入多个 js 文件 -->
  <script src="index1.js"></script>
  <script src="index2.js"></script>
  <script src="index3.js"></script>
  ```



# 常用输出/调试方法

- alert( ) 浏览器弹窗，弹出的内容就是（）括号中的内容 
- document.write( ) 向文档写入字符串、html 或 javascript代码 
- console.log( ) 在控制台打印相关信息 
- 注意：调试代码应当从最终的产品代码中删除掉 

# JS 中的注释

- 学习一个语言，先学习一个语言的注释，因为注释是给我们自己看的，也是给开发人员看的
- 写好一个注释，有利于我们以后阅读代码



## 单行注释

- 一般就是用来描述下面一行代码的作用
- 可以直接写两个 `/` ，也可以按 `ctrl + /`

  ```javascript
  // 我是一个单行注释

  // 下面代码表示在浏览器里面出现一个弹出层
  alert('我是一个弹出层')
  ```



## 多行注释

- 一般用来写一大段话，或者注释一段代码
- 可以直接写 `/**/` 然后在两个星号中间写注释，也可以按 shift + ctrl + / 

  ```javascript
  /*
  	我是一个多行注释
  */

  /*
  	注释的代码不会执行
  	alert('我是一个弹出层')
  	alert('我是一个弹出层')
  */
  alert('我是一个弹出层')
  ```





# 变量

- 变量指的是在程序中保存数据的一个容器
- 变量是计算机内存中存储数据的标识符，根据变量名称可以获取到内存中存储的数据
- 也就是说，我们向内存中存储了一个数据，然后要给这个数据起一个名字，为了是我们以后再次找到他
- 语法： `var 变量名 = 值`



## 定义变量及赋值

```javascript
// 定义一个变量
var num;

// 给一个变量赋值
num = 100;

// 定义一个变量的同时给其赋值
var num2 = 200;
```

- 注意：
  1. 一个变量名只能存储一个值
  2. 当再次给一个变量赋值的时候，前面一次的值就没有了
  3. 变量名称区分大小写（JS 区分大小写）



## 变量的命名规则和命名规范

- 规则： 必须遵守的，不遵守就是错
  1. 一个变量名称可以由 **数字**、**字母**、**下划线（_）**、**美元符号（$）** 组成
  2. 严格区分大小写
  3. 不能由数字开头，不要使用中文汉字命名
  4. 不能是 **保留字** 或者 **关键字**
  5. 不要出现空格
- 规范： 建议遵守的（开发者默认），不遵守不会报错
  1. 变量名尽量有意义（语义化）
  2. 遵循驼峰命名规则，由多个单词组成的时候，从第二个单词开始首字母大写

## JavaScript关键字 

```
关键字可用于表示控制语句的开始或结束，或用于执行特定操作等。
按照规则，关键字也是语言保留的，不能用作标识符！
break        do          try           typeof
case         else        new           instanceof
catch        in          return        var
continue     for         switch        while
function     this        with          default
if           throw       delete        ......
```

## JavaScript保留字 

```
保留字有可能在将来被用作关键字来使用，不能用作标识符！
abstract     int          short         boolean
export       interface    static        byte
extends      long         super         char
final        native       class         float
throws       const        goto          private
double       import       public        ......
```



---



# 数据类型（重点）

- 是指我们存储在内存中的数据的类型
- 我们通常分为两大类 **基本数据类型** 和 **复杂数据类型**



## 基本数据类型

1. 数值类型（number）
   - 一切数字都是数值类型（包括二进制，十进制，十六进制等）
   - NaN（not a number），一个非数字
2. 字符串类型（string）
   - 被引号包裹的所有内容（可以是单引号也可以是双引号）
3. 布尔类型（boolean）
   - 只有两个（true 或者 false）
4. null类型（null）
   - 只有一个，就是 null，表示空的意思
5. undefined类型（undefined）
   - 只有一个，就是 undefined，表示没有值的意思



## 复杂数据类型（暂时先不讲）

1. 对象类型（object）
2. 函数类型（function）
3. 。。。



## 判断数据类型

- 既然已经把数据分开了类型，那么我们就要知道我们存储的数据是一个什么类型的数据
- 使用 `typeof` 关键字来进行判断

```javascript
// 第一种使用方式
var n1 = 100;
console.log(typeof n1);

// 第二种使用方式
var s1 = 'abcdefg';
console.log(typeof(s1));
```



### 判断一个变量是不是数字

- 可以使用 `isNaN` 这个方法来判断一个变量是不是数字
- `isNaN` ：is not a number

```javascript
// 如果变量是一个数字
var n1 = 100;
console.log(isNaN(n1)); //=> false

// 如果变量不是一个数字
var s1 = 'Jack'
console.log(isNaN(s1)); //=> true
```



## 数据类型转换

- 数据类型之间的转换，比如数字转成字符串，字符串转成布尔，布尔转成数字等



### 其他数据类型转成数值

1. `Number(变量)`

   - 可以把一个变量强制转换成数值类型
   - 可以转换小数，会保留小数
   - 可以转换布尔值
   - 遇到不可转换的都会返回 NaN
2. `parseInt(变量)`

   - 从第一位开始检查，是数字就转换，知道一个不是数字的内容
   - 开头就不是数字，那么直接返回 NaN
   - 不认识小数点，只能保留整数
3. `parseFloat(变量)`

   - 从第一位开始检查，是数字就转换，知道一个不是数字的内容

   - 开头就不是数字，那么直接返回 NaN

   - 认识一次小数点
4. 除了加法以外的数学运算

   - 运算符两边都是可运算数字才行
   - 如果运算符任何一遍不是一个可运算数字，那么就会返回 NaN
   - 加法不可以用
5. Number.toFixed(n) 方法可把 Number 四舍五入保留n位小数 



### 其他数据类型转成字符串

1. `变量.toString()`
   - 有一些数据类型不能使用 `toString()` 方法，比如 undefined 和 null
2. `String(变量)`
   - 所有数据类型都可以
3. 使用加法运算
   - 在 JS 里面，`+` 由两个含义
   - 字符串拼接： 只要 `+` 任意一边是字符串，就会进行字符串拼接
   - 加法运算：只有 `+` 两边都是数字的时候，才会进行数学运算



### 其他数据类型转成布尔

1. `Boolean(变量)`
   - 在 js 中，只有 `''`、`0`、`null`、`undefined`、`NaN`，这些是 false，其余都是 true



---



# 运算符

- 就是在代码里面进行运算的时候使用的符号，不光只是数学运算，我们在 js 里面还有很多的运算方式



## 数学运算符

1. `+`

   - 只有符号两边都是数字的时候才会进行加法运算
   - 只要符号任意一边是字符串类型，就会进行字符串拼接

2. `-`

   - 会执行减法运算

   - 会自动把两边都转换成数字进行运算

3. `*`

   - 会执行乘法运算
   - 会自动把两边都转换成数字进行运算

4. `/`

   - 会执行除法运算
   - 会自动把两边都转换成数字进行运算

5. `%`

   - 会执行取余运算
   - 会自动把两边都转换成数字进行运算



## 赋值运算符

1. `=`

   - 就是把 `=` 右边的赋值给等号左边的变量名
   - `var num = 100`
   - 就是把 100 赋值给 num 变量
   - 那么 num 变量的值就是 100

2. `+=`

   ```javascript
   var a = 10;
   a += 10;
   console.log(a); //=> 20
   ```

   - `a += 10` 等价于 `a = a + 10`

3. `-=`

   ```javascript
   var a = 10;
   a -= 10;
   console.log(a); //=> 0
   ```

   - `a -= 10` 等价于 `a = a - 10`

4. `*=`

   ```javascript
   var a = 10;
   a *= 10;
   console.log(a); //=> 100
   ```

   - `a *= 10` 等价于 `a = a * 10`

5. `/=`

   ```javascript
   var a = 10;
   a /= 10;
   console.log(a); //=> 1
   ```

   - `a /= 10` 等价于 `a = a / 10`

6. `%=`

   ```javascript
   var a = 10;
   a %= 10;
   console.log(a); //=> 0
   ```

   - `a %= 10` 等价于 `a = a % 10`



##  比较运算符

1. `==`
   - 比较符号两边的值是否相等，不管数据类型
   - `1 == '1'`
   - 两个的值是一样的，所以得到 true
2. `===`
   - 比较符号两边的值和数据类型是否都相等
   - `1 === '1'`
   - 两个值虽然一样，但是因为数据类型不一样，所以得到 false
3. `!=`
   - 比较符号两边的值是否不等
   - `1 != '1'`
   - 因为两边的值是相等的，所以比较他们不等的时候得到 false
4. `!==`
   - 比较符号两边的数据类型和值是否不等
   - `1 !== '1'`
   - 因为两边的数据类型确实不一样，所以得到 true
5. `>=`
   - 比较左边的值是否 大于或等于 右边的值
   - `1 >= 1`  true
   - `1 >= 0`  true
   - `1 >= 2`  false
6. `<=`
   - 比较左边的值是否 小于或等于 右边的值
   - `1 <= 2`  true
   - `1 <= 1`  true
   - `1 <= 0`  false 
7. `>`
   - 比较左边的值是否 大于 右边的值
   - `1 > 0`  true
   - `1 > 1`  false
   - `1 > 2`  false
8. `<`
   - 比较左边的值是否 小于 右边的值
   - `1 < 2`  true
   - `1 < 1` false
   - `1 < 0` false



## 逻辑运算符 

1. `&&`
   - 进行 且 的运算
   - 符号左边必须为 true 并且右边也是 true，才会返回 true
   - 只要有一边不是 true，那么就会返回 false
   - `true && true`  true
   - `true && false`  false
   - `false && true`  false
   - `false && false`  false
2. `||`
   - 进行 或 的运算
   - 符号的左边为 true 或者右边为 true，都会返回 true
   - 只有两边都是 false 的时候才会返回 false
   - `true || true`  true
   - `true || false`  true
   - `false || true`  true
   - `false || false`  false
3. `!`
   - 进行 取反 运算
   - 本身是 true 的，会变成 false
   - 本身是 false 的，会变成 true
   - `!true`  false
   - `!false`  true



## 自增自减运算符（一元运算符）

1. `++`

   - 进行自增运算

   - 分成两种，**前置++** 和 **后置++**

   - 前置++，会先把值自动 +1，在返回

     ```javascript
     var a = 10;
     console.log(++a);
     // 会返回 11，并且把 a 的值变成 11
     ```

   - 后置++，会先把值返回，在自动+1

     ```javascript
     var a = 10;
     console.log(a++);
     // 会返回 10，然后把 a 的值变成 11
     ```

2. `--`

   - 进行自减运算
   - 分成两种，**前置--** 和 **后置--**
   - 和 `++` 运算符道理一样

## 进制介绍 

```javascript
//进制也就是进位计数制，是人为定义的带进位的计数方法。
//十六进制是逢十六进一，十进制是逢十进一，八进制是逢八进一，二进制就是逢二进一 ...
//在javaScript中进制之间的转换提供了两个非常好用的方法：toString()、parseInt()。

//使用 toString() 方法把十进制转为其他进制：
var  x = 28;// 10进制
console.log(x.toString(2)); //把十进转为2进制  
console.log(x.toString(8));//把十进转为8进制  
console.log(x.toString(16));//把十进转为16进制  

//使用 parseInt() 方法把其他进制转为十进制：
var x = "110";//二进制的字符串
console.log(parseInt(x, 2));//把这个字符串当做二进制，转为十进制  

var x = "070";//八进制的字符串
console.log(parseInt(x, 8));//把这个字符串当做八进制，转为十进制  

var x = "0x1c";//十六进制的字符串
console.log(parseInt(x, 16));//把这个字符串当做十六进制，转为十进制  

//parseInt()方法，第一个参数为要转换的字符串，第二个参数指定字符串的进制，默认为十进制
//其他进制的相互转换，先使用parseInt变为十进制， 在利用toString变为其他进制。
//在javaScript中，八进制以 0 开头，十六进制以 0x 开头，可省略。
```

## 运算符优先级 

[![620xk6.png](https://s3.ax1x.com/2021/03/18/620xk6.png)](https://imgtu.com/i/620xk6)

[![620jTx.png](https://s3.ax1x.com/2021/03/18/620jTx.png)](https://imgtu.com/i/620jTx)

[![620ztK.png](https://s3.ax1x.com/2021/03/18/620ztK.png)](https://imgtu.com/i/620ztK)

[![620X01.png](https://s3.ax1x.com/2021/03/18/620X01.png)](https://imgtu.com/i/620X01)

[![620OmR.png](https://s3.ax1x.com/2021/03/18/620OmR.png)](https://imgtu.com/i/620OmR)


---


# 程序的三大结构 

+ 顺序结构 
+ 选择结构  
+ 循环结构 


## 分支结构(选择结构)

- 我们的 js 代码都是顺序执行的（从上到下）
- 逻辑分支就是根据我们设定好的条件来决定要不要执行某些代码



### IF 条件分支结构

#### if 语句

- 通过一个 if 语句来决定代码执行与否

- 语法： `if (条件) { 要执行的代码 }`

- 通过 `()` 里面的条件是否成立来决定 `{}` 里面的代码是否执行

  ```javascript
  // 条件为 true 的时候执行 {} 里面的代码
  if (true) {
    alert('因为条件是 true，我会执行')
  }
  
  // 条件为 false 的时候不执行 {} 里面的代码
  if (false) {
  	alert('因为条件是 false，我不会执行')    
  }
  ```



#### if else 语句

- 通过 if 条件来决定，执行哪一个 `{}` 里面的代码

- 语法： `if (条件) { 条件为 true 的时候执行 } else { 条件为 false 的时候执行 }`

- 两个 `{}` 内的代码一定有一个会执行

  ```javascript
  // 条件为 true 的时候，会执行 if 后面的 {} 
  if (true) {
    alert('因为条件是 true，我会执行')
  } else {
    alert('因为条件是 true，我不会执行')
  }
  
  // 条件为 false 的时候，会执行 else 后面的 {}
  if (false) {
    alert('因为条件为 false，我不会执行')
  } else {
    alert('因为条件为 false，我会执行')
  }
  
  ```



#### if else if ... 语句

- 可以通过 if 和 else if 来设置多个条件进行判断

- 语法：`if (条件1) { 条件1为 true 的时候执行 } else if (条件2) { 条件2为 true 的时候执行 }`

- 会从头开始依次判断条件

  - 如果第一个条件为 true 了，那么就会执行后面的 `{}` 里面的内容
  - 如果第一个条件为 false，那么就会判断第二个条件，依次类推

- 多个 `{}` ，只会有一个被执行，一旦有一个条件为 true 了，后面的就不在判断了

  ```javascript
  // 第一个条件为 true，第二个条件为 false，最终会打印 “我是代码段1”
  if (true) {
    alert('我是代码段1')
  } else if (false) {
  	alert('我是代码段2')           
  }
  
  // 第一个条件为 true，第二个条件为 true，最终会打印 “我是代码段1”
  // 因为只要前面有一个条件满足了，就不会继续判断了
  if (true) {
    alert('我是代码段1')
  } else if (true) {
    alert('我是代码段2')
  }
  
  // 第一个条件为 false，第二个条件为 true，最终会打印 “我是代码段2”
  // 只有前一个条件为 false 的时候才会继续向后判断
  if (false) {
    alert('我是代码段1')
  } else if (true) {
    alert('我是代码段2')
  }
  
  // 第一个条件为 false，第二个条件为 false，最终什么也不会发生
  // 因为当所有条件都为 false 的时候，两个 {} 里面的代码都不会执行
  if (false) {
    alert('我是代码段1')
  } else if (false) {
    alert('我是代码段2')
  }
  ```



#### if else if … else 语句

- 和之前的 `if else if ...` 基本一致，只不过是在所有条件都不满足的时候，执行最后 else 后面的 `{}`

  ```javascript
  // 第一个条件为 false，第二个条件为 false，最终会打印 “我是代码段3”
  // 只有前面所有的条件都不满足的时候会执行 else 后面的 {} 里面的代码
  // 只要前面有一个条件满足了，那么后面的就都不会执行了
  if (false) {
    alert('我是代码段1')
  } else if (false) {
    alert('我是代码段2')
  } else {
    alert('我是代码段3')
  }
  ```

prompt(str1，str2)  弹出可输入的对话框

​	str1: 提示要显示在消息对话框中的文本

​	str2：文本框中的内容

返回值:

1. 点击确定按钮，文本框中的内容将作为函数的返回值
2. 点击取消按钮，将返回null 

### SWITCH 条件分支结构

- 也是条件判断语句的一种

- 是对于某一个变量的判断

- 语法：

  ```javascript
  switch (n) {
    case 情况1:
      情况1要执行的代码
      break
    case 情况2:
      情况2要执行的代码
      break
    case 情况3:
      情况3要执行的代码
      break
    default:
      上述情况都不满足的时候执行的代码
  }
  
  工作原理：
  首先设置表达式 n（通常是一个变量）。
  随后表达式的值会与结构中的每个 case 的值做比较。
  如果存在匹配，则与该 case 关联的代码块会被执行。
  使用 break 来阻止代码自动地向下一个 case 运行。
  注：break关键字会导致代码执行流跳出switch语句。
  ```

- 例子🌰： 根据变量给出的数字显示是星期几

  ```javascript
  var week = 1
  switch (week) {
    case 1:
      alert('星期一')
      break
    case 2:
      alert('星期二')
      break
    case 3:
      alert('星期三')
      break
    case 4:
      alert('星期四')
      break
    case 5:
      alert('星期五')
      break
    case 6:
      alert('星期六')
      break
    case 7:
      alert('星期日')
      break
    default:
      alert('请输入一个 1 ～ 7 之间的数字')
  }
  ```




### if...else if...else语句与switch case语句的比较：

范围：前者可以比较定值也可以比较范围

​           后者只能比较定值

效率：前者效率低（每一个表达式都要求值对比）

​           后者效率高（表达式只需要跟case中的一个匹配就可以）



## 三元运算（扩展）

- 三元运算，就是用 **两个符号** 组成一个语句

- 三元运算只是对 **if else** 语句的一个简写形式

- 语法： `条件 ? 条件为 true 的时候执行 : 条件为 false 的时候执行`

  ```javascript
  var age = 18;
  age >= 18 ? alert('已经成年') : alert('没有成年')
  ```




## 循环结构

```
循环：指事物周而复始地运动或变化。

在实际问题中有许多具有规律性的重复操作，因此在程序中就需要重复执行某些语句。

特征：
1.有规律性的重复操作
2.重复执行的代码极其相似

如：输出10次'hello world'

console.log('hello world 1');
console.log('hello world 2');
console.log('hello world 3');
......
console.log('hello world 10');

这样处理起来非常的费时费力，同时也会有非常多的冗余代码！

假如我要输出 100次 1000次 'hello world' 呢？？
```

### FOR 循环

```javascript
语法形式为：

for (表达式1; 表达式2; 表达式3) {
    循环体;
}

表达式1：为不参与循环的单次表达式，用来给循环控制变量赋初值
表达式2：一般是一个关系表达式，作为循环条件(设置终止值)
表达式3：一般为循环变量增量或减量(步长)
循环体：需要重复执行的代码

for (var i = 0; i < 5; i++) { // 增量循环
    console.log(i);
}

for (var i = 5; i >= 1; i--) {// 减量循环
    console.log(i);
}
```

[![62DYqA.png](https://s3.ax1x.com/2021/03/18/62DYqA.png)](https://imgtu.com/i/62DYqA)

注意：

- for()括号中的表达式皆可以省略，但分号不可省略。
- 省略了表达式2(循环条件), 若不做其它处理则成为死循环。
- 死循环：没有终止条件并一直执行的循环即为死循环。
- for循环的嵌套，可以简单的理解为行和列的关系。

#### 案例解析

```
面试题：
var a = 1
var b = 2
var c = (a,b)  
console.log(c) // c=2

var a = 1
var b = 2
var c = (a++,b)  
console.log(c) // c=2
console.log(a) // a=2


var k=0;
for(var i=0, v=0; i<6, v<9; i++, v++){
    k = i + v;
}
console.log(k);

var k=0;
for(var i=0, v=0; i<9, v<6; i+=2, v++){
k = i + v;
}
console.log(k);
```



### WHILE 循环

- `while`，中文叫 当…时，其实就是当条件满足时就执行代码，一旦不满足了就不执行了

- 语法 `while (条件) { 满足条件就执行 }`

- 因为满足条件就执行，所以我们写的时候一定要注意，就是设定一个边界值，不然就一直循环下去了

  ```javascript
  // 1. 初始化条件
  var num = 0;
  // 2. 条件判断
  while (num < 10) {
    // 3. 要执行的代码
    console.log('当前的 num 的值是 ' + num)
    // 4. 自身改变
    num = num + 1
  }
  ```

  - 如果没有自身改变，那么就会一直循环不停了



### DO WHILE 循环

- 是一个和 `while` 循环类似的循环

- `while` 会先进行条件判断，满足就执行，不满足直接就不执行了

- 但是 `do while` 循环是，先不管条件，先执行一回，然后在开始进行条件判断

- 语法： `do { 要执行的代码 } while (条件)`

  ```javascript
  // 下面这个代码，条件一开始就不满足，但是依旧会执行一次 do 后面 {} 内部的代码
  var num = 10
  do {
    console.log('我执行了一次')
    num = num + 1
  } while (num < 10)
  ```


for，while，  do while三个循环的区别

for 循环一般用在循环次数可以确定的情景。 

while 循环一般用在循环次数未知的情景。 

do while：先执行一次，在判断，也是不知道循环次数



### BREAK 终止循环

- 在循环没有进行完毕的时候，因为我设置的条件满足，提前终止循环

- 比如：我要吃五个包子，吃到三个的时候，不能在吃了，我就停止吃包子这个事情

- 要终止循环，就可以直接使用 `break` 关键字

  ```javascript
  for (var i = 1; i <= 5; i++) {
    // 没循环一次，吃一个包子
    console.log('我吃了一个包子')
    // 当 i 的值为 3 的时候，条件为 true，执行 {} 里面的代码终止循环
    // 循环就不会继续向下执行了，也就没有 4 和 5 了
    if (i === 3) {
      break
    }
  }
  ```

  

### CONTINUE 结束本次循环

- 在循环中，把循环的本次跳过去，继续执行后续的循环

- 比如：吃五个包子，到第三个的时候，第三个掉地下了，不吃了，跳过第三个，继续吃第四个和第五个

- 跳过本次循环，就可以使用 `continue` 关键字

  ```javascript
  for (var i = 1; i <= 5; i++) {
    // 当 i 的值为 3 的时候，执行 {} 里面的代码
    // {} 里面有 continue，那么本次循环后面的代码就都不执行了
    // 自动算作 i 为 3 的这一次结束了，去继续执行 i = 4 的那次循环了
    if (i === 3) {
      console.log('这个是第三个包子，掉地下了，我不吃了')
      continue
    }
    console.log('我吃了一个包子')
  }
  ```

  



- 我们代码里面所说的函数和我们上学的时候学习的什么三角函数、二次函数之类的不是一个东西

---


# 函数的概念及作用

[![62woMd.jpg](https://s3.ax1x.com/2021/03/18/62woMd.jpg)](https://imgtu.com/i/62woMd)


乔帮主有很多武功招式，每个武功招式都有不一样的效果 

[![62w5xH.jpg](https://s3.ax1x.com/2021/03/18/62w5xH.jpg)](https://imgtu.com/i/62w5xH)

降龙十八掌就是一个强大的武功招式，集结了十八条龙的能量，毁天灭地... 

总结：不同的武功招式，聚集了不同的能量需要的时候，通过某种固定的方式来释放武功招式 

- 通俗讲：函数就是可重复执行的代码块。
-  函数的作用：
  - 1.通过函数可以封装任意多条语句，以便在任何地方、任何时候调用；
  - 2.将代码编写在函数中，就可以避免在非必要情况下调用该代码。 
- 回顾上面的故事情节，函数 替换 武功招式，调用 替换 释放...... 

## 函数的两个阶段（重点）

- 按照我们刚才的说法，两个阶段就是 **放在盒子里面** 和 **让盒子里面的代码执行**



### 函数定义阶段

- 定义阶段就是我们把代码 **放在盒子里面**

- 我们就要学习怎么 **放进去**，也就是书写一个函数
- 我们有两种定义方式 **声明式** 和 **赋值式**



#### 声明式

- 使用 `function` 这个关键字来声明一个函数

- 语法：

  ```javascript
  function fn() {
    // 一段代码
  }
  // function: 声明函数的关键字，表示接下来是一个函数了
  // fn: 函数的名字，我们自己定义的（遵循变量名的命名规则和命名规范）
  // (): 必须写，是用来放参数的位置（一会我们再聊）
  // {}: 就是我们用来放一段代码的位置（也就是我们刚才说的 “盒子”）
  ```



#### 赋值式

- 其实就是和我们使用 `var` 关键字是一个道理了

- 首先使用 `var` 定义一个变量，把一个函数当作值直接赋值给这个变量就可以了

- 语法： 

  ```javascript
  var fn = function () {
    // 一段代码
  }
  // 不需要在 function 后面书写函数的名字了，因为在前面已经有了
  ```

  

### 函数调用阶段

- 就是让 **盒子里面** 的代码执行一下
- 让函数执行
- 两种定义函数的方式不同，但是调用函数的方式都是一样的



#### 调用一个函数

- 函数调用就是直接写 `函数名()` 就可以了

  ```javascript
  // 声明式函数
  function fn() {
    console.log('我是 fn 函数')
  }
  
  // 调用函数
  fn()
  
  // 赋值式函数
  var fn2 = function () {
    console.log('我是 fn2 函数')
  }
  
  // 调用函数
  fn2()
  ```

  - 注意： **定义完一个函数以后，如果没有函数调用，那么写在 {} 里面的代码没有意义，只有调用以后才会执行**



#### 调用上的区别

- 虽然两种定义方式的调用都是一样的，但是还是有一些区别的

- 声明式函数： 调用可以在 **定义之前或者定义之后**

  ```javascript
  // 可以调用
  fn()
  
  // 声明式函数
  function fn() {
    console.log('我是 fn 函数')
  }
  
  // 可以调用
  fn()
  ```

- 赋值式函数： 调用只能在 **定义之后**

  ```javascript
  // 会报错
  fn()
  
  // 赋值式函数
  var fn = function () {
    console.log('我是 fn 函数')
  }
  
  // 可以调用
  fn()
  ```


## 变量与函数提升

```
在js中只有两种作用域，全局作用域和函数作用域，在ES6之前，js是没有块级作用域。
JavaScript 仅提升声明，而不提升初始化。如果你先使用的变量，再声明并初始化它，变量的值将是 undefined。
注意：
	1:所有的声明都会提升到作用域的最顶上去。
	2:同一个变量只会声明一次，其他的会被忽略掉。
	3:函数声明的优先级高于变量申明的优先级，并且函数声明和函数定义的部分一起被提升。
变量提升的例子：

num = 6;
var num = 7;
var num;
console.log(num); // 不报错，输出7，也证明了变量只会声明一次，其他的会被忽略。

函数提升的例子：

catName();// 即使在声明之前调用依然可以执行，不会报错

function catName() {
    console.log("我的小猫 ");
}

在定义的函数名字和变量名相同的情况下，函数提升优先级高于变量的例子：

func(); // 1
var func;
function func() {
  console.log(1);
}
func = function() {
  console.log(2);
}

输出1，不会输出2。函数声明和变量声明都会被提升，但是需要注意的是函数会先被提升，然后才是变量。

var func;尽管出现在function func()之前，但它是重复的声明，会被忽略，因为函数声明会被提升到普通变量之前。

等同于这样：

function func() {
  console.log(1);
}
func(); // 1
func = function() {
  console.log(2);
}

var fn1= function () {
        console.log(2)
}
function fn1(){
    console.log(1)
}
fn1()
```

## 函数的参数

- 我们在定义函数和调用函数的时候都出现过 `()`

- 现在我们就来说一下这个 `()` 的作用

- 就是用来放参数的位置

- 参数分为两种 **行参** 和 **实参**

  ```javascript
  // 声明式
  function fn(行参写在这里) {
    // 一段代码
  }
  
  fn(实参写在这里)
  
  // 赋值式函数
  var fn = function (行参写在这里) {
    // 一段代码
  }
  fn(实参写在这里)
  ```



### 形参和实参的作用

1. 形参

   - 就是在函数内部可以使用的变量，在函数外部不能使用

   - 每写一个单词，就相当于在函数内部定义了一个可以使用的变量（遵循变量名的命名规则和命名规范）

   - 多个单词之间以 `,` 分隔

     ```javascript
     // 书写一个参数
     function fn(num) {
       // 在函数内部就可以使用 num 这个变量
     }
     
     var fn1 = function (num) {
     	// 在函数内部就可以使用 num 这个变量
     }
     
     // 书写两个参数
     function fun(num1, num2) {
       // 在函数内部就可以使用 num1 和 num2 这两个变量
     }
     
     var fun1 = function (num1, num2) {
       // 在函数内部就可以使用 num1 和 num2 这两个变量
     }
     ```

   - 如果只有行参的话，那么在函数内部使用的变量是没有值的，也就是 `undefined`

   - **行参的值是在函数调用的时候由实参决定的**

2. 实参

   - 在函数调用的时候给行参赋值的

   - 也就是说，在调用的时候是给一个实际的内容的

     ```javascript
     function fn(num) {
       // 函数内部可以使用 num 
     }
     
     // 这个函数的本次调用，书写的实参是 100
     // 那么本次调用的时候函数内部的 num 就是 100
     fn(100) 
     
     // 这个函数的本次调用，书写的实参是 200
     // 那么本次调用的时候函数内部的 num 就是 200
     fn(200)
     ```

   - **函数内部的行参的值，由函数调用的时候传递的实参决定**

   - **多个参数的时候，是按照顺序一一对应的**

     ```javascript
     function fn(num1, num2) {
       // 函数内部可以使用 num1 和 num2
     }
     
     // 函数本次调用的时候，书写的参数是 100 和 200
     // 那么本次调用的时候，函数内部的 num1 就是 100，num2 就是 200
     fn(100, 200)
     ```

     

### 参数个数的关系

1. 行参比实参少

   - 因为是按照顺序一一对应的

   - 行参少就会拿不到实参给的值，所以在函数内部就没有办法用到这个值

     ```javascript
     function fn(num1, num2) {
       // 函数内部可以使用 num1 和 num2
     }
     
     // 本次调用的时候，传递了两个实参，100 200 和 300
     // 100 对应了 num1，200 对应了 num2，300 没有对应的变量
     // 所以在函数内部就没有办法依靠变量来使用 300 这个值
     fn(100, 200, 300)
     ```

     

2. 行参比实参多

   - 因为是按照顺序一一对应的

   - 所以多出来的行参就是没有值的，就是 `undefined`

     ```javascript
     function fn(num1, num2, num3) {
       // 函数内部可以使用 num1 num2 和 num3
     }
     
     // 本次调用的时候，传递了两个实参，100 和 200
     // 就分别对应了 num1 和 num2
     // 而 num3 没有实参和其对应，那么 num3 的值就是 undefined
     fn(100, 200)
     ```


### arguments

`arguments`对象是所有（非箭头）函数中都可用的**局部变量**。你可以使用`arguments`对象在函数中引用函数的参数。此对象包含传递给函数的每个参数，第一个参数在索引0处。例如，如果一个函数传递了三个参数，你可以以如下方式引用他们： 

```
arguments[0]
arguments[1]
arguments[2]
//参数也可以被设置：
arguments[1] = 'new value';

```

`arguments`对象不是一个 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array) 。它类似于`Array`，但除了length属性和索引元素之外没有任何`Array`属性。 

可以借用arguments.length可以来查看实参和形参的个数是否一致 

```
function add(a, b) {
  var realLen = arguments.length;
  console.log("realLen:", arguments.length);
  var len = add.length;
  console.log("len:", add.length);
  if (realLen == len) {
  	console.log('实参和形参个数一致');
  } else {
  	console.log('实参和形参个数不一致');
  }
};
add(1,2,3,6,8);
```



## 函数的return（重点）

- return 返回的意思，其实就是给函数一个 **返回值** 和 **终断函数**



### 终断函数

- 当我开始执行函数以后，函数内部的代码就会从上到下的依次执行

- 必须要等到函数内的代码执行完毕

- 而 `return` 关键字就是可以在函数中间的位置停掉，让后面的代码不在继续执行

  ```javascript
  function fn() {
    console.log(1)
    console.log(2)
    console.log(3)
    
    // 写了 return 以后，后面的 4 和 5 就不会继续执行了
    return
    console.log(4)
    console.log(5)
  }
  
  // 函数调用
  fn()
  ```



### 返回值

- 函数调用本身也是一个表达式，表达式就应该有一个值出现

- 现在的函数执行完毕之后，是不会有结果出现的

  ```javascript
  // 比如 1 + 2 是一个表达式，那么 这个表达式的结果就是 3
  console.log(1 + 2) // 3
  
  function fn() {
    // 执行代码
  }
  
  // fn() 也是一个表达式，这个表达式就没有结果出现
  console.log(fn()) // undefined
  ```

- `return` 关键字就是可以给函数执行完毕一个结果

  ```javascript
  function fn() {
    // 执行代码
    return 100
  }
  
  // 此时，fn() 这个表达式执行完毕之后就有结果出现了
  console.log(fn()) // 100
  ```

  - 我们可以在函数内部使用 `return` 关键把任何内容当作这个函数运行后的结果



## 函数的优点

- 函数就是对一段代码的封装，在我们想调用的时候调用
- 函数的几个优点
  1. 封装代码，使代码更加简洁
  2. 复用，在重复功能的时候直接调用就好
  3. 代码执行时机，随时可以在我们想要执行的时候执行



## 预解析（重点）

- **预解析** 其实就是聊聊 js 代码的编译和执行
- js 是一个解释型语言，就是在代码执行之前，先对代码进行通读和解释，然后在执行代码
- 也就是说，我们的 js 代码在运行的时候，会经历两个环节 **解释代码** 和 **执行代码**



### 解释代码

- 因为是在所有代码执行之前进行解释，所以叫做 **预解析（预解释）**

- 需要解释的内容有两个

  - 声明式函数
    - 在内存中先声明有一个变量名是函数名，并且这个名字代表的内容是一个函数
    - 函数提升的是整个函数体
  - `var` 关键字
    - 在内存中先声明有一个变量名
    - 变量提升是只声明不赋值，值为`undefined`

- 看下面一段代码

  ```javascript
  fn()
  console.log(num)
  
  function fn() {
    console.log('我是 fn 函数')
  }
  
  var num = 100
  ```

- 经过预解析之后可以变形为

  ```javascript
  function fn() {
    console.log('我是 fn 函数')
  }
  var num
  
  fn()
  console.log(num)
  num = 100
  ```

- 赋值是函数会按照 `var` 关键字的规则进行预解析


### 预解析的无节操
  + if条件不管是否成立，里面的代码会进行预解析
  + return后面的代码虽然不会执行，但是会进行预解析
#### 两个坑
  - 作用域和预解析
  - this指向

``` javascript
// 案例1
var a = b = 20
a = 10
b = 10
console.log(a) // 10
console.log(b) // 10

// 案例2
var a = b // 在这一行就报错
a = 10
b = 10
console.log(a)
console.log(b)

// 案例3
fn()
var fn = 100
function fn(){
  fn = 200
}
console.log(fn) // 100

// 案例4
fn()
fn() // 报错：Uncaught TypeError: fn is not a function
var fn = 100
function fn(){
  fn = 200
}
console.log(fn)
```



## 作用域（重点）

- 什么是作用域，就是一个变量可以生效的范围
- 变量不是在所有地方都可以使用的，而这个变量的使用范围就是作用域



### 全局作用域

- 整个页面起作用，在script标签内都能访问到；

- 在全局作用域中有全局对象window，代表一个浏览器窗口，由浏览器创建，可以直接调用；

- 全局作用域中声明的变量和函数，会作为window对象的属性和方法保存；

- 变量在函数外声明，即为全局变量，拥有全局作用域。 

  ```javascript
   var a = 123;//全局变量
      function fn() {
          console.log(a);//123
      }
      fn();
      console.log(a);//123
  ```



### 局部作用域

- 局部作用域内的变量只能在函数内部使用，所以也叫函数作用域；

- 变量在函数内声明，即为局部变量，拥有局部作用域。 

  ```javascript
   function fn() {
          var b = 456;//局部变量
          console.log(b);//456
      }
      fn();
      console.log(b);//b is not defined
  ```


注：可以直接给一个未声明的变量赋值(全局变量)，但不能直接使用未声明的变量！因为局部变量只作用于函数内，所以不同的函数可以使用相同名称的变量。当全局与局部有同名变量的时候，访问该变量将遵循 "就近原则"。 

[![62rNy4.png](https://s3.ax1x.com/2021/03/18/62rNy4.png)](https://imgtu.com/i/62rNy4)


## 变量的生命周期 

- 全局变量在页面打开时创建，在页面关闭后销毁。
-  局部变量在函数开始执行时创建，函数执行完后局部变量会自动销毁。 



## 变量使用规则（重点）

- 有了作用域以后，变量就有了使用范围，也就有了使用规则
- 变量使用规则分为两种，**访问规则** 和 **赋值规则**



### 访问规则

- 当我想获取一个变量的值的时候，我们管这个行为叫做 **访问**

- 获取变量的规则： 

  - 首先，在自己的作用域内部查找，如果有，就直接拿来使用
  - 如果没有，就去上一级作用域查找，如果有，就拿来使用
  - 如果没有，就继续去上一级作用域查找，依次类推
  - 如果一直到全局作用域都没有这个变量，那么就会直接报错（该变量 is not defined）

  ```javascript
  var num = 100
  
  function fn() {
    var num2 = 200
    
    function fun() {
      var num3 = 300
      
      console.log(num3) // 自己作用域内有，拿过来用
      console.log(num2) // 自己作用域内没有，就去上一级，就是 fn 的作用域里面找，发现有，拿过来用
      console.log(num) // 自己这没有，去上一级 fn 那里也没有，再上一级到全局作用域，发现有，直接用
      console.log(a) // 自己没有，一级一级找上去到全局都没有，就会报错
    }
    
    fun()
  }
  
  fn()
  ```

- 变量的访问规则 也叫做 作用域的查找机制

- 作用域的查找机制只能是向上找，不能向下找

  ```javascript
  function fn() {
    var num = 100
  }
  fn()
  
  console.log(num) // 发现自己作用域没有，自己就是全局作用域，没有再上一级了，直接报错
  ```

  

### 赋值规则

- 当你想给一个变量赋值的时候，那么就先要找到这个变量，在给他赋值

- 变量赋值规则：

  - 先在自己作用域内部查找，有就直接赋值
  - 没有就去上一级作用域内部查找，有就直接赋值
  - 在没有再去上一级作用域查找，有就直接赋值
  - 如果一直找到全局作用域都没有，那么就把这个变量定义为全局变量，在给他赋值

  ```javascript
  function fn() {
    num = 100
  }
  fn()
  
  // fn 调用以后，要给 num 赋值
  // 查看自己的作用域内部没有 num 变量
  // 就会向上一级查找
  // 上一级就是全局作用域，发现依旧没有
  // 那么就会把 num 定义为全局的变量，并为其赋值
  // 所以 fn() 以后，全局就有了一个变量叫做 num 并且值是 100
  console.log(num) // 100
  ```


## 自执行函数 

```
要执行一个函数，我们必须要有方法定义函数、引用函数。

匿名函数如何调用？

匿名自执行函数，也叫立即执行函数(IIFE)。

(function () {
    console.log(123);
})();

小括号能把我们的表达式组合分块，并且每一块都有一个返回值，这个返回值实际上就是小括号中表达式的返回值。

自执行函数的好处：独立的作用域，不会污染全局环境！

传参：
(function (a,b) {
    console.log(a + b);
})(2,3);

常见形式：
(function () {
    console.log(11);
})();

(function(){
　　console.log(22);
}());

!function() {
    console.log(33);
}();

+function() {
    console.log(55);
}();

-function() {
    console.log(66);
}();

 ~function() {
   console.log(77);
}();
```



## 递归函数

- 什么是递归函数

- 在编程世界里面，递归就是一个自己调用自己的手段

- 递归函数： 一个函数内部，调用了自己，循环往复

- 一般来说，递归需要有边界条件、递归前进段和递归返回段。

- 当边界条件不满足时，递归前进；当边界条件满足时，递归返回。 

  ```javascript
  // 下面这个代码就是一个最简单的递归函数
  // 在函数内部调用了自己，函数一执行，就调用自己一次，在调用再执行，循环往复，没有止尽
  function fn() {
    fn()
  }
  fn()
  ```

- 其实递归函数和循环很类似

- 需要有初始化，自增，执行代码，条件判断的，不然就是一个没有尽头的递归函数，我们叫做 **死递归**



### 简单实现一个递归

- 我们先在用递归函数简单实现一个效果

- 需求： 求 1 至 5 的和

  - 先算 1 + 2 得 3
  - 再算 3 + 3 得 6
  - 再算 6 + 4 得 10 
  - 再算 10 + 5 得 15
  - 结束

- 开始书写，写递归函数先要写结束条件（为了避免出现 “死递归”）

  ```javascript
  function add(n) {
    // 传递进来的是 1
    // 当 n === 5 的时候要结束
    if (n === 5) {
      return 5
    }
  }
  
  add(1)
  ```

- 再写不满足条件的时候我们的递归处理

  ```javascript
  function add(n) {
    // 传递进来的是 1
    // 当 n === 5 的时候要结束
    if (n === 5) {
      return 5
    } else {
      // 不满足条件的时候，就是当前数字 + 比自己大 1 的数字
      return n + add(n + 1)
    }
  }
  add(1)
  ```

- 老王有四个子女，老四比老三小2岁，老三比老二小2岁，老二比老大小2岁，老大现在16岁，问老四几岁？    

```
 function countAge(who) {
        if (who == 1) {
            return 16;
        } else {
            return countAge(who - 1) - 2;
        }
    }
    alert(countAge(4)); // 10
```

[![62rFot.png](https://s3.ax1x.com/2021/03/18/62rFot.png)](https://imgtu.com/i/62rFot)

注：递归函数在运行的时候，每调用一次函数就会在内存中开辟一块空间，内存消耗较大，注意防止栈溢出。 

递归算法一般用于解决三类问题：    

​	1.数据的定义是按递归定义的;   

​	2.问题解法按递归算法实现;    

​	3.数据的结构形式是按递归定义的。 

## 构造函数

构造函数：用于创建特定类型的对象。

 JS内部构造函数：Object、Number、String、Array、Function、Boolean等等... 

当任意一个普通函数用于创建一类对象，并通过new操作符来调用时它就可以作为构造函数。 

构造函数一般首字母大写。 



---

# 对象

- 对象是一个复杂数据类型
- 对象是一组无序的键值对，是带有属性和方法的集合。
-  通俗讲，对象就是无序的数据集合。
-  属性是与对象相关的值，方法是能够在对象上执行的动作。 
- 对象的作用：用于在单个变量中存储多个值。 

## 创建一个对象

- 字面量的方式创建一个对象

  ```javascript
  var obj = { 键：值, 键：值 ...... };
  键：一般用双引号引起来（不用引号也可以）
  值：可以是任意类型的数据
  var obj = {
      name: '小错',
      age: 18,
      sayHi: function (){
          alert('hi，大家好');
      }
  }
  ```

- 内置构造函数的方式创建对象

  ```javascript
  var obj2 = new Object();
  obj2.name = '小错';
  obj2.age = 18;
  obj2.sayHi = function (){
      alert('hi，大家好');
  }
  console.log( obj2.name );
  obj2.sayHi( );
  ```

- 操作对象

  ```
  访问对象成员：
      1. 对象.属性   对象.方法()
      2. 对象[变量或字符串]
  
  删除属性：
      delete obj.attr;
  
  遍历对象：{}
      for / in 循环
      for (var key in obj){
          console.log( obj[key] );
      }
  ```
### {}和new创建对象的对比

### 字面量的优势：

  它的代码量更少，更易读；
  它可以强调对象就是一个简单的可变的散列表，而不必一定派生自某个类；
  对象字面量运行速度更快，因为它们可以在解析的时候被优化——它们不需要"作用域解析"！因为存在我们创建了一个同名构造函数Object()的可能，所以当我们调用Object()的时候，解析器需要顺着作用域链从当前作用域开始查找，如果在当前作用域找到了名为Object()的函数就执行，如果没找到，就继续顺着作用域链往上找，直到找到全局Object()构造函数为止

### 构造函数的优势：

  Object()构造函数可以接收参数，通过这个参数可以把对象实例的创建过程委托给另一个内置构造函数（Number()、String()等），并返回另一个对象实例。
  使用自定义构造函数创建对象，可以通过传参添加属性和方法，当需要定义的同类对象较多时，节省了定义对象的代码量，并且使对象属性和方法的结构更加清晰


---
  

# 数据类型之间存储的区别

  - 既然我们区分了基本数据类型和复杂数据类型
  - 那么他们之间就一定会存在一些区别
  - 他们最大的区别就是在存储上的区别
  - 我们的存储空间分成两种 **栈** 和 **堆**
  - 栈： 主要存储基本数据类型的内容
  - 堆： 主要存储复杂数据类型的内容

  

## 基本数据类型在内存中的存储情况

  - `var num = 100`，在内存中的存储情况
  - [![62rloq.png](https://s3.ax1x.com/2021/03/18/62rloq.png)](https://imgtu.com/i/62rloq)
  - 直接在 **栈空间** 内有存储一个数据

  

## 复杂数据类型在内存中的存储情况

  - 下面这个 对象 的存储

    ```javascript
    var obj = {
      name: 'Jack',
      age: 18,
      gender: '男'
    }
    ```

  - [![62rQwn.png](https://s3.ax1x.com/2021/03/18/62rQwn.png)](https://imgtu.com/i/62rQwn)

  - 复杂数据类型的存储

    1. 在堆里面开辟一个存储空间
    2. 把数据存储到存储空间内
    3. 把存储空间的地址赋值给栈里面的变量

  - 这就是数据类型之间存储的区别

  

## 数据类型之间的赋值

  - 基本数据类型之间的赋值

    ```javascript
    var num = 10
    var num2 = num
    
    num2 = 200
    
    console.log(num) // 10
    console.log(num2) // 200
    ```

    - 相当于是把 num 的值复制了一份一摸一样的给了 num2 变量
    - 赋值以后两个在没有关系

  - 复杂数据类型之间的赋值

    ```javascript
    var obj = {
      name: 'Jack'
    }
    var obj2 = obj
    
    obj2.name = 'Rose'
    
    console.log(obj.name) // Rose
    console.log(obj2.name) // Rose
    ```

    - 因为复杂数据类型，变量存储的是地址，真实内容在 堆空间 内存储
    - 所以赋值的时候相当于把 obj 存储的那个地址复制了一份给到了 obj2 变量
    - 现在 obj 和 obj2 两个变量存储的地址一样，指向一个内存空间
    - 所以使用 obj2 这个变量修改空间内的内容，obj 指向的空间也会跟着改变了

## 数据类型之间的比较

  - 基本数据类型是 **值** 之间的比较

    ```javascript
    var num = 1
    var str = '1'
    
    console.log(num == str) // true
    ```

  - 复杂数据类型是 **地址** 之间的比较

    ```javascript
    var obj = { name: 'Jack' }
    var obj2 = { name: 'Jack' }
    
    console.log(obj == obj2) // false
    ```

    - 因为我们创建了两个对象，那么就会在 堆空间 里面开辟两个存储空间存储数据（两个地址）
    - 虽然存储的内容是一样的，那么也是两个存储空间，两个地址
    - 复杂数据类型之间就是地址的比较，所以 `obj` 和 `obj2` 两个变量的地址不一样
    - 所以我们得到的就是 `false`

    [![62ridI.png](https://s3.ax1x.com/2021/03/18/62ridI.png)](https://imgtu.com/i/62ridI)




## 函数的参数

- 函数的参数也是赋值的之中，在函数调用的时候，实参给行参赋值

- 和之前变量赋值的规则是一样的

- 函数传递基本数据类型

  ```javascript
  function fn(n) {
    n = 200
    console.log(n) // 200
  }
  
  var num = 100
  fn(num)
  console.log(num) // 100
  ```

  - 和之前变量赋值的时候一样，在把 num 的值复制了一份一摸一样的给到了函数内部的行参 n
  - 两个之间在没有任何关系了

- 函数传递复杂数据类型

  ```javascript
  function fn(o) {
    o.name = 'Rose'
    console.log(o.name) // Rose
  }
  
  var obj = {
    name: 'Jack'
  }
  fn(obj) //所传递的就是obj的引用地址
  console.log(obj.name) // Rose
  ```

  - 和之前变量赋值的时候一样，把 obj 内存储的地址复制了一份一摸一样的给到函数内部的行参 o
  - 函数外部的 obj 和函数内部的行参 o，存储的是一个地址，指向的是一个存储空间
  - 所以两个变量操作的是一个存储空间
  - 在函数内部改变了空间内的数据
  - obj 看到的也是改变以后的内容



---

# 数组

- 什么是数组？
- 数组，是有序的元素序列。 
- 通俗讲，数组就是有序的数据集合。 
- 数组属于对象类型。 
- 数组的作用：用于在单个变量中存储多个值。 



## 创建一个数组

- 数组就是一个 `[]`
- 在 `[]` 里面存储着各种各样的数据，按照顺序依次排好



### 字面量创建一个数组

- 直接使用 `[]` 的方式创建一个数组

  ```javascript
  // 创建一个空数组
  var arr1 = []
  
  // 创建一个有内容的数组
  var arr2 = [1, 2, 3]
  ```



### 内置构造函数创建数组

- 使用 js 的内置构造函数 `Array` 创建一个数组

  ```javascript
  // 创建一个空数组
  var arr1 = new Array()
  
  // 创建一个长度为 10 的数组
  var arr2 = new Array(10)
  
  // 创建一个有内容的数组
  var arr3 = new Array(1, 2, 3)
  ```

  

### 数组的 length

- length:  长度的意思

- length 就是表示数组的长度，数组里面有多少个成员，length 就是多少

  ```javascript
  // 创建一个数组
  var arr = [1, 2, 3]
  
  console.log(arr.length) // 3
  ```



### 数组的索引

- 索引，也叫做下标，是指一个数据在数组里面排在第几个的位置

- 注意： **在所有的语言里面，索引都是从 0 开始的**

- 在 js 里面也一样，数组的索引从 0 开始

  ```javascript
  // 创建一个数组
  var arr = ['hello', 'world']
  ```

- 上面这个数组中，1符串 `hello`，**第 1 个** 数据就是字符串 `world`

- 想获取数组中的第几个就使用 `数组[索引]` 来获取

  ```javascript
  var arr = ['hello', 'world']
  
  console.log(arr[0]) // hello
  console.log(arr[1]) // world
  ```

  

## 数组的常用方法

- 数组是一个复杂数据类型，我们在操作它的时候就不能再想基本数据类型一样操作了

- 比如我们想改变一个数组

  ```javascript
  // 创建一个数组
  var arr = [1, 2, 3]
  
  // 我们想把数组变成只有 1 和 2
  arr = [1, 2]
  ```

  - 这样肯定是不合理，因为这样不是在改变之前的数组
  - 相当于心弄了一个数组给到 arr 这个变量了
  - 相当于把 arr 里面存储的地址给换了，也就是把存储空间换掉了，而不是在之前的空间里面修改
  - 所以我们就需要借助一些方法，在不改变存储空间的情况下，把存储空间里面的数据改变了



### 数组常用方法之 push

- `push` 是用来在数组的末尾追加一个元素

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 push 方法追加一个元素在末尾
  arr.push(4)
  
  console.log(arr) // [1, 2, 3, 4]
  ```



### 数组常用方法之 pop

- `pop` 是用来删除数组末尾的一个元素

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 pop 方法删除末尾的一个元素
  arr.pop()
  
  console.log(arr) // [1, 2]
  ```



### 数组常用方法之 unshift

- `unshift` 是在数组的最前面添加一个元素

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 unshift 方法想数组的最前面添加一个元素
  arr.unshift(4)
  
  console.log(arr) // [4, 1, 2, 3]
  ```



### 数组常用方法之  shift

- `shift` 是删除数组最前面的一个元素

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 shift 方法删除数组最前面的一个元素
  arr.shift()
  
  console.log(arr) // [2, 3]
  ```



### 数组常用方法之 splice

- `splice` 是截取数组中的某些内容，按照数组的索引来截取

- 语法： `splice(从哪一个索引位置开始，截取多少个，替换的新元素)` （第三个参数可以不写）

  ```javascript
  var arr = [1, 2, 3, 4, 5]
  
  // 使用 splice 方法截取数组
  arr.splice(1, 2)
  
  console.log(arr) // [1, 4, 5]
  ```

  - `arr.splice(1, 2)` 表示从索引 1 开始截取 2 个内容
  - 第三个参数没有写，就是没有新内容替换掉截取位置

  ```javascript
  var arr = [1, 2, 3, 4, 5]
  
  // 使用 splice 方法截取数组
  arr.splice(1, 2, '我是新内容')
  
  console.log(arr) // [1, '我是新内容', 4, 5]
  ```

  - `arr.splice(1, 2, '我是新内容')` 表示从索引 1 开始截取 2 个内容
  - 然后用第三个参数把截取完空出来的位置填充



### 数组常用方法之 reverse

- `reverse` 是用来反转数组使用的

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 reverse 方法来反转数组
  arr.reverse()
  
  console.log(arr) // [3, 2, 1]
  ```



### 数组常用方法之 sort

- `sort` 是用来给数组排序的

  ```javascript
  var arr = [2, 3, 1,11,7,22]
  
  // 使用 sort 方法给数组排序
  //用法一
  arr.sort()
  
  console.log(arr) // [1,11, 2,22,3,7]
  
  ```

注：以上方法都会改变原数组！ 


### 数组常用方法之 concat

- `concat` 是把多个数组进行拼接

- 和之前的方法有一些不一样的地方，就是 `concat` 不会改变原始数组，而是返回一个新的数组

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 concat 方法拼接数组
  var newArr = arr.concat([4, 5, 6])
  
  console.log(arr) // [1, 2, 3]
  console.log(newArr) // [1, 2, 3, 4, 5, 6]
  ```

  - 注意： **concat 方法不会改变原始数组**



### 数组常用方法之 join

- `join` 是把数组里面的每一项内容链接起来，变成一个字符串

- 可以自己定义每一项之间链接的内容 `join(要以什么内容链接)`

- 不会改变原始数组，而是把链接好的字符串返回

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 join 链接数组
  var str = arr.join('-')
  
  console.log(arr) // [1, 2, 3]
  console.log(str) // 1-2-3
  ```

  - 注意： **join 方法不会改变原始数组，而是返回链接好的字符串**

### 数组常用方法之 indexOf

- `indexOf` 用来找到数组中某一项的索引

- 语法： `indexOf(你要找的数组中的项)`

  ```javascript
  var arr = [1, 2, 3, 4, 5]
  
  // 使用 indexOf 超找数组中的某一项
  var index = arr.indexOf(3)
  
  console.log(index) // 2
  ```

  - 我们要找的是数组中值为 3 的那一项
  - 返回的就是值为 3 的那一项在该数组中的索引

- 如果你要找的内容在数组中没有，那么就会返回 -1

  ```javascript
  var arr = [1, 2, 3, 4, 5]
  
  // 使用 indexOf 超找数组中的某一项
  var index = arr.indexOf(10)
  
  console.log(index) // -1
  ```

  - 你要找的值在数组中不存在，那么就会返回 -1

### 数组常用方法之 lastIndexOf

- lastIndexOf 返回指定元素在数组中的最后一个的索引，不存在则返回 -1 

- 语法： lastIndexOf(你要找的数组中的项)`

  ```javascript
  var arr = [1, 2, 3, 4, 5]
  
  // 使用 indexOf 超找数组中的某一项
  var index = arr.lastIndexOf(3)
  
  console.log(index) // 2
  ```

  - 我们要找的是数组中值为 3 的那一项
  - 返回的就是值为 3 的那一项在该数组中的索引

- 如果你要找的内容在数组中没有，那么就会返回 -1

  ```javascript
  var arr = [1, 2, 3, 4, 5]
  
  // 使用 indexOf 超找数组中的某一项
  var index = arr.lastIndexOf(10)
  
  console.log(index) // -1
  ```

  - 你要找的值在数组中不存在，那么就会返回 -1

### slice()

- slice() 方法可从已有的数组中返回选定的元素。

  slice()方法可提取数组的某个部分，并以新的数组返回被提取的部分。

  语法：*array*.slice(*start*, *end*)

  **注意：** slice() 方法不会改变原始数组。

  ```
  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var citrus = fruits.slice(1,3);
  citrus 的结果是：Orange,Lemon
  ```

  如果某个参数为负，则从数组的结尾开始计数。

  ```
  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var myBest = fruits.slice(-3,-1);
  myBest 的结果是：Lemon,Apple
  ```


注：以上方法不会改变原数组！ 

## for 和 for in 循环

- 因为数组的索引就可以获取数组中的内容

- 数组的索引又是按照 0 ～ n 顺序排列

- 我们就可以使用 for 循环来循环数组，因为 for 循环我们也可以设置成 0 ～ n 顺序增加

- 我们把这个行为叫做 **遍历**

  ```javascript
  var arr = [1, 2, 3, 4, 5]
  
  // 使用 for 循环遍历数组
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  
  // 会在控制台依次打印出 1， 2， 3， 4， 5
  ```

  - `i < arr.length` 因为 length 就是数组的长度，就是一个数字，所以我们可以直接用它来决定循环次数
  - `console.log(arr[i])` 因为随着循环，i 的值会从 0 开始依次增加
  - 所以我们实际上就相当于在打印 `arr[0]` / `arr[1]` / ...



- 因为 **对象** 是没有索引的，所以我们没有办法使用 for 循环来遍历

- 这里我们使用 for in 循环来遍历对象

- 先来看一段代码

  ```javascript
  var obj = {
    name: 'Jack',
    age: 18
  }
  
  for (var key in obj) {
    console.log(key)
  }
  
  // 会在控制台打印两次内容，分别是 name 和 age
  ```

  - for in 循环的遍历是按照对象中有多少成员来决定了
  - 有多少成员，就会执行多少次
  - `key` 是我们自己定义的一个变量，就和 for 循环的时候我们定义的 i 一个道理
  - 在每次循环的过程中，key 就代表着对象中某一个成员的 **属性名**

### for...of：ES6新增

- **for...of语句**在[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/iterable)（包括[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array)，[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Map)，[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)，[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/String)，[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。 

语法：

```
for (variable of iterable) {  
	statement
}
variable在每次迭代中，将不同属性的值分配给变量。iterable可枚举其枚举属性的对象。
```

- 示例

```
迭代Array
var iterable = [10, 20, 30];

for (var value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

迭代String
var iterable = 'boo';

for (var value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### forEach

- 和 for 循环一个作用，就是用来遍历数组的

- 强制遍历所有元素，不能使用break结束

- 语法：`arr.forEach(function (item, index, arr) {})`

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 forEach 遍历数组
  arr.forEach(function (item, index, arr) {
    // item 就是数组中的每一项元素
    // index 就是数组的元素索引
    // arr 就是原始数组
    console.log('数组的第 ' + index + ' 项的值是 ' + item + '，原始数组是', arr)
  })
  ```

  - forEach() 的时候传递的那个函数，会根据数组的长度执行
  - 数组的长度是多少，这个函数就会执行多少回



### map

- 和 forEach 类似，只不过可以对数组中的每一项进行操作，返回一个新的数组

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 map 遍历数组
  var newArr = arr.map(function (item, index, arr) {
    // item 就是数组中的每一项
    // index 就是数组的索引
    // arr 就是原始数组
    return item + 10
  })
  
  console.log(newArr) // [11, 12, 13]
  ```



### filter

- 和 map 的使用方式类似，按照我们的条件来筛选数组

- 把原始数组中满足条件的筛选出来，组成一个新的数组返回

  ```javascript
  var arr = [1, 2, 3]
  
  // 使用 filter 过滤数组
  var newArr = arr.filter(function (item, index, arr) {
    // item 就是数组中的每一项
    // index 就是数组的索引
    // arr 就是原始数组
    return item > 1
  })
  
  console.log(newArr) // [2, 3]
  ```

  - 我们设置的条件就是 `> 1`

  - 返回的新数组就会是原始数组中所有 `> 1` 的项


### some 

- 用于检测数组中的元素是否满足指定条件 
- 会依次执行数组的每个元素：
  - 如果有一个元素满足条件，则表达式返回*true* , 剩余的元素不会再执行检测。
  - 如果没有满足条件的元素，则返回false。

注：some() 不会对空数组进行检测。 

​	 some() 不会改变原始数组。

```
 var arr = [1, 2, 3]
    // 使用 some 判断数组元素是否满足条件
    var newArr = arr.some(function (item, index, arr) {
        return item > 1
    })
    console.log(newArr) // true
```

###  every

- 用于检测数组所有元素是否都符合指定条件（通过函数提供） 
- 使用指定函数检测数组中的所有元素： 
  - 如果数组中检测到有一个元素不满足，则整个表达式返回 *false* ，且剩余的元素不会再进行检测。 
  - 如果所有元素都满足条件，则返回 true。 

注：every() 不会对空数组进行检测。 

​	 every() 不会改变原始数组。

```
 var arr = [1, 2, 3]
    // 使用 every 判断数组中所有元素是否满足条件
    var newArr = arr.every(function (item, index, arr) {
        return item > 2
    })
    console.log(newArr) // false
```

###  reduceRight 和 reduce

-  reduce() 方法接收一个函数callback fn作为累加器(accumulator) 数组中每个值(从左到右)开始合并,最终合成一个值 

- reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。 

- **注意:** reduce() 对于空数组是不会执行回调函数的。 


  ```javascript
  //参数：
  //prev：它是上一次调用回调时返回的结果，每次调用的结果都会给prev
  //cur：当前的元素
  //index：当前的索引
  //arr：循环的数组
  //返回值：
  //函数累计处理的结果
  
  //示例：求数组的和。
  var a = [1,2,3,4,5,6,7,8,9,10]
  var str = a.reduce(function(prev,cur,index,arr){
  return prev + cur ;
  })
  str // 55;
  
  //示例：求阶乘
  var a = [1,2,3,4,5,6,7,8,9,10]
  var str = a.reduce(function(prev,cur,index,arr){
  return prev * cur ;
  })
  
  str //3628800
  ```

  

## 数组的排序

- 排序，就是把一个乱序的数组，通过我们的处理，让他变成一个有序的数组

### 函数排序 

``` javascript
sort( [fn] ) 排序，返回数组

arr.sort(); //默认按照字符编码排序，先比较第一位字符

arr.sort(function (a,b) { //升序，只能对数值排序
    return a-b;
});

arr.sort(function (a,b) { //降序，只能对数值排序
    return b-a;
});
```



### 冒泡排序
- 先遍历数组，让挨着的两个进行比较，如果前一个比后一个大，那么就把两个换个位置
- 数组遍历一遍以后，那么最后一个数字就是最大的那个了
- 然后进行第二遍的遍历，还是按照之前的规则，第二大的数字就会跑到倒数第二的位置
- 以此类推，最后就会按照顺序把数组排好了
  1. 我们先来准备一个乱序的数组
     ``` javascript
     var arr = [3, 1, 5, 6, 4, 9, 7, 2, 8]
     ```
     - 接下来我们就会用代码让数组排序
  2. 先不着急循环，先来看数组里面内容换个位置
     ``` javascript
     // 假定我现在要让数组中的第 0 项和第 1 项换个位置
     // 需要借助第三个变量
     var tmp = arr[0]
     arr[0] = arr[1]
     arr[1] = tmp
     ```
  3. 第一次遍历数组，把最大的放到最后面去
     ``` javascript
     for (var i = 0; i < arr.length-1; i++) {
       // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
       if (arr[i] > arr[i + 1]) {
         var tmp = arr[i]
         arr[i] = arr[i + 1]
         arr[i + 1] = tmp
       }
     }
     // 遍历完毕以后，数组就会变成 [3, 1, 5, 6, 4, 7, 2, 8, 9]
     ```
     - 第一次结束以后，数组中的最后一个，就会是最大的那个数字
     - 然后我们把上面的这段代码执行多次。数组有多少项就执行多少次
  4. 按照数组的长度来遍历多少次
     ``` javascript
     for (var j = 0; j < arr.length; j++) {
       for (var i = 0; i < arr.length-1; i++) {
         // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
         if (arr[i] > arr[i + 1]) {
           var tmp = arr[i]
           arr[i] = arr[i + 1]
           arr[i + 1] = tmp
         }
       }
     }
     // 结束以后，数组就排序好了
     ```
  5. 给一些优化
     - 想象一个问题，假设数组长度是 9，第八次排完以后
     - 后面八个数字已经按照顺序排列好了，剩下的那个最小的一定是在最前面
     - 那么第九次就已经没有意义了，因为最小的已经在最前面了，不会再有任何换位置出现了
     - 那么我们第九次遍历就不需要了，所以我们可以减少一次
       ``` javascript
       for (var j = 0; j < arr.length - 1; j++) {
         for (var i = 0; i < arr.length-1; i++) {
           // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
           if (arr[i] > arr[i + 1]) {
             var tmp = arr[i]
             arr[i] = arr[i + 1]
             arr[i + 1] = tmp
           }
         }
       }
       ```
     - 第二个问题，第一次的时候，已经把最大的数字放在最后面了
     - 那么第二次的时候，其实倒数第二个和最后一个就不用比了
     - 因为我们就是要把倒数第二大的放在倒数第二的位置，即使比较了，也不会换位置
     - 第三次就要倒数第三个数字就不用再和后两个比较了
     - 以此类推，那么其实每次遍历的时候，就遍历当前次数 - 1 次
       ```javascript
       for (var j = 0; j < arr.length - 1; j++) {
         for (var i = 0; i < arr.length - 1 - j; i++) {
           // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
           if (arr[i] > arr[i + 1]) {
             var tmp = arr[i]
             arr[i] = arr[i + 1]
             arr[i + 1] = tmp
           }
         }
       }
       ```
  6. 至此，一个冒泡排序就完成了
  7. 口诀：
      - 双层for循环，一层减一层，里层减外层，变量相交换。


### 选择排序
- 先假定数组中的第 0 个就是最小的数字的索引
- 然后遍历数组，只要有一个数字比我小，那么就替换之前记录的索引
- 直到数组遍历结束后，就能找到最小的那个索引，然后让最小的索引换到第 0 个的位置
- 再来第二趟遍历，假定第 1 个是最小的数字的索引
- 在遍历一次数组，找到比我小的那个数字的索引
- 遍历结束后换个位置
- 依次类推，也可以把数组排序好
  1. 准备一个数组

     ```javascript
     var arr = [3, 1, 5, 6, 4, 9, 7, 2, 8]
     ```
  2. 假定数组中的第 0 个是最小数字的索引

     ```javascript
     var minIndex = 0
     ```
  3. 遍历数组，判断，只要数字比我小，那么就替换掉原先记录的索引

     ```javascript
     var minIndex = 0
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] < arr[minIndex]) {
         minIndex = i
       }
     }
     
     // 遍历结束后找到最小的索引
     // 让第 minIndex 个和第 0 个交换
     var tmp = arr[minIndex]
     arr[minIndex] = arr[0]
     arr[0] = tmp
     ```
  4. 按照数组的长度重复执行上面的代码

     ```javascript
     for (var j = 0; j < arr.length; j++) {
       // 因为第一遍的时候假定第 0 个，第二遍的时候假定第 1 个
       // 所以我们要假定第 j 个就行
       var minIndex = j
       
       // 因为之前已经把最小的放在最前面了，后面的循环就不需要判断前面的了
       // 直接从 j + 1 开始
       for (var i = j + 1; i < arr.length; i++) {
         if (arr[i] < arr[minIndex]) {
           minIndex = i
         }
       }
     
       // 遍历结束后找到最小的索引
       // 第一堂的时候是和第 0 个交换，第二趟的时候是和第 1 个交换
       // 我们直接和第 j 个交换就行
       var tmp = arr[minIndex]
       arr[minIndex] = arr[j]
       arr[j] = tmp
     }
     ```
  5. 一些优化

     - 和之前一样，倒数第二次排序完毕以后，就已经排好了，最后一次没有必要了

       ```javascript
       for (var j = 0; j < arr.length - 1; j++) {
         var minIndex = j
         
         for (var i = j + 1; i < arr.length; i++) {
           if (arr[i] < arr[minIndex]) {
             minIndex = i
           }
         }
       
         var tmp = arr[minIndex]
         arr[minIndex] = arr[j]
         arr[j] = tmp
       }
       ```

     - 在交换变量之前，可以判断一下，如果我们遍历后得到的索引和当前的索引一直
     - 那么就证明当前这个就是目前最小的，那么就没有必要交换
     - 做一我们要判断，最小作引和当前作引不一样的时候，才交换

       ```javascript
       for (var j = 0; j < arr.length - 1; j++) {
         var minIndex = j
         
         for (var i = j + 1; i < arr.length; i++) {
           if (arr[i] < arr[minIndex]) {
             minIndex = i
           }
         }
       
         if (minIndex !== j) {
           var tmp = arr[minIndex]
           arr[minIndex] = arr[j]
           arr[j] = tmp   
         }
       }
       ```

  6. 至此，选择排序完成

### 快速排序 

- 找中点，分左右，递归运算...... 

```
function quickSort(arr){
    // 递归出口
    if (arr.length <= 1) return arr;
    // 找中点(中点的下标及值)
    var midIndex = parseInt( arr.length/2 );
    var mid = arr[midIndex];
    // 分左右
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === mid) {
            continue; //跳过本次循环
        }
        if (arr[i] < mid) {//与中点比较分左右
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 递归运算(左中右三个数组合并)
    return quickSort(left).concat([mid],quickSort(right));
}
```



# ES5/String
## this 关键字
- this 只能出现在作用域里面
- this一般都是出现在函数内部
1. 全局作用域下的this 永远都是window
```
var a=10
console.log(this)
```

2. 函数中的this：
- 不一样的函数调用里面的this也是不一样的
- 直接以 函数名() 调用的，this就是window

``` javascript
function fn(){
    console.log(this)  //window
}
fn()

var fun=function(){
    console.log(this)  //window
}
fun()

var obj={
    fn:function(){
        console.log(this)  //window
    }
}
//obj 这个对象中的fn成员存储的是一个函数地址
//把这个函数地址赋值给a
// a存储的也是一个函数地址
var a=obj.fn
a()
```

3. 写 对象名.函数名()  调用的this都是 . 前面的对象
``` javascript
function fn(){
    console.log(this)  //Object
}

var fun=function(){
    console.log(this)  //Object
}
//在obj这个对象里定义了一个成员fn,这个成员地址就是一个函数地址
//obj的fn成员可以当作函数来调用
var obj={
    fn:function(){
        console.log(this)  //Object
    },
    //把全局fn函数的地址给了obj的fn2成员
    //obj的fn2成员存储的就是fn函数的地址
    fn2:fn,
    fn3:fun
}
obj.fn()
obj.fn2()
obj.fn3()
```

4. 使用事件调用的函数时，this指向的是事件源

``` html
<div id='box'>点击</div>
<script>
function fn(){
    console.log(this)  //<div id='box'>点击</div>
}
var fun=function(){
    console.log(this)  //<div id='box'>点击</div>
}
//在obj这个对象里定义了一个成员fn,这个成员地址就是一个函数地址
//obj的fn成员可以当作函数来调用
var obj={
    fn:function(){
        console.log(this)  //Object
    }
}
//使用事件调用的函数叫作事件处理函数
//函数内部的this指向的是事件源
box.onclick=function(){
    console.log(this) //<div id='box'>点击</div>
}
box.onclick=fn
box.onclick=fun
box.onclick=obj.fn
</script
```


``` javascript
//自执行函数里的 this 也是window对象
(function(){
  console.log(this)
}())
```

## 严格模式（了解）

- 除了正常运行模式，ECMAscript5添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。 
- 设立"严格模式"的目的，主要有以下几个：   
  1. 消除JavaScript语法的一些不合理、不严谨之处，减少一些怪异行为;    
  1. 消除代码运行的一些不安全之处，保证代码运行的安全；    
  1. 提高编译器效率，增加运行速度；    
  1. 为未来新版本的JavaScript做好铺垫。 进入"严格模式"的标志："use strict"; 

### 开启严格模式

- 想开启严格模式，直接在代码最开始的位置写上字符串 `use strict`

  ``` html
  <script>
  	'use strict'
  	// 下面代码书写就要按照严格模式来书写
  </script>
  ```



### 严格模式的规则

1. 声明变量必须有 `var` 关键字

   ```javascript
   'use strict'
   
   var num = 100
   num2 = 200 // 这个就会报错
   ```

   - 之前了解过，在声明变量的时候，如果没有 var 关键字，那么按照作用域的规则会自动定义成全局变量
   - 严格模式下不可以，会报错

2. 函数的行参不可以重复

   ```javascript
   'use strict'
   
   function fn(p1, p1) {} // 直接就会报错
   ```

   - 在非严格模式下，函数两个行参一样，是不会报错的，只不过就是相当于在函数内部只有一个变量了
   - 但是在严格模式下会报错

3. 声明式函数调用的时候函数内部没有 this

   ``` javascript
   'use strtic'
   
   function fn() {
     console.log(this) // undefined
   }
   fn()
   ```

   - 本身，全局声明式函数在调用的时候，函数内部的 this 是指向 window 的
   - 在严格模式下，是没有 this 的
#### ES5严格模式的限制规范：
   1. 变量声明必须使用var，否则报错
   2. 对不合理的操作显示报错，不再做静默失败处理
   3. 禁止对象属性重名（IE）
   4. 禁止函数参数重名
   5. 禁止使用以0开头的八进制数字
      ES6新的语法标准，八进制以0o来表示，与16进制的0x形成统一的语法格式
   6. 禁止使用with语句
   7. 强制为eval创建新作用域
      eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。
      如果参数是一个表达式，eval() 函数将执行表达式。
      如果参数是Javascript语句，eval()将执行 Javascript 语句。
      严格模式为JavaScript程序创建了第三种作用域：eval作用域
   8. arguments不再追踪参数变化
      ``` javascript
      var x = 1
      function fn1(x) {
          x = 2;
          arguments[0] = 3;
          alert(x);
      }
      fn1(4);
      ```
   9. 禁止使用arguments.callee
      ``` javascript
      // 在匿名的递归函数中
      var factorialArray = [1, 2, 3, 4, 5].map(function(n) {
      return (n < 2) ? 1 : arguments.callee(n - 1) * n;
      });
      console.log(factorialArray);
      ```
   10. 禁止this指向全局对象window，this变成undefined
   11. 函数必须声明在整个脚本或函数层面
   12. 新增一些保留字，不能使用他们作为标识符命名
        implements, interface, let, package, private, protected, public, static, yield



## 创建字符串（了解）

- 我们创建字符串也分为两种方法 **字面量** 和 **构造函数**
- 字面量： 
  ```javascript
  var str = 'hello'
  ```
- 构造函数创建
  ```javascript
  var str = new String('hello')
  ```

## 编码字符集 （了解）

```
编码字符集：（简称字符集，如ASCII、GBK、Unicode）
编码字符集，用一个编码值来表示一个字符在库表中的位置，这个值称为字符对应于编码字符集的序号。
ASCII码是一套编码规则，规定了常用符号用哪些二进制数来表示。
ASCII码占用一个字节，可以有0～255共256个取值。前128个为常用的字符如运算符，字母 ，数字等键盘上可以显示的，后 128个为特殊字符是键盘上找不到的字符。
ASCII编码主要针对的是英语，全世界有上百种语言，中国制定了GB2312编码，日本制定了Shift_JIS编码，韩国制定了Euc-kr编码...
各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。
Unicode编码把所有语言都统一到一套编码里，这样就不会再有乱码问题了！
Unicode 编码是一个很大的集合，现在的规模可以容纳100多万个符号。
Unicode 编码开头的 128 个和 ASCII 编码一样。
编码字符集Unicode，有UTF-8、UTF-16、UTF-32等多种字符编码。
```

[![620Zz4.png](https://s3.ax1x.com/2021/03/18/620Zz4.png)](https://imgtu.com/i/620Zz4)
[![620mQJ.png](https://s3.ax1x.com/2021/03/18/620mQJ.png)](https://imgtu.com/i/620mQJ)

- 上面的就是 ASCII 对照表，我们只需要知道他是这么存储的就好

## 字符串的常用方法

- 我们操作字符串，也有一堆的方法来帮助我们操作
- 字符串和数组有一个一样的地方，也是按照索引来排列的


### charAt

- `charAt(索引)`  是找到字符串中指定索引位置的内容返回

  ``` javascript
  var str = 'Jack'
  
  // 使用 charAt 找到字符串中的某一个内容
  var index = str.charAt(2)
  
  console.log(index) // c
  ```

  - 因为字符串也是按照索引进行排列的，也是同样从 0 开始
  - 所以索引 2 的位置就是 c

- 如果没有对应的索引，那么就会返回 空字符串

  ``` javascript
  var str = 'Jack'
  
  // 使用 charAt 找到字符串中的某一个内容
  var index = str.charAt(10)
  
  console.log(index) // ''
  ```

  - 这个字符串根本没有索引 10 的位置
  - 所以就会返回一个空字符串 `''`



### charCodeAt

- `charCodeAt(索引)` 就是返回对应索引位置内容的 unicode 编码

  ``` javascript
  var str = 'Jack'
  
  // 使用 charAt 找到字符串中的某一个内容
  var index = str.charCodeAt(0)
  
  console.log(index) // 74
  ```

  - 因为 `J` 在 unicode 对照表里面存储的是 74，所以就会返回 74



### indexOf

- `indexOf` 就是按照字符找到对应的索引，从左往右查询

  ``` javascript
  var str = 'Jack'
  
  // 使用 indexOf 找到对应的索引
  var index = str.indexOf('J')
  
  console.log(index) // 0
  ```

  - 因为字符 `J` 在字符串 `Jack` 中的索引位置是 0
  - 所以会返回 0

### lastIndexOf() 

- lastIndexOf 返回指定文本在字符串中*最后*一次出现的索引 

  ```
  var str = "The full name of China is the People's Republic of China.";
  var pos = str.lastIndexOf("China");
  ```

  注：如果未找到文本， indexOf() 和 lastIndexOf() 均返回 -1 

### slice() 

- slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。

  该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。

  ```
  var str = "Apple, Banana, Mango";
  var res = str.slice(7,13); 
  res 的结果是：Banana
  ```

  如果某个参数为负，则从字符串的结尾开始计数。

  这个例子裁剪字符串中位置 -12 到位置 -6 的片段：

  ```
  var str = "Apple, Banana, Mango";
  var res = str.slice(-13,-7);
  res 的结果是：Banana
  ```

  

### substring

- `substring` 是用来截取字符串使用的
- 语法： `substring(从哪个索引开始，到哪个索引截止)`，包含开始索引，不包含结束索引

  ```javascript
  var str = 'hello'
  //         01234
  // 使用 substring 截取字符串
  var newStr = str.substring(1, 3)
  console.log(newStr) // el
  ```

  - 从索引 1 开始，到索引 3 截止，包含前面的索引不包含后面的索引
  - 所以返回的是 el

substring() 类似于 slice()。
不同之处在于 substring() 无法接受负的索引。

### substr

- `substr` 也是用来截取字符串的
- 语法：`substr(从哪个索引开始，截取多少个)`

  ``` javascript
  var str = 'hello'
  //         01234
  // 使用 substr 截取字符串
  var newStr = str.substr(1, 3)
  console.log(newStr) // ell
  ```
  - 这个方法和 `substring` 不一样的是，第二个参数是截取多少个
  - 从索引 1 开始，截取 3 个，所以得到的是 `ell`
substr() 类似于 slice()。
不同之处在于第二个参数规定被提取部分的*长度*。
### replace

- 用另一个值替换在字符串中指定的值 

``` javascript
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3School");
console.log(n)  //Please visit W3School and Microsoft!
```

默认地，replace() *只替换首个匹配* 
- replace() 对大小写敏感 

``` javascript
str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3School");
console.log(n)  //Please visit Microsoft!
```

如需执行大小写不敏感的替换，请使用正则表达式 /i（大小写不敏感） 

``` javascript
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3School");
console.log(n)  //Please visit W3School!
```

如需替换所有匹配，请使用正则表达式的 g 标志 

``` javascript
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3School");
console.log(n)  //Please visit W3School and W3School!
```

### concat 

- 连接两个或多个字符串 

``` javascript
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat(" ",text2);
console.log(text3) //Hello World
```

### trim

- 删除字符串两端的空白符 

``` javascript
var str = "       Hello World!        ";
alert(str.trim());
```

### split 
- 字符串分割，将字符串转换为数组 
  ``` javascript
  var txt = "a,b,c,d,e";   // 字符串
  txt.split(",");          // 用逗号分隔
  txt.split(" ");          // 用空格分隔
  txt.split("|");          // 用竖线分隔
  ```

如果省略分隔符，被返回的数组将包含 index [0] 中的整个字符串。
如果分隔符是 ""，被返回的数组将是间隔单个字符的数组：

``` javascript
var txt = "Hello";       // 字符串
txt.split("");           // 分隔为字符
```



### toLowerCase 和 toUpperCase

- 这两个方法分别使用用来给字符串转成 小写字母 和 大写字母 的

  ``` javascript
  var str = hello
  // 使用 toUpperCase 转换成大写
  var upper = str.toUpperCase()
  console.log(upper) // HELLO
  // 使用 toLowerCase 转换成小写
  var lower = upper.toLowerCase()
  console.log(lower) // hello
  ```

  




# Math 和 Date

- Math 是 js 的一个内置对象，提供了一堆的方法帮助我们操作 **数字**
- Date 是 js 的一个内置对象，提供了一堆的方法帮助我们操作 **时间**



## Math

- 没有什么多余的东西，就是一堆的方法来操作数字



### random

- `Math.random()` 这个方法是用来生成一个 `0 ~ 1` 之间的随机数

- 每次执行生成的数字都不一样，但是一定是 `0 ~ 1` 之间的

- 生成的数字包含 0 ，但是不包含 1，[0,1)

  ```javascript
  var num = Math.random()
  console.log(num) // 得到一个随机数
  ```



### round

- `Math.round()` 是将一个小数 **四舍五入** 变成一个整数

  ```javascript
  var num = 10.1
  console.log(Math.round(num)) // 10
  
  var num2 = 10.6
  console.log(Math.round(num2)) // 11
  ```

  

### abs

- `Math.abs()` 是返回一个数字的绝对值

  ```javascript
  var num = -10
  console.log(math.abs(num)) // 10
  ```



### ceil

- `Math.ceil()` 是将一个小数 **向上取整** 得到的整数

  ```javascript
  var num = 10.1
  console.log(Math.ceil(num)) // 11
  
  var num2 = 10.9
  console.log(Math.ceil(num2)) // 11
  ```

  

### floor

- `Math.floor()` 是将一个小数 **向下取整** 的到的整数

  ```javascript
  var num = 10.1
  console.log(Math.floor(num)) // 10
  
  var num2 = 10.9
  console.log(Math.floor(num2)) // 10
  ```

  

### max

- `Math.max()` 得到的是你传入的几个数字之中最大的那个数字

  ```javascript
  console.log(Math.max(1, 2, 3, 4, 5)) // 5
  ```



### min

- `Math.min()` 得到的是你传入的几个数字之中最小的那个数字

  ```javascript
  console.log(Math.min(1, 2, 3, 4, 5)) // 1
  ```



### PI

- `Math.PI` 得到的是 `π` 的值，也就是 `3.1415926...`

  ```javascript
  console.log(Math.PI) // 3.141592653589793
  ```

  - 因为计算机的计算精度问题，只能得到小数点后 15 位
  - **使用 Math.PI 的时候，是不需要加 () 的**

### pow 

- `Math.pow(x,y)` 返回 x 的 y 次幂的值 

  ```javascript
  console.log(Math.pow(2, 3)) // 8
  ```

### sqrt 

- `Math.sqrt(x)` 返回一个数的平方根 。

- 注： x必须是大于等于 0 的数 

  ```javascript
  console.log(Math.sqrt(9)) // 3
  ```

## Date

- js 提供的内置构造函数。
- Date 对象用于处理日期与时间。 
- Date 对象自动使用当前系统的日期和时间作为其初始值。 

注：UTC国际标准时间又称世界时，以零经度线上的时间作为国际上统一采用的标准时间。因为零经度线通过英国格林尼治天文台，所以国际标准时间也称为格林尼治时间GMT。国际标准时间的起点：1970/01/01 00:00:00 北京时区的时间起点：1970/01/01 08:00:00所以，北京时间 = 国际标准时间 + 8小时 

### new Date()

- `new Date()` 在不传递参数的情况下是默认返回当前时间

  ```javascript
  var time = new Date()
  console.log(time) // 当前时间 Fri Mar 01 2019 13:11:23 GMT+0800 (中国标准时间)
  
  其下面几种格式都可以：
  　　// new Date("month dd,yyyy hh:mm:ss");
  　　// new Date("month dd,yyyy");
  　　// new Date(yyyy,mth,dd,hh,mm,ss);
  　　// new Date(yyyy,mth,dd);
  　　// new Date(ms);
  ```

- `new Date()` 在传入参数的时候，可以获取到一个你传递进去的时间

  ```javascript
  var time = new Date('2019-03-03 13:11:11')
  console.log(time) // Sun Mar 03 2019 13:11:11 GMT+0800 (中国标准时间)
  ```

- `new Date()` 传递的参数有多种情况

  1. 传递两个数字，第一个表示年，第二个表示月份

     ```javascript
     var time = new Date(2019, 00) // 月份从 0 开始计数，0 表示 1月，11 表示 12月
     console.log(time) // Tue Jan 01 2019 00:00:00 GMT+0800 (中国标准时间)
     ```

  2. 传递三个数字，前两个不变，第三个表示该月份的第几天，从 1 到 31

     ```javascript
     var time = new Date(2019, 00, 05) 
     console.log(time) // Sat Jan 05 2019 00:00:00 GMT+0800 (中国标准时间)
     ```

  3. 传递四个数字，前三个不变，第四个表示当天的几点，从 0 到 23

     ```javascript
     var time = new Date(2019, 00, 05, 22) 
     console.log(time) // Sat Jan 05 2019 22:00:00 GMT+0800 (中国标准时间)
     ```

  4. 传递五个数字，前四个不变，第五个表示的是该小时的多少分钟，从 0 到 59

     ```javascript
     var time = new Date(2019, 00, 05, 22, 33) 
     console.log(time) // Sat Jan 05 2019 22:33:00 GMT+0800 (中国标准时间)
     ```

  5. 传递六个数字，前五个不变，第六个表示该分钟的多少秒，从 0 到 59

     ```javascript
     var time = new Date(2019, 00, 05, 22, 33, 55) 
     console.log(time) // Sat Jan 05 2019 22:33:55 GMT+0800 (中国标准时间)
     ```

  6. 传入字符串的形式

     ```javascript
     console.log(new Date('2019')) 
     // Tue Jan 01 2019 08:00:00 GMT+0800 (中国标准时间)
     console.log(new Date('2019-02')) 
     // Fri Feb 01 2019 08:00:00 GMT+0800 (中国标准时间)
     console.log(new Date('2019-02-03')) 
     // Sun Feb 03 2019 08:00:00 GMT+0800 (中国标准时间)
     console.log(new Date('2019-02-03 13:')) 
     // Sun Feb 03 2019 13:00:00 GMT+0800 (中国标准时间)
     console.log(new Date('2019-02-03 13:13:')) 
     // Sun Feb 03 2019 13:13:00 GMT+0800 (中国标准时间)
     console.log(new Date('2019-02-03 13:13:13')) 
     // Sun Feb 03 2019 13:13:13 GMT+0800 (中国标准时间)
     ```



## 将日期字符串格式化成指定内容

- 比如我们得到的时间字符串是 `Sun Feb 03 2019 13:13:13 GMT+0800 (中国标准时间)`
- 我指向得到这个日期中是那一年，我们就要靠截取字符串的形式得到
- 但是现在 js 为我们提供了一系列的方法来得到里面的指定内容



### getFullYear

- `getFullYear()` 方式是得到指定字符串中的哪一年

  ```javascript
  var time = new Date(2019, 03, 03, 08, 00, 22)
  console.log(time.getFullYear()) // 2019
  ```



### getMonth

- `getMonth()` 方法是得到指定字符串中的哪一个月份 

  ```javascript
  var time = new Date(2019, 03, 03, 08, 00, 22)
  console.log(time.getMonth()) // 3
  ```
  
  - 这里要有一个注意的地方
  - 月份是从 0 开始数的
  - 0 表示 1月，1 表示 2月，依此类推



### getDate

- `getDate()` 方法是得到指定字符串中的哪一天

  ```javascript
  var time = new Date(2019, 03, 03, 08, 00, 22)
  console.log(time.getDate()) // 3
  ```



### getHours

- `getHours()` 方法是得到指定字符串中的哪小时

  ```javascript
  var time = new Date(2019, 03, 03, 08, 00, 22)
  console.log(time.getHours()) // 8
  ```



### getMinutes

- `getMinutes()` 方法是得到指定字符串中的哪分钟

  ```javascript
  var time = new Date(2019, 03, 03, 08, 00, 22)
  console.log(time.getMinutes()) // 0
  ```



### getSeconds

- `getSeconds()` 方法是得到指定字符串中的哪秒钟

  ```javascript
  var time = new Date(2019, 03, 03, 08, 00, 22)
  console.log(time.getSeconds()) // 22
  ```

  

### getDay

- `getDay()` 方法是得到指定字符串当前日期是一周中的第几天（周日是 0，周六是 6）

  ```javascript
  var time = new Date(2019, 03, 08, 08, 00, 22)
  console.log(time.getDay()) // 1
  ```



### getTime

- `getTime()` 方法是得到执行时间到 `格林威治时间` 的毫秒数

  ```javascript
  var time = new Date(2019, 03, 08, 08, 00, 22)
  console.log(time.getTime()) // 1554681622000
  ```



### toLocaleString 

- toLocaleString()   返回一个'年月日 时分秒'的本地格式字符串

  ```
  d.toLocaleString();
  ```

### toLocaleDateString 

- toLocaleDateString ()   返回一个'年月日'的本地格式字符串 

  ```
  d.toLocaleDateString();
  ```

  

### setFullYear

- setFullYear() 方法用于设置年份。

  这个方法可用于设置月份及月份中的一天。

  语法：*Date*.setFullYear(*year*,*month*,*day*)

  ```
  var d = new Date();
  d.setFullYear(2020);
  console.log(d) //Thu Aug 27 2020 23:52:25 GMT+0800 (中国标准时间)
  
  var d=new Date();
  d.setFullYear(2020,10,3);
  console.log(d) //Tue Nov 03 2020 23:52:25 GMT+0800 (中国标准时间)
  ```

### setMonth

- setMonth() 方法用于设置月份。

  **注意：** 一月为 0， 十二月为 11

  这个方法可用于设置月份中的某一天

  语法：*Date*.setMonth(*month*,*day*)

  ```
  var d = new Date();
  d.setMonth(4);
  console.log(d) //Mon May 27 2019 23:56:08 GMT+0800 (中国标准时间)
  
  var d = new Date();
  d.setMonth(4,20);
  console.log(d) //Mon May 20 2019 23:56:08 GMT+0800 (中国标准时间)
  ```

### setDate

- setDate() 方法用于设置一个月的某一天。 

  ```
  var d = new Date();
  d.setDate(15);
  console.log(d) //Wed Jul 31 2019 23:50:03 GMT+0800 (中国标准时间)
  ```

### setHours

- setHours() 方法用于设置指定的时间的小时字段。

  该方法可用于设置分钟，秒以及毫秒数。

  语法：*Date*.setHours(*hour,min,sec,millisec*)

  ```
  var d = new Date();
  d.setHours(15);
  console.log(d) //Tue Aug 27 2019 15:58:53 GMT+0800 (中国标准时间)
  
  var d = new Date();
  d.setHours(15,35,1);
  console.log(d) //Tue Aug 27 2019 15:35:01 GMT+0800 (中国标准时间)
  ```

### setMinutes

- setMinutes() 方法用于设置指定时间的分钟字段。

  该方法同样可用于设置秒数与毫秒数。

  语法：*Date*.setMinutes(*min*,*sec*,*millisec*)

  ```
  var d = new Date();
  d.setMinutes(17);
  console.log(d) //Wed Aug 28 2019 00:17:28 GMT+0800 (中国标准时间)
  
  var d = new Date();
  d.setMinutes(d.getMinutes()-90);
  console.log(d) //Tue Aug 27 2019 22:30:28 GMT+0800 (中国标准时间)
  ```

### setSeconds

-  setSeconds() 方法用于设置日期对象的秒字段。 

  语法：*Date*.setSeconds(*sec*,*millisec*)

  ```
  var d = new Date();
  d.setSeconds(35);
  console.log(d) //Wed Aug 28 2019 00:02:35 GMT+0800 (中国标准时间)
  
  var d = new Date();
  d.setSeconds(35,825);
  var n=d.getSeconds() + ":" + d.getMilliseconds();
  console.log(n) //35:825
  ```

### setTime

- setTime() 方法以毫秒设置 Date 对象。 

  语法：*Date*.setTime(*millisec*)

  ```
  var d = new Date();
  d.setTime(1332403882588);
  console.log(d) //Thu Mar 22 2012 16:11:22 GMT+0800 (中国标准时间)
  ```

  

## 获取时间差

- 是指获取两个时间点之间相差的时间
- 以前在 js 中不能用时间直接做 减法 的，现在可以了，下面介绍的是不直接减得方法
- 我们需要一些特殊的操作
- 在编程的世界里面，有一个特殊的时间，是 `1970年01月01日00时00分00秒`
- 这个时间我们叫做 `格林威治时间`
- 所有的编程世界里面，这个时间都是一样的，而且 `格林威治时间` 的数字是 0
- 从 `格林威治时间` 开始，每经过1毫秒，数字就会 + 1
- 所以我们可以获取到任意一个时间节点到 `格林威治时间` 的毫秒数
- 然后在用两个毫秒数相减，就能得到两个时间点之间相差的毫秒数
- 我们在通过这个毫秒数得到准确的时间



### 计算时间差

- 例如：我们现在计算一下 `2019-01-01 00:00:00` 到 `2019-01-03 04:55:34` 的时间差



1. 先获取两个时间点到 `格林威治时间` 的毫秒数

   ```javascript
   var time1 = new Date('2019-01-01 00:00:00')
   var time2 = new Date('2019-01-03 04:55:34')
   
   time1 = time1.getTime()
   time2 = time2.getTime()
   
   console.log(time1) // 1546272000000
   console.log(time2) // 1546462534000
   ```

2. 两个时间相减，得到两个时间点之间相差的毫秒数

   ```javascript
   var differenceTime = time2 - time1
   console.log(differenceTime) // 190534000
   ```

   - 现在我们计算出了两个时间点之间相差的毫秒数

3. 把我们计算的毫秒数换算成时间

   - 先计算出有多少天

   - 以为一天是 `1000 * 60 * 60 * 24` 毫秒

   - 用总的毫秒数除以一天的毫秒数，就能得到多少天了

     ```javascript
     var time1 = new Date('2019-01-01 00:00:00')
     var time2 = new Date('2019-01-03 04:55:34')
     time1 = time1.getTime()
     time2 = time2.getTime()
     var differenceTime = time2 - time1
     
     // 计算整的天数
     var day = differenceTime / (1000 * 60 * 60 * 24) // 2.20525462962963
     day = Math.floor(day) // 2
     ```

     - 因为得到的是有小数的天数，我们向下取整，得到有多少个整的天数

   - 使用 `differenceTime` 减去两天所包含的毫秒数，剩下的就是不够一天的毫秒数

   - 用不够一天的毫秒数计算出有多少个小时

   - 因为一个小时是 `1000 * 60 * 60` 毫秒

   - 用不够一天的毫秒数除以一小时的毫秒数，就能得到多少小时了

     ```javascript
     var time1 = new Date('2019-01-01 00:00:00')
     var time2 = new Date('2019-01-03 04:55:34')
     time1 = time1.getTime()
     time2 = time2.getTime()
     var differenceTime = time2 - time1
     
     // 计算整的天数
     var day = differenceTime / (1000 * 60 * 60 * 24) // 2.20525462962963
     day = Math.floor(day) // 2
     
     // 计算整的小时数
     var afterHours = differenceTime - (1000 * 60 * 60 * 24 * 2)
     var hours = afterHours / (1000 * 60 * 60)
     hours = Math.floor(hours) // 4
     ```

     - 和刚才一样的道理，我们需要向下取整

   - 同理，使用 `afterHours` - 4个小时包含的毫秒数，剩下的就是不够一个小时的毫秒数

   - 用不够一个小时的毫秒数计算出有多少分钟

   - 因为一分钟是 `1000 * 60` 毫秒

   - 用不够一个小时的毫秒数除以一分钟的毫秒数就能得到多少分钟了

     ```javascript
     var time1 = new Date('2019-01-01 00:00:00')
     var time2 = new Date('2019-01-03 04:55:34')
     time1 = time1.getTime()
     time2 = time2.getTime()
     var differenceTime = time2 - time1
     
     // 计算整的天数
     var day = differenceTime / (1000 * 60 * 60 * 24) // 2.20525462962963
     day = Math.floor(day) // 2
     
     // 计算整的小时数
     var afterHours = differenceTime - (1000 * 60 * 60 * 24 * 2)
     var hours = afterHours / (1000 * 60 * 60)
     hours = Math.floor(hours) // 4
     
     // 计算整分钟数
     var afterMinutes = afterHours - (1000 * 60 * 60 * 4)
     var minutes = afterMinutes / (1000 * 60)
     minutes = Math.floor(minutes) // 55
     ```

   - 和之前一样的道理计算出秒

     ```javascript
     var time1 = new Date('2019-01-01 00:00:00')
     var time2 = new Date('2019-01-03 04:55:34')
     time1 = time1.getTime()
     time2 = time2.getTime()
     var differenceTime = time2 - time1
     
     // 计算整的天数
     var day = differenceTime / (1000 * 60 * 60 * 24) // 2.20525462962963
     day = Math.floor(day) // 2
     
     // 计算整的小时数
     var afterHours = differenceTime - (1000 * 60 * 60 * 24 * 2)
     var hours = afterHours / (1000 * 60 * 60)
     hours = Math.floor(hours) // 4
     
     // 计算整分钟数
     var afterMinutes = afterHours - (1000 * 60 * 60 * 4)
     var minutes = afterMinutes / (1000 * 60)
     minutes = Math.floor(minutes) // 55
     
     // 计算整秒数
     var afterSeconds = afterMinutes - (1000 * 60 * 55)
     var seconds = afterSeconds / 1000
     seconds = Math.floor(seconds) // 34
     ```

   - 最后，同理减去整秒的数，剩下的就是毫秒数

     ```javascript
     var time1 = new Date('2019-01-01 00:00:00')
     var time2 = new Date('2019-01-03 04:55:34')
     time1 = time1.getTime()
     time2 = time2.getTime()
     var differenceTime = time2 - time1
     
     // 计算整的天数
     var day = differenceTime / (1000 * 60 * 60 * 24) // 2.20525462962963
     day = Math.floor(day) // 2
     
     // 计算整的小时数
     var afterHours = differenceTime - (1000 * 60 * 60 * 24 * 2)
     var hours = afterHours / (1000 * 60 * 60)
     hours = Math.floor(hours) // 4
     
     // 计算整分钟数
     var afterMinutes = afterHours - (1000 * 60 * 60 * 4)
     var minutes = afterMinutes / (1000 * 60)
     minutes = Math.floor(minutes) // 55
     
     // 计算整秒数
     var afterSeconds = afterMinutes - (1000 * 60 * 55)
     var seconds = afterSeconds / 1000
     seconds = Math.floor(seconds) // 34
     
     // 计算毫秒数
     var milliSeconds = afterSeconds - (1000 * 34) // 0
     ```

   - 最后我们把结果输出一下就可以了

     ```javascript
     document.write('2019-01-01 00:00:00 和 2019-01-03 04:55:34 之间相差')
     document.write(day + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒' + milliSeconds + '毫秒')
     ```




### 定时器

- 在 js 里面，有两种定时器，**倒计时定时器** 和 **间隔定时器**

#### 倒计时定时器

- 倒计时多少时间以后执行函数

- 语法： `setTimeout(要执行的函数，多长时间以后执行)`

- 会在你设定的时间以后，执行函数

  ```javascript
  var timerId = setTimeout(function () {
    console.log('我执行了')
  }, 1000)
  console.log(timerId) // 1
  ```

  - 时间是按照毫秒进行计算的，1000 毫秒就是 1秒钟
  - 所以会在页面打开 1 秒钟以后执行函数
  - 只执行一次，就不在执行了
  - 返回值是，当前这个定时器是页面中的第几个定时器



#### 间隔定时器

- 每间隔多少时间就执行一次函数

- 语法： `setInterval(要执行的函数，间隔多少时间)`

  ```javascript
  var timerId = setInterval(function () {
    console.log('我执行了')
  }, 1000)
  ```

  - 时间和刚才一样，是按照毫秒进行计算的
  - 每间隔 1 秒钟执行一次函数
  - 只要不关闭，会一直执行
  - 返回值是，当前这个定时器是页面中的第几个定时器



#### 定时器的返回值

- 设置定时器的时候，他的返回值是部分 `setTimeout` 和 `setInterval` 的

- 只要有一个定时器，那么就是一个数字

  ```javascript
  var timerId = setTimeout(function () {
    console.log('倒计时定时器')
  }, 1000)
  
  var timerId2 = setInterval(function () {
    console.log('间隔定时器')
  }, 1000)
  
  console.log(timerId) // 1
  console.log(timerId2) // 2
  ```



#### 关闭定时器

- 我们刚才提到过一个 timerId，是表示这个定时器是页面上的第几个定时器

- 这个 timerId 就是用来关闭定时器的数字

- 我们有两个方法来关闭定时器 `clearTimeout` 和 `clearInterval`

  ```javascript
  var timerId = setTimeout(function () {
    console.log('倒计时定时器')
  }, 1000)
  clearTimeout(timerId)
  ```

  - 关闭以后，定时器就不会在执行了

  ```javascript
  var timerId2 = setInterval(function () {
    console.log('间隔定时器')
  }, 1000)
  clearInterval(timerId2)
  ```

  - 关闭以后定时器就不会在执行了

- 原则上是 

  - `clearTimeout` 关闭 `setTimeout`
  - `clearInterval` 关闭 `setInterval`

- 但是其实是可以通用的，他们可以混着使用

  ```javascript
  var timerId = setTimeout(function () {
    console.log('倒计时定时器')
  }, 1000)
  // 关闭倒计时定时器
  clearInterval(timerId)
  
  var timerId2 = setInterval(function () {
    console.log('间隔定时器')
  }, 1000)
  // 关闭间隔定时器
  clearTimeout(timerId2)
  ```

  

# BOM

- 今天开始我们开始使用 js 去操作浏览器和页面中的 html 元素了

## 原生对象与宿主对象

原生对象（本地对象）：native object

ECMA所定义的对象Number、String、Boolean、Object、Array、Function、Date、RegExp、内置对象(如 Math、Global不需要实例化)、Error ..... 

宿主对象：host object（ 如 window、BOM、DOM ）

什么是宿主？web的运行环境，即操作系统、浏览器

宿主提供的对象 -> 宿主对象 

## BOM

- BOM（Browser Object Model）： 浏览器对象模型
- 其实就是操作浏览器的一些能力
- 我们可以操作哪些内容
  - 获取一些浏览器的相关信息（窗口的大小）
  - 操作浏览器进行页面跳转
  - 获取当前浏览器地址栏的信息
  - 操作浏览器的滚动条
  - 浏览器的信息（浏览器的版本）
  - 让浏览器出现一个弹出框（alert/confirm/prompt）
- BOM 的核心就是 window 对象
- window 是浏览器内置的一个对象，里面包含着操作浏览器的方法

[![62rtlF.png](https://s3.ax1x.com/2021/03/18/62rtlF.png)](https://imgtu.com/i/62rtlF)

### 获取浏览器窗口的尺寸

- `innerHeight` 和 `innerWidth`

- 这两个属性分别是用来获取浏览器窗口的宽度和高度（包含滚动条的）

  ``` javascript
  var windowHeight = window.innerHeight
  console.log(windowHeight)
  
  var windowWidth = window.innerWidth
  console.log(windowWidth)
  ```

  

### 浏览器的弹出层

- `alert` 是在浏览器弹出一个提示框

  ```javascript
  window.alert('我是一个提示框')
  ```


  - 这个弹出层只是一个提示内容，只有一个确定按钮
  - 点击确定按钮以后，这个提示框就消失了

- `confirm` 是在浏览器弹出一个询问框

  ```javascript
  var boo = window.confirm('我是一个询问框')
  console.log(boo)
  ```


  - 这个弹出层有一个询问信息和两个按钮
  - 当你点击确定的时候，就会得到 true
  - 当你点击取消的时候，就会得到 false

- `prompt` 是在浏览器弹出一个输入框

  ```javascript
  var str = window.prompt('请输入内容')
  console.log(str)
  ```


  - 这个弹出层有一个输入框和两个按钮
  - 当你点击取消的时候，得到的是 null
  - 当你点击确定的时候得到的就是你输入的内容


### 浏览器的窗口

- open()：方法用于打开一个新的浏览器窗口或查找一个已命名的窗口。 
  - 语法：window.open(*URL,name,specs,replace*) 
- close()：方法用于关闭浏览器窗口。 
  - 语法：
    - window.close()：关闭当前窗口
    - 新窗口.close()：关闭指定窗口
- window.screenLeft 属性返回窗口相对于屏幕的X坐标（不支持老版本火狐浏览器）
- window.screenTop 属性返回窗口相对于屏幕的Y坐标 （不支持老版本火狐浏览器）
- window.screenX 属性返回窗口相对于屏幕的X坐标 （不支持IE9以下浏览器）
- window.screenY 属性返回窗口相对于屏幕的Y坐标 （不支持IE9以下浏览器）

  

### 浏览器的地址信息

- 在 window 中有一个对象叫做 `location` 
- 就是专门用来存储浏览器的地址栏内的信息的



#### location.href

- `location.href` 这个属性存储的是浏览器地址栏内 url 地址的信息

  ```javascript
  console.log(window.location.href)
  ```

  - 会把中文编程 url 编码的格式

- `location.href` 这个属性也可以给他赋值

  ```javascript
  window.location.href = './index.html'
  // 这个就会跳转页面到后面你给的那个地址
  ```



#### location.reload

- `location.reload()` 这个方法会重新加载一遍页面，就相当于刷新是一个道理

  ```javascript
  window.location.reload()
  ```

  - 注意： **不要写在全局，不然浏览器就会一直处在刷新状态**

#### host 

- host 属性是一个可读可写的字符串，可设置或返回当前 URL 的主机名称和端口号。 

  ```
  document.write(location.host);
  ```

#### hostname  

- hostname 属性是一个可读可写的字符串，可设置或返回当前 URL 的主机名。 

  ```
  document.write(location.hostname);
  ```

  

### 浏览器的历史记录

- window 中有一个对象叫做 `history` 
- 是专门用来存储历史记录信息的



#### history.back

- `history.back` 是用来回退历史记录的，就是回到前一个页面，就相当于浏览器上的 ⬅️ 按钮

  ```javascript
  window.history.back()
  ```

  - 前提是你要有上一条记录，不然就是一直在这个页面，也不会回退



#### history.forward

- `history.forward` 是去到下一个历史记录里面，也就是去到下一个页面，就相当于浏览器上的 ➡️ 按钮

  ```javascript
  window.history.forward()
  ```

  - 前提是你要之前有过回退操作，不然的话你现在就是最后一个页面，没有下一个

#### history.go

- go(n)：n为整数，跳转第n个浏览过的文档

  n==0  则刷新当前页面

  n>0  则向前跳转到第n个文档

  n<0  则向后跳转到第n个文档

  ```
  window.history.go(-1)
  ```

  - 前提是你要有上一条记录，不然就是一直在这个页面，也不会回退

### 浏览器的版本信息（了解）

- window 中有一个对象叫做 `navigator`
- 是专门用来获取浏览器信息的



#### navigator.userAgent

- `navigator.userAgent` 是获取的浏览器的整体信息

  ```javascript
  console.log(window.navigator.userAgent)
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36
  ```



#### navigator.appName

- `navigator.appName` 获取的是浏览器的名称

  ```javascript
  console.log(window.navigator.appName)
  ```



#### navigator.appVersion

- `navigator.appVersion` 获取的是浏览器的版本号

  ```javascript
  console.log(window.navigator.appVersion)
  ```



#### navigator.platform

- `navigator.platform` 获取到的是当前计算机的操作系统

  ```javascript
  console.log(window.navigator.platform)
  ```

### screen对象 

- screen对象包含有关客户端显示屏幕的信息

```
width 属性返回显示器屏幕的宽度
height 属性返回显示器屏幕的高度
availHeight 属性返回显示屏幕的高度 (除 Windows 任务栏之外)
availWidth 属性返回显示屏幕的宽度 (除 Windows 任务栏之外)
```

# DOM

- DOM（Document Object Model）： 文档对象模型

- DOM描绘了一个层次化的节点树，即HTML文档中的所有内容都是节点(node)。

- DOM树中的所有节点均可通过JS进行访问，允许开发人员添加、移除、修改和查询页面的某一部分。 

  [![62rUOJ.png](https://s3.ax1x.com/2021/03/18/62rUOJ.png)](https://imgtu.com/i/62rUOJ)


- W3C规定的三类DOM标准接口

  1、Core DOM（核心DOM），适用于各种结构化文档

  2、XML DOM（Java OOP），专用于XML文档

  3、HTML DOM，专用于HTML文档

- Core DOM（核心DOM）

  DOM模型的节点：文档可以说是由节点构成的集合。在DOM模型中有以下3种常用节点：

  1、元素节点：各种标签就是这些元素节点的名称，例如<div>、<p>等

  2、文本节点：文本节点总是被包含在元素节点里面的内容

  3、属性节点：一般用来修饰元素节点就称之为属性节点

  示例：

  ``` html
  <a title=”JS”  href=”https://www.baidu.com”>百度</a>
  ```

- 其实就是操作 html 中的标签的一些能力

- 我们可以操作哪些内容
  - 获取一个元素
  - 移除一个元素
  - 创建一个元素
  - 向页面里面添加一个元素
  - 给元素绑定一些事件
  - 获取元素的属性
  - 给元素添加一些 css 样式
  - ...

- DOM 的核心对象就是 document对象

- document 对象是浏览器内置的一个对象，里面存储着专门用来操作元素的各种方法

- DOM： 页面中的标签，我们通过 js 获取到以后，就把这个对象叫做 DOM 对象



## 获取一个元素

- 通过 js 代码来获取页面中的标签
- 获取到以后我们就可以操作这些标签了



### getElementById

- `getElementById` 是通过标签的 id 名称来获取标签的

- 因为在一个页面中 id 是唯一的，所以获取到的就是一个元素

  ```html
  <body>
    <div id="box"></div>
    <script>
    	var box = document.getElementById('box')
    	console.log(box) // <div></div>
    </script>
  </body>
  ```

  - 获取到的就是页面中的那个 id 为 box 的 div 标签



### getElementsByClassName

- `getElementsByClassName` 是通过标签的 class 名称来获取标签的

- 因为页面中可能有多个元素的 class 名称一样，所以获取到的是一组元素

- 哪怕你获取的 class 只有一个，那也是获取一组元素，只不过这一组中只有一个 DOM 元素而已

  ```html
  <body>
    <div calss="box"></div>
    <script>
    	var box = document.getElementsByClassName('box')
    	console.log(box) // [<div></div>]
      console.log(box[0]) // <div></div>
    </script>
  </body>
  ```

  - 获取到的是一组元素，是一个长得和数组一样的数据结构，但不是数组，是伪数组
  - 这个一组数据也是按照索引排列的，所以我们想要准确的拿到这个 div，需要用索引来获取



### getElementsByTagName

- `getElementsByTagName` 是通过标签的 标签 名称来获取标签的

- 因为页面中可能有多个元素的 标签 名称一样，所以获取到的是一组元素

- 哪怕真的只有一个这个标签名，那么也是获取一组元素，只不过这一组中只有一个 DOM 元素而已

  ```html
  <body>
    <div></div>
    <script>
    	var box = document.getElementsByTagName('div')
    	console.log(box) // [<div></div>]
      console.log(box[0]) // <div></div>
    </script>
  </body>
  ```

  - 和 `getElementsByClassName` 一样，获取到的是一个长得很像数组的元素
  - 必须要用索引才能得到准确的 DOM 元素



### querySelector

- `querySelector` 是按照选择器的方式来获取元素

- 也就是说，按照我们写 css 的时候的选择器来获取

- 这个方法只能获取到一个元素，并且是页面中第一个满足条件的元素

  ```javascript
  console.log(document.querySelector('div')) // 获取页面中的第一个 div 元素 
  console.log(docuemnt.querySelector('.box')) // 获取页面中第一个有 box 类名的元素
  console.log(document.querySelector('#box')) // 获取页面中第一个 id 名为 box 的元素
  ```



### querySelectorAll

- `querySelectorAll` 是按照选择器的方式来获取元素

- 这个方法能获取到所有满足条件的元素，以一个伪数组的形式返回

  ```javascript
  console.log(document.querySelectorAll('div')) // 获取页面中的所有的 div 元素 
  console.log(docuemnt.querySelectorAll('.box')) // 获取页面中所有有 box 类名的元素
  ```

  - 获取到的是一组数据，也是需要用索引来获取到准确的每一个 DOM 元素

注：query选择符选出来的元素及元素数组是静态的，而getElement这种方法选出的元素是动态的。静态的就是说选出的所有元素的数组，不会随着文档操作而改变． 

## querySelector系列和getElementById的区别

1. 两者的W3C标准不同
   querySelector系列属于W3C中的Selectors API(JS)规范
   getElementsBy系列则属于 W3C的DOM 规范。
2. 两者浏览器的兼容不同
   getElementsBy系列基本能被所有浏览器支持。
   querySelector系列则通常只有在考虑兼容性的时候才被提起(尽管两者功能近似)
   ``` javascript
    //IE7不支持
    var box = document.querySelectorAll('.p2');
    console.log(box);
    /* var p1 = document.getElementById('p1');
    //IE8及其以下不支持getElementsByClassName
    var ps = document.getElementsByClassName('p');
    console.log(p1);*/
    ```



3. 接受参数不同
   querySelector系列接收的参数是一个css选择器名。
   getElementsBy系列接收的参数只能是单一的className、tagName 和 name。
4. 返回值不同
    + querySelector系列返回的是静态节点列表
    ``` javascript
     // 例子：
      var lis = document.querySelectorAll('li');
      console.log(lis);
      var ul = document.querySelector('ul');
      for(var i = 0;i<lis.length;i++){
          //新建一个li  一共会新建四个li
          var li = document.createElement('li');
          li.innerHTML='我是新建的li'+i;
          ul.appendChild(li);
      }
      console.log(lis.length)
    ```
    + getElementsBy系列返回的是动态节点列表  回忆 childNodes
    ``` javascript
     // 例子：
      var lis = document.getElementsByTagName('li');
      console.log(lis);// 5 6 7
      var ul = document.querySelector('ul');
      for(var i = 0;i<lis.length;i++){
      console.log('来了 老弟');
      //新建一个li
      var li = document.createElement('li');
      li.innerHTML='我是新建的li'+i;
      ul.appendChild(li);
      }
      console.log(lis.length)  //死循环
    ```



## 操作属性

- 通过我们各种获取元素的方式获取到页面中的标签以后
- 我们可以直接操作 DOM 元素的属性，就能直接把效果展示在页面上



### innerHTML 

- 获取元素内部的 HTML 结构

  ```html
  <body>
    <div>
      <p>
        <span>hello</span>
      </p>
    </div>
  
    <script>
      var div = document.querySelector('div')
      console.log(div.innerHTML)
  		/*
  			
        <p>
          <span>hello</span>
        </p>
  		
  		*/
    </script>
  </body>
  ```

- 设置元素的内容

  ```html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.innerHTML = '<p>hello</p>'
    </script>
  </body>
  ```

  - 设置完以后，页面中的 div 元素里面就会嵌套一个 p 元素



### innerText

- 获取元素内部的文本（只能获取到文本内容，获取不到 html 标签）

  ```html
  <body>
    <div>
      <p>
        <span>hello</span>
      </p>
    </div>
  
    <script>
      var div = document.querySelector('div')
      console.log(div.innerText) // hello
    </script>
  </body>
  ```

- 可以设置元素内部的文本

  ```html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.innerText = '<p>hello</p>'
    </script>
  </body>
  ```

  - 设置完毕以后，会把 `<p>hello</p>` 当作一个文本出现在 div 元素里面，而不会把 p 解析成标签



### getAttribute

- 获取元素的某个属性（包括自定义属性）

  ```html
  <body>
    <div a="100" class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	console.log(div.getAttribute('a')) // 100
      console.log(div.getAttribute('class')) // box
    </script>
  </body>
  ```



### setAttribute

- 给元素设置一个属性（包括自定义属性）

  ```html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.setAttribute('a', 100)
      div.setAttribute('class', 'box')
      console.log(div) // <div a="100" class="box"></div>
    </script>
  </body>
  ```

  

### removeAttribute

- 直接移除元素的某个属性

  ```html
  <body>
    <div a="100" class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	div.removeAttribute('class')
      console.log(div) // <div a="100"></div>
    </script>
  </body>
  ```


### data-set

- HTML5新特性-自定义属性

- 在HTML5中我们可以使用data-前缀设置我们需要的自定义属性，来进行一些数据的存放 使用data-set可以获取这些数据 

  ```
  data属性的设置和读取方式：
  1、data-xxx 的格式，则采用正常格式来读写该属性值
  
  <div id="test" data-name="小明">自定义属性data-name</div>
  
  // 原生js方式
  var testData = document.getElementById("test");
  console.log(testData.dataset.name); // 读取data-name的值
  console.log(testData.getAttribute("data-name")); // 读取data-name的值
  
  testData.dataset.age = 18;  // 设置data-age的值
  testData.setAttribute("data-age",18);  // 设置data-age的值
  
  testData.removeAttribute("data-age");  // 删除data-age属性
  
  2、data-xxx-yyy-zzz的格式，则采用首个单词的首字母小写的驼峰式xxxYyyZzz读写该自定义属性值
  <div id="test2" data-user-name="小明">自定义属性data-user-name</div>
  
  // 原生js方式
  var testData2 = document.getElementById("test2");
  console.log(testData2.dataset.userName); // 读取data-user-name的值
  console.log(testData2.getAttribute("data-user-name")); // 读取data-user-name的值
  
  testData.dataset.userAge = 18;  // 设置data-user-age的值
  testData2.setAttribute("data-user-age",18);  // 设置data-user-age的值
  
  testData2.removeAttribute("data-user-age");  // 删除data-user-age属性
  
  ```

### style

- 专门用来给元素添加 css 样式的

- 添加的都是行内样式

  ``` html
  <body>
    <div></div>
  
    <script>
      var div = document.querySelector('div')
     	div.style.width = "100px"
      div.style.height = "100px"
      div.style.backgroundColor = "pink"
      console.log(div) 
      // <div style="width: 100px; height: 100px; background-color: pink;"></div>
    </script>
  </body>
  ```



  - 页面中的 div 就会变成一个宽高都是100，背景颜色是粉色



### className

- 专门用来操作元素的 类名的

  ```html
  <body>
    <div class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	console.log(div.className) // box
    </script>
  </body>
  ```

- 也可以设置元素的类名，不过是全覆盖式的操作

  ```html
  <body>
    <div class="box"></div>
  
    <script>
      var div = document.querySelector('div')
     	div.className = 'test'
      console.log(div) // <div class="test"></div>
    </script>
  </body>
  ```

  - 在设置的时候，不管之前有没有类名，都会全部被设置的值覆盖

## 特殊标签的获取方式

- 获取body标签

  ```
  var body1=document.body
  console.log(body1)
  ```

- 获取head标签

  ```
  var head1=document.head
  console.log(head1)
  ```

- 获取title，不是获取标签，而是获取标签中的内容

  ```
  var title1=document.title
  console.log(title1)
  ```

- 获取html标签

  ```
  var html1=document.documentElement
  console.log(html1)
  ```




## DOM节点

- DOM 就是我们 html 结构中一个一个的节点构成的
- 不光我们的标签是一个节点，我们写的文本内容也是一个节点，注释，包括空格都是节点
- DOM 的节点我们一般分为常用的三大类 **元素节点** / **文本节点** / **属性节点**
- 什么是分类，比如我们在获取元素的时候，通过各种方法获取到的我们叫做元素节点（标签节点）
- 比如我们标签里面写的文字，那么就是文本节点
- 写在每一个标签上的属性，就是属性节点



## 元素节点

- 我们通过 `getElementBy...` 获取到的都是元素节点



## 属性节点

- 我们通过 `getAttribute` 获取的就是元素的属性节点



## 文本节点

- 我们通过 `innerText` 获取到的就是元素的文本节点



## 获取节点

- `childNodes`：获取某一个节点下 **所有的子一级节点**
  ```html
  <body>
    <div>
      <p>hello</p>
    </div>
    
    <script>
      // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
    	var oDiv = document.querySelector('div')
      
      console.log(oDiv.childNodes) 
      /*
      	NodeList(3) [text, p, text]
        0: text
        1: p
        2: text
        length: 3
        __proto__: NodeList
      */
    </script>
  </body>
  ```

  - 我们会发现，拿到以后是一个伪数组，里面有三个节点
  - 一个 text：从 `<div>` 一直到 `<p>` 中间有一个换行和一堆空格，这个是第一个节点，是一个文本节点
  - 一个 p：这个 p 标签就是第二个节点，这个是一个元素节点
  - 一个 text：从 `</p>` 一直到 `</div>` 中间有一个换行和一堆空格，这个是第三个节点，是一个文本节点
  - 这个时候就能看到我们有不同的节点类型了

- `children` ：获取某一节点下所有的子一级 **元素节点**

  ```html
  <body>
    <div>
      <p>hello</p>
    </div>
    
    <script>
      // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
    	var oDiv = document.querySelector('div')
      
      console.log(oDiv.children) 
      /*
      	HTMLCollection [p]
        0: p
        length: 1
        __proto__: HTMLCollection
      */
    </script>
  </body>
  ```

  - 我们发现只有一个节点了，因为 `children` 只要元素节点
  - div 下面又只有一个元素节点，就是 p
  - 所以就只有一个，虽然只有一个，但是也是一个 **伪数组**

- `firstChild`：获取某一节点下子一级的 **第一个节点**

  ```html
  <body>
    <div>
      <p>hello</p>
    </div>
    
    <script>
      // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
    	var oDiv = document.querySelector('div')
      
      console.log(oDiv.firstChild) // #text 
    </script>
  </body>
  ```

  - 这个是只获取一个节点，不再是伪数组了
  - 获取的是第一个
  - 第一个就是 `<div>` 一直到 `<p>` 的那个换行和空格，是个文本节点

- `lastChild`：获取某一节点下子一级的 **最后一个节点**

  ```html
  <body>
    <div>
      <p>hello</p>
    </div>
    
    <script>
      // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
    	var oDiv = document.querySelector('div')
      
      console.log(oDiv.lastChild) // #text 
    </script>
  </body>
  ```

  - 只获取一个节点，不再是伪数组
  - 获取的是最后一个
  - 最后一个就是 `</p>` 一直到 `</div>` 之间的换行和空格，是个文本节点

- `firstElementChild`：获取某一节点下子一级 **第一个元素节点**

  ```html
  <body>
    <div>
      <p>hello</p>
    </div>
    
    <script>
      // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
    	var oDiv = document.querySelector('div')
      
      console.log(oDiv.firstElementChild) // <p>hello</p>
    </script>
  </body>
  ```

  - 只获取一个节点，不在是伪数组
  - 获取的是第一个 **元素节点**
  - 第一个元素节点就是 p 标签，是一个元素节点

- `lastElementChild`：获取某一节点下子一级 **最后一个元素节点**

  ```html
  <body>
    <div>
      <p>hello</p>
      <p>world</p>
    </div>
    
    <script>
      // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
    	var oDiv = document.querySelector('div')
      
      console.log(oDiv.lastElementChild) // <p>world</p>
    </script>
  </body>
  ```

  - 只获取一个节点，不在是伪数组
  - 获取的是最后一个 **元素节点**
  - 最后一个元素节点是 `<p>world</p>`，是一个元素节点

- `nextSibling`：获取某一个节点的 **下一个兄弟节点**

  ```html
  <body>
    <ul>
      <li id="a">hello</li>
      <li id="b">world</li>
      <li id="c">!!!</li>
    </ul>
    
    <script>
      // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
    	var oLi = document.querySelector('#b')
      
      console.log(oLi.nextSibling) // #text
    </script>
  </body>
  ```

  - 只获取一个节点，不在是伪数组
  - 获取的是 `id="b"` 这个 li 的下一个兄弟节点
  - 因为 `id="b"` 的下一个节点，是两个 li 标签之间的换行和空格，所以是一个文本节点

- `previousSibling`：获取某一个节点的 **上一个兄弟节点**

  ```html
  <body>
    <ul>
      <li id="a">hello</li>
      <li id="b">world</li>
      <li id="c">!!!</li>
    </ul>
    
    <script>
      // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
    	var oLi = document.querySelector('#b')
      
      console.log(oLi.previousSibling) // #text
    </script>
  </body>
  ```

  - 只获取一个节点，不在是伪数组
  - 获取的是 `id="b"` 这个 li 的上一个兄弟节点
  - 因为 `id="b"` 的上一个节点，是两个 li 标签之间的换行和空格，所以是一个文本节点

- `nextElementSibling`：获取某一个节点的 **下一个元素节点**

  ```html
  <body>
    <ul>
      <li id="a">hello</li>
      <li id="b">world</li>
      <li id="c">!!!</li>
    </ul>
    
    <script>
      // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
    	var oLi = document.querySelector('#b')
      
      console.log(oLi.nextElementSibling) // <li id="c">!!!</li>
    </script>
  </body>
  ```

  - 只获取一个节点，不在是伪数组
  - 获取的是 `id="b"` 这个 li 的下一个兄弟元素节点
  - 因为 `id="b"` 的下一个兄弟元素节点就是 `id="c"` 的 li，是一个元素节点

- `previousElementSibling`：获取某一个节点的 **上一个元素节点**

  ```html
  <body>
    <ul>
      <li id="a">hello</li>
      <li id="b">world</li>
      <li id="c">!!!</li>
    </ul>
    
    <script>
      // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
    	var oLi = document.querySelector('#b')
      
      console.log(oLi.previousElementSibling) // <li id="a">hello</li>
    </script>
  </body>
  ```

  - 只获取一个节点，不在是伪数组
  - 获取的是 `id="b"` 这个 li 的上一个兄弟元素节点
  - 因为 `id="b"` 的上一个兄弟元素节点就是 `id="a"` 的 li，是一个元素节点

- `parentNode`：获取某一个节点的 **父节点**

  ```html
  <body>
    <ul>
      <li id="a">hello</li>
      <li id="b">world</li>
      <li id="c">!!!</li>
    </ul>
    
    <script>
      // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
    	var oLi = document.querySelector('#b')
      
      console.log(oLi.parentNode) // <ul>...</ul>
    </script>
  </body>
  ```

  - 只获取一个节点，不在是伪数组
  - 获取的是当前这个 li 的父元素节点
  - 因为这个 li 的父亲就是 ul，所以获取到的就是 ul，是一个元素节点

- `attributes`：获取某一个 **元素节点** 的所有 **属性节点**

  ```html
  <body>
    <ul>
      <li id="a" a="100" test="test">hello</li>
    </ul>
    
    <script>
      // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
    	var oLi = document.querySelector('#a')
      
      console.log(oLi.attributes) 
      /*
      	NamedNodeMap {0: id, 1: a, 2: test, id: id, a: a, test: test, length: 3}
        0: id
        1: a
        2: test
        length: 3
        a: a
        id: id
        test: test
        __proto__: NamedNodeMap
      
      */
    </script>
  </body>
  ```

  - 获取的是一组数据，是该元素的所有属性，也是一个伪数组
  - 这个 li 有三个属性，id / a / test 三个，所以就获取到了这三个



## 节点属性

- 我们已经知道节点会分成很多种，而且我们也能获取到各种不同的节点

- 接下来我们就来聊一些各种节点之间属性的区别

- 我们先准备一段代码

  ```html
  <body>
    <ul test="我是 ul 的一个属性">
      <li>hello</li>
    </ul>
  
    <script>
      // 先获取 ul
      var oUl = document.querySelector('ul')
      
      // 获取到 ul 下的第一个子元素节点，是一个元素节点
      var eleNode = oUl.firstElementChild
      
      // 获取到 ul 的属性节点组合，因为是个组合，我们要拿到节点的话要用索引
      var attrNode = oUl.attributes[0]
  
      // 获取到 ul 下的第一个子节点，是一个文本节点
      var textNode = oUl.firstChild
    </script>
  </body>
  ```

  



### nodeType

- `nodeType`：获取节点的节点类型，用数字表示

  ```javascript
  console.log(eleNode.nodeType) // 1
  console.log(attrNode.nodeType) // 2
  console.log(textNode.nodeType) // 3
  ```

  - `nodeType === 1` 就表示该节点是一个 **元素节点**
  - `nodeType === 2` 就表示该节点是一个 **属性节点**
  - `nodeType === 3` 就表示该节点是一个 **文本节点**



### nodeName

- `nodeName`：获取节点的节点名称

  ```javascript
  console.log(eleNode.nodeName) // LI
  console.log(attrNode.nodeName) // test
  console.log(textNode.nodeName) // #text
  ```

  - 元素节点的 `nodeName` 就是 **大写标签名**
  - 属性节点的 `nodeName` 就是 **属性名**
  - 文本节点的 `nodeName` 都是 **#text**



### nodeValue

- `nodeValue`： 获取节点的值

  ```javascript
  console.log(eleNode.nodeValue) // null
  console.log(attrNode.nodeValue) // 我是 ul 的一个属性
  console.log(textNode.nodeValue) // 换行 + 空格
  ```

  - 元素节点没有 `nodeValue`
  - 属性节点的 `nodeValue` 就是 **属性值**
  - 文本节点的 `nodeValue` 就是 **文本内容**



### 汇总

|          | nodeType | nodeName   | nodeValue |
| -------- | -------- | ---------- | --------- |
| 元素节点 | 1        | 大写标签名 | null      |
| 属性节点 | 2        | 属性名     | 属性值    |
| 文本节点 | 3        | \#text     | 文本内容  |



## 操作 DOM 节点

- 我们所说的操作无非就是 **增删改查（CRUD）**
- 创建一个节点（因为向页面中增加之前，我们需要先创建一个节点出来）
- 向页面中增加一个节点
- 删除页面中的某一个节点
- 修改页面中的某一个节点
- 获取页面中的某一个节点



## 创建一个节点

- `createElement`：用于创建一个元素节点

  ```javascript
  // 创建一个 div 元素节点
  var oDiv = document.createElement('div')
  
  console.log(oDiv) // <div></div>
  ```

  - 创建出来的就是一个可以使用的 div 元素

- `createTextNode`：用于创建一个文本节点

  ```javascript
  // 创建一个文本节点
  var oText = document.createTextNode('我是一个文本')
  
  console.log(oText) // "我是一个文本"
  ```



## 向页面中加入一个节点

- `appendChild`：是向一个父元素节点的末尾追加一个子节点

- 语法： `父节点.appendChild(要插入的子节点)`

  ```javascript
  // 创建一个 div 元素节点
  var oDiv = document.createElement('div')
  var oText = document.createTextNode('我是一个文本')
  
  // 向 div 中追加一个文本节点
  oDiv.appendChild(oText)
  
  console.log(oDiv) // <div>我是一个文本</div>
  ```

- `insertBefore`：向某一个节点前插入一个节点

- 语法： `父节点.insertBefore(要插入的节点，插入在哪一个节点的前面)`

  ```html
  <body>
    <div>
      <p>我是一个 p 标签</p>
    </div>
    
    <script>
    	var oDiv = document.querySelector('div')
      var oP = oDiv.querySelector('p')
      
      // 创建一个元素节点
      var oSpan = document.createElement('span')
      
      // 将这个元素节点添加到 div 下的 p 的前面
      oDiv.insertBefore(oSpan, oP)
      
      console.log(oDiv)
      /*
      	<div>
      		<span></span>
      		<p>我是一个 p 标签</p>
      	</div>
      */
    </script>
  </body>
  ```



## 删除页面中的某一个节点

- `removeChild`：移除某父节点下的某一个节点

- 语法：`父节点.removeChild(要移除的字节点)`

  ```html
  <body>
    <div>
      <p>我是一个 p 标签</p>
    </div>
    
    <script>
    	var oDiv = document.querySelector('div')
      var oP = oDiv.querySelector('p')
      
      // 移除 div 下面的 p 标签
      oDiv.removeChild(oP)
      
      console.log(oDiv) // <div></div>
    </script>
  </body>
  ```

- `remove`：用于从下拉列表删除选项。 

- 语法：`selectObject.remove(index)`

  ``` html
  <html>
  <head>
  <script type="text/javascript">
  function removeOption()
    {
    var x=document.getElementById("mySelect")
    x.remove(x.selectedIndex)
    }
  </script>
  </head>
  <body>
  
  <form>
  <select id="mySelect">
    <option>Apple</option>
    <option>Pear</option>
    <option>Banana</option>
    <option>Orange</option>
  </select>
  <input type="button" onclick="removeOption()"
  value="Remove option">
  </form>
  
  </body>
  </html>
  ```

  注：该方法从选项数组的指定位置移除 <option> 元素。如果指定的下标比 0 小，或者大于或等于选项的数目，remove() 方法会忽略它并什么也不做。 如果不添加下标，那么则移除该对象本身



## 修改页面中的某一个节点

- `replaceChild`：将页面中的某一个节点替换掉

- 语法： `父节点.replaceChild(新节点，旧节点)`

  ```html
  <body>
    <div>
      <p>我是一个 p 标签</p>
    </div>
    
    <script>
    	var oDiv = document.querySelector('div')
      var oP = oDiv.querySelector('p')
      
      // 创建一个 span 节点
      var oSpan = document.createElement('span')
      // 向 span 元素中加点文字
      oSpan.innerHTML = '我是新创建的 span 标签'
      
     	// 用创建的 span 标签替换原先 div 下的 p 标签
      oDiv.replaceChild(oSpan, oP)
      
      console.log(oDiv)
      /*
      	<div>
      		<span>我是新创建的 span 标签</span>
      	</div>
      */
    </script>
  </body>
  ```

## 克隆页面中的某一个节点

- cloneNode ：克隆页面中的某一个节点

- 语法：克隆元素. cloneNode()

  - 参数默认是false，表示只克隆自己，不克隆子元素
  - 如果参数为true，连带所有后代元素一起克隆
  - 返回值：就是一个被克隆好的元素

  ``` javascript
  var oDiv = document.querySelector('div')
  var oP = oDiv.querySelector('p')
  var res =oDiv.cloneNode()
  console.log(res)
  ```




## 获取元素的非行间样式

- 我们在操作 DOM 的时候，很重要的一点就是要操作元素的 css 样式

- 那么在操作 css 样式的时候，我们避免不了就要获取元素的样式

- 之前我们说过可以用 `元素.style.xxx` 来获取

- 但是这个方法只能获取到元素 **行间样式**，也就是写在行内的样式

  ```html
  <style>
    div {
      width: 100px;
    }
  </style>
  <body>
    <div style="height: 100px;">
      <p>我是一个 p 标签</p>
    </div>
  
    <script>
      var oDiv = document.querySelector('div')
  		console.log(oDiv.style.height) // 100px
      console.log(oDIv.style.width) // ''
    </script>
  </body>
  ```

- 不管是外链式还是内嵌式，我们都获取不到该元素的样式

- 这里我们就要使用方法来获取了 **getComputedStyle** 和 **currentStyle**

- 这两个方法的作用是一样的，只不过一个在 **非 IE** 浏览器，一个在 **IE** 浏览器



## getComputedStyle（非IE使用）

- 语法：`window.getComputedStyle(元素, null).要获取的属性`

- 第二个参数不写的时候默认是null，表示是一个正常元素

- 第二个参数可以写'after' || 'before'，表示获取伪元素的样式

  ```html
  <style>
    div {
      width: 100px;
    }
  </style>
  <body>
    <div style="height: 100px;">
      <p>我是一个 p 标签</p>
    </div>
  
    <script>
      var oDiv = document.querySelector('div')
  		console.log(window.getComputedStyle(oDiv).width) // 100px
      console.log(window.getComputedStyle(oDiv).height) // 100px
    </script>
  </body>
  ```

  - 这个方法获取行间样式和非行间样式都可以



## currentStyle（IE使用）

- 语法： `元素.currentStyle.要获取的属性`

  ```html
  <style>
    div {
      width: 100px;
    }
  </style>
  <body>
    <div style="height: 100px;">
      <p>我是一个 p 标签</p>
    </div>
  
    <script>
      var oDiv = document.querySelector('div')
  		console.log(oDiv.currentStyle.width) // 100px
      console.log(oDiv.currentStyle.height) // 100px
    </script>
  </body>
  ```

## **文档碎片** 

- 通俗易懂解释文档碎片：我们每次去超市买东西，都是用袋子一次性把所有东西运回来，而不可能选择每次只拿一样东西。而当我们用JS DOM向页面插入元素的时候，每插入一个元素，页面就会渲染一次，但当我们要插入过多元素的时候，页面渲染的次数会使得DOM的操作性能降低。而在这个过程中，文档碎片就类似于一个我们买东西的袋子，我们每次创建好一个元素的时候，不直接插入页面中，而是插入文档碎片里，最后再一次性地把所有元素插入页面中，这样页面只需要渲染一次，极大地提高了DOM操作性能（理论上）
- **为何要创建文档碎片** 
  - 在浏览器中，修改、删除或者增加DOM元素。更新DOM会导致浏览器重新绘制屏幕，对于少量的更新，一条条循环插入也会运行很好。但是，如果当我们要向document中添加大量数据时(比如1w条)，逐条添加节点，会导致回流,这样会带来巨大的开销，这个过程就可能会十分缓慢。我们通常解决这种情况的办法尽量减少更新DOM，这也就意味着将DOM的改变分批处理，并在“活动”文档树之外执行这些更新。当需要创建一个相对比较大的子树，应该在子树完全创建之后再将子树添加到DOM树中，这时采用文档碎片技术来容纳所有的节点

- **如何创建文档碎片** 
  - `var oFrag = document.createDocumentFragment();`  
  - createdocumentfragment()方法创建了一虚拟的节点对象，节点对象包含所有属性和方法。
    当你想提取文档的一部分，改变，增加，或删除某些内容及插入到文档末尾可以使用createDocumentFragment() 方法。
    你也可以使用文档的文档对象来执行这些变化，但要防止文件结构被破坏，createDocumentFragment() 方法可以更安全改变文档的结构及节点。

- 示例：
  ``` javascript
    var oFragmeng = document.createDocumentFragment(); 
        for(var i=0;i<10000;i++){ 
            var op = document.createElement("span"); 
            var oText = document.createTextNode(i); 
            op.appendChild(oText); 
            //先附加在文档碎片中
            oFragmeng.appendChild(op);  
        } 
        //最后一次性添加到document中
    
        document.body.appendChild(oFragmeng); 
    ```

- 案例：新增10000个li节点，统计执行的时间，通过对比两者的的执行时间来判断谁的性能更高一点。 

- ``` html
  //（1）使用普通方法挂载新增节点
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8" />
          <title>文档碎片性能测试——普通方法</title>
          <script>
              window.onload = function(){
              var oBtn = document.getElementById("btn1");
              var oUl = document.getElementById("ul1");
              
              var iStart = new Date().getTime();                  //开始执行的时间
              oBtn.onclick = function(){
                  //普通追加
                 
                  for(var i=0; i<100000; i++){                   //使用for循环创建100000个li节点，并一个个的挂载在ul下面
                      var oLi = document.createElement("li");
                      oUl.appendChild(oLi);
                  }alert(new Date().getTime() - iStart);         //打印出最后这个程序耗费的而时间
              }
              
          }
          </script>
      </head>
      <body>
          <input id="btn1" type="button" value="普通" />
          <ul id="ul1">
              <li>li</li>
          </ul>
      </body>
  </html>
  
  //（2）使用文档碎片：
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8" />
          <title>文档碎片性能测试</title>
          <script>
              window.onload = function(){
              var oBtn = document.getElementById("btn1");
              var oUl = document.getElementById("ul1");
                   
              var iStart = new Date().getTime();
              oBtn.onclick = function(){
                  //文档碎片方式
                  var oFrag = document.createDocumentFragment();//建立一个文档对象，作为新增节点的临时容器，最后将这个容器连的内容直接挂载在父节点ul下面。
                   
                  for(var i=0; i<100000; i++){
                      var oLi = document.createElement("li");
                      oFrag.appendChild(oLi);
                  }
                  oUl.appendChild(oFrag);
                  alert(new Date().getTime() - iStart);
              }
              
          }
          </script>
      </head>
      <body>
          <input id="btn1" type="button" value="碎片" />
          <ul id="ul1">
              <li>li</li>
          </ul>
      </body>
  </html>
  ```

**总结：**

​	当我们需要大量 appendChild 页面元素时，可以先将这些元素 appendChild 进 document.createDocumentFragment。

​	然后只需 appendChild 文档碎片到页面就可以了。这样就不用多次刷新页面达到性能优化的目的。上面那个代码我觉得用到文档碎片是多余的。

## 数据渲染

- 就是HTML中要显示的数据是通过js来实现的而不是直接在HTML中的数据，这个过程叫做数据渲染 

- 渲染方式：

  - 字符串拼接（最常用的方法）

    - 优点：只进行了一次DOM回流
    - 缺点：原有的DOM事件都会丢失
    - 丢失的原因：丢失的原因就在innerHTML这个属性，这个属性是返回或设置DOM中的内容，以字符串形式返回，拼接完之后是string类型，而onmouse这些属性是DOM元素对象身上的，所以这些onmouse系列的属性就丢失了

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <ul class="list">
        <li>111苹果</li>
        <li>222葡萄</li>
        <li>333橘子</li>
    </ul>
    </body>
    </html>
    <script>
        var lis=document.querySelectorAll('li');
        var list=document.querySelector('.list')
    
        for(var i=0;i<lis.length;i++){
            lis[i].onmouseover= function () {
                this.style.background="lightblue"
            }
            lis[i].onmouseout= function () {
                this.style.background='#fff'
            }
        }
    
        var data=["111是香蕉",'222是桃子','333是西瓜']
        var str=""
        for(var j=0;j<data.length;j++){
            str+="<li>"+data[j]+"</li>"
        }
        document.querySelector('.list').innerHTML=str
    </script>
    ```

  - DOM循环

    - 优点：原有的DOM身上的事件不会丢失，不影响其它的DOM元素
    - 缺点：DOM回流的次数过多，严重影响网页的性能 

  - ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <ul class="list">
        <li>111苹果</li>
        <li>222葡萄</li>
        <li>333橘子</li>
    </ul>
    </body>
    </html>
    <script>
        var lis=document.querySelectorAll('li');
        var list=document.querySelector('.list')
    //    var lis=document.getElementsByTagName('li')
    //    var list=document.getElementsByClassName('list')[0]
    
        for(var i=0;i<lis.length;i++){
            lis[i].onmouseover= function () {
                this.style.background="lightblue"
            }
            lis[i].onmouseout= function () {
                this.style.background='#fff'
            }
        }
        var data=["111是香蕉",'222是桃子','333是西瓜']
        var str=""
        for(var j=0;j<data.length;j++){
            var li=document.createElement('li')
            li.innerHTML=data[j]
            list.appendChild(li)
        }
    </script>
    ```

  - 文档碎片

    - 优点：既不影响原有的DOM的属性，也只回流一次
    - 缺点：新添加的元素的DOM事件还是失效的

  - ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <ul class="list">
        <li>111苹果</li>
        <li>222葡萄</li>
        <li>333橘子</li>
    </ul>
    </body>
    </html>
    <script>
        var lis=document.querySelectorAll('li');
        var list=document.querySelector('.list')
    
        for(var i=0;i<lis.length;i++){
            lis[i].onmouseover= function () {
                this.style.background="lightblue"
            }
            lis[i].onmouseout= function () {
                this.style.background='#fff'
            }
        }
    
        var data=["111是香蕉",'222是桃子','333是西瓜']
        var frag=document.createDocumentFragment()
        for(var i=0;i<data.length;i++){
            var li=document.createElement('li')
            li.innerHTML=data[i]
            frag.appendChild(li)
        }
        document.querySelector('.list').appendChild(frag)
    </script>
    ```

    

## 获取元素的尺寸

- clientWidth和clientHeight   内容+padding的区域的宽度和高度

- 语法：元素.clientWidth

  获取浏览器的宽度：

```
var w=document.documentElement.clientWidth
console.log(w)

var div1=document.querySelector('div').clientWidth
console.log(div1)
```



## 获取元素边框的尺寸

- clientLeft和clientTop 获取的上边框和左边框的宽度
- 语法：元素.clientLeft

## 获取元素的偏移量

- 就是元素在页面上的什么位置
- 我们有几个属性来获取，**offsetLeft** 和 **offsetTop** 和 **offsetWidth** 和 **offsetHeight**



## offsetLeft 和 offsetTop

- 获取的是元素左边的偏移量和上边的偏移量
- 分成两个情况来看
- 没有定位的情况下
  - 获取元素边框外侧到页面内侧的距离
- 有定位的情况下
  - 获取元素边框外侧到定位父级边框内侧的距离（其实就是我们写的 left 和 top 值）



## offsetWidth 和 offsetHeight

- 获取元素 `内容宽高 + padding宽高 + border宽高` 的和



## 浏览器的 onscroll 事件

- 这个 onscroll 事件是当浏览器的滚动条滚动的时候触发

- 或者鼠标滚轮滚动的时候出发

  ```javascript
  window.onscroll = function () {
    console.log('浏览器滚动了')
  }
  ```

  - 注意：**前提是页面的高度要超过浏览器的可是窗口才可以**



## 浏览器滚动的距离

- 浏览器内的内容即然可以滚动，那么我们就可以获取到浏览器滚动的距离
- 思考一个问题？
  - 浏览器真的滚动了吗？
  - 其实我们的浏览器是没有滚动的，是一直在那里
  - 滚动的是什么？是我们的页面
  - 所以说，**其实浏览器没有动，只不过是页面向上走了**
- 所以，这个已经不能单纯的算是浏览器的内容了，而是我们页面的内容
- 所以不是在用 window 对象了，而是使用 document 对象



### scrollTop

- 获取的是页面向上滚动的距离

- 一共有两个获取方式

  - `document.body.scrollTop`
  - `document.documentElement.scrollTop`

  ```javascript
  window.onscroll = function () {
    console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
  }
  ```

  - 两个都是获取页面向上滚动的距离
  - 区别：
    - Chrome 和 FireFox、IE 浏览器
      - 没有 `DOCTYPE` 声明的时候，用 `document.body.scrollTop`
      - 有 `DOCTYPE` 声明的时候，用 `document.documentElement.scrollTop`
    - Safari
      - 两个都不用，使用一个单独的方法 `window.pageYOffset `

### scrollLeft

- 获取页面向左滚动的距离
- 也是两个方法
  - `document.body.scrollLeft`
  - `document.documentElementLeft`
    ```javascript
    window.onscroll = function () {
      console.log(document.body.scrollLeft)
      console.log(document.documentElement.scrollLeft)
    }
    ```
  - 两个之间的区别和之前的 `scrollTop` 一样


## 常见事件

- 浏览器事件

  - onload  加载完毕
  - onscroll  浏览器滚动事件
  - onresize  浏览器窗口改变事件

- 鼠标事件

  - onclick  单击事件
  - ondblclick  双击事件
  - onmousedown  鼠标按下事件
  - onmousemove  鼠标移动事件
  - onmouseup  鼠标释放事件
  - onmouseover  鼠标移入事件
  - onmouseout  鼠标移出事件

- 键盘事件

  - onkeydown  键盘按下事件
  - onkeyup  键盘释放事件
  - onkeypress 产生可打印字符事件

  注：键盘事件绑定的位置，要么是document，要么是输入框

- 触摸事件（移动端）

  - ontouchstart  触摸开始
  - ontouchmove  触摸移动
  - ontouchend  触摸结束

- 表单事件

  - onchange  表单改变事件（失去焦点时触发）
  - oninput  表单输入事件（输入时触发）
  - onsubmit  表单提交事件（点击submit时触发）

- 其他事件

  - ontransitionend  过渡结束的时候触发
  - onanimationend  动画结束的时候触发

