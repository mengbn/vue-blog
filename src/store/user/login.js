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
      // 使用ec6语法中的 promise 进行链式操作
      return new Promise((resolve, reject) => {
        userLogin(datas).then(result => {
          if (result.code === 0) {
            // 设置当前用的Token
            commit('SET_TOKEN', result.data.token)
            setToken(result.data.token)
            Message({
              message: result.msg,
              type: 'success',
              duration: 5 * 1000
            })
            // 成功返回 resolve() ,然后可以使用.then 获取结果
            resolve()
          } else {
            Message({
              message: result.msg,
              type: 'error',
              duration: 5 * 1000
            })
          }
        }).catch(error => {
          // 失败返回 reject(),则.then中的代码不会被执行
          reject(error)
        })
      })
    }
  }
}
export default login
