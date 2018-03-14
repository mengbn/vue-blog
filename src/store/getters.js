/**
 * 整个项目公用数据从state中抽提出来.
 */
const getters = {
  // 初始化的博客菜单数据 使用state.模型名.属性名称
  menus: state => state.app.menus,
  // 全局用来判断用户是否登录
  token: state => state.app.token,
  // 博客初始化数据
  info: state => state.app.siteInfo
}
export default getters
