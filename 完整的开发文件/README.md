# gift-shop

> a gift shop

## 开发

[笔记](https://note.youdao.com/web/#/file/recent/markdown/WEB3690fd60e750a77738d028d737756713/)

[Mint UI](http://mint-ui.github.io/docs/#/zh-cn2)

[Mint UI-github](https://github.com/ElemeFE/mint-ui/tree/master/example/pages)

[iconfont](http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)

[icomoon](https://icomoon.io/app/#/select)

[scss](https://www.sass.hk/docs/)

[scss简书](http://www.jianshu.com/p/fa379a309c8a)

[github/gift-shop](https://github.com/zhangfuyuan/gift-shop)

[mock](https://easy-mock.com/login)
```
Jeffrey

aakuang
```

```
npm install --save-dev sass-loader

npm install --save-dev node-sass

npm i mint-ui -S

// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

@import './const.scss';
@import './iconfont.scss';
@import './mixin.scss';
@import './reset.scss';

// 将全局样式文件写在 main.js
import '@/assets/scss/app.scss'

  $ npm i axios -D
  $ npm i vue-axios -D
  
  import Axios from 'axios'
  import VueAxios from 'vue-axios'
  
  Vue.use(VueAxios,Axios)

```

scss只能在未编译为css前才能使用变量等语法，即 `import '@/assets/scss/app.scss'` 后就全部编译为css内容，
只有 `@import './const.scss';` 才能继续使用scss语法。

获取数据错误原因：
1. 数据类型不匹配
2. 超出数组长度

mock使用：
1.生产环境 -> https
2.开发环境 -> http

mint ui - Lazyload 引入问题：
1.若需要修改默认预加载图片，请按如下顺序引用模块：
```
// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui'

Vue.use(Lazyload, {
  loading: '/static/images/loading-spin.svg',
  attempt: 2
})
Vue.use(Mint)
```
2.即使在 `main.js` 完整引入插件，在某些组件使用某些模块还是需要再次引入，如下：
MessageBox（带选项的弹框） 、 Toast（文本弹框） 、Indicator（动画弹框）

```

// 路由懒加载
// const Home = (resolve) => {
//   import('@/views/home/index').then((module) => {
//     resolve(module)
//   })
// }
//
// const Login = (resolve) => {
//   import('@/views/entry/login').then((module) => {
//     resolve(module)
//   })
// }
//
// const Register = (resolve) => {
//   import('@/views/entry/register').then((module) => {
//     resolve(module)
//   })
// }
//
// const Forget = (resolve) => {
//   import('@/views/entry/forget').then((module) => {
//     resolve(module)
//   })
// }
//
// const Classify = (resolve) => {
//   import('@/views/classify/index').then((module) => {
//     resolve(module)
//   })
// }
//
// const Find = (resolve) => {
//   import('@/views/find/index').then((module) => {
//     resolve(module)
//   })
// }
//
// const Cart = (resolve) => {
//   import('@/views/cart/index').then((module) => {
//     resolve(module)
//   })
// }
//
// const Mine = (resolve) => {
//   import('@/views/mine/index').then((module) => {
//     resolve(module)
//   })
// }

```

[H5扫一扫案例1](https://www.cnblogs.com/maomao93/p/7253674.html)
[H5扫一扫案例2](http://ask.dcloud.net.cn/question/46052)

箭头函数有两个特性：
1.函数体内不创建 this 变量，所以你套一万层也没用，因为他自己根本就没有this，所以最后你用的this全都是外面的this，这就让箭头函数有了仿佛可以支持词法层面的this的特性。
2.箭头函数函数体内不创建 arguments 变量，所以你在箭头函数内部也用不了arguments搜索。
故以下写法会报错：`Cannot set property 'indexList' of undefined`
```
_initIndexListData () {
      axios.get('/api/indexList').then(function (res) {
        // console.log(res)
        if (res.data.code === 0) {
          this.indexList = res.data.data.data.poilist
        }
      }).catch(err => {
        console.log(err)
      })
    }
```

watch 里的所有属性方法都有可获得变化值的参数！

对于V-show，V-if如何选择，本人有以下建议：
1、对于管理系统的权限列表的展示，这里可以使用V-if来渲染，如果使用到V-show，对于用户没有的权限，在网页的源码中，仍然能够显示出该权限，如果用V-if，网页的源码中就不会显示出该权限。（在前后台分离情况下，后台不负责渲染页面的场景。）
2、对于前台页面的数据展示，这里推荐使用V-show，这样可以减少开发中不必要的麻烦。
* 即如果用户在F12模式下操作DOM能给用户看的数据就用 `v-show`

响应式获取使用 `ref` 注册的DOM元素的位置坐标信息方法：
```
<div class="type" ref="type" :style="{ height: typeHeight + 'px' }">
...

mounted() {
      // 获取全部信息
      console.log(this.$refs.type.getBoundingClientRect());
      // 获取当前元素顶边距离浏览器首屏底部的距离
      this.typeHeight = document.documentElement.clientHeight - this.$refs.type.getBoundingClientRect().top;
    }
```

一个页面嵌套多个子路由的用法：
```
<template>
  <div class="restaurant-detail">
    <!-- 商家模块头部 -->
    <seller-header :seller="seller"></seller-header>

    <div class="tab">
      <div class="tab-item">
        <router-link to="./goods">点菜</router-link>
      </div>
      <div class="tab-item">
        <router-link to="./ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="./seller">商家</router-link>
      </div>
    </div>

    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
```

```
{
  path: '/restaurant',
  redirect: '/restaurant/goods',
  component: RestaurantDetail,
  children: [
    {
      path: 'goods',
      component: Goods
    },
    {
      path: 'ratings',
      component: Ratings
    },
    {
      path: 'seller',
      component: Seller
    }
  ]
}
```

事件修饰符
```
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat">

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
```

购物车页面框架定型
1.HTML模板：

2.CSS样式：

3.JS逻辑：

vuex使用：
1. 安装：
```
cnpm install vuex -S
```

2. 引入main.js
```
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
```

3. 创建一个vuex目录和一个store.js文件
```
/**
 * Created by Jeffrey on 2017/12/16.
 */

import Vue from 'vue'
import Vuex from 'Vuex'
import { MessageBox } from 'mint-ui';

Vue.use(Vuex);

const store = new Vuex.Store({
  // state 声明需要用到的状态并赋予初始值 -> 使用：this.$store.state.**
  state:{

  },
  // getters 由state派生出新的状态并通过方法返回值，第一个参数为state -> 使用：this.$store.getters.**
  getters:{

  },
  // mutations 声明需要用到的方法，第一个参数为state -> 使用：this.$store.commit('**'[, 传参])
  mutations:{

  },
  // actions 声明调用mutations里的函数的方法（可异步），第一参数为context -> 使用：this.$store.dispatch('**'[, 传参])
  actions:{

  },
  // modules 包含多个子模块 -> 使用：this.$store.state.**.**
  modules: {
    // moduleA: {
    //   state: { ... },
    //   mutations: { ... },
    //   actions: { ... },
    //   getters: { ... }
    // },
    // moduleB: {
    //   state: { ... },
    //   mutations: { ... },
    //   actions: { ... },
    //   getters: { ... }
    // }
  }
})

export default store

```

4. 理解用法：
  （1）state：相当于 vue 实例的 data 对象，公开全局的数据状态，并赋予初始值
 
  （2）getters：相当于 vue 实例的 computed 对象，公开全局的数据状态，并由在state声明的数据赋值
  
  （3）mutations：相当于 vue 实例的 methods 对象，公开全局的方法，并由在state声明的数据赋值
  
  （4）actions：公开全局的方法，并调用在 mutations 声明的方法，可异步执行
  
  （5）modules：将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块

5. 注意：
  （1）如果组件调用store的 state 或 getters 里面的值需要实时变更，必须写在 computed 里！！！
    ```
    computed: {
      cartNum: {
        get () {
          return this.$store.state.cartNum;
        },
        set (event) {

        }
      }
    },
    ```

  （2）使用 v-model 绑定 vuex 计算属性的时候要设置get 和 set 才能双向绑定
    ```
    computed: {
        value: {
            get () {
                return this.$store.getters.value;
            },
            set (event) {
                this.$store.dispatch('updateValue', event.target.value);
            }
        }
    }
    ```
    
## 专题

1. 扫码功能

2. 支付接口

3. 分享接口

4. 爬虫技术

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
