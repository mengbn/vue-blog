/**
 * Created by liumeng on 2018/3/12.
 */
import Mock from 'mockjs'
import Blog from './blog'
// 获取blog相关接口
Mock.mock('/mock/menus/index', 'post', Blog.getMenus())
export default Mock
