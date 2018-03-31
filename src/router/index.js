import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '@/views/home/Layout'
import Index from '@/views/home/index'
import Tags from '@/views/home/Tags'
import Info from '@/views/home/Info'
import Login from '@/views/user/login'
import UserLayout from '@/views/layout/Layout'
import UserIndex from '@/views/user/Index'
import UserXmind from '@/views/user/xmind'
Vue.use(Router)
// 路由采用的是主路由配合子路由实现模块异步加载跳转
export const RoutersMap = [
  {
    // 子路由必须要在views层使用 <router-view></router-view> 来输出内容
    path: '/',
    component: HomeLayout,
    redirect: 'blog',
    hidden: true,
    children: [{
      path: '/blog',
      component: Index,
      name: 'Index'
    }, {
      path: '/archives',
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
    component: Login,
    hidden: true
  },
  {
    path: '/new',
    component: UserLayout,
    redirect: '/new/notes',
    children: [{
      path: 'notes',
      component: UserIndex,
      name: 'Index_new',
      meta: { title: '最新笔记', icon: 'newnotes', noCache: true }
    }]
  }, {
    path: '/new',
    component: UserLayout,
    redirect: '/new/xmind',
    children: [{
      path: 'xmind',
      component: UserIndex,
      name: 'Index_xmind',
      meta: { title: '最新脑图', icon: 'newxmind', noCache: true }
    }]
  }, {
    path: '/user',
    component: UserLayout,
    meta: {
      title: '我的笔记',
      icon: 'notes'
    },
    children: [{
      path: 'index',
      component: UserIndex,
      name: 'Index_user',
      meta: { title: '个人笔记', icon: 'files', noCache: true }
    }, {
      path: 'index2',
      component: UserIndex,
      name: 'Index2',
      meta: { title: '读书笔记', icon: 'files', noCache: true }
    }, {
      path: 'index3',
      component: UserIndex,
      name: 'Index3',
      meta: { title: '公司文件', icon: 'files', noCache: true }
    }, {
      path: 'index4',
      component: UserIndex,
      name: 'Index4',
      meta: { title: '学无止境', icon: 'files', noCache: true }
    }]
  }, {
    path: '/xmind',
    component: UserLayout,
    meta: {
      title: '我的脑图',
      icon: 'xmind'
    },
    children: [{
      path: 'index',
      component: UserXmind,
      name: 'Index_nxmind',
      meta: { title: '个人规划', icon: 'files', noCache: true }
    }, {
      path: 'index2',
      component: UserIndex,
      name: 'Index2',
      meta: { title: '教学专用', icon: 'files', noCache: true }
    }
    ]},
  {
    path: '/dels',
    component: UserLayout,
    redirect: '/dels/dels_index',
    children: [{
      path: 'dels_index',
      component: UserIndex,
      name: 'Index_dels',
      meta: { title: '回收站', icon: 'deled', noCache: true }
    }]
  }
]
export default new Router({
  routes: RoutersMap
})
