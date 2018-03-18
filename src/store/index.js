/**
 * Created by liumeng on 2018/3/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app' // 引入应用初始化 store
import notes from './home/notes' // 引入应用初始化 store
import login from './user/login' // 引入应用初始化 store
import getters from './getters' // 引入公共的state 数据
Vue.use(Vuex)
const store = new Vuex.Store({
  // 引入多个模型使用
  modules: {
    app,
    notes,
    login
  },
  getters // 追加到 vuex中去可以使用 ...mapGetters([]) 进行展开
})
export default store
