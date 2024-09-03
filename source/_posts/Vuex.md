---
title: Vuex
tags: Vue
category: 前端
abbrlink: db4c4335
date: 2021-06-16 11:30:25
cover:

---

# Vuex

## vuex是什么？

vuex是一种项目中数据共享的方式。

![vuex](https://storage.lynnn.cn/assets/markdown/91147/pictures/2020/08/1f5b60f8db5ab9b0306394aa7411e2354f240fce.jpeg?sign=95117e4a25b3517dcfc95186e3a75ce1&t=5f43b9a3)

其具有以下优势：

- 能够在vuex中**集中管理**共享的数据，便于开发和后期进行维护
- 能够高效的实现组件之间的数据共享，提高开发效率（**代码量**）
- 存储在vuex中的数据是**响应式**的，当数据发生改变时，页面中的数据也会同步更新

**什么样的数据适合存储在Vuex中？**

一般情况下，只有组件之间共享的数据才有必要存储到vuex中，对于组件中私有的数据依旧存储在组件自身的data中即可。



## vuex的安装及配置

vuex不是脚手架在安装项目的时候自带的，是一个选配的功能，默认是不被安装的（需要自己根据需要选择）。因此其安装和配置存在两种情况：

**情况1：在通过vue脚手架`vue create xxxx`的命令的时候，手动选择安装vuex【极力推荐】**。好处在于不需要自己手动创建`store`目录及目录下的`index.js`文件。

情况2：在通过vue脚手架`vue create xxxx`的命令的时候，可能没有选择安装vuex，则这个时候我们有两种选择：

- 删了重来，再建立项目的时候选择安装vuex
- 当然也可以通过命令来补救安装，但是通过命令后续安装的vuex，需要自己创建`store`目录和其下的`index.js`文件
  - npm i -S vuex



## vuex核心

### state：提供唯一公共数据源，所有的共享数据都要统一放到state中进行存储

~~~javascript
// 在组件中访问state数据的第一种方式（单个）
this.$store.state.全局数据名称
~~~

~~~javascript
// 在组件中访问state数据的第二种方式（批量）
// 按需导入mapState函数
import {mapState} from 'vuex'
// 将全局函数映射为当前组件的计算属性
computed: {
    ...mapState(['count'])
}
~~~

> **第二种方式映射过来的情况，其数据的使用方式如同在当前组件中使用自身的data数据一样（下同）**。
>
> - 在视图中，就直接插值表达式
> - 在js中就`this.xxxx`

### mutation(s)：用于变更store中的数据（修改）
  - 在Vuex中**只能**通过mutation变更store中的数据，不可以直接操作store中的数据
  - 通过这种方式操作起来稍微繁琐一些，但是可以集中监控所有数据的变化

~~~javascript
// 定义mutations
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state[,arg]){
            // 变更状态
            state.count++
        }
    }
})
~~~

~~~javascript
// 组件中触发mutation的第一种方式
methods:{
    handle(){
        this.$store.commit('add'[,arg])
    }
}
~~~

~~~javascript
// 组件中触发mutation的第二种方式
import {mapMutations} from 'vuex'
methods:{
    ...mapMutations(['add','reduce']),
    handle1(){
        this.add()
    },
    handle2(){
        this.reduce([arg])
    }
}
~~~

> **==不要在mutation中写异步的代码==**
>
> 在mutation中混合异步调用会导致你的程序很难调试。每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，**给调试带来困难**。

### action(s)：用于处理==异步==操作任务

~~~javascript
// 声明action
const store = new Vuex.Store({
    // 省略其他代码
    mutations: {
        add(state){
            state.count++
        }
    },
    actions: {
        addAsync(context[,arg]){
            setTimeout(() => {
                context.commit('add'[,arg])
            },1000)
        }
    }
})
~~~

~~~javascript
// 组件中触发action
methods: {
    handle(){
        this.$store.dispach('addAsync'[,arg])
    }
}
~~~

> action也是支持如同state、mutation一样的按需导入mapActions方式进行触发。

### getter(s)：对store中已有的数据加工处理形成新的数据
  - 对已有的数据进行加工除了，类似于Vue的计算属性
  - store数据发生变化，则getter中的数据也会跟着变化

~~~javascript
// 定义getter
....
getters: {
    showNum: state => {
        return '当前最新的数量是【' + state.count + '】'
    }
}
~~~

~~~javascript
// 在组件中访问getters数据的第一种方式
this.$store.getters.全局数据名称
~~~

~~~javascript
// 在组件中访问getters数据的第二种方式
// 按需导入mapGetters函数
import {mapGetters} from 'vuex'
// 将全局函数映射为当前组件的计算属性
computed: {
    ...mapGetters(['showNum'])
}
~~~



## 模块化

- 为什么有状态的模块化？
  - 主要是因为项目是多人协作开发的，如果都去修改一个文件，则经常会出现代码冲突，而解决冲突比较费事费力。

- 使用步骤
  - 建立src/store/modules文件夹（名称随意）
  - 在modules文件夹中建立需要的模块文件（命名以功能为导向，记得导出一下）
- 注意点1（了解）：
  - 在模块的时候，因为多人合作，不能的开发者之前并不清楚其他怎么给方法和数据源进行命名，这样的话就有一个问题：万一名称重名怎么办？如果冲突了，会执行以下合并策略：
    - state数据源肯定不会冲突，它以模块进行保存
    - mutations、actions的方法不会以模块为单位进行保存，如果出现同名则可能会冲突。vuex会先将这些同名的方法，整合到一起，都去执行。会先执行index.js中的，再去执行其他的。
    - getters如果出现冲突，不给解决，直接报错。
  - 因为多人合作可能出现命名的冲突，特别针对getters，vuex模块化的时候支持使用`命名空间`
    - 默认是没有给模块开启命名空间的
    - 如果需要请自己开启，通过模块对象的属性“namespaced”，将其值设置为true
    - 命名空间的名称，是模块的名字（模块里面属性的名字）
- 注意点2：由于模块使用了命名空间，所以之前没有模块化的使用方式（this、map系列）在模块化之后都要发生对应的变化
  - state
    - this形式：this.$store.state.空间名.xxxx
    - map系列：...mapSate(空间名,[xxxx,yyyy,zzzz...])
  - mutations
    - this形式：this.$store.commit("空间名/方法名", "参数");
    - map系列：...mapMutations("空间名",["方法名",...]),
  - actions
    - this形式：this.$store.dispatch("空间名/方法名", "参数");
    - map系列：...mapActions("空间名",["方法名",...]),
  - getters
    - this形式：this.$store.getters["空间名/属性名"]
    - map形式：...mapActions("空间名", ["属性名",....]),