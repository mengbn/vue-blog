/**
 * Created by liumeng on 2018/3/14.
 * 笔记首页列表
 */
import { getLists, getDetail } from '@/service/notes' // 引入接口
const notes = {
  state: {
    lists: [], // 接口获取的数据
    total: 0, // 总页数
    detail: '' // 获取笔记详情内容
  },
  mutations: {
    // 设置总的数量
    SET_TOTAL: (state, param) => {
      state.total = param
    },
    // 设置lists数据
    SET_LISTS: (state, param) => {
      state.lists = param
    },
    // 设置lists数据
    SET_DETAIL: (state, param) => {
      state.detail = param
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
    },
    // 获取博客详细内容方法
    noteDetail ({ commit, state }, id) {
      let data = getDetail({ 'id': id })
      data.then(function (result) {
        console.log(result.data)
        commit('SET_DETAIL', result.data)
      })
    }
  }
}
export default notes
