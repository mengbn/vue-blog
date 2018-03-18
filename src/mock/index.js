/**
 * Created by liumeng on 2018/3/12.
 */
import Mock from 'mockjs'
import Blog from './blog'
import Lists from './lists'
import User from './user'
// 获取blog相关接口
Mock.mock('/mock/menus/index', 'post', Blog.getMenus) // 获取菜单接口
Mock.mock('/mock/blog/site', 'post', Blog.getConfig) // 获取博客配置入口
Mock.mock(/\/mock\/blog\/note/, 'get', Lists.getList) // 获取博客配置入口,可以使用正则进行匹配拦截
Mock.mock(/\/mock\/blog\/detail/, 'get', Lists.getDetail) // 获取博客配置入口,可以使用正则进行匹配拦截
Mock.mock('/mock/user/login', 'post', User.login) // 用户登录
export default Mock
