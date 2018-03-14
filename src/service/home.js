/**
 * 首页获取网站配置接口 2018/3/8.
 */
// 引入index.js总配置文件
import Index from 'utils'
// 然后展开里面的对象
const { config, request } = Index
const { api } = config
const { blogSite } = api
export function getSeting (params) {
  return request({
    url: blogSite,
    method: 'post',
    data: params
  })
}
