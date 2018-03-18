/**
 * 首页获取网站配置接口 2018/3/8.
 */
// 引入index.js总配置文件
import Index from 'utils'
// 然后展开里面的对象
const { config, request } = Index
const { api } = config
const { login } = api
export function userLogin (params) {
  return request({
    url: login,
    method: 'post',
    data: params
  })
}
