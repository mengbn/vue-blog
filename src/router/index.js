import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/components/home/Tarbar'
import Index from '@/views/home/index'
import Tags from '@/views/home/Tags'
Vue.use(Router)
export const RoutersMap = [
  {
    path: '/',
    component: HomeLayout,
    children: [{
      path: '/blog',
      component: Index,
      name: 'Index',
      meta: { title: 'index', icon: 'index', noCache: true }
    }, {
      path: '/archives',
      component: Tags,
      name: 'Index',
      meta: { title: 'index', icon: 'index', noCache: true }
    }, {
      path: '/tags',
      component: Tags,
      name: 'Index',
      meta: { title: 'index', icon: 'index', noCache: true }
    }]
  }
]
export default new Router({
  routes: RoutersMap
})
