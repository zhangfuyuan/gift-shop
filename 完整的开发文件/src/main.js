// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import apiConfig from '../config/api.config'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)
Vue.use(VueAxios, Axios)
Axios.defaults.baseURL = apiConfig.baseUrl

Vue.config.productionTip = false

// 将全局样式文件写在 main.js
import '@/assets/scss/app.scss'

// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui'

Vue.use(Lazyload, {
  loading: '/static/images/loading-spin.svg',
  attempt: 2
})
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
