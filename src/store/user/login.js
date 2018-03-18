/**
 * Created by liumeng on 2018/3/18.
 * 获取登录用户
 *
 */
import { userLogin } from '@/service/user' // 引入接口
import { Message } from 'element-ui'
import { getToken, setToken } from '@/utils/auth'
const login = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    comitLogin ({ commit, state }, datas) {
      let data = userLogin(datas)
      data.then(function (result) {
        console.log(result)
        if (result.code > 0) {
          Message({
            message: result.msg,
            type: 'error',
            duration: 5 * 1000
          })
          return false
        }
        // 设置当前用的Token
        commit('SET_TOKEN', result.data.token)
        setToken(result.data.token)
        Message({
          message: result.msg,
          type: 'success',
          duration: 5 * 1000
        })
        // 进行路由跳转
        return true
      })
    }
  }
}
export default login
