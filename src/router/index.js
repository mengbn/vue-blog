import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Info from '@/components/Info'
import Tags from '@/components/Tags'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/archives',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
