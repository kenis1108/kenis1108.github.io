# JavaScript 发展历史

1994 年，网景公司（Netscape）发布了 Navigator 浏览器 0.9 版。它是世界上第一款较为成熟的网络浏览器，一经推出便引起了轰动。不过，该浏览器只能用于浏览页面，无法与用户进行互动。当时解决这一问题有两种途径：一是采用现有的语言，使其能够直接嵌入网页；二是发明一种全新的语言。

最初，JavaScript 名为 LiveScript，后来更名为 JavaScript，最终演变为 ECMAscript。

1995 年，Sun 公司将 Oak 语言更名为 Java 并正式推向市场。Sun 公司大力宣传，声称这种语言能够“一次编写，到处运行”（Write Once, Run Anywhere），Java 看起来很有可能成为未来编程语言的主宰。

受此影响，网景公司决定与 Sun 公司结成联盟。同年 4 月，34 岁的系统程序员 Brendan Eich 被网景公司录用。他仅用 10 天时间就设计出了 JavaScript，这是一种融合多种语言特性的语言。其设计借鉴了多种语言的特性：
- 借鉴 C 语言的基本语法；
- 借鉴 Java 语言的数据类型和内存管理；
- 借鉴 Scheme 语言，将函数提升到“第一等公民”（first class）的地位；
- 借鉴 Self 语言，使用基于原型（prototype）的继承机制。

JavaScript 兼容于 ECMA 标准，通常也被称为 ECMAScript。以下是 ECMAScript 各版本的发展历程：
- 1997 年 7 月，ECMAScript 1.0 发布。
- 1998 年 6 月，ECMAScript 2.0 版发布。
- 1999 年 12 月，ECMAScript 3.0 版发布，成为 JavaScript 的通行标准，并得到了广泛支持（简称 ES3）。
- 2008 年 7 月，ECMAScript 4.0 版本因改动过于激进被废弃。替代方案是将现有功能进行小幅度升级，发布为 ECMAScript 3.1，之后更名为 ECMAScript 5，所以各类文章所说的 ECMAScript 3.1 等同于 ECMAScript 5（简称 ES5）。
- 2011 年 6 月，ECMAScript 5.1 版发布。到 2012 年底，所有主要浏览器都支持 ECMAScript 5.1 版的全部功能。
- 此后，版本发布规则发生变化。标准委员会决定，标准每年 6 月正式发布一次，作为当年的正式版本。之后在该版本基础上进行改动，直到下一年 6 月，草案自动成为新一年的版本，只需用年份标记即可。
    - 2015 年 6 月，发布了 ECMAScript 6.0 版本，正式名称为《ECMAScript 2015 标准》（简称 ES2015），也被称为 ES6。
    - 2016 年 6 月，小幅修订的《ECMAScript 2016 标准》如期发布（简称 ES2016）。
    - 2017 年发布的版本简称 ES2017。

# JavaScript 是什么

JavaScript 是一种基于对象（Object）和事件驱动（Event Driven）的弱类型脚本语言。借助 JavaScript，能够轻松实现与 HTML 的交互操作，完成丰富的页面交互效果。

### 基于对象
指程序内部已经为用户提供了若干对象，用户可直接使用这些对象。

### 面向对象
Java 属于面向对象的语言，面向对象是指用户需要自己定义类，自行创建对象。

### 脚本
凡是不能独立执行，需要依赖其他程序的代码，通常都被称为脚本。

### 弱类型
允许变量类型的隐式转换，也允许强制类型转换。

# JavaScript 能干什么

- **常见的网页效果**：如表单验证、轮播图等。
- **与 H5 配合实现游戏**：例如[水果忍者](http://www.jq22.com/demo/html5-fruit-ninja/)。
- **实现应用级别的程序**：如[百度脑图](http://naotu.baidu.com)。
- **实现统计效果**：如[ECharts 示例](http://echarts.baidu.com/examples/)。
- **地理定位等功能**：如[百度地图 JS 示例](http://lbsyun.baidu.com/jsdemo.htm#i4_5)。
- **在线学编程**：如[网易编程游戏平台](https://codecombat.163.com/play/)。
- **实现人工智能**：如面部识别。

# JavaScript 特点 

- **脚本语言**：JavaScript 是一种解释型的脚本语言。与 C、C++ 等先编译后执行的语言不同，JavaScript 在程序运行过程中逐行进行解释。
- **基于对象**：JavaScript 是一种基于对象的脚本语言，它既可以创建对象，也能使用现有的对象。
- **简单**：JavaScript 采用弱类型的变量类型，对使用的数据类型没有严格要求。它基于 Java 的基本语句和控制结构，设计简单紧凑。
- **动态性**：JavaScript 是一种采用事件驱动的脚本语言，无需经过 Web 服务器就能对用户的输入做出响应。在访问网页时，鼠标的点击、移动，窗口的移动等操作，JavaScript 都能直接给出相应的响应。
- **跨平台性**：JavaScript 脚本语言不依赖于操作系统，只需要浏览器支持即可。因此，一个 JavaScript 脚本编写完成后，可以在任何支持该语言的浏览器的机器上使用。目前，JavaScript 已被大多数浏览器所支持。

# JavaScript 的组成

### ECMASCRIPT
定义了 JavaScript 的语法规范，描述了语言的基本语法和数据类型。

### BOM (Browser Object Model)
即浏览器对象模型，有一套成熟的可操作浏览器的 API。通过 BOM 可以实现弹出框、浏览器跳转、获取分辨率等操作。

### DOM (Document Object Model)
即文档对象模型，有一套成熟的可操作页面元素的 API。通过 DOM 可以对页面中的元素进行增加、删除、移动等操作，例如增加一个 div 元素、删除一个 div 元素、改变 div 元素的位置等。

**总结**：JS 就是通过固定的语法去操作浏览器和标签结构，从而实现网页上的各种效果。

# JavaScript 代码的书写位置

和 `css` 一样，`js` 也有多种方式书写在页面上并使其生效，主要分为 **行内式**、**内嵌式** 和 **外链式**。 


# JavaScript 代码书写方式与调试、变量及数据类型

## 行内式 JS 代码（不推荐）
行内式的 JS 代码需依附于标签事件（行为）才能触发。

```html
<!-- 写在 a 标签的 href 属性上 -->
<a href="javascript:alert('我是一个弹出层');">点击一下试试</a>

<!-- 写在其他元素上 -->
<div onclick="alert('我是一个弹出层')">点一下试试看</div>

<!-- 
注：onclick 是一个点击事件，点击元素时会执行后面的 JS 代码
-->
```

行内式代码会使 HTML 和 JavaScript 代码耦合度变高，不利于代码的维护与管理，所以不建议使用。

## 内嵌式 JS 代码
内嵌式的 JS 代码会在页面打开时直接触发。

```html
<!-- 在 html 页面书写一个 script 标签，标签内部书写 js 代码 -->
<script type="text/javascript">
    alert('我是一个弹出层')
</script>

<!-- 
注：script 标签可放在 head 或 body 中
-->
```

## 外链式 JS 代码（推荐）
外链式 JS 代码只要引入到 HTML 页面，在页面打开时就会直接触发。需要新建一个以 `.js` 为后缀的文件，在其中编写 JS 代码，再将该文件引入 HTML 页面。

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

外链式的优势在于可提高代码的复用性与可维护性，使 HTML 和 JavaScript 代码分离。

## 常用输出/调试方法
- `alert()`：会在浏览器弹出一个窗口，弹出的内容就是括号里的内容。
- `document.write()`：可向文档写入字符串、HTML 或 JavaScript 代码。
- `console.log()`：能在浏览器的控制台打印相关信息。

**注意**：调试代码在最终的产品代码中应当删除。

## JS 中的注释
注释是供开发者自己和其他开发人员查看的，写好注释有助于后续阅读代码。

### 单行注释
一般用于描述下一行代码的作用。可直接输入两个 `/`，也可按 `Ctrl + /`。

```javascript
// 我是一个单行注释

// 下面代码表示在浏览器里面出现一个弹出层
alert('我是一个弹出层')
```

### 多行注释
常用于书写一大段说明，或者注释一段代码。可直接输入 `/**/`，在两个星号中间写注释，也可按 `Shift + Ctrl + /`。

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

## 变量
变量是程序中用于保存数据的容器，是计算机内存中存储数据的标识符，通过变量名可获取内存中存储的数据。即向内存存储数据后，要给该数据命名，以便后续查找。

### 语法
`var 变量名 = 值`

### 定义变量及赋值
```javascript
// 定义一个变量
var num;

// 给一个变量赋值
num = 100;

// 定义一个变量的同时给其赋值
var num2 = 200;
```

### 注意事项
1. 一个变量名只能存储一个值。
2. 再次给变量赋值时，前一次的值会被覆盖。
3. 变量名称区分大小写（JS 区分大小写）。

### 变量的命名规则和命名规范
- **规则**（必须遵守，否则会出错）：
  1. 变量名可由数字、字母、下划线（`_`）、美元符号（`$`）组成。
  2. 严格区分大小写。
  3. 不能以数字开头，避免使用中文汉字命名。
  4. 不能是保留字或关键字。
  5. 不能出现空格。
- **规范**（建议遵守，不遵守不会报错）：
  1. 变量名尽量有实际意义（语义化）。
  2. 遵循驼峰命名规则，多个单词组成时，从第二个单词开始首字母大写。

### JavaScript 关键字
关键字用于表示控制语句的开始或结束，或执行特定操作等。按照规则，关键字是语言保留的，不能用作标识符。
```
break        do          try           typeof
case         else        new           instanceof
catch        in          return        var
continue     for         switch        while
function     this        with          default
if           throw       delete        ......
```

### JavaScript 保留字
保留字有可能在未来被用作关键字，因此不能用作标识符。
```
abstract     int          short         boolean
export       interface    static        byte
extends      long         super         char
final        native       class         float
throws       const        goto          private
double       import       public        ......
```

## 数据类型（重点）
数据类型指存储在内存中的数据的类型，通常分为基本数据类型和复杂数据类型。

### 基本数据类型
1. **数值类型（number）**：包含所有数字（如二进制、十进制、十六进制等），还有 `NaN`（非数字）。
2. **字符串类型（string）**：被引号（单引号或双引号）包裹的内容。
3. **布尔类型（boolean）**：只有 `true` 和 `false` 两个值。
4. **null 类型（null）**：只有一个值 `null`，表示空。
5. **undefined 类型（undefined）**：只有一个值 `undefined`，表示没有值。

### 复杂数据类型（暂时先不讲）
1. 对象类型（object）
2. 函数类型（function）
3. ……

### 判断数据类型
可使用 `typeof` 关键字来判断数据类型。

```javascript
// 第一种使用方式
var n1 = 100;
console.log(typeof n1);

// 第二种使用方式
var s1 = 'abcdefg';
console.log(typeof(s1));
```

### 判断一个变量是不是数字
可使用 `isNaN` 方法判断变量是否为数字，`isNaN` 即 `is not a number`。

```javascript
// 如果变量是一个数字
var n1 = 100;
console.log(isNaN(n1)); //=> false

// 如果变量不是一个数字
var s1 = 'Jack'
console.log(isNaN(s1)); //=> true
```

### 数据类型转换
数据类型之间可相互转换，如数字转字符串、字符串转布尔、布尔转数字等。

#### 其他数据类型转成数值
1. `Number(变量)`：可将变量强制转换为数值类型，能转换小数，可转换布尔值，遇到不可转换的会返回 `NaN`。
2. `parseInt(变量)`：从第一位开始检查，是数字就转换，直到遇到非数字内容。若开头不是数字，直接返回 `NaN`，且不识别小数点，只保留整数。
3. `parseFloat(变量)`：从第一位开始检查，是数字就转换，直到遇到非数字内容。若开头不是数字，直接返回 `NaN`，能识别一次小数点。
4. 除加法以外的数学运算：运算符两边都需是可运算数字，否则返回 `NaN`，加法不适用此规则。
5. `Number.toFixed(n)` 方法可将 `Number` 四舍五入保留 `n` 位小数。

#### 其他数据类型转成字符串
1. `变量.toString()`：部分数据类型（如 `undefined` 和 `null`）不能使用该方法。
2. `String(变量)`：适用于所有数据类型。
3. 使用加法运算：在 JS 中，`+` 有两个含义。若 `+` 任意一边是字符串，就进行字符串拼接；只有两边都是数字时，才进行数学运算。

#### 其他数据类型转成布尔
1. `Boolean(变量)`：在 JS 中，只有 `''`、`0`、`null`、`undefined`、`NaN` 转换为布尔值时为 `false`，其余均为 `true`。 


# JavaScript 运算符详解

在 JavaScript 中，运算符是用于在代码中进行运算的符号，其运算方式不仅包含常见的数学运算，还有多种其他类型的运算。

## 数学运算符
1. **`+`**：
    - 当运算符两边均为数字时，执行加法运算。
    - 只要运算符任意一边是字符串类型，就会进行字符串拼接操作。
2. **`-`**：
    - 执行减法运算。
    - 自动将两边的数据都转换成数字类型后进行运算。
3. **`*`**：
    - 执行乘法运算。
    - 自动将两边的数据转换为数字类型后进行运算。
4. **`/`**：
    - 执行除法运算。
    - 自动将两边的数据转换为数字类型后进行运算。
5. **`%`**：
    - 执行取余运算。
    - 自动将两边的数据转换为数字类型后进行运算。

## 赋值运算符
1. **`=`**：
    - 将 `=` 右边的值赋值给等号左边的变量名。例如 `var num = 100`，就是把数值 `100` 赋值给变量 `num`，此时 `num` 变量的值即为 `100`。
2. **`+=`**：
    ```javascript
    var a = 10;
    a += 10;
    console.log(a); //=> 20
    ```
    - `a += 10` 等价于 `a = a + 10`，即先将变量 `a` 的值与 `10` 相加，再将结果重新赋值给 `a`。
3. **`-=`**：
    ```javascript
    var a = 10;
    a -= 10;
    console.log(a); //=> 0
    ```
    - `a -= 10` 等价于 `a = a - 10`，先计算 `a` 减去 `10` 的结果，再将该结果赋值给 `a`。
4. **`*=`**：
    ```javascript
    var a = 10;
    a *= 10;
    console.log(a); //=> 100
    ```
    - `a *= 10` 等价于 `a = a * 10`，将 `a` 与 `10` 相乘的结果赋值给 `a`。
5. **`/=`**：
    ```javascript
    var a = 10;
    a /= 10;
    console.log(a); //=> 1
    ```
    - `a /= 10` 等价于 `a = a / 10`，用 `a` 除以 `10` 的商赋值给 `a`。
6. **`%=`**：
    ```javascript
    var a = 10;
    a %= 10;
    console.log(a); //=> 0
    ```
    - `a %= 10` 等价于 `a = a % 10`，计算 `a` 除以 `10` 的余数，并将其赋值给 `a`。

## 比较运算符
1. **`==`**：
    - 比较符号两边的值是否相等，不考虑数据类型。例如 `1 == '1'`，虽然两边数据类型不同，但值相等，所以结果为 `true`。
2. **`===`**：
    - 不仅比较符号两边的值，还会比较数据类型是否都相等。如 `1 === '1'`，由于两边数据类型不一样，尽管值相同，结果仍为 `false`。
3. **`!=`**：
    - 用于比较符号两边的值是否不相等。例如 `1 != '1'`，因为两边的值实际上是相等的，所以比较它们不相等时结果为 `false`。
4. **`!==`**：
    - 比较符号两边的数据类型和值是否都不相等。比如 `1 !== '1'`，由于两边的数据类型不同，所以结果为 `true`。
5. **`>=`**：
    - 比较左边的值是否大于或等于右边的值。例如 `1 >= 1` 结果为 `true`，`1 >= 0` 结果为 `true`，`1 >= 2` 结果为 `false`。
6. **`<=`**：
    - 比较左边的值是否小于或等于右边的值。如 `1 <= 2` 结果为 `true`，`1 <= 1` 结果为 `true`，`1 <= 0` 结果为 `false`。
7. **`>`**：
    - 比较左边的值是否大于右边的值。例如 `1 > 0` 结果为 `true`，`1 > 1` 结果为 `false`，`1 > 2` 结果为 `false`。
8. **`<`**：
    - 比较左边的值是否小于右边的值。如 `1 < 2` 结果为 `true`，`1 < 1` 结果为 `false`，`1 < 0` 结果为 `false`。

## 逻辑运算符
1. **`&&`**：
    - 执行“且”运算。只有当符号左边为 `true` 并且右边也为 `true` 时，才会返回 `true`；只要有一边不是 `true`，结果就为 `false`。例如 `true && true` 结果为 `true`，`true && false` 结果为 `false`，`false && true` 结果为 `false`，`false && false` 结果为 `false`。
2. **`||`**：
    - 执行“或”运算。只要符号的左边为 `true` 或者右边为 `true`，结果都会返回 `true`；只有当两边都是 `false` 的时候，才会返回 `false`。例如 `true || true` 结果为 `true`，`true || false` 结果为 `true`，`false || true` 结果为 `true`，`false || false` 结果为 `false`。
3. **`!`**：
    - 执行“取反”运算。如果本身是 `true`，经过取反会变成 `false`；如果本身是 `false`，取反后会变成 `true`。例如 `!true` 结果为 `false`，`!false` 结果为 `true`。

## 自增自减运算符（一元运算符）
1. **`++`**：
    - 执行自增运算，分为“前置++”和“后置++”两种情况。
    - **前置++**：先将变量的值自动加 `1`，然后再返回加 `1` 后的新值。例如：
    ```javascript
    var a = 10;
    console.log(++a);
    // 会返回 11，并且把 a 的值变成 11
    ```
    - **后置++**：先返回变量原来的值，然后再将变量的值自动加 `1`。例如：
    ```javascript
    var a = 10;
    console.log(a++);
    // 会返回 10，然后把 a 的值变成 11
    ```
2. **`--`**：
    - 执行自减运算，同样分为“前置--”和“后置--”两种情况，原理与 `++` 运算符类似。

## 进制介绍 
进制是人为定义的带进位的计数方法，常见的有十六进制（逢十六进一）、十进制（逢十进一）、八进制（逢八进一）、二进制（逢二进一）等。在 JavaScript 中，提供了两个非常实用的方法用于进制之间的转换：`toString()` 和 `parseInt()`。
1. **使用 `toString()` 方法把十进制转为其他进制**：
    ```javascript
    var  x = 28; // 10 进制
    console.log(x.toString(2)); //把十进转为 2 进制  
    console.log(x.toString(8)); //把十进转为 8 进制  
    console.log(x.toString(16)); //把十进转为 16 进制  
    ```
2. **使用 `parseInt()` 方法把其他进制转为十进制**：
    ```javascript
    var x = "110"; //二进制的字符串
    console.log(parseInt(x, 2)); //把这个字符串当做二进制，转为十进制  

    var x = "070"; //八进制的字符串
    console.log(parseInt(x, 8)); //把这个字符串当做八进制，转为十进制  

    var x = "0x1c"; //十六进制的字符串
    console.log(parseInt(x, 16)); //把这个字符串当做十六进制，转为十进制  
    ```
    `parseInt()` 方法的第一个参数为要转换的字符串，第二个参数指定字符串的进制，若省略第二个参数，默认将字符串当作十进制进行处理。若要实现其他进制之间的相互转换，可以先使用 `parseInt()` 方法将其转换为十进制，再利用 `toString()` 方法转换为目标进制。在 JavaScript 中，八进制以 `0` 开头，十六进制以 `0x` 开头，且 `0x` 可省略。

## 运算符优先级 
由于您提供的是图片链接，这里暂无法展示具体的运算符优先级图片内容。但一般来说，运算符优先级决定了在一个表达式中不同运算符执行的先后顺序。通常情况下，数学运算符的优先级高于比较运算符，比较运算符的优先级高于逻辑运算符等。在编写代码时，为了确保运算顺序符合预期，可以使用括号来明确指定运算的优先级。

--- 





# JavaScript 程序的三大结构详解

在 JavaScript 中，程序主要有三大结构，分别是顺序结构、选择结构和循环结构。这三种结构构成了程序逻辑的基础，帮助开发者实现各种复杂的功能。

## 分支结构（选择结构）
在 JavaScript 中，代码默认是按照顺序从上到下执行的。而逻辑分支结构则可以根据设定的条件来决定某些代码是否执行。

### IF 条件分支结构
#### if 语句
通过一个 `if` 语句来判断是否执行特定的代码块。其语法为：`if (条件) { 要执行的代码 }`，代码块是否执行取决于括号内的条件是否成立。

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
`if else` 语句根据 `if` 条件来决定执行哪一个代码块。语法为：`if (条件) { 条件为 true 的时候执行 } else { 条件为 false 的时候执行 }`，两个代码块必定会执行其中一个。

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
`if else if ...` 语句可以设置多个条件进行判断。语法为：`if (条件1) { 条件1为 true 的时候执行 } else if (条件2) { 条件2为 true 的时候执行 }`，程序会依次判断条件，一旦某个条件为 `true`，就执行对应的代码块，后续条件不再判断。

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
`if else if … else` 语句与 `if else if ...` 基本相似，只是在所有条件都不满足时，会执行 `else` 后面的代码块。

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

`prompt(str1，str2)` 是一个函数，它会弹出一个可输入的对话框。其中 `str1` 是显示在消息对话框中的提示文本，`str2` 是文本框中的初始内容。该函数的返回值：点击确定按钮时，文本框中的内容将作为函数的返回值；点击取消按钮时，将返回 `null`。

### SWITCH 条件分支结构
`switch` 语句也是一种条件判断语句，主要用于对某一个变量进行判断。

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
```

其工作原理是：先设置表达式 `n`（通常是一个变量），然后表达式的值会与结构中的每个 `case` 的值进行比较，如果存在匹配，则执行与该 `case` 关联的代码块，使用 `break` 关键字可以阻止代码自动向下一个 `case` 执行。

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

### if...else if...else 语句与 switch case 语句的比较
- **范围**：`if...else if...else` 语句既可以比较定值，也可以比较范围；而 `switch case` 语句只能比较定值。
- **效率**：`if...else if...else` 语句的效率相对较低，因为每一个表达式都需要求值对比；`switch case` 语句效率较高，表达式只要与 `case` 中的一个值匹配就可以执行相应代码。

## 三元运算（扩展）
三元运算是用两个符号组成的语句，是 `if else` 语句的一种简写形式。其语法为：`条件 ? 条件为 true 的时候执行 : 条件为 false 的时候执行`。

```javascript
var age = 18;
age >= 18 ? alert('已经成年') : alert('没有成年')
```

## 循环结构
循环是指事物周而复始地运动或变化。在实际编程中，经常会遇到需要重复执行某些具有规律性操作的情况，因此需要使用循环结构来重复执行某些语句。循环具有两个特征：一是有规律性的重复操作，二是重复执行的代码极其相似。

### FOR 循环
`for` 循环的语法形式为：

```javascript
for (表达式1; 表达式2; 表达式3) {
    循环体;
}
```

其中，表达式 1 是不参与循环的单次表达式，用于给循环控制变量赋初值；表达式 2 一般是一个关系表达式，作为循环条件（设置终止值）；表达式 3 一般为循环变量的增量或减量（步长）；循环体是需要重复执行的代码。

```javascript
for (var i = 0; i < 5; i++) { // 增量循环
    console.log(i);
}

for (var i = 5; i >= 1; i--) { // 减量循环
    console.log(i);
}
```

需要注意的是：
- `for()` 括号中的表达式皆可以省略，但分号不可省略。
- 省略了表达式 2（循环条件），若不做其它处理则会成为死循环，即没有终止条件并一直执行的循环。
- `for` 循环可以进行嵌套，可简单理解为行和列的关系。

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
`while` 循环的中文含义是“当…时”，即当条件满足时就执行代码，一旦条件不满足则停止执行。其语法为：`while (条件) { 满足条件就执行 }`。在使用 `while` 循环时，一定要设定一个边界值，否则可能会导致循环一直执行下去。

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

如果没有对循环变量进行自身改变，那么循环就会一直不停的执行。

### DO WHILE 循环
`do while` 循环与 `while` 循环类似，但 `while` 循环会先进行条件判断，满足条件才执行代码块；而 `do while` 循环是先执行一次代码块，然后再进行条件判断。其语法为：`do { 要执行的代码 } while (条件)`。

```javascript
// 下面这个代码，条件一开始就不满足，但是依旧会执行一次 do 后面 {} 内部的代码
var num = 10
do {
    console.log('我执行了一次')
    num = num + 1
} while (num < 10)
```

一般来说，`for` 循环适用于循环次数可以确定的情景；`while` 循环适用于循环次数未知的情景；`do while` 循环则是先执行一次，再进行判断，也常用于不知道循环次数的情况。

### BREAK 终止循环
`break` 关键字用于在循环没有执行完毕时，根据设定的条件提前终止循环。例如：

```javascript
for (var i = 1; i <= 5; i++) {
    // 每循环一次，吃一个包子
    console.log('我吃了一个包子')
    // 当 i 的值为 3 的时候，条件为 true，执行 {} 里面的代码终止循环
    // 循环就不会继续向下执行了，也就没有 4 和 5 了
    if (i === 3) {
        break
    }
}
```

### CONTINUE 结束本次循环
`continue` 关键字用于在循环中跳过本次循环，继续执行后续的循环。

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

这里需要注意的是，JavaScript 中所说的函数和数学中学习的三角函数、二次函数等不是同一个概念。

--- 





# JavaScript 函数的深入理解

## 函数的概念及作用
函数在 JavaScript 中可以被形象地理解为可重复执行的代码块。就如同不同的武功招式集结了不同的能量，在需要时通过特定方式释放一样，函数封装了任意多条语句，开发者可以在任何地方、任何时候调用它。函数的主要作用包括：
1. 封装代码：将相关的语句组织在一起，使代码更加简洁和有条理。
2. 避免不必要的调用：将代码编写在函数中，只有在满足特定条件或被明确调用时才会执行，提高了代码的可控性。

## 函数的两个阶段（重点）
函数的使用分为两个关键阶段，即函数定义阶段和函数调用阶段，可类比为将代码“放在盒子里面”和“让盒子里面的代码执行”。

### 函数定义阶段
此阶段是将代码放入“盒子”的过程，有声明式和赋值式两种定义方式。
#### 声明式
使用 `function` 关键字来声明函数，语法如下：
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
类似于使用 `var` 关键字，先定义一个变量，然后将一个函数作为值赋值给该变量，语法如下：
```javascript
var fn = function () {
    // 一段代码
}
// 不需要在 function 后面书写函数的名字了，因为在前面已经有了
```

### 函数调用阶段
函数调用阶段就是让“盒子”里的代码执行。虽然两种定义函数的方式不同，但调用方式是相同的，即直接写 `函数名()`。
#### 调用一个函数
示例如下：
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
需要注意的是，定义完函数后，如果没有函数调用，函数体中的代码不会执行，只有调用后才会执行。
#### 调用上的区别
声明式函数的调用可以在定义之前或之后，而赋值式函数的调用只能在定义之后。
```javascript
// 声明式函数
// 可以调用
fn()

// 声明式函数
function fn() {
    console.log('我是 fn 函数')
}

// 可以调用
fn()

// 赋值式函数
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
在 JavaScript 中，只有全局作用域和函数作用域（ES6 之前没有块级作用域）。JavaScript 会将声明提升到作用域的顶部，但不提升初始化。
1. 所有的声明都会提升到作用域的最顶部。
2. 同一个变量只会声明一次，后续重复声明会被忽略。
3. 函数声明的优先级高于变量声明的优先级，并且函数声明和函数定义的部分一起被提升。

变量提升的例子：
```javascript
num = 6;
var num = 7;
var num;
console.log(num); // 不报错，输出7，也证明了变量只会声明一次，其他的会被忽略。
```
函数提升的例子：
```javascript
catName();// 即使在声明之前调用依然可以执行，不会报错

function catName() {
    console.log("我的小猫 ");
}
```
在定义的函数名字和变量名相同的情况下，函数提升优先级高于变量的例子：
```javascript
func(); // 1
var func;
function func() {
    console.log(1);
}
func = function() {
    console.log(2);
}
```
输出 `1`，不会输出 `2`。函数声明和变量声明都会被提升，但是函数会先被提升，然后才是变量。`var func;` 尽管出现在 `function func()` 之前，但它是重复的声明，会被忽略，因为函数声明会被提升到普通变量之前。等同于：
```javascript
function func() {
    console.log(1);
}
func(); // 1
func = function() {
    console.log(2);
}
```

## 函数的参数
函数定义和调用时的 `()` 是用来放置参数的位置，参数分为形参（行参）和实参。
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
1. **形参**：在函数内部可使用的变量，在函数外部不能使用。每写一个形参，相当于在函数内部定义了一个可使用的变量（遵循变量名的命名规则和命名规范），多个形参之间以 `,` 分隔。如果只有形参，函数内部使用的变量值为 `undefined`，形参的值由函数调用时的实参决定。
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
2. **实参**：在函数调用时给形参赋值，即提供实际的内容。函数内部形参的值由函数调用时传递的实参决定，多个参数时按顺序一一对应。
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

function fn(num1, num2) {
    // 函数内部可以使用 num1 和 num2
}

// 函数本次调用的时候，书写的参数是 100 和 200
// 那么本次调用的时候，函数内部的 num1 就是 100，num2 就是 200
fn(100, 200)
```

### 参数个数的关系
1. **形参比实参少**：由于按顺序一一对应，形参少会导致部分实参的值无法被函数内部的变量引用。
```javascript
function fn(num1, num2) {
    // 函数内部可以使用 num1 和 num2
}

// 本次调用的时候，传递了三个实参，100 200 和 300
// 100 对应了 num1，200 对应了 num2，300 没有对应的变量
// 所以在函数内部就没有办法依靠变量来使用 300 这个值
fn(100, 200, 300)
```
2. **形参比实参多**：多出来的形参没有对应的实参赋值，其值为 `undefined`。
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
`arguments` 对象是所有（非箭头）函数中都可用的局部变量，可用于在函数中引用函数的参数。它类似于 `Array`，包含传递给函数的每个参数，第一个参数在索引 `0` 处，也可以设置参数值。`arguments` 对象不是真正的 `Array`，除了 `length` 属性和索引元素外没有其他 `Array` 属性。可以通过 `arguments.length` 查看实参个数，与函数的 `length` 属性（形参个数）比较来判断实参和形参个数是否一致。
```javascript
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

## 函数的 return（重点）
`return` 关键字有两个重要作用，即给函数一个返回值和中断函数。
### 中断函数
当函数执行时，代码会从上到下依次执行，直到函数内的代码执行完毕。`return` 关键字可以在函数中间位置停止执行，使后面的代码不再继续执行。
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
函数调用本身是一个表达式，应该有一个值出现。默认情况下函数执行完毕后没有结果，`return` 关键字可以给函数执行完毕一个结果。
```javascript
// 比如 1 + 2 是一个表达式，那么 这个表达式的结果就是 3
console.log(1 + 2) // 3

function fn() {
    // 执行代码
}

// fn() 也是一个表达式，这个表达式就没有结果出现
console.log(fn()) // undefined

function fn() {
    // 执行代码
    return 100
}

// 此时，fn() 这个表达式执行完毕之后就有结果出现了
console.log(fn()) // 100
```
可以在函数内部使用 `return` 关键字把任何内容当作函数运行后的结果。

## 函数的优点
函数对代码进行封装，具有以下优点：
1. 封装代码：使代码更加简洁，提高了代码的可读性和可维护性。
2. 复用性：在需要重复功能时直接调用函数，避免了代码的重复编写。
3. 控制代码执行时机：可以在任何想要执行的时候调用函数，增强了代码的灵活性。

## 预解析（重点）
预解析是关于 JavaScript 代码编译和执行的概念。JavaScript 是解释型语言，在代码执行之前会先对代码进行通读和解释，然后再执行代码，即经历解释代码和执行代码两个环节。

### 解释代码
由于是在所有代码执行之前进行解释，所以称为预解析（预解释）。需要解释的内容包括声明式函数和 `var` 关键字：
1. **声明式函数**：在内存中先声明函数名作为变量名，且该变量代表的内容是一个函数，函数提升的是整个函数体。
2. **`var` 关键字**：在内存中先声明变量名，变量提升是只声明不赋值，值为 `undefined`。

示例代码：
```javascript
fn()
console.log(num)

function fn() {
    console.log('我是 fn 函数')
}

var num = 100
```
经过预解析后变形为：
```javascript
function fn() {
    console.log('我是 fn 函数')
}
var num

fn()
console.log(num)
num = 100
```
赋值式函数会按照 `var` 关键字的规则进行预解析。

### 预解析的无节操
1. `if` 条件不管是否成立，里面的代码会进行预解析。
2. `return` 后面的代码虽然不会执行，但是会进行预解析。

#### 两个坑
1. **作用域和预解析**：需要正确理解作用域的概念以及预解析对变量和函数声明的影响，避免出现意料之外的结果。
2. **`this` 指向**：在函数中 `this` 的指向会根据调用方式的不同而变化，需要准确把握，否则可能导致代码逻辑错误。

示例案例：
```javascript
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

通过对函数的全面理解，包括函数的概念、定义和调用、参数、返回值、预解析等方面，能够更好地在 JavaScript 编程中运用函数，编写出高效、健壮的代码。 






## 作用域（重点）
作用域定义了变量的生效范围，即变量的使用范围。在 JavaScript 里，变量并非在所有地方都能使用，其使用范围取决于作用域。

### 全局作用域
全局作用域在整个页面都有效，在 `script` 标签内都能访问到变量。全局作用域中有个全局对象 `window`，它代表浏览器窗口，由浏览器创建，可直接调用。在全局作用域声明的变量和函数，会作为 `window` 对象的属性和方法保存。变量在函数外声明，就是全局变量，拥有全局作用域。

```javascript
var a = 123; // 全局变量
function fn() {
    console.log(a); // 123
}
fn();
console.log(a); // 123
```

### 局部作用域
局部作用域内的变量只能在函数内部使用，所以也叫函数作用域。变量在函数内声明，即为局部变量，拥有局部作用域。

```javascript
function fn() {
    var b = 456; // 局部变量
    console.log(b); // 456
}
fn();
console.log(b); // b is not defined
```

需要注意，可以直接给未声明的变量赋值（成为全局变量），但不能直接使用未声明的变量。因为局部变量只在函数内起作用，所以不同的函数可以使用相同名称的变量。当全局和局部有同名变量时，访问该变量遵循“就近原则”。

## 变量的生命周期 
全局变量在页面打开时创建，页面关闭后销毁。局部变量在函数开始执行时创建，函数执行完后自动销毁。

## 变量使用规则（重点）
有了作用域，变量就有了使用范围和规则。变量使用规则分为访问规则和赋值规则。

### 访问规则
当获取变量的值时，这一行为称为“访问”。获取变量的规则如下：
1. 先在自己的作用域内部查找，若有就直接使用。
2. 若没有，就去上一级作用域查找，若有则使用。
3. 若还没有，继续去上一级作用域查找，以此类推。
4. 若一直到全局作用域都没有该变量，就会直接报错（该变量 is not defined）。

```javascript
var num = 100

function fn() {
    var num2 = 200

    function fun() {
        var num3 = 300

        console.log(num3); // 自己作用域内有，拿过来用
        console.log(num2); // 自己作用域内没有，就去上一级，就是 fn 的作用域里面找，发现有，拿过来用
        console.log(num); // 自己这没有，去上一级 fn 那里也没有，再上一级到全局作用域，发现有，直接用
        console.log(a); // 自己没有，一级一级找上去到全局都没有，就会报错
    }

    fun()
}

fn()
```

变量的访问规则也叫作用域的查找机制，该机制只能向上找，不能向下找。

```javascript
function fn() {
    var num = 100
}
fn()

console.log(num); // 发现自己作用域没有，自己就是全局作用域，没有再上一级了，直接报错
```

### 赋值规则
当给变量赋值时，要先找到该变量再赋值。变量赋值规则如下：
1. 先在自己作用域内部查找，有就直接赋值。
2. 没有就去上一级作用域内部查找，有就直接赋值。
3. 若还没有，再去上一级作用域查找，有就直接赋值。
4. 若一直找到全局作用域都没有，就把该变量定义为全局变量并赋值。

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
console.log(num); // 100
```

## 自执行函数 
要执行函数，需先定义再引用。对于匿名函数，可使用匿名自执行函数（也叫立即执行函数，IIFE）来调用。

```javascript
(function () {
    console.log(123);
})();
```

小括号能把表达式组合分块，每一块都有返回值，该返回值就是小括号中表达式的返回值。自执行函数的好处是拥有独立的作用域，不会污染全局环境。

自执行函数也能传参：
```javascript
(function (a, b) {
    console.log(a + b);
})(2, 3);
```

常见形式如下：
```javascript
(function () {
    console.log(11);
})();

(function () {
    console.log(22);
}());

!function () {
    console.log(33);
}();

+function () {
    console.log(55);
}();

-function () {
    console.log(66);
}();

~function () {
    console.log(77);
}();
```

## 递归函数
在编程中，递归是指函数自己调用自己。递归函数就是在函数内部调用自身，循环往复。一般来说，递归需要有边界条件、递归前进段和递归返回段。当边界条件不满足时，递归前进；当边界条件满足时，递归返回。

```javascript
// 下面这个代码就是一个最简单的递归函数
// 在函数内部调用了自己，函数一执行，就调用自己一次，在调用再执行，循环往复，没有止尽
function fn() {
    fn()
}
fn()
```

递归函数和循环类似，需要有初始化、自增、执行代码和条件判断，否则就是死递归。

### 简单实现一个递归
以求 1 至 5 的和为例，先写结束条件以避免死递归：
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

再写不满足条件时的递归处理：
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

再看一个例子：老王有四个子女，老四比老三小 2 岁，老三比老二小 2 岁，老二比老大小 2 岁，老大现在 16 岁，问老四几岁。
```javascript
function countAge(who) {
    if (who == 1) {
        return 16;
    } else {
        return countAge(who - 1) - 2;
    }
}
alert(countAge(4)); // 10
```

需要注意，递归函数运行时，每调用一次函数就会在内存中开辟一块空间，内存消耗较大，要防止栈溢出。递归算法一般用于解决以下三类问题：
1. 数据的定义是按递归定义的。
2. 问题解法按递归算法实现。
3. 数据的结构形式是按递归定义的。

## 构造函数
构造函数用于创建特定类型的对象。JavaScript 内部有很多构造函数，如 `Object`、`Number`、`String`、`Array`、`Function`、`Boolean` 等。当任意一个普通函数用于创建一类对象，并通过 `new` 操作符来调用时，它就可以作为构造函数。构造函数一般首字母大写。 

# JavaScript 对象与数据类型的存储、操作及比较

## 对象
在 JavaScript 中，对象属于复杂数据类型，是一组无序的键值对，也是带有属性和方法的集合，可简单理解为无序的数据集合。属性是与对象相关的值，方法则是能在对象上执行的动作，其作用在于在单个变量中存储多个值。

### 创建一个对象
1. **字面量的方式**：使用花括号 `{}` 来创建对象，语法为 `var obj = { 键：值, 键：值 ...... };` ，键一般用双引号引起来（也可不用引号），值可以是任意类型的数据。
```javascript
var obj = {
    name: '小错',
    age: 18,
    sayHi: function (){
        alert('hi，大家好');
    }
}
```
2. **内置构造函数的方式**：通过 `new Object()` 创建对象，然后逐个添加属性和方法。
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

### 操作对象
1. **访问对象成员**：
    - 可以使用 `对象.属性` 或 `对象.方法()` 的形式访问对象的属性和方法。
    - 也可以使用 `对象[变量或字符串]` 的形式访问，例如 `obj['name']` 。
2. **删除属性**：使用 `delete obj.attr;` 语句删除对象的指定属性。
3. **遍历对象**：使用 `for / in` 循环遍历对象，`for (var key in obj){ console.log( obj[key] ); }` ，其中 `key` 是对象的属性名，`obj[key]` 是属性值。

### {} 和 new 创建对象的对比
1. **字面量的优势**：
    - 代码量更少，更易于阅读。
    - 能强调对象是简单可变的散列表，不一定派生自某个类。
    - 运行速度更快，解析时可被优化，无需进行作用域解析（若存在同名构造函数 `Object()` ，调用 `Object()` 时解析器需在作用域链中查找）。
2. **构造函数的优势**：
    - `Object()` 构造函数可接收参数，能将对象实例的创建过程委托给其他内置构造函数（如 `Number()`、`String()` 等）并返回相应对象实例。
    - 使用自定义构造函数创建对象，可通过传参添加属性和方法，当创建较多同类对象时，能节省代码量，且使对象的属性和方法结构更清晰。

## 数据类型之间存储的区别
在 JavaScript 中，数据类型分为基本数据类型和复杂数据类型，它们在存储上存在明显区别。存储空间分为 **栈** 和 **堆** ，栈主要存储基本数据类型的内容，堆主要存储复杂数据类型的内容。

### 基本数据类型在内存中的存储情况
对于基本数据类型，如 `var num = 100` ，直接在栈空间内存储该数据。

### 复杂数据类型在内存中的存储情况
以对象 `var obj = { name: 'Jack', age: 18, gender: '男' }` 为例，复杂数据类型的存储过程如下：
1. 在堆里面开辟一个存储空间。
2. 将数据存储到该存储空间内。
3. 把存储空间的地址赋值给栈里面的变量。

### 数据类型之间的赋值
1. **基本数据类型之间的赋值**：
```javascript
var num = 10
var num2 = num

num2 = 200

console.log(num) // 10
console.log(num2) // 200
```
相当于把 `num` 的值复制一份给 `num2` 变量，赋值后两个变量相互独立，无关联。
2. **复杂数据类型之间的赋值**：
```javascript
var obj = {
    name: 'Jack'
}
var obj2 = obj

obj2.name = 'Rose'

console.log(obj.name) // Rose
console.log(obj2.name) // Rose
```
由于复杂数据类型的变量存储的是地址，真实内容在堆空间内。赋值时把 `obj` 存储的地址复制给 `obj2` 变量，此时 `obj` 和 `obj2` 存储的地址相同，指向同一个内存空间。所以通过 `obj2` 修改空间内的内容，`obj` 所指向的空间内容也会改变。

### 数据类型之间的比较
1. **基本数据类型是值之间的比较**：
```javascript
var num = 1
var str = '1'

console.log(num == str) // true
```
2. **复杂数据类型是地址之间的比较**：
```javascript
var obj = { name: 'Jack' }
var obj2 = { name: 'Jack' }

console.log(obj == obj2) // false
```
创建两个对象会在堆空间开辟两个存储空间（即两个不同地址），尽管存储内容相同，但复杂数据类型比较的是地址，所以 `obj` 和 `obj2` 地址不同，比较结果为 `false` 。

## 函数的参数
函数的参数传递也是一种赋值过程，函数调用时实参给形参赋值，与变量赋值规则相同。
1. **函数传递基本数据类型**：
```javascript
function fn(n) {
    n = 200
    console.log(n) // 200
}

var num = 100
fn(num)
console.log(num) // 100
```
调用函数时，把 `num` 的值复制一份给函数内部的形参 `n` ，之后 `num` 和 `n` 相互独立，无关联。
2. **函数传递复杂数据类型**：
```javascript
function fn(o) {
    o.name = 'Rose'
    console.log(o.name) // Rose
}

var obj = {
    name: 'Jack'
}
fn(obj) 
console.log(obj.name) // Rose
```
函数调用时，把 `obj` 存储的地址复制给函数内部的形参 `o` ，函数外部的 `obj` 和函数内部的 `o` 指向同一个存储空间。在函数内部改变空间内的数据，`obj` 也能看到改变后的内容。 

# JavaScript 数组详解

## 数组概述
数组是 JavaScript 中的一种数据结构，它是有序的元素序列，也可通俗理解为有序的数据集合。数组属于对象类型，其主要作用是在单个变量中存储多个值。

## 创建一个数组
1. **字面量创建一个数组**：直接使用方括号 `[]` 创建数组，既可以创建空数组，也可以创建包含内容的数组。
```javascript
// 创建一个空数组
var arr1 = []

//创建一个有内容的数组
var arr2 = [1, 2, 3]
```
2. **内置构造函数创建数组**：利用 JavaScript 的内置构造函数 `Array` 来创建数组，可以创建空数组、指定长度的数组或包含特定内容的数组。
```javascript
//创建一个空数组
var arr1 = new Array()

//创建一个长度为 10 的数组
var arr2 = new Array(10)

//创建一个有内容的数组
var arr3 = new Array(1, 2, 3)
```

## 数组的属性
1. **length**：表示数组的长度，即数组中成员的数量。
```javascript
//创建一个数组
var arr = [1, 2, 3]

console.log(arr.length) // 3
```
2. **索引**：也称为下标，用于表示数据在数组中的位置。在 JavaScript 中，数组的索引从 0 开始。
```javascript
//创建一个数组
var arr = ['hello', 'world']

console.log(arr[0]) // hello
console.log(arr[1]) // world
```

## 数组的常用方法
1. **push**：在数组末尾追加一个元素。
```javascript
var arr = [1, 2, 3]

//使用 push 方法追加一个元素在末尾
arr.push(4)

console.log(arr) // [1, 2, 3, 4]
```
2. **pop**：删除数组末尾的一个元素。
```javascript
var arr = [1, 2, 3]

//使用 pop 方法删除末尾的一个元素
arr.pop()

console.log(arr) // [1, 2]
```
3. **unshift**：在数组最前面添加一个元素。
```javascript
var arr = [1, 2, 3]

//使用 unshift 方法向数组的最前面添加一个元素
arr.unshift(4)

console.log(arr) // [4, 1, 2, 3]
```
4. **shift**：删除数组最前面的一个元素。
```javascript
var arr = [1, 2, 3]

//使用 shift 方法删除数组最前面的一个元素
arr.shift()

console.log(arr) // [2, 3]
```
5. **splice**：按照数组的索引截取数组中的某些内容，还可以进行替换操作。
```javascript
var arr = [1, 2, 3, 4, 5]

//使用 splice 方法截取数组
arr.splice(1, 2)

console.log(arr) // [1, 4, 5]

var arr = [1, 2, 3, 4, 5]

//使用 splice 方法截取数组并替换
arr.splice(1, 2, '我是新内容')

console.log(arr) // [1, '我是新内容', 4, 5]
```
6. **reverse**：反转数组。
```javascript
var arr = [1, 2, 3]

//使用 reverse 方法来反转数组
arr.reverse()

console.log(arr) // [3, 2, 1]
```
7. **sort**：对数组进行排序。
```javascript
var arr = [2, 3, 1, 11, 7, 22]

//使用 sort 方法给数组排序
arr.sort()

console.log(arr) // [1, 11, 2, 22, 3, 7]
```
8. **concat**：拼接多个数组，不会改变原始数组，而是返回一个新的数组。
```javascript
var arr = [1, 2, 3]

//使用 concat 方法拼接数组
var newArr = arr.concat([4, 5, 6])

console.log(arr) // [1, 2, 3]
console.log(newArr) // [1, 2, 3, 4, 5, 6]
```
9. **join**：将数组中的每一项内容链接起来，变成一个字符串，可以自定义链接内容，不会改变原始数组，而是返回链接好的字符串。
```javascript
var arr = [1, 2, 3]

//使用 join 链接数组
var str = arr.join('-')

console.log(arr) // [1, 2, 3]
console.log(str) // 1-2-3
```
10. **indexOf**：查找数组中某一项的索引，如果要找的内容不存在，返回 -1。
```javascript
var arr = [1, 2, 3, 4, 5]

//使用 indexOf 查找数组中的某一项
var index = arr.indexOf(3)

console.log(index) // 2

var index = arr.indexOf(10)

console.log(index) // -1
```
11. **lastIndexOf**：返回指定元素在数组中的最后一个的索引，不存在则返回 -1 。
```javascript
var arr = [1, 2, 3, 4, 5]

//使用 lastIndexOf 查找数组中的某一项
var index = arr.lastIndexOf(3)

console.log(index) // 2

var index = arr.lastIndexOf(10)

console.log(index) // -1
```
12. **slice**：从已有的数组中返回选定的元素，不会改变原始数组。
```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
//citrus 的结果是：Orange,Lemon

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
//myBest 的结果是：Lemon,Apple
```

## 数组的遍历
1. **for 循环**：利用数组的索引特性，通过 for 循环遍历数组。
```javascript
var arr = [1, 2, 3, 4, 5]

//使用 for 循环遍历数组
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```
2. **for in 循环**：用于遍历对象，在遍历对象时，每次循环 `key` 代表对象中某一个成员的属性名。
```javascript
var obj = {
    name: 'Jack',
    age: 18
}

for (var key in obj) {
    console.log(key)
}
```
3. **for...of**：ES6 新增的遍历方式，可在可迭代对象上创建迭代循环。
```javascript
//迭代 Array
var iterable = [10, 20, 30];

for (var value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31

//迭代 String
var iterable = 'boo';

for (var value of iterable) {
    console.log(value);
}
// "b"
// "o"
// "o"
```
4. **forEach**：用于遍历数组，强制遍历所有元素，不能使用 `break` 结束。
```javascript
var arr = [1, 2, 3]

//使用 forEach 遍历数组
arr.forEach(function (item, index, arr) {
    console.log('数组的第 ' + index + ' 项的值是 ' + item + '，原始数组是', arr)
})
```
5. **map**：与 `forEach` 类似，但可以对数组中的每一项进行操作，返回一个新的数组。
```javascript
var arr = [1, 2, 3]

//使用 map 遍历数组
var newArr = arr.map(function (item, index, arr) {
    return item + 10
})

console.log(newArr) // [11, 12, 13]
```
6. **filter**：按照条件筛选数组，把原始数组中满足条件的项筛选出来，组成一个新的数组返回。
```javascript
var arr = [1, 2, 3]

//使用 filter 过滤数组
var newArr = arr.filter(function (item, index, arr) {
    return item > 1
})

console.log(newArr) // [2, 3]
```
7. **some**：用于检测数组中的元素是否满足指定条件，只要有一个元素满足条件，则返回 `true`，剩余元素不再检测；若都不满足，则返回 `false`。
```javascript
var arr = [1, 2, 3]

//使用 some 判断数组元素是否满足条件
var newArr = arr.some(function (item, index, arr) {
    return item > 1
})

console.log(newArr) // true
```
8. **every**：检测数组所有元素是否都符合指定条件，若有一个元素不满足，则返回 `false`，剩余元素不再检测；若所有元素都满足，则返回 `true`。
```javascript
var arr = [1, 2, 3]

//使用 every 判断数组中所有元素是否满足条件
var newArr = arr.every(function (item, index, arr) {
    return item > 2
})

console.log(newArr) // false
```
9. **reduceRight 和 reduce**：`reduce` 方法接收一个函数作为累加器，从左到右将数组中的每个值进行合并，最终合成一个值；`reduceRight` 功能与 `reduce` 相同，只是从数组末尾向前进行累加。
```javascript
//示例：求数组的和。
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var str = a.reduce(function (prev, cur, index, arr) {
    return prev + cur;
})
//str // 55

//示例：求阶乘
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var str = a.reduce(function (prev, cur, index, arr) {
    return prev * cur;
})
//str //3628800
```

## 数组的排序
1. **函数排序**：使用 `sort` 方法进行排序，可传入比较函数实现数值的升序或降序排列。
```javascript
arr.sort(); //默认按照字符编码排序，先比较第一位字符

arr.sort(function (a, b) { //升序，只能对数值排序
    return a - b;
});

arr.sort(function (a, b) { //降序，只能对数值排序
    return b - a;
});
```
2. **冒泡排序**：通过多次比较相邻元素并交换位置，将最大（或最小）的元素逐步“冒泡”到数组末尾，实现排序。
```javascript
var arr = [3, 1, 5, 6, 4, 9, 7, 2, 8]

for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            var tmp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = tmp
        }
    }
}
```
3. **选择排序**：每次从未排序的元素中选择最小（或最大）的元素，将其与未排序部分的第一个元素交换位置，逐步完成排序。
```javascript
var arr = [3, 1, 5, 6, 4, 9, 7, 2, 8]

for (var j = 0; j < arr.length - 1; j++) {
    var minIndex = j
    for (var i = j + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i
        }
    }
    if (minIndex!== j) {
        var tmp = arr[minIndex]
        arr[minIndex] = arr[j]
        arr[j] = tmp
    }
}
```
4. **快速排序**：选择一个基准元素，将数组分为左右两部分，使得左边部分的元素都小于基准元素，右边部分的元素都大于基准元素，然后对左右两部分分别进行递归排序。
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var midIndex = parseInt(arr.length / 2);
    var mid = arr[midIndex];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === mid) {
            continue;
        }
        if (arr[i] < mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([mid], quickSort(right));
}
```

通过对数组的创建、属性、常用方法、遍历以及排序等方面的学习，能够更加熟练地使用数组来处理各种数据，满足不同的编程需求。 


# JavaScript ES5 中 String 相关知识详解

## this 关键字
`this` 关键字在 JavaScript 中是一个重要且具有特殊作用的存在，它只能出现在作用域里面，并且通常在函数内部使用。

1. **全局作用域下的 `this`**：在全局作用域中，`this` 永远指向 `window` 对象。
```javascript
var a = 10
console.log(this)
```
2. **函数中的 `this`**：不同的函数调用方式会导致函数内部的 `this` 指向不同。
    - 直接以 `函数名()` 调用的函数，其内部的 `this` 指向 `window`。
```javascript
function fn() {
    console.log(this)  //window
}
fn()

var fun = function () {
    console.log(this)  //window
}
fun()

var obj = {
    fn: function () {
        console.log(this)  //window
    }
}
//obj 这个对象中的fn成员存储的是一个函数地址
//把这个函数地址赋值给a
// a存储的也是一个函数地址
var a = obj.fn
a()
```
    - 当使用 `对象名.函数名()` 调用函数时，函数内部的 `this` 指向 `.` 前面的对象。
```javascript
function fn() {
    console.log(this)  //Object
}

var fun = function () {
    console.log(this)  //Object
}
//在obj这个对象里定义了一个成员fn,这个成员地址就是一个函数地址
//obj的fn成员可以当作函数来调用
var obj = {
    fn: function () {
        console.log(this)  //Object
    },
    //把全局fn函数的地址给了obj的fn2成员
    //obj的fn2成员存储的就是fn函数的地址
    fn2: fn,
    fn3: fun
}
obj.fn()
obj.fn2()
obj.fn3()
```
    - 当函数作为事件处理函数被调用时，函数内部的 `this` 指向事件源。
```html
<div id='box'>点击</div>
<script>
function fn() {
    console.log(this)  //<div id='box'>点击</div>
}
var fun = function () {
    console.log(this)  //<div id='box'>点击</div>
}
//在obj这个对象里定义了一个成员fn,这个成员地址就是一个函数地址
//obj的fn成员可以当作函数来调用
var obj = {
    fn: function () {
        console.log(this)  //Object
    }
}
//使用事件调用的函数叫作事件处理函数
//函数内部的this指向的是事件源
box.onclick = function () {
    console.log(this) //<div id='box'>点击</div>
}
box.onclick = fn
box.onclick = fun
box.onclick = obj.fn
</script>
```
    - 自执行函数里的 `this` 也是 `window` 对象。
```javascript
(function () {
    console.log(this)
}())
```

## 严格模式（了解）
ECMAscript5 引入了“严格模式”，它使得 JavaScript 在更严格的条件下运行，目的包括消除语法不合理之处、增强代码安全性、提高编译器效率和为未来版本做铺垫等。

### 开启严格模式
在代码最开始的位置写上字符串 `'use strict'` 即可开启严格模式。
```html
<script>
    'use strict'
    // 下面代码书写就要按照严格模式来书写
</script>
```

### 严格模式的规则
1. 声明变量必须使用 `var` 关键字，否则会报错。
```javascript
'use strict'

var num = 100
num2 = 200 // 这个就会报错
```
2. 函数的形参不能重复，否则会报错。
```javascript
'use strict'

function fn(p1, p1) {} // 直接就会报错
```
3. 声明式函数调用时，函数内部的 `this` 为 `undefined` ，而不是指向 `window`。
```javascript
'use strict'

function fn() {
    console.log(this) // undefined
}
fn()
```
4. 其他限制规范还包括：对不合理操作显示报错；禁止对象属性重名；禁止使用以 0 开头的八进制数字（ES6 用 `0o` 表示八进制）；禁止使用 `with` 语句；强制为 `eval` 创建新作用域；`arguments` 不再追踪参数变化；禁止使用 `arguments.callee`；函数必须声明在整个脚本或函数层面；新增一些保留字（如 `implements`、`interface` 等）不能作为标识符命名。

## 创建字符串（了解）
在 JavaScript 中，创建字符串有两种方法：
1. **字面量**：使用单引号或双引号包裹字符串内容。
```javascript
var str = 'hello'
```
2. **构造函数**：使用 `String` 构造函数创建字符串对象。
```javascript
var str = new String('hello')
```

## 编码字符集 （了解）
编码字符集是用编码值表示字符在库表中的位置，`ASCII` 码是常用的编码规则，占用一个字节，有 256 个取值，前 128 个为常用字符，后 128 个为特殊字符。由于各国语言标准不同会导致乱码问题，`Unicode` 编码将所有语言统一，它是一个大集合，包含多种字符编码如 `UTF-8`、`UTF-16`、`UTF-32` 等，且开头 128 个和 `ASCII` 编码一样。

## 字符串的常用方法
字符串在 JavaScript 中也有许多方法帮助进行操作，并且字符串和数组类似，也是按照索引排列（从 0 开始）。

1. **charAt**：`charAt(索引)` 方法用于返回字符串中指定索引位置的字符，如果索引不存在则返回空字符串。
```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charAt(2)

console.log(index) // c

var index = str.charAt(10)

console.log(index) // ''
```
2. **charCodeAt**：`charCodeAt(索引)` 方法返回对应索引位置字符的 `unicode` 编码。
```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charCodeAt(0)

console.log(index) // 74
```
3. **indexOf**：`indexOf` 方法从左往右查询指定字符在字符串中首次出现的索引位置，如果未找到则返回 -1。
```javascript
var str = 'Jack'

// 使用 indexOf 找到对应的索引
var index = str.indexOf('J')

console.log(index) // 0
```
4. **lastIndexOf**：`lastIndexOf` 方法返回指定字符在字符串中最后一次出现的索引位置，未找到返回 -1。
```javascript
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China");
```
5. **slice**：`slice()` 方法用于提取字符串的某个部分并返回新字符串，可接受两个参数（起始索引和终止索引），如果参数为负则从字符串结尾开始计数。
```javascript
var str = "Apple, Banana, Mango";
var res = str.slice(7, 13); 
// res 的结果是：Banana

var str = "Apple, Banana, Mango";
var res = str.slice(-13, -7);
// res 的结果是：Banana
```
6. **substring**：`substring` 方法用于截取字符串，语法为 `substring(从哪个索引开始，到哪个索引截止)`，包含开始索引，不包含结束索引，且不接受负索引。
```javascript
var str = 'hello'
//         01234
// 使用 substring 截取字符串
var newStr = str.substring(1, 3)
console.log(newStr) // el
```
7. **substr**：`substr` 方法也用于截取字符串，语法为 `substr(从哪个索引开始，截取多少个)`。
```javascript
var str = 'hello'
//         01234
// 使用 substr 截取字符串
var newStr = str.substr(1, 3)
console.log(newStr) // ell
```
8. **replace**：`replace` 方法用于用另一个值替换字符串中指定的值，默认只替换首个匹配，对大小写敏感，可通过正则表达式实现大小写不敏感替换或替换所有匹配。
```javascript
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3School");
console.log(n)  //Please visit W3School and Microsoft!

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3School");
console.log(n)  //Please visit Microsoft!

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3School");
console.log(n)  //Please visit W3School!

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3School");
console.log(n)  //Please visit W3School and W3School!
```
9. **concat**：`concat` 方法用于连接两个或多个字符串。
```javascript
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat(" ", text2);
console.log(text3) //Hello World
```
10. **trim**：`trim` 方法用于删除字符串两端的空白符。
```javascript
var str = "       Hello World!        ";
alert(str.trim());
```
11. **split**：`split` 方法用于将字符串按照指定的分隔符分割成数组，如果省略分隔符，数组将包含整个字符串；如果分隔符是 ""，数组将是间隔单个字符的数组。
```javascript
var txt = "a,b,c,d,e";   // 字符串
txt.split(",");          // 用逗号分隔
txt.split(" ");          // 用空格分隔
txt.split("|");          // 用竖线分隔

var txt = "Hello";       // 字符串
txt.split("");           // 分隔为字符
```
12. **toLowerCase 和 toUpperCase**：`toLowerCase` 方法将字符串转换为小写字母，`toUpperCase` 方法将字符串转换为大写字母。
```javascript
var str = "hello"
// 使用 toUpperCase 转换成大写
var upper = str.toUpperCase()
console.log(upper) // HELLO
// 使用 toLowerCase 转换成小写
var lower = upper.toLowerCase()
console.log(lower) // hello
```

通过对这些 `this` 关键字、严格模式、字符串创建及常用方法的学习，可以更全面深入地掌握 JavaScript ES5 中与字符串相关的知识，在实际编程中更好地处理字符串操作。 

# JavaScript中的Math和Date对象详解
在JavaScript中，`Math`和`Date`是两个重要的内置对象，分别用于处理数字和时间相关的操作。通过这两个对象提供的方法和属性，开发者可以方便地进行各种复杂的数学运算和时间处理。

## Math对象
`Math`对象提供了一系列用于操作数字的方法，这些方法都是静态的，使用时直接通过`Math`对象调用，无需创建`Math`对象的实例。

### random
`Math.random()`方法用于生成一个介于`0`（包括）和`1`（不包括）之间的随机数，每次执行生成的数字都不同。
```javascript
var num = Math.random()
console.log(num) // 得到一个随机数
```

### round
`Math.round()`方法用于将一个小数四舍五入为整数。
```javascript
var num = 10.1
console.log(Math.round(num)) // 10
var num2 = 10.6
console.log(Math.round(num2)) // 11
```

### abs
`Math.abs()`方法返回一个数字的绝对值。
```javascript
var num = -10
console.log(Math.abs(num)) // 10
```

### ceil
`Math.ceil()`方法将一个小数向上取整，返回大于或等于该小数的最小整数。
```javascript
var num = 10.1
console.log(Math.ceil(num)) // 11
var num2 = 10.9
console.log(Math.ceil(num2)) // 11
```

### floor
`Math.floor()`方法将一个小数向下取整，返回小于或等于该小数的最大整数。
```javascript
var num = 10.1
console.log(Math.floor(num)) // 10
var num2 = 10.9
console.log(Math.floor(num2)) // 10
```

### max
`Math.max()`方法接受多个数字作为参数，返回其中最大的数字。
```javascript
console.log(Math.max(1, 2, 3, 4, 5)) // 5
```

### min
`Math.min()`方法接受多个数字作为参数，返回其中最小的数字。
```javascript
console.log(Math.min(1, 2, 3, 4, 5)) // 1
```

### PI
`Math.PI`属性返回圆周率`π`的值，约为`3.141592653589793`，由于计算机计算精度问题，通常只能显示到小数点后15位，使用时无需加括号。
```javascript
console.log(Math.PI) // 3.141592653589793
```

### pow
`Math.pow(x, y)`方法返回`x`的`y`次幂的值。
```javascript
console.log(Math.pow(2, 3)) // 8
```

### sqrt
`Math.sqrt(x)`方法返回`x`的平方根，其中`x`必须大于等于`0`。
```javascript
console.log(Math.sqrt(9)) // 3
```

## Date对象
`Date`是JavaScript提供的用于处理日期和时间的内置构造函数，它可以表示特定的时间点，并提供了多种方法来操作和格式化时间。

### new Date()
`new Date()`在不传递参数时，返回当前系统的日期和时间；传递参数时，可以获取指定的时间。其参数格式有多种：
1. 传递两个数字，第一个表示年，第二个表示月份（月份从`0`开始计数，`0`表示1月，`11`表示12月）。
```javascript
var time = new Date(2019, 00) 
console.log(time) // Tue Jan 01 2019 00:00:00 GMT+0800 (中国标准时间)
```
2. 传递三个数字，前两个不变，第三个表示该月份的第几天，从`1`到`31`。
```javascript
var time = new Date(2019, 00, 05) 
console.log(time) // Sat Jan 05 2019 00:00:00 GMT+0800 (中国标准时间)
```
3. 传递四个数字，前三个不变，第四个表示当天的几点，从`0`到`23`。
```javascript
var time = new Date(2019, 00, 05, 22) 
console.log(time)
```


在JavaScript里，`setTimeout`和`setInterval`这两个函数用于设置定时器，它们返回的是一个唯一的标识符，此标识符可用于后续关闭定时器。下面为你详细解释定时器的返回值与关闭定时器的操作。

### 定时器的返回值
当你调用`setTimeout`或者`setInterval`函数时，会返回一个数字，这个数字就是定时器的唯一标识符，它代表该定时器在页面里的序号。
```javascript
var timerId = setTimeout(function () {
    console.log('倒计时定时器');
}, 1000);

var timerId2 = setInterval(function () {
    console.log('间隔定时器');
}, 1000);

console.log(timerId); 
console.log(timerId2); 
```
在上述代码中，`timerId`和`timerId2`分别为`setTimeout`和`setInterval`返回的标识符，借助这些标识符就能管理定时器。

### 关闭定时器
要关闭已设置的定时器，可以使用`clearTimeout`和`clearInterval`这两个函数。
- `clearTimeout`：一般用于关闭由`setTimeout`设置的定时器。
- `clearInterval`：通常用于关闭由`setInterval`设置的定时器。

不过，实际上这两个函数可以通用，也就是可以交叉使用。
```javascript
// 使用 clearTimeout 关闭 setTimeout 定时器
var timerId = setTimeout(function () {
    console.log('倒计时定时器');
}, 1000);
clearTimeout(timerId);

// 使用 clearInterval 关闭 setInterval 定时器
var timerId2 = setInterval(function () {
    console.log('间隔定时器');
}, 1000);
clearInterval(timerId2);

// 交叉使用关闭定时器
var timerId3 = setTimeout(function () {
    console.log('倒计时定时器');
}, 1000);
clearInterval(timerId3);

var timerId4 = setInterval(function () {
    console.log('间隔定时器');
}, 1000);
clearTimeout(timerId4);
```
在上面的代码中，前两个示例是按照常规方式关闭定时器，而后两个示例则展示了交叉使用关闭定时器的情况。

### 总结
- 定时器的返回值是一个唯一的标识符，代表该定时器在页面中的序号。
- `clearTimeout`和`clearInterval`可用于关闭定时器，并且这两个函数可以交叉使用。

在实际开发中，合理使用定时器和关闭定时器的功能，能够避免定时器持续运行造成资源浪费。 

# BOM

- 今天开始我们开始使用 js 去操作浏览器和页面中的 html 元素了

## 原生对象与宿主对象

原生对象（本地对象）：native object

ECMA所定义的对象Number、String、Boolean、Object、Array、Function、Date、RegExp、内置对象(如 Math、Global不需要实例化)、Error ..... 

宿主对象：host object（ 如 window、BOM、DOM ）

什么是宿主？web的运行环境，即操作系统、浏览器

宿主提供的对象 -> 宿主对象 

你提供的内容详细介绍了JavaScript中BOM（Browser Object Model，浏览器对象模型）的相关知识，下面我将为你对这些内容进行总结梳理：

### 原生对象与宿主对象
- **原生对象**：由ECMA定义的对象，如`Number`、`String`、`Boolean`、`Object`、`Array`、`Function`、`Date`、`RegExp`、`Math`、`Global`、`Error`等。
- **宿主对象**：由宿主（如操作系统、浏览器）提供的对象，像`window`、`BOM`、`DOM`都属于宿主对象。

### BOM概述
BOM即浏览器对象模型，用于操作浏览器的各种能力，核心是`window`对象，涵盖获取浏览器信息、页面跳转、操作滚动条、显示弹出框等功能。

### BOM操作示例

#### 获取浏览器窗口尺寸
使用`innerHeight`和`innerWidth`属性获取浏览器窗口的高度和宽度（包含滚动条）。
```javascript
var windowHeight = window.innerHeight;
console.log(windowHeight);

var windowWidth = window.innerWidth;
console.log(windowWidth);
```

#### 浏览器弹出层
- **alert**：弹出提示框，仅包含提示内容和一个确定按钮。
```javascript
window.alert('我是一个提示框');
```
- **confirm**：弹出询问框，有询问信息和确定、取消两个按钮，点击确定返回`true`，点击取消返回`false`。
```javascript
var boo = window.confirm('我是一个询问框');
console.log(boo);
```
- **prompt**：弹出输入框，有输入框和确定、取消两个按钮，点击取消返回`null`，点击确定返回输入内容。
```javascript
var str = window.prompt('请输入内容');
console.log(str);
```

#### 浏览器窗口操作
- **open()**：用于打开新窗口或查找已命名窗口。语法为`window.open(URL, name, specs, replace)`。
- **close()**：用于关闭浏览器窗口。`window.close()`关闭当前窗口，`新窗口.close()`关闭指定窗口。
- **窗口位置属性**：`window.screenLeft`和`window.screenTop`（部分老版本火狐不支持）、`window.screenX`和`window.screenY`（IE9以下不支持）用于获取窗口相对于屏幕的坐标。

#### 浏览器地址信息
- **location.href**：存储浏览器地址栏的URL信息，也可通过赋值实现页面跳转。
```javascript
// 获取当前URL
console.log(window.location.href);
// 页面跳转
window.location.href = './index.html';
```
- **location.reload()**：重新加载页面，即刷新页面，但注意不要在全局使用，否则会导致页面一直刷新。
- **host**：可设置或返回当前URL的主机名称和端口号。
```javascript
document.write(location.host);
```
- **hostname**：可设置或返回当前URL的主机名。
```javascript
document.write(location.hostname);
```

#### 浏览器历史记录操作
- **history.back()**：回退到上一个历史记录页面，相当于浏览器的后退按钮。
```javascript
window.history.back();
```
- **history.forward()**：前进到下一个历史记录页面，相当于浏览器的前进按钮。
```javascript
window.history.forward();
```
- **history.go(n)**：根据参数`n`的值进行历史记录跳转。`n = 0`刷新当前页面；`n > 0`向前跳转；`n < 0`向后跳转。
```javascript
window.history.go(-1);
```

#### 浏览器版本信息
- **navigator.userAgent**：获取浏览器的整体信息。
```javascript
console.log(window.navigator.userAgent);
```
- **navigator.appName**：获取浏览器的名称。
```javascript
console.log(window.navigator.appName);
```
- **navigator.appVersion**：获取浏览器的版本号。
```javascript
console.log(window.navigator.appVersion);
```
- **navigator.platform**：获取当前计算机的操作系统。
```javascript
console.log(window.navigator.platform);
```

#### screen对象
`screen`对象包含有关客户端显示屏幕的信息，如`width`（屏幕宽度）、`height`（屏幕高度）、`availHeight`（去除任务栏后的屏幕高度）、`availWidth`（去除任务栏后的屏幕宽度）。 



这是一份关于JavaScript中DOM（Document Object Model，文档对象模型）的详细学习资料，涵盖了DOM的基本概念、获取元素的方法、操作属性的方式以及特殊标签的获取等内容。以下是对该资料的详细梳理和总结：

### DOM概述
1. **定义**：DOM是文档对象模型，描绘了一个层次化的节点树，HTML文档中的所有内容都是节点，通过JS可以访问、添加、移除、修改和查询页面的某一部分。
2. **标准接口**：W3C规定了三类DOM标准接口，包括Core DOM（适用于各种结构化文档）、XML DOM（专用于XML文档）和HTML DOM（专用于HTML文档）。
3. **节点类型**：Core DOM中的常用节点有元素节点（如`<div>`、`<p>`等标签）、文本节点（包含在元素节点内的内容）和属性节点（修饰元素节点的属性）。
4. **核心对象**：DOM的核心对象是`document`对象，它是浏览器内置的，包含了操作元素的各种方法。

### 获取元素的方法
1. **getElementById**：通过元素的`id`名称获取标签，由于`id`在页面中唯一，所以获取到的是单个元素。
```html
<body>
    <div id="box"></div>
    <script>
        var box = document.getElementById('box');
        console.log(box); // <div></div>
    </script>
</body>
```
2. **getElementsByClassName**：通过元素的`class`名称获取标签，可能获取到多个元素，返回的是一个类似数组的伪数组结构，需用索引获取具体元素。
```html
<body>
    <div class="box"></div>
    <script>
        var box = document.getElementsByClassName('box');
        console.log(box); // [<div></div>]
        console.log(box[0]); // <div></div>
    </script>
</body>
```
3. **getElementsByTagName**：通过元素的标签名称获取标签，同样可能获取到多个元素，返回伪数组，需用索引获取具体元素。
```html
<body>
    <div></div>
    <script>
        var box = document.getElementsByTagName('div');
        console.log(box); // [<div></div>]
        console.log(box[0]); // <div></div>
    </script>
</body>
```
4. **querySelector**：按照CSS选择器的方式获取元素，只能获取到页面中第一个满足条件的元素。
```javascript
console.log(document.querySelector('div')); // 获取页面中的第一个 div 元素 
console.log(document.querySelector('.box')); // 获取页面中第一个有 box 类名的元素
console.log(document.querySelector('#box')); // 获取页面中第一个 id 名为 box 的元素
```
5. **querySelectorAll**：按照CSS选择器的方式获取元素，能获取到所有满足条件的元素，以伪数组形式返回，需用索引获取具体元素。
```javascript
console.log(document.querySelectorAll('div')); // 获取页面中的所有的 div 元素 
console.log(document.querySelectorAll('.box')); // 获取页面中所有有 box 类名的元素
```

### querySelector系列和getElementById的区别
1. **W3C标准不同**：querySelector系列属于Selectors API(JS)规范，getElementsBy系列属于DOM规范。
2. **浏览器兼容不同**：getElementsBy系列基本被所有浏览器支持，querySelector系列在一些旧版本浏览器（如IE7）中不支持。
3. **接受参数不同**：querySelector系列接收CSS选择器名，getElementsBy系列只能接收单一的`className`、`tagName`和`name`。
4. **返回值不同**：querySelector系列返回静态节点列表，不会随文档操作改变；getElementsBy系列返回动态节点列表，会随文档操作实时更新。

### 操作属性的方法
1. **innerHTML**：获取元素内部的HTML结构，也可设置元素的内容，会解析设置的HTML标签。
```html
<body>
    <div>
        <p>
            <span>hello</span>
        </p>
    </div>
    <script>
        var div = document.querySelector('div');
        console.log(div.innerHTML);
        // <p><span>hello</span></p>
    </script>
</body>
```
```html
<body>
    <div></div>
    <script>
        var div = document.querySelector('div');
        div.innerHTML = '<p>hello</p>';
    </script>
</body>
```
2. **innerText**：获取元素内部的文本内容，不包含HTML标签，也可设置元素内部的文本，会将设置的内容当作纯文本处理。
```html
<body>
    <div>
        <p>
            <span>hello</span>
        </p>
    </div>
    <script>
        var div = document.querySelector('div');
        console.log(div.innerText); // hello
    </script>
</body>
```
```html
<body>
    <div></div>
    <script>
        var div = document.querySelector('div');
        div.innerText = '<p>hello</p>';
    </script>
</body>
```
3. **getAttribute**：获取元素的某个属性，包括自定义属性。
```html
<body>
    <div a="100" class="box"></div>
    <script>
        var div = document.querySelector('div');
        console.log(div.getAttribute('a')); // 100
        console.log(div.getAttribute('class')); // box
    </script>
</body>
```
4. **setAttribute**：给元素设置一个属性，包括自定义属性。
```html
<body>
    <div></div>
    <script>
        var div = document.querySelector('div');
        div.setAttribute('a', 100);
        div.setAttribute('class', 'box');
        console.log(div); // <div a="100" class="box"></div>
    </script>
</body>
```
5. **removeAttribute**：移除元素的某个属性。
```html
<body>
    <div a="100" class="box"></div>
    <script>
        var div = document.querySelector('div');
        div.removeAttribute('class');
        console.log(div); // <div a="100"></div>
    </script>
</body>
```
6. **data-set**：HTML5新特性，用于处理自定义属性。可以使用`data-`前缀设置自定义属性，并通过`dataset`获取这些属性值。
7. **style**：用于给元素添加CSS样式，添加的是行内样式。
```html
<body>
    <div></div>
    <script>
        var div = document.querySelector('div');
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.backgroundColor = "pink";
        console.log(div); 
        // <div style="width: 100px; height: 100px; background-color: pink;"></div>
    </script>
</body>
```
8. **className**：用于操作元素的类名，可以获取当前类名，也可设置类名，设置时会覆盖原有类名。
```html
<body>
    <div class="box"></div>
    <script>
        var div = document.querySelector('div');
        console.log(div.className); // box
    </script>
</body>
```
```html
<body>
    <div class="box"></div>
    <script>
        var div = document.querySelector('div');
        div.className = 'test';
        console.log(div); // <div class="test"></div>
    </script>
</body>
```

### 特殊标签的获取方式
1. **获取body标签**：`var body1 = document.body;`
2. **获取head标签**：`var head1 = document.head;`
3. **获取title内容**：`var title1 = document.title;`
4. **获取html标签**：`var html1 = document.documentElement;` 



通过学习这些DOM操作知识，可以在JavaScript中灵活地对HTML页面元素进行各种操作，实现丰富的交互效果和动态页面功能。 

你提供的内容详细介绍了DOM节点的相关知识，包括节点的分类、获取节点的方法以及节点的属性。下面为你进一步梳理总结：

### DOM节点分类
DOM由HTML结构中的节点构成，节点可分为常用的三大类：
- **元素节点**：通过`getElementBy...`等方法获取到的标签，例如`<div>`、`<p>`等。
- **文本节点**：标签里的文字内容。
- **属性节点**：标签上的属性，如`id`、`class`等。

### 获取节点的方法
#### 子节点相关
- **childNodes**：获取某节点下所有的子一级节点，返回包含各种类型节点（元素、文本、注释等）的伪数组。
- **children**：获取某节点下所有的子一级元素节点，返回只包含元素节点的伪数组。
- **firstChild**：获取某节点下子一级的第一个节点，可能是任意类型节点。
- **lastChild**：获取某节点下子一级的最后一个节点，可能是任意类型节点。
- **firstElementChild**：获取某节点下子一级的第一个元素节点。
- **lastElementChild**：获取某节点下子一级的最后一个元素节点。

#### 兄弟节点相关
- **nextSibling**：获取某节点的下一个兄弟节点，可能是任意类型节点。
- **previousSibling**：获取某节点的上一个兄弟节点，可能是任意类型节点。
- **nextElementSibling**：获取某节点的下一个兄弟元素节点。
- **previousElementSibling**：获取某节点的上一个兄弟元素节点。

#### 父节点和属性节点相关
- **parentNode**：获取某节点的父节点。
- **attributes**：获取某元素节点的所有属性节点，返回一个伪数组。

### 节点属性示例代码解释
```html
<body>
    <ul test="我是 ul 的一个属性">
        <li>hello</li>
    </ul>

    <script>
        // 先获取 ul
        var oUl = document.querySelector('ul');
        
        // 获取到 ul 下的第一个子元素节点，是一个元素节点
        var eleNode = oUl.firstElementChild;
        
        // 获取到 ul 的属性节点组合，因为是个组合，我们要拿到节点的话要用索引
        var attrNode = oUl.attributes[0];

        // 获取到 ul 下的第一个子节点，是一个文本节点
        var textNode = oUl.firstChild;
    </script>
</body>
```
在这段代码中：
- `oUl`是通过`querySelector`获取到的`ul`元素节点。
- `eleNode`是`ul`下的第一个子元素节点，即`<li>`元素。
- `attrNode`是`ul`的第一个属性节点，这里是`test`属性。
- `textNode`是`ul`下的第一个子节点，可能是`ul`标签内起始处的空白文本节点。

通过这些获取节点的方法和属性操作，你可以在JavaScript中灵活地遍历和操作HTML文档的DOM结构。 
  



这部分内容围绕DOM节点展开，详细介绍了节点的属性、操作DOM节点的常见方式，包括创建、添加、删除、修改和克隆节点等。以下是对这些内容的梳理和优化：

### DOM节点属性
1. **nodeType**：用于获取节点的类型，通过数字来表示不同的节点类型。
    - `nodeType === 1` 代表元素节点。
    - `nodeType === 2` 代表属性节点。
    - `nodeType === 3` 代表文本节点。
2. **nodeName**：获取节点的名称。
    - 元素节点的`nodeName`为大写的标签名。
    - 属性节点的`nodeName`就是属性名。
    - 文本节点的`nodeName`固定为`#text`。
3. **nodeValue**：获取节点的值。
    - 元素节点没有`nodeValue`，返回`null`。
    - 属性节点的`nodeValue`是属性的值。
    - 文本节点的`nodeValue`是其包含的文本内容。

通过以下表格可更直观地对比：
|节点类型|nodeType|nodeName|nodeValue|
|----|----|----|----|
|元素节点|1|大写标签名|`null`|
|属性节点|2|属性名|属性值|
|文本节点|3|`#text`|文本内容|

### 操作DOM节点
对DOM节点的操作通常涵盖增删改查（CRUD），具体如下：
1. **创建节点**：
    - `createElement`：用于创建元素节点。例如：
```javascript
// 创建一个 div 元素节点
var oDiv = document.createElement('div')
console.log(oDiv) // <div></div>
```
    - `createTextNode`：用于创建文本节点。例如：
```javascript
// 创建一个文本节点
var oText = document.createTextNode('我是一个文本')
console.log(oText) // "我是一个文本"
```
2. **向页面中加入节点**：
    - `appendChild`：在父元素节点的末尾添加子节点。语法为`父节点.appendChild(要插入的子节点)`。例如：
```javascript
// 创建一个 div 元素节点
var oDiv = document.createElement('div')
var oText = document.createTextNode('我是一个文本')
// 向 div 中追加一个文本节点
oDiv.appendChild(oText)
console.log(oDiv) // <div>我是一个文本</div>
```
    - `insertBefore`：在指定节点之前插入新节点。语法为`父节点.insertBefore(要插入的节点，插入在哪一个节点的前面)`。例如：
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
3. **删除页面中的节点**：
    - `removeChild`：从父节点中移除指定的子节点。语法为`父节点.removeChild(要移除的子节点)`。例如：
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
    - `remove`：主要用于从下拉列表删除选项。语法为`selectObject.remove(index)`，如果指定的下标超出合理范围，该方法会忽略操作；若不添加下标，则移除当前对象本身。例如：
```html
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

