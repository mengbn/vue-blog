/**
 * Created by liumeng on 2018/3/14.
 * 笔记首页列表
 */
import { getLists } from '@/service/notes' // 引入接口
const notes = {
  state: {
    lists: [], // 接口获取的数据
    total: 0 // 总页数
  },
  mutations: {
    // 设置总的数量
    SET_TOTAL: (state, param) => {
      state.total = param
    },
    // 设置lists数据
    SET_LISTS: (state, param) => {
      state.lists = param
    }
  },
  actions: {
    // 获取博客列表数据方法
    noteList ({ commit, state }, page) {
      let data = getLists({ 'p': page })
      data.then(function (result) {
        commit('SET_LISTS', result.data)
        commit('SET_TOTAL', result.total)
      })
    }
  }
}
export default notes
