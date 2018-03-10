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
      getMenu(state.token)
    }
  }
}
export default app
