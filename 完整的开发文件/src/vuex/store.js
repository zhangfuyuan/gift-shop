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
    cartNum: 0
  },
  // getters 由state派生出新的状态并通过方法返回值，第一个参数为state -> 使用：this.$store.getters.**
  getters:{
    num: state => state.cartNum
  },
  // mutations 声明需要用到的方法，第一个参数为state -> 使用：this.$store.commit('**'[, 传参])
  mutations:{
    add: (state, num) => {
      state.cartNum += num;
    }
  },
  // actions 声明调用mutations里的函数的方法（可异步），第一参数为context -> 使用：this.$store.dispatch('**'[, 传参])
  actions:{
    addCart: (context, num) => {
      MessageBox.confirm('确定加入购物车么？').then(action => {
        context.commit('add', num);
      });
    }
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
