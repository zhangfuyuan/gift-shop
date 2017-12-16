import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/index'
import Goods from '@/views/home/goods'
import Login from '@/views/entry/login'
import Register from '@/views/entry/register'
import Forget from '@/views/entry/forget'
import Classify from '@/views/classify/index'
import Find from '@/views/find/index'
import Cart from '@/views/cart/index'
import checkOut from '@/views/cart/checkOut'
import Mine from '@/views/mine/index'
import Scan from '@/views/common/scan'
import Message from '@/views/common/message'
import GoodsDetails from '@/views/common/goodsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    // 根路径
    { path: '/', redirect: '/home', name: 'Index', component: Home },
    // 首页
    { path: '/home', name: 'Home', component: Home },
      // 搜索礼品列表
      { path: '/goods', name: 'Goods', component: Goods },
    // 分类
    { path: '/classify', name: 'Classify', component: Classify },
    // 发现
    { path: '/find', name: 'Find', component: Find },
    // 购物车
    { path: '/cart', name: 'Cart', component: Cart },
      // 结算
      { path: '/checkOut', name: 'CheckOut', component: checkOut },
    // 我的
    { path: '/mine', name: 'Mine', component: Mine },

    // 登录
    { path: '/login', name: 'Login', component: Login },
    // 注册
    { path: '/register', name: 'Register', component: Register },
    // 忘记密码
    { path: '/forget', name: 'Forget', component: Forget },

    // 扫一扫
    { path: '/scan', name: 'Scan', component: Scan },
    // 消息
    { path: '/message', name: 'Message', component: Message },
    // 礼品详情
    { path: '/goodsDetails', name: 'GoodsDetails', component: GoodsDetails },
    // 404
    { path: '*', name: 'NotFound', component: Login },
  ]
})
