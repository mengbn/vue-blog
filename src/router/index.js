import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/components/home/Tarbar'
import Index from '@/views/home/index'
import Tags from '@/views/home/Tags'
import Info from '@/views/home/Info'
Vue.use(Router)
export const RoutersMap = [
  {
    path: '/',
    component: HomeLayout,
    redirect: 'blog',
    children: [{
      path: '/blog',
      component: Index,
      name: 'Index'
    }, {
      path: '/archives',
      component: Tags,
      name: 'Tags'
    }, {
      path: '/tags',
      component: Tags,
      name: 'Tags'
    }, {
      path: '/info',
      component: Info,
      name: 'Info'
    }]
  }
]
export default new Router({
  routes: RoutersMap
})
