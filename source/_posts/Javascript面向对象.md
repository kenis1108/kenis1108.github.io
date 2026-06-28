---
title: Javascript面向对象
tags: JavaScript
category: 前端
abbrlink: 28239a8d
date: 2019-03-18 20:55:50


---

## 标题备选

1. JavaScript 基础补课：JavaScript 面向对象，核心知识点一次讲清楚
2. 前端人绕不开：JavaScript 面向对象 从概念到代码示例
3. 手把手梳理 JavaScript 面向对象：面试和实战都能用上

## 摘要

这篇文章适合前端基础巩固和面试复习，围绕「JavaScript 面向对象」整理概念、示例和易混点，帮助你把 JavaScript 基础打扎实。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**前端基础不是背概念，而是知道每个知识点在代码里怎么用。**

JavaScript 的知识点很多：语法、事件、正则、面向对象、异步、模块化、性能优化，每一块都能影响真实项目。

这篇围绕「JavaScript 面向对象」把原始笔记重新梳理成更适合阅读和复习的版本。

## 知识点整理

下面进入正文。代码示例建议直接敲一遍，很多细节只有运行起来才会真正记住。

如果你正在准备前端面试，可以把这里的代码示例当作复习清单逐个过一遍。

## 面向对象

- 面向对象 英文Object Oriented，缩写OO
- 面向对象是一种软件开发方法，它将对象作为程序的基本单元，将程序和数据封装其中，以提高软件的灵活性、重用性和扩展性。
- 面向对象是一种对现实世界理解和抽象的方法，是计算机编程技术发展到一定阶段后的产物，是一种高级的编程思想。
- 面向对象的概念和应用已超越了程序设计和软件开发，扩展到如数据库系统、交互式界面、应用结构、应用平台、分布式系统、网络管理结构、CAD技术、人工智能等领域。
- 面向对象的三大基本特征：封装、继承、多态
- 封装：封装是指将现实世界中存在的某个客体的属性与行为绑定在一起，并放置在一个逻辑单元内。该逻辑单元负责将所描述的属性隐藏起来，外界对客体内部属性的所有访问只能通过提供的用户接口实现。对象是封装的最基本单位。
- 继承：继承性是子类自动共享父类数据结构和方法的机制，这是类之间的一种关系。在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，并加入若干新的内容。
- 多态：多态性是指相同的操作或函数、过程可作用于多种类型的对象上并获得不同的结果。不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性。说白了多态就是相同的事物，一个接口，多种实现，同时在最初的程序设定时，有可能会根据程序需求的不同，而不确定哪个函数实现，通过多态不需要修改源代码，就可以实现一个接口多种解决方案。
  - 多态的表现形式重写与重载。
    - 什么是重写
      - 子类可继承父类中的方法，而不需要重新编写相同的方法。但有时子类并不想原封不动地继承父类的方法，而是想作一定的修改，这就需要采用方法的重写。方法重写又称方法覆盖。
    - 什么是重载
      - 重载就是函数或者方法有相同的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。在JavaScript中，同一个作用域，出现两个名字一样的函数，后面的会覆盖前面的，所以 JavaScript 没有真正意义的重载。
- 抽象：抽象是指强调实体的本质、内在的属性。在系统开发中，抽象指的是在决定如何实现对象之前的对象的意义和行为。使用抽象可以尽可能避免过早考虑一些细节。
- 类与对象
  -  类描述了一组有相同特性和相同行为的对象，具有相同属性和相同方法的对象的抽象就是类。
  - 类的实例是对象
    - 对象把数据及对数据的操作方法放在一起，作为一个相互依存的整体。
  - 对象的抽象是类
    - 类与对象的关系：模板  ->  产品
    - “JavaScript中所有事物都是对象”，如 字符串、数组、函数…等等。
    - 因为所有事物均继承自Object，都是Object的实例。
    - 对象是带有属性和方法的集合。
    - 变量和属性：
      - 变量是自由的，属性是属于对象的，是与对象相关的值。
    - 函数和方法：
      - 函数是自由的，方法是属于对象的，是与对象相关的函数。
- 面向： 面（脸），向（朝着）
- 面向过程： 脸朝着过程 =》 关注着过程的编程模式
- 面向对象： 脸朝着对象 =》 关注着对象的编程模式
- 实现一个效果
  - 在面向过程的时候，我们要关注每一个元素，每一个元素之间的关系，顺序，。。。
  - 在面向对象的时候，我们要关注的就是找到一个对象来帮我做这个事情，我等待结果
- 例子 🌰： 我要吃面条
  - 面向过程
    - 用多少面粉
    - 用多少水
    - 怎么和面
    - 怎么切面条
    - 做开水
    - 煮面
    - 吃面
  - 面向对象
    - 找到一个面馆
    - 叫一碗面
    - 等着吃
  - 面向对象就是对面向过程的封装
- 我们以前的编程思想是，每一个功能，都按照需求一步一步的逐步完成
- 我们以后的编程思想是，每一个功能，都先创造一个 **面馆**，这个 **面馆** 能帮我们作出一个 **面（完成这个功能的对象）**，然后用 **面馆** 创造出一个 **面**，我们只要等到结果就好了

## 面向对象与面向过程的区别

+ 面向过程是一种直接的的编程方法，它是按照编程的思路考虑问题，通过顺序执行一组语句来实现一个功能。
+ 面向过程可以说是从细节方面考虑问题
+ 面向对象可以说是从宏观方面考虑问题
+ 面向过程  ==>  ‘自己造电脑'
+ 面向对象  ==>  ‘自己组装电脑’

## 创建对象的方式

- ECMAScript提供了多个原生对象，如 Object、Array、String、Boolean、Number、Date…等等。
- 此外，JavaScript允许自定义创建对象。

### 调用系统内置的构造函数创建对象

- js 给我们内置了一个 Object 构造函数

- 这个构造函数就是用来创造对象的

- 当 构造函数 和 new 关键字连用的时候，就可以为我们创造出一个对象

- 因为 js 是一个动态的语言，那么我们就可以动态的向对象中添加成员了

  ```javascript
  // 就能得到一个空对象
  var o1 = new Object()

  // 正常操作对象
  o1.name = 'Jack'
  o1.age = 18
  o1.gender = '男'
  ```

### 字面量的方式创建一个对象

- 直接使用字面量的形式，也就是直接写 `{}`

- 可以在写的时候就添加好成员，也可以动态的添加

  ```javascript
  // 字面量方式创建对象
  var o1 = {
    name: 'Jack',
    age: 18,
    gender: '男'
  }

  // 再来一个
  var o2 = {}
  o2.name = 'Rose'
  o2.age = 20
  o2.gender = '女'
  ```

### 使用工厂函数的方式创建对象

- 先书写一个工厂函数

- 这个工厂函数里面可以创造出一个对象，并且给对象添加一些属性，还能把对象返回

- 使用这个工厂函数创造对象

  ```javascript
  // 1. 先创建一个工厂函数
  function createObj() {
    // 手动创建一个对象
    var obj = new Object()

    // 手动的向对象中添加成员
    obj.name = 'Jack'
    obj.age = 18
    obj.gender = '男'

    // 手动返回一个对象
    return obj
  }

  // 2. 使用这个工厂函数创建对象
  var o1 = createObj()
  var o2 = createObj()
  ```

### 使用自定义构造函数创建对象

- 工厂函数需要经历三个步骤

  - 手动创建对象
  - 手动添加成员
  - 手动返回对象

- 构造函数会比工厂函数简单一下

  - 自动创建对象
  - 手动添加成员
  - 自动返回对象

- 先书写一个构造函数

- 在构造函数内向对象添加一些成员

- 使用这个构造函数创造一个对象（和 new 连用）

- 构造函数可以创建对象，并且创建一个带有属性和方法的对象

- 面向对象就是要想办法找到一个有属性和方法的对象

- 面向对象就是我们自己制造 **构造函数** 的过程

  ```javascript
  // 1. 先创造一个构造函数
  function Person(name, gender) {
    this.age = 18
    this.name = name
    this.gender = gender
  }

  // 2. 使用构造函数创建对象
  var p1 = new Person('Jack', 'man')
  var p2 = new Person('Rose', 'woman')
  ```

## 构造函数详解

- 我们了解了对象的创建方式
- 我们的面向对象就是要么能直接得到一个对象
- 要么就弄出一个能创造对象的东西，我们自己创造对象
- 我们的构造函数就能创造对象，所以接下来我们就详细聊聊 **构造函数**

### 构造函数的基本使用

- 和普通函数一样，只不过 **调用的时候要和 new 连用**，不然就是一个普通函数调用

  ```javascript
  function Person() {}
  var o1 = new Person()  // 能得到一个空对象
  var o2 = Person()      // 什么也得不到，这个就是普通函数调用
  ```

  - 注意： **不写 new 的时候就是普通函数调用，没有创造对象的能力**

- 首字母大写

  ```javascript
  function person() {}
  var o1 = new person() // 能得到一个对象

  function Person() {}
  var o2 = new Person() // 能得到一个对象
  ```

  - 注意： **首字母不大写，只要和 new 连用，就有创造对象的能力**

- 当调用的时候如果不需要传递参数可以不写 `()`，建议都写上

  ```javascript
  function Person() {}
  var o1 = new Person()  // 能得到一个空对象
  var o2 = new Person    // 能得到一个空对象
  ```

  - 注意： **如果不需要传递参数，那么可以不写 （），如果传递参数就必须写**

- 构造函数内部的 this，由于和 new 连用的关系，是指向当前实例对象的

  ```javascript
  function Person() {
    console.log(this)
  }
  var o1 = new Person()  // 本次调用的时候，this => o1
  var o2 = new Person()  // 本次调用的时候，this => o2
  ```

  - 注意： **每次 new 的时候，函数内部的 this 都是指向当前这次的实例化对象**

- 因为构造函数会自动返回一个对象，所以构造函数内部不要写 return

  - 你如果 return 一个基本数据类型，那么写了没有意义
  - 如果你 return 一个引用数据类型，那么构造函数本身的意义就没有了

### 使用构造函数创建一个对象

- 我们在使用构造函数的时候，可以通过一些代码和内容来向当前的对象中添加一些内容

  ```javascript
  function Person() {
    this.name = 'Jack'
    this.age = 18
  }

  var o1 = new Person()
  var o2 = new Person()
  ```

  - 我们得到的两个对象里面都有自己的成员 **name** 和 **age**

- 我们在写构造函数的时候，是不是也可以添加一些方法进去呢？

  ```javascript
  function Person() {
    this.name = 'Jack'
    this.age = 18
    this.sayHi = function () {
      console.log('hello constructor')
    }
  }

  var o1 = new Person()
  var o2 = new Person()
  ```

  - 显然是可以的，我们的到的两个对象中都有 `sayHi` 这个函数
  - 也都可以正常调用

- 但是这样好不好呢？缺点在哪里？

  ```javascript
  function Person() {
    this.name = 'Jack'
    this.age = 18
    this.sayHi = function () {
      console.log('hello constructor')
    }
  }

  // 第一次 new 的时候， Person 这个函数要执行一遍
  // 执行一遍就会创造一个新的函数，并且把函数地址赋值给 this.sayHi
  var o1 = new Person()

  // 第二次 new 的时候， Person 这个函数要执行一遍
  // 执行一遍就会创造一个新的函数，并且把函数地址赋值给 this.sayHi
  var o2 = new Person()
  ```

  - 这样的话，那么我们两个对象内的 `sayHi` 函数就是一个代码一摸一样，功能一摸一样
  - 但是是两个函数空间，占用两个内存空间
  - 也就是说 `o1.sayHi` 是一个地址，`o2.sayHi` 是一个地址
  - 所以我们执行 `console.log(o1.sayHi === o2.sayHi)` 的到的结果是 `false`
  - 缺点： **一摸一样的函数出现了两次，占用了两个空间地址**

- 怎么解决这个问题呢？

  - 就需要用到一个东西，叫做 **原型**

## 原型

- 原型的出现，就是为了解决 **构造函数的缺点**

- 也就是给我们提供了一个给对象添加函数的方法

- 不然构造函数只能给对象添加属性，不能合理的添加函数就太 LOW 了

### prototype

- **每一个函数天生自带一个成员，叫做 prototype，是一个对象空间**

- 即然每一个函数都有，构造函数也是函数，构造函数也有这个对象空间

- prototype(原型)属性，这个属性是一个指针，指向一个对象，这个对象的用途是包含特定类型的所有实例共享的属性和方法，即这个原型对象是用来给实例共享属性和方法的。 而每个实例内部都有一个指向原型对象的指针。 使用这个原型对象来共享实例的属性和方法的模式就叫原型模式

- 这个 `prototype` 对象空间可以由函数名来访问

  ```javascript
  function Person() {}

  console.log(Person.prototype) // 是一个对象
  ```

  - 即然是个对象，那么我们就可以向里面放入一些东西

  ```javascript
  function Person() {}

  Person.prototype.name = 'prototype'
  Person.prototype.sayHi = function () {}
  ```

- 我们发现了一个叫做 `prototype` 的空间是和函数有关联的

- 并且可以向里面存储一些东西

- 重点： **在函数的 prototype 里面存储的内容，不是给函数使用的，是给函数的每一个实例化对象使用的**

- 那实例化对象怎么使用能？

### \_\_proto\_\_

- **每一个对象都天生自带一个成员，叫做 `__proto__`，是一个对象空间**

- 即然每一个对象都有，实例化对象也是对象，那么每一个实例化对象也有这个成员

- 这个 `__proto__` 对象空间是给每一个对象使用的

- 当你访问一个对象中的成员的时候

  - 如果这个对象自己本身有这个成员，那么就会直接给你结果
  - 如果没有，就会去 `__proto__` 这个对象空间里面找，里面有的话就给你结果
  - 未完待续。。。

- 那么这个 `__proto__` 又指向哪里呢？

  - 这个对象是由哪个构造函数 new 出来的
  - 那么这个对象的 `__proto__` 就指向这个构造函数的 `prototype`

  ```javascript
  function Person() {}

  var p1 = new Person()

  console.log(p1.__proto__ === Person.prototype) // true
  ```

  - 我们发现实例化对象的 `__proto__` 和所属的构造函数的 `prototype` 是一个对象空间
  - 我们可以通过构造函数名称来向 `prototype` 中添加成员
  - 对象在访问的时候自己没有，可以自动去自己的 `__proto__` 中查找
  - 那么，我们之前构造函数的缺点就可以解决了
    - 我们可以把函数放在构造函数的 `prototype` 中
    - 实例化对象访问的时候，自己没有，就会自动去 `__proto__` 中找
    - 那么也可以使用了

  ```javascript
  function Person() {}

  Person.prototype.sayHi = function () {
    console.log('hello Person')
  }

  var p1 = new Person()
  p1.sayHi()
  ```

  - `p1` 自己没有 `sayHi` 方法，就会去自己的 `__proto__` 中查找
  - `p1.__proto__` 就是 `Person.prototype`
  - 我们又向 `Person.prototype` 中添加了 `sayHi` 方法
  - 所以 `p1.sayHi` 就可以执行了

- 到这里，当我们实例化多个对象的时候，每个对象里面都没有方法

  - 都是去所属的构造函数的 `prototype` 中查找
  - 那么每一个对象使用的函数，其实都是同一个函数
  - 那么就解决了我们构造函数的缺点

  ```javascript
  function Person() {}

  Person.prototype.sayHi = function () {
    console.log('hello')
  }

  var p1 = new Person()
  var p2 = new Person()

  console.log(p1.sayHi === p2.sayHi)
  ```

  - `p1` 是 `Person` 的一个实例
  - `p2` 是 `Person` 的一个实例
  - 也就是说 `p1.__proto__` 和 `p2.__proto__` 指向的都是 `Person.prototype`
  - 当 `p1` 去调用 `sayHi` 方法的时候是去 `Person.prototype` 中找
  - 当 `p2` 去调用 `sayHi` 方法的时候是去 `Person.prototype` 中找
  - 那么两个实例化对象就是找到的一个方法，也是执行的一个方法

- 结论

  - 当我们写构造函数的时候
  - **属性我们直接写在构造函数体内**
  - **方法我们写在原型上**

```
 //原型模式创建对象
function Person(){
 }
Person.prototype.name='钟女士';
Person.prototype.age=80;
Person.prototype.gender='女';
var person1= new Person();
console.log(person1)
//简写原型模式
Person.prototype={
   constructor:Person
   name:'钟女士'，
   age:80,
   gender:'女'
 }
var p=new Person()
console.log(p)
```

注：每个原型对象都有constructor属性，由于简写模式重写了默认的prototype对象，所以constructor也会被重新定义，不再指向他的构造函数，所以可以自己写一个constructor属性指向他的构造函数

## 原型链

- 每个构造函数都有原型对象，每个构造函数实例都包含一个指向原型对象的内部指针（proto），如果我们让`第一个构造函数的原型对象(prototype)等于第二个构造函数的实例`，结果`第一个构造函数的原型对象(prototype)将包含一个指向第二个原型对象的指针`，再然`第三个原型对象(prototype)等于第一个构造函数的实例`，这样`第三个原型对象(prototype)也将包含指向第一个原型对象的指针`，以此类推，就够成了实例于原型的链条，这就是原型链的基本概念

```javascript
function One(){
 }
 function Two(){
 }
 function Three(){
 }
 Two.prototype=new One();
 Three.prototype=new Two();
 var three=new Three();
 console.log(three);
 console.log(three.__proto__===Three.prototype) //true
 console.log(three.__proto__.__proto__===Two.prototype) //true
 console.log(three.__proto__.__proto__.__proto__===One.prototype)  //true
 console.log(three.__proto__.__proto__.__proto__.__proto__===Object.prototype)  //true
```

在对象实例中，访问对象原型的方法

1、使用proto属性
此属性是浏览器支持的一个属性，并不是ECMAScript里的属性

语法：实例对象.\__proto__.函数()

2.Object.getPrototypeOf( )：返回指定对象的原型（内部`[[Prototype]]`属性的值）。

语法：Object.getPrototypeOf(实例对象)

3.使用constructor.prototype的方法
对于不支持proto的浏览器，可以使用constructor，访问到对象的构造函数，在用prototype访问到原型

语法：实例对象.constructor.prototype.函数()

### constructor

- 对象的 `__proto__` 里面也有一个成员叫做 **`constructor`**

- 这个属性就是指向当前这个对象所属的构造函数

- 可以用来判断复杂数据类型

  ```javascript
  console.log([].constructor == Array); //true
  console.log(function(){}.constructor == Function); //true
  console.log(new Date().constructor == Date); //true
  ```

### 原型链的访问原则

- 我们之前说过，访问一个对象的成员的时候，自己没有就会去 `__proto__` 中找
- 接下来就是，如果 `__proto__` 里面没有就再去 `__proto__` 里面找
- 一直找到 `Object.prototype` 里面都没有，那么就会返回 `undefiend`

### 对象的赋值

- 到这里，我们就会觉得，如果是赋值的话，那么也会按照原型链的规则来
- 但是： **并不是！并不是！并不是！** 重要的事情说三遍
- 赋值的时候，就是直接给对象自己本身赋值
  - 如果原先有就是修改
  - 原先没有就是添加
  - 不会和 `__proto__` 有关系

## 总结

- 到了这里，我们就发现了面向对象的思想模式了

  - 当我想完成一个功能的时候
  - 先看看内置构造函数有没有能给我提供一个完成功能对象的能力
  - 如果没有，我们就自己写一个构造函数，能创造出一个完成功能的对象
  - 然后在用我们写的构造函数 new 一个对象出来，帮助我们完成功能就行了

- 比如： tab选项卡

  - 我们要一个对象
  - 对象包含一个属性：是每一个点击的按钮
  - 对象包含一个属性：是每一个切换的盒子
  - 对象包含一个方法：是点击按钮能切换盒子的能力
  - 那么我们就需要自己写一个构造函数，要求 new 出来的对象有这些内容就好了
  - 然后在用构造函数 new 一个对象就行了

---

## class类

传统的javascript中只有对象，没有类的概念。它是基于原型的面向对象语言。原型对象特点就是将自身的属性共享给新对象。这样的写法相对于其它传统面向对象语言来讲，很有一种独树一帜的感觉！非常容易让人困惑！

如果要生成一个对象实例，需要先定义一个构造函数，然后通过new操作符来完成。构造函数示例：

```javascript
//函数名和实例化构造名相同且大写（非强制，但这么写有助于区分构造函数和普通函数）
function Person(name,age) {
    this.name = name;
    this.age=age;
}
Person.prototype.say = function(){
    return "我的名字叫" + this.name+"今年"+this.age+"岁了";
}
var obj=new Person("laotie",88);//通过构造函数创建对象，必须使用new 运算符
console.log(obj.say());//我的名字叫laotie今年88岁了

/*
构造函数生成实例的执行过程：
1.当使用了构造函数，并且new 构造函数(),后台会隐式执行new Object()创建对象;
2.将构造函数的作用域给新对象，（即new Object()创建出的对象），而函数体内的this就代表new Object()出来的对象。
3.执行构造函数的代码。
4.返回新对象（后台直接返回）;*/
```

ES6引入了Class（类）这个概念，通过class关键字可以定义类。该关键字的出现使得其在对象写法上更加清晰，更像是一种面向对象的语言。

## 类定义

- 类表达式可以为匿名或命名。

```javascript
// 匿名类
let Example = class {
    constructor(a) {
        this.a = a;
    }
}
// 命名类
let Example = class Example {
    constructor(a) {
        this.a = a;
    }
}
```

## 类声明

  ```javascript
  class Example {
      constructor(a) {
          this.a = a;
      }
  }
  //注意要点：不可重复声明。
  class Example{}
  class Example{}
  // Uncaught SyntaxError: Identifier 'Example' has already been
  // declared

  let Example = class{}
  class Example{}
  // Uncaught SyntaxError: Identifier 'Example' has already been
  // declared
  ```

## 类的属性

  - 静态属性：class 本身的属性，即直接定义在类内部的属性（ Class.propname ），不需要实例化

  ```javascript
    class Example {
    // 新提案
        static a = 2;
    }
    // 目前可行写法
    Example.b = 2;
  ```

  - 公共属性

  ```javascript
    class Example{}
    Example.prototype.a = 2;
  ```

  - 实例属性：定义在实例对象（ this ）上的属性。

  ```javascript
    class Example {
        a = 2;
        constructor () {
            console.log(this.a);
        }
    }
  ```

  - name 属性  返回跟在 class 后的类名(存在时)。

  ```javascript
    let Example=class Exam {
        constructor(a) {
            this.a = a;
        }
    }
    console.log(Example.name); // Exam

    let Example=class {
        constructor(a) {
            this.a = a;
        }
    }
    console.log(Example.name); // Example
  ```

## 类的方法

  - constructor 方法是类的默认方法，创建类的实例化对象时被调用。

    ```javascript
    class Example{
        constructor(){
          console.log('我是constructor');
        }
    }
    new Example(); // 我是constructor

    //constructor中返回对象
    /*
    class Test {
        constructor(){
            // 默认返回实例对象 this
        }
    }
    console.log(new Test() instanceof Test); // true

    class Example {
        constructor(){
            // 指定返回对象
            return new Test();
        }
    }
    console.log(new Example() instanceof Example); // false
    */
    ```

  - 静态方法

  ```javascript
  class Example{
      static sum(a, b) {
          console.log(a+b);
      }
  }
  Example.sum(1, 2); // 3
  ```

  - 原型方法

    ```javascript
    class Example {
        sum(a, b) {
            console.log(a + b);
        }
    }
    let exam = new Example();
    exam.sum(1, 2); // 3
    ```

  - 实例方法

    ```javascript
    class Example {
        constructor() {
            this.sum = (a, b) => {
                console.log(a + b);
            }
        }
    }
    ```

如果将之前的代码改为ES6的写法就会是这个样子：

  ```javascript
  class Person{//定义了一个名字为Person的类
      constructor(name,age){//constructor是一个构造方法，用来接收参数
          this.name = name;//this代表的是实例对象
          this.age=age;
      }
      say(){//这是一个类的方法，注意千万不要加上function
          return "我的名字叫" + this.name+"今年"+this.age+"岁了";
      }
  }
  var obj=new Person("laotie",88);
  console.log(obj.say());//我的名字叫laotie今年88岁了
  ```

  注：
        1.在类中声明方法的时候，千万不要给该方法加上function关键字
        2.方法之间不要用逗号分隔，否则会报错

- 由下面代码可以看出类实质上就是一个函数。类自身指向的就是构造函数。所以可以认为ES6中的类其实就是构造函数的另外一种写法！

  ```javascript
  console.log(typeof Person);//function
  console.log(Person===Person.prototype.constructor);//true
  ```

- 以下代码说明构造函数的prototype属性，在ES6的类中依然存在着。
   `console.log(Person.prototype);//输出的结果是一个对象`
   实际上类的原型方法都定义在类的prototype属性上。代码证明下：

  ```javascript
  Person.prototype.say=function(){//定义与类中相同名字的方法。成功实现了覆盖！
      return "我是来证明的，你叫" + this.name+"今年"+this.age+"岁了";
  }
  var obj=new Person("laotie",88);
  console.log(obj.say());//我是来证明的，你叫laotie今年88岁了
  ```

- 当然也可以通过prototype属性对类添加方法。如下：

  ```javascript
  Person.prototype.addFn=function(){
      return "我是通过prototype新增加的方法,名字叫addFn";
  }
  var obj=new Person("laotie",88);
  console.log(obj.addFn());//我是通过prototype新增加的方法,名字叫addFn
  ```

- 还可以通过Object.assign方法来为对象动态增加方法

  ```javascript
  Object.assign(Person.prototype,{
      getName:function(){
          return this.name;
      },
      getAge:function(){
          return this.age;
      }
  })
  var obj=new Person("laotie",88);
  console.log(obj.getName());//laotie
  console.log(obj.getAge());//88
  ```

- constructor方法是类的构造函数的默认方法，通过new命令生成对象实例时，自动调用该方法。

  ```javascript
  class Box{
      constructor(){
          console.log("啦啦啦，今天天气好晴朗");//当实例化对象时该行代码会执行。
      }
  }
  var obj=new Box();
  ```

- constructor方法如果没有显式定义，会隐式生成一个constructor方法。所以即使你没有添加构造函数，构造函数也是存在的。constructor方法默认返回实例对象this，但是也可以指定constructor方法返回一个全新的对象，让返回的实例对象不是该类的实例。

  ```javascript
  class Desk{
      constructor(){
          this.xixi="我是一只小小小小鸟！哦";
      }
  }
  class Box{
      constructor(){
         return new Desk();// 这里没有用this哦，直接返回一个全新的对象
      }
  }
  var obj=new Box();
  console.log(obj.xixi);//我是一只小小小小鸟！哦
  ```

- constructor中定义的属性可以称为`实例属性`（即定义在this对象上），constructor外声明的属性都是定义在原型上的，可以称为`原型属性`（即定义在class上)。hasOwnProperty()函数用于判断属性是否是实例属性。其结果是一个布尔值， true说明是实例属性，false说明不是实例属性。in操作符会在通过对象能够访问给定属性时返回true,无论该属性存在于实例中还是原型中。

  ```javascript
  class Box{
      constructor(num1,num2){
          this.num1 = num1;
          this.num2=num2;
      }
      sum(){
          return num1+num2;
      }
  }
  var box=new Box(12,88);
  console.log(box.hasOwnProperty("num1"));//true
  console.log(box.hasOwnProperty("num2"));//true
  console.log(box.hasOwnProperty("sum"));//false
  console.log("num1" in box);//true
  console.log("num2" in box);//true
  console.log("sum" in box);//true
  console.log("say" in box);//false
  ```

- 类的所有实例共享一个原型对象，它们的原型都是Person.prototype，所以**proto**属性是相等的

  ```javascript
  class Box{
      constructor(num1,num2){
          this.num1 = num1;
          this.num2=num2;
      }
      sum(){
          return this.num1+this.num2;
      }
  }
  //box1与box2都是Box的实例。它们的__proto__都指向Box的prototype
  var box1=new Box(12,88);
  var box2=new Box(40,60);
  console.log(box1.__proto__===box2.__proto__);//true
  ```

- 由此，也可以通过**proto**来为类增加方法。使用实例的**proto**属性改写原型，会改变Class的原始定义，影响到所有实例，所以不推荐使用！

  ```javascript
  class Box{
      constructor(num1,num2){
          this.num1 = num1;
          this.num2=num2;
      }
      sum(){
          return num1+num2;
      }
  }
  var box1=new Box(12,88);
  var box2=new Box(40,60);
  box1.__proto__.sub=function(){
      return this.num2-this.num1;
  }
  console.log(box1.sub());//76
  console.log(box2.sub());//20
  ```

- **class不存在变量提升**，所以需要先定义再使用。因为ES6不会把类的声明提升到代码头部，但是ES5就不一样,**ES5存在变量提升**,可以先使用，然后再定义。

  ```javascript
  //ES5可以先使用再定义,存在变量提升
  new A();
  function A(){

  }
  //ES6不能先使用再定义,不存在变量提升 会报错
  new B();//B is not defined
  class B{

  }
  ```

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你最近复习 JavaScript 最头疼的是原型链、事件循环、正则，还是异步？评论区留一个关键词，后面可以单独展开。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

JavaScript、前端、前端基础
