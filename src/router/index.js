import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/archives',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tags',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
