/**
 * Created by liumeng on 2018/3/8.
 */
// 引入index.js总配置文件
import Index from 'utils'
// 然后展开里面的对象
const { config, request } = Index
const { api } = config
const { menus } = api
export function getMenu (params) {
  return request({
    url: menus,
    method: 'post',
    data: params
  })
}
