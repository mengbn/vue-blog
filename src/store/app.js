/**
 * 这是一个标准的vuex使用实例方法,整体项目全局应用 on 2018/3/8.
 */
import { getMenu } from '@/service/menu' // 引入接口
import { getSeting } from '@/service/home' // 引入博客初始化接口
import { getToken } from '@/utils/auth'
const app = {
  // state 用来储存数据或者是状态的
  state: {
    token: getToken(),
    menus: [],
    uid: 1,
    siteInfo: ''
  },
  // mutations 用来管理设置state里面的值的
  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus
    },
    SET_SETING: (state, info) => {
      state.siteInfo = info
    }
  },
  // 和数据后台打交道的,也可以直接调用的
  actions: {
    // 获取博客菜单方法
    getMenus ({ commit, state }) {
      let data = getMenu(state.token) // 调用接口中的方法
      data.then(function (result) {
        commit('SET_MENUS', result.data) // 将获取的值储存到state中去然后在view中可以直接使用
      })
    },
    // 获取博客配置信息方法
    blogInfo ({ commit, state }) {
      let data = getSeting(state.uid)
      data.then(function (result) {
        commit('SET_SETING', result.data) // 将获取的值储存到state中去然后在view中可以直接使用
      })
    }
  }
}
export default app
