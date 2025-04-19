---
title: Redux
tags: React
category: 前端
abbrlink: cb417bc6
date: 2021-06-16 14:49:14


---


# Redux

## 简介

2013年Facebook提出了Flux架构的思想，引发了很多的实现。2015年，Redux出现，将Flux与函数式编程结合一起，很短时间内就成为了最热门的前端架构。

简单说，如果你的UI层非常简单，没有很多互动，Redux就是不必要的，用了反而增加复杂性。

如果你的项目的迭代变得越来越复杂，组件的数量和层级也变得越来越多，越来越深，此时组件间的数据通信就变得异常的复杂和低效，为了解决这个问题，引入了状态管理（**redux**）从而很好的解决多组件之间的通信问题。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/a6087b34b9f365ef23b0a53fb6ca225099d5cfb6.png?sign=fbbd37dae9446bbcef3b79c60c2d31e3&t=5f99a237)

如果需要使用Redux请先进行安装：

网址：https://redux.js.org/introduction/getting-started

~~~shell
npm i -S redux
~~~

> 与vuex的区别：
>
> - 代码书写上vuex的代码会比redux的感觉简单一些
> - 两者在模块化上的实现也有区别，redux的模块化分的文件会更多，但是redux在命名空间层面的操作比vuex简单



## 三大原则（重点）

- 单一数据源
  - 整个应用的`state`（这个state不是组件中的state，请不要混淆）被储存在一棵对象结构树中，并且这个对象结构只存在于唯一一个store中
- State是只读的
  - 唯一改变state的方法就是触发dispatch+action，action是一个用于描述已发生事件的**普通对象**（action普通对象必须要有`type`属性，值是什么无所谓，其余属性也无所谓）。
- （最终修改数据的方法）使用**纯函数**（一个函数的返回结果只受到其形参的影响，则其就是纯函数）来执行修改
  - 为了描述action如何改变state tree ，我们需要编写reducer，==reducer必须是纯函数==，它接收先前的state和action，并返回**新的**state（不会合并的，自行注意这个坑）

**操作原理图**

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/c2b874cdd9bc6f0579afebeedc5f958131a78040.png?sign=ec995f5c878596b98a9e1b3827aa4c4c&t=5f99b163)

a. store通过reducer创建了初始状态

b. view通过store.getState()获取到了store中保存的state挂载在了自己的状态上

c. 用户产生了操作（事件），调用了actions 的方法

d. actions的方法被调用，创建了带有标示性信息的action（描述对象，描述如何修改数据）

e. actions将action通过调用store.dispatch方法发送到了reducer中

f. reducer接收到action并根据标识信息判断之后返回了新的state（自己注意合并的问题）

g. store的state被reducer更改为新state的时候，store.subscribe方法里的回调函数会执行，此时就可以通知view去重新获取state

- store.getState()：用于获取仓库中初始的数据（一次性）
- store.dispatch()：用于派发修改数据的任务，参数是action普通对象
- store.subscribe(callback)：视图组件用于订阅新数据的方法（二次及以后的数据更新，使之产生类似于vue的响应式store数据）

> 纯函数是函数式编程的概念，必须遵守以下一些约束。
>
> - 不得改写参数
>
> - 不能调用系统 I/O 的API
>
> - 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

请注意：由于reducer被要求是纯函数，所以reducer函数里面不能改变State，必须返回一个全新的数据（不会自动合并原始数据的，因此一定要注意：别把原始数据搞丢了）。



## redux的使用

**案例：在组件中展示一个按钮，点按钮后给redux中的数字+9，数字初始为0。实现一个计数器的效果**

步骤：

- 创建store
- 创建视图组件（展示store中的数据）
- 修改
- 回显数据到视图组件



**实现步骤**

a. 创建默认数据源：

~~~js
// 1. 这是仓库store

// a. 导入需要使用的成员
// createStore方法，作用用于产生仓库
import { createStore } from "redux";

// b. 创建数据源
// 默认数据源是一个普通对象，可以有很多的数据
const defaultState = {
    // 定义初始化的数据
    count: 0,
};

// c. 创建纯函数reducer（方法名叫什么无所谓）
// 作用：负责返回state（可能是直接返回state，也可能是返回修改后的state）
// 语法：reducer(state = defaultState,actions)
function reducer(state = defaultState, actions) {
    // 在返回之前写修改数据源的操作
    return state;
}

// d. 产生仓库
// 产生仓库的时候需要往仓库中存放数据源，因此需要传递reducer过去
const store = createStore(reducer);

// e. 导出仓库
export default store;

~~~

为了方便调试redux（可选安装），建议去谷歌商店安装`redux dev tools`，在使用的时候需要参考其[说明页面](https://github.com/zalmoxisus/redux-devtools-extension#usage)

> redux工具条在安装好之后不能直接使用，需要配置仓库代码，然后才能使用。

~~~js
// d. 产生仓库
// 产生仓库的时候需要往仓库中存放数据源，因此需要传递reducer过去
const store = createStore(
    reducer,
    // 必须要加上一段插件的配置工具，才能在浏览器中使用redux扩展
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
~~~

显示效果：

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/01/8a98ff5a63061eb039045fe1c42cd955d518311c.png?sign=7f00fc5ce078fb8192e4014f51649cb6&t=600a9550)



b. 建立视图组件并且展示数据源

~~~jsx
import React, { Component } from "react";
// 需要导入store
import store from "../store/index";
class Counter extends Component {
    // 在constructor中获取store中的数据
    constructor(props) {
        super(props);
        // 获取store数据（一次性，不具备响应式）
        this.state = store.getState();
        // 订阅数据的更新
        store.subscribe(() => this.setState(() => store.getState()));
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <div>当前Store中的数据是：{this.state.reducer.count}</div>
                <button onClick={this.addCount.bind(this)}>点击+9</button>
                <hr />
                <div>当前Store中的数据是：{this.state.reducer2.age}</div>
                <button onClick={this.addAge.bind(this)}>点击+1</button>
            </div>
        );
    }

    // 点击+9
    addCount() {
        // 描述数据如何更改的对象，其必须有type属性
        let action = { type: "mod_count", payload: 9 };
        // 通过store.dispatch去派发action（会将该action派发给所有的reducer，每个reducer都会被执行，因此一定要注意type的取值）
        store.dispatch(action);
    }

    // 点击+1
    addAge() {
        let action = { type: "mod_age", payload: 1 };
        store.dispatch(action);
    }
}

export default Counter;
~~~

c. 修改操作

视图组件中的代码：

~~~js
handler() {
    // 3. +9这个修改操作需要通过普通对象去描述（actions）
    const action = {
        // type是用于在reducer方法中做条件判断用的
        type: "add",
        // 另一个属性用于声明本次修改具体的值是多少
        payload: 9,
    };
    // 派发修改任务
    store.dispatch(action);
}
~~~

仓库文件的代码：

~~~js
function reducer(state = defaultState, actions) {
    console.log(actions);
    //判断是否是加法操作
    if (actions.type === "add") {
        return { count: state.count + actions.payload };
    }
    // 在返回之前写修改数据源的操作
    return state;
}
~~~

d. 回显新的数据

~~~js
// 构造函数
constructor(props) {
    super(props);
    // 2. 在视图组件中获取初始的仓库数据
    // getState()方法是store对象内置的方法
    this.state = store.getState();
    // 4. 订阅新的数据
    store.subscribe(() => {
        // 获取新数据修改当前的state
        this.setState(() => store.getState());
    });
}
~~~

如果有多个reducer，需要通过`combineReducers`方法进行合并，代码如下：

~~~js
// 合并reducer
// 有点类似于vuex的命名空间
const reducers = combineReducers({ reducer, reducer2 });

// c. 创建store对象（通过createStore方法），目前（后续有变）其参数就是reducer
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
~~~



## 模块化

针对redux的模块化，在一个常规项目中会将其代码拆分成以下几个部分：

- States：建立同名目录，存放模块化之后的state（默认数据源）

- Reducers，建立同名目录，存放模块化之后的reducer
- Actions：建立同名目录，存放模块化之后的action
- Type（可选）：建立同名目录，存放独立的type声明
  - 注意：在整个项目中，**对于不同数据源的更改时使用的type名称不能重复**，这个一定要注意。（原因redux在做修改数据的时候，**其原理是依据type的值去循环每个reducer，找到匹配的去执行**，为了避免出现同名，建议type集中书写）

具体实现，以项目的代码为准。

> 由于代码已经经过模块化，在获取redux中的数据的时候需要更改获取方式，比如说之前获取count是写成：this.state.count，模块化之后需要写成：this.state.counter.count，比之前多了一个模块化的模块名称（等同于vuex中命名空间）



## react-redux

网址：https://react-redux.js.org/

React-Redux是Redux的官方针对React开发的扩展库，默认没有在React项目中安装，需要手动来安装。react-redux是依赖于redux，所以必须先安装redux。

我们可以理解为react-redux就是redux给我们提供一些高阶组件。

~~~shell
npm i -S react-redux
~~~

React-redux所能解决的问题是：

- 使用它以后我们不需要在每个组件中再去 手动订阅数据的更新了。
- 没有了数据的初始化state赋值，当前组件自身state和这个redux不冲突了
- 使用本节的react-redux与下一节的redux-thunk并不是为了简化代码的，它们存在的意义是解决前面所遇到的问题

**使用步骤**

- 在项目入口文件中定义Provider

  - 该步骤的操作有点类似于之前组件通信中的context那块的操作

  - 将整个仓库作为商品提供给App根组件，后续的所有的组件都可以获取到仓库store中的数据

  - 注意：与context不一样，这里绑定数据使用的属性是“store”

  - src/index.js文件中的示例代码：

  - ~~~js
    // 导入
    import React from "react";
    import ReactDOM from "react-dom";
    // 导入provider
    import { Provider } from "react-redux";
    import store from "./store/index";
    
    // 导入需要展示的组件
    import App from "./Login";
    
    // 渲染视图
    // 在展示app组件的时候需要按照组件的形式进行操作
    ReactDOM.render(
        <Provider store={store}>
            <App></App>
        </Provider>,
        document.getElementById("root")
    );
    ~~~

- 在需要使用redux的组件中使用

  - 这个步骤与vuex中map系列函数（mapState，mapMutations，mapActions、mapGetters）的思想是一样的

  - 思想：将仓库中的属性和方法映射成当前组件自身的属性和方法

  - 在实际使用的时候组件中不再需要使用store对象了（包括初始的获取数据：store.getState()、store.dispatch(）、store.subscribe()）

  - 步骤

    - 在需要使用reudx的组件前面导入react-redux提供的高阶组件：connect

    - 编写映射方法（请注意，这个方法映射不是类组件的方法，而是在类组件外写的方法）

      - mapStateToProps(state)
        - 作用：将仓库中的state数据源映射成本组件的属性props，返回一个props对象
        - 参数：仓库中的state
      - mapDispatchToProps(dispatch)
        - 作用：将派发action的方法映射成当前组件自身的属性，该方法也要求返回一个对象，该对象中存放的就是派发action的方法集合
        - 参数：dispatch如同之前的store.dispatch()
      - 编写时，可以写箭头函数，也可以写常规函数

    - 应用高阶组件connect，写法是固定的

      - ~~~js
        // 在组件最后导出的时候改写成如下：
        export default connect(mapStateToProps,mapDispatchToProps)(ComponentName)
        ~~~

  - 组件中实际使用时的参考代码：以jsx为例

  - ~~~react
    import React, { Component } from "react";
    // 需要导入store
    // import store from "../store/index";
    // 导入action创建模块（导出里面全部的方法）
    import * as actionCreate from "../store/actions/index";
    // 导入type
    import { MOD_COUNT, MOD_AGE } from "../store/types/index";
    // import * as types from "../store/types/index";
    
    // 第一步：在需要使用redux组件中导入一个由react-redux提供的hoc
    import { connect } from "react-redux";
    class Counter extends Component {
        // 在constructor中获取store中的数据
        constructor(props) {
            super(props);
            // 获取store数据（一次性，不具备响应式）
            // this.state = store.getState();
            // 订阅数据的更新
            // store.subscribe(() => this.setState(() => store.getState()));
        }
        render() {
            console.log(this.state);
            return (
                <div>
                    <div>当前Store中的数据是：{this.props.tool.count}</div>
                    <button onClick={this.props.addCount}>点击+9</button>
                    <hr />
                    <div>当前Store中的数据是：{this.props.user.age}</div>
                    <button onClick={this.props.addAge}>点击+1</button>
                </div>
            );
        }
    }
    
    // 第二步：在类外面定义俩个映射方法
    // 将redux中的state数据源映射到本组件自身的props中
    function mapStateToProps(state) {
        // return state.user;
        // return state.tool;
        return state;
    }
    // 将dispatch映射成自身组件的props
    function mapDispatchToProps(dispatch) {
        // 该方法返回一个对象，对象中都是方法
        return {
            addCount() {
                dispatch(actionCreate.createAction(MOD_COUNT, 9));
            },
            addAge() {
                dispatch(actionCreate.createAction(MOD_AGE, 1));
            },
        };
    }
    
    // 第三步：应用HOC
    // connect函数的俩个参数顺序不能颠倒
    export default connect(mapStateToProps, mapDispatchToProps)(Counter);
    ~~~
  
  

## redux-thunk（中间件）

通常情况下，action只是一个对象，不能包含异步操作，这导致了很多创建action的逻辑只能写在组件中，代码量较多也不便于复用，同时对该部分代码测试的时候也比较困难，**组件的业务逻辑也不清晰**，使用中间件了之后，可以通过actionCreator异步编写action，这样代码就会拆分到actionCreator中，可维护性大大提高，可以方便于测试、复用，同时actionCreator还集成了异步操作中不同的action派发机制，减少编码过程中的代码量。

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/01/f602da4624bbd2d6a94f60659d3425c6c718a225.png?sign=c2ad92a84b02dd359e3433318d1e6317&t=600e8805)

常见的异步库：

- **Redux-thunk**
- Redux-saga
- Redux-effects
- Redux-side-effects
- Redux-loop
- Redux-observable
- …

基于Promise的异步库：

- Redux-promise
- Redux-promises
- Redux-simple-promise
- Redux-promise-middleware
- …

这里我们使用一个Redux官方出品的中间件库：**redux-thunk**

![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/10/19a9bd4441389b0de7378dbc88bd09cd43df515d.png?sign=befc0a76a6388904b5ec3cfb90add605&t=5f99b565)



在使用前需要先安装这个中间件：

~~~shell
npm i -S redux-thunk
~~~



步骤：

- 在仓库的创建文件`store/index.js`文件中导入中间件的应用方法，再去导入redux-thunk，并且应用

  - 导入redux提供的中间件使用的方法：applyMiddleware

- 会产生报错（浏览器的redux调试工具的报错）需要解决

  - 解决思路：查看

    [插件的项目主页]: https://github.com/zalmoxisus/redux-devtools-extension#usage

    ，找解决办法

    ![](https://storage.lynnn.cn/assets/markdown/91147/pictures/2021/01/6e50a16108fda29d18af71d2cc157474c33df8de.png?sign=2532a8ce08844760f0e65ef26eabe329&t=600e8b12)

    修改为的配置如下：

    ~~~js
    // 解决插件报错的操作
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const store = createStore(
        // 合并多个reducer（整合数据源）,不合并会报错
        combineReducers({ counter, global }),
        // 应用中间件
        composeEnhancers(applyMiddleware(thunk))
        // 必须要加上一段插件的配置工具，才能在浏览器中使用redux扩展
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    ~~~

- 去需要做异步处理的action的位置去使用异步实现（通过dispatch派发action）

  - ~~~js
    // - 异步方法（载荷可能是异步获取的数据）
    export const createActionAsync = (type, payload) => {
        // 异步代码先不写（暂时没有异步中间件）
        // return { type, payload };
        // setTimeout(() => {
        //     return { type, payload };
        // }, 1000);
    
        // 异步写法
        return (dispatch) => {
            setTimeout(() => {
                dispatch({ type, payload });
            }, 3000);
        };
    };
    ~~~



## 面试题：redux优化

问题：redux是用于大规模数据管理的，一个项目中可能会有很多的数据，这就导致模块化后会产生若干个reducer需要在store/index.js中进行导入，也就会出现以下情况（举例）：

~~~js
import search from "./Reducers/Reducer1";
import search from "./Reducers/Reducer2";
import search from "./Reducers/Reducer3";
import search from "./Reducers/Reducer4";
import search from "./Reducers/Reducer5";
import search from "./Reducers/Reducer6";
import search from "./Reducers/Reducer7";
import search from "./Reducers/Reducer8";
import search from "./Reducers/Reducer9";
import search from "./Reducers/Reducer10";
// ...
~~~

如何对其进行优化？



解决思路：通过编写一个方法，实现指定文件夹的遍历，实现自动导入。

核心方法：require.context()

> 该方法接受3个参数：
>
> 参数1：目录
>
> 参数2：是否递归遍历，布尔值
>
> 参数3：正则表达式

代码实现：

==注意：写该优化代码的实现必须要写在所有的import语句之后==

~~~js
// 代码优化，批量导入
const files = require.context("./reducers", false, /\.js$/);
// 比较固定的处理代码
let members = {}; // 组合成员用的
files.keys().forEach((element) => {
    // element是对应的模块文件的路径
    console.log(element);
    // 依据路径获取导出的成员
    let member = files(element).default;
    // 获取文件名充当对象的属性名
    let filename = element.replace(/(.*\/)*([^.]+).*/gi, "$2");
    // 组合成员
    members[filename] = member;
});
~~~



