/**
 * 文章列表内容 2018/3/14.
 */
import Mock from 'mockjs'
import { param2Obj } from '@/utils'
const List = []
const count = 100
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }))
}
export default {
  getList: config => {
    let url = param2Obj(config.url)
    let { p = 1, limit = 10 } = url
    const pageList = List.filter((item, index) => index < limit * p && index >= limit * (p - 1))
    // 进行数据分页
    return {
      total: List.length,
      data: pageList
    }
  }
}
