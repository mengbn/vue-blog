// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css' // 引入UI样式
import ElementUI from 'element-ui'
import NProgress from 'nprogress' // 进度条组建
import 'nprogress/nprogress.css'// 进度条样式
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './store' // 引入vuex 的模型层
import './mock' // 模拟接口,打包产品的时候可以去掉
// 路由前置操作
router.beforeEach((to, from, next) => {
  NProgress.start() //
  next()
})
// 路由后置操作
router.afterEach(transition => {
  NProgress.done()
})
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
