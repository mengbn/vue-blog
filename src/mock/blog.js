/**
 * Created by liumeng on 2018/3/12.
 */
export default {
  getMenus: () => {
    // 返回菜单数据
    return {
      code: 0,
      data: [{id: 1, name: '首页', route: '/blog'}, {id: 2, name: '归档', route: '/archives'}, {id: 3, name: '标签', route: '/blog'}],
      msg: '密码错误',
      url: 'javascript:history.back(-1);',
      wait: 3
    }
  }
}
