/**
 * Created by liumeng on 2018/3/12.
 */
import Mock from 'mockjs'
import Blog from './blog'
// 获取blog相关接口
Mock.mock('/mock/menus/index', 'post', Blog.getMenus()) // 获取菜单接口
Mock.mock('/mock/blog/site', 'post', Blog.getConfig()) // 获取博客配置入口
export default Mock
