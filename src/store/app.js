/**
 * Created by liumeng on 2018/3/8.
 */
import { getMenu } from '@/service/menu'
const app = {
  state: {
    token: '11'
  },
  mutations: {

  },
  actions: {
    getMenus ({ commit, state }) {
      const data = getMenu(state.token)
      data.then(function (result) { console.log(result) })
    }
  }
}
export default app
