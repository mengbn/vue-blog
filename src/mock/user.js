/**
 * Created by liumeng on 2018/3/18.
 */
export default {
  login: config => {
    const { username } = JSON.parse(config.body)
    if (username === 'admin') {
      // 返回菜单数据
      return {
        code: 0,
        data: {token: 'admin'},
        msg: '登录成功',
        url: 'javascript:history.back(-1);',
        wait: 3
      }
    } else {
      return {
        code: 3,
        data: [],
        msg: '用户名或密码错误',
        url: 'javascript:history.back(-1);',
        wait: 3
      }
    }
  }

}
