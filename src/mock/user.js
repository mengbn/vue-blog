/**
 * Created by liumeng on 2018/3/18.
 */
export default {
  login: () => {
    // 返回菜单数据
    return {
      code: 0,
      data: [],
      msg: '登录成功',
      url: 'javascript:history.back(-1);',
      wait: 3
    }
  }

}
