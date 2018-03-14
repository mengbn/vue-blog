/**
 * Created by liumeng on 2018/3/12.
 */
export default {
  getMenus: () => {
    // 返回菜单数据
    return {
      code: 0,
      data: [{id: 1, name: '首页', route: '/blog'}, {id: 2, name: '归档', route: '/archives'}, {id: 3, name: '标签', route: '/tags'}],
      msg: '密码错误',
      url: 'javascript:history.back(-1);',
      wait: 3
    }
  },
  getConfig: () => {
    // 返回博客配置信息
    return {
      code: 0,
      data: {title: '开源博客系统', content: '知识,博客,分享,协作...', logo: 'https://www.vue-js.com/public/images/vue.png'},
      msg: '操作成功',
      url: 'javascript:history.back(-1);',
      wait: 3
    }
  }

}
