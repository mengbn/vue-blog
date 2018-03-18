/**
 * Created by liumeng on 2018/3/18.
 * 获取登录用户
 *
 */
import { userLogin } from '@/service/user' // 引入接口
const login = {
  state: {
  },
  actions: {
    comitLogin ({ commit, state }, datas) {
      console.log(datas)
      let data = userLogin(datas)
      data.then(function (result) {
        console.log(result)
      })
    }
  }
}
export default login
