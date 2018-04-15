import Vue from 'vue'
import Router from 'vue-router'
// 引入公共引入方法,就不需要在使用 import 导入组建了
const _import = require('./_import')
Vue.use(Router)
// 路由采用的是主路由配合子路由实现模块异步加载跳转
export const RoutersMap = [
  {
    // 子路由必须要在views层使用 <router-view></router-view> 来输出内容
    path: '/',
    component: _import('home/Layout'),
    redirect: 'blog',
    hidden: true,
    children: [{
      path: '/blog',
      component: _import('home/Index'),
      name: 'Index'
    }, {
      path: '/archives',
      component: _import('home/Tags'),
      name: 'Tags'
    }, {
      path: '/info',
      component: _import('home/Info'),
      name: 'Info'
    }]
  },
  {
    path: '/user/login',
    component: _import('user/login'),
    hidden: true
  },
  {
    path: '/new',
    component: _import('layout/Layout'),
    redirect: '/new/notes',
    children: [{
      path: 'notes',
      component: _import('user/Index'),
      name: 'Index_new',
      meta: { title: '最新笔记', icon: 'newnotes', noCache: true }
    }]
  }, {
    path: '/new',
    component: _import('layout/Layout'),
    redirect: '/new/xmind',
    children: [{
      path: 'xmind',
      component: _import('user/Index'),
      name: 'Index_xmind',
      meta: { title: '最新脑图', icon: 'newxmind', noCache: true }
    }]
  }, {
    path: '/user',
    redirect: '/user/index',
    component: _import('layout/Layout'),
    meta: {
      title: '我的笔记',
      icon: 'notes'
    },
    children: [{
      path: 'index',
      component: _import('user/Index'),
      name: 'Index_user',
      meta: { title: '个人笔记', icon: 'files', noCache: true }
    }, {
      path: 'index2',
      component: _import('user/Index'),
      name: 'Index2',
      meta: { title: '读书笔记', icon: 'files', noCache: true }
    }, {
      path: 'index3',
      component: _import('user/Index'),
      name: 'Index3',
      meta: { title: '公司文件', icon: 'files', noCache: true }
    }, {
      path: 'index4',
      component: _import('user/Index'),
      name: 'Index4',
      meta: { title: '学无止境', icon: 'files', noCache: true }
    }]
  }, {
    path: '/xmind',
    component: _import('layout/Layout'),
    meta: {
      title: '我的脑图',
      icon: 'xmind'
    },
    children: [{
      path: 'index',
      component: _import('user/xmind'),
      name: 'Index_nxmind',
      meta: { title: '个人规划', icon: 'files', noCache: true }
    }, {
      path: 'index2',
      component: _import('user/Index'),
      name: 'Index2',
      meta: { title: '教学专用', icon: 'files', noCache: true }
    }
    ]},
  {
    path: '/dels',
    component: _import('layout/Layout'),
    redirect: '/dels/dels_index',
    children: [{
      path: 'dels_index',
      component: _import('user/Index'),
      name: 'Index_dels',
      meta: { title: '回收站', icon: 'deled', noCache: true }
    }]
  }
]
export default new Router({
  routes: RoutersMap
})
