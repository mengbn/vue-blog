// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// progress bar style
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './store'
import './mock' // 模拟数据
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next()
})
router.afterEach(transition => {
  NProgress.done()
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
