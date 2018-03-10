/**
 * Created by liumeng on 2018/3/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app
  }
})
export default store
