/**
 * 文章列表内容 2018/3/14.
 */
import Mock from 'mockjs'
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
    return {
      total: List.length,
      data: List
    }
  }
}
