import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'
// 引入fastclick
import fastclick from 'fastclick'
//引入懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueLazyLoad,{
  loading:require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
