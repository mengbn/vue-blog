import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/components/home/Tarbar'
import Index from '@/views/home/index'
import Tags from '@/views/home/Tags'
import Info from '@/views/home/Info'
import Login from '@/views/user/login'
import UserLayout from '@/components/user/Layout'
import UserIndex from '@/views/user/Index'
Vue.use(Router)
// 路由采用的是主路由配合子路由实现模块异步加载跳转
export const RoutersMap = [
  {
    // 子路由必须要在views层使用 <router-view></router-view> 来输出内容
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
  },
  {
    path: '/user/login',
    component: Login
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/index',
    children: [{
      path: '/user/index',
      component: UserIndex,
      name: 'Index'
    }]
  }
]
export default new Router({
  routes: RoutersMap
})
