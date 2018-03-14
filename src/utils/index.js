/**
 * Created by liumeng on 2018/3/10.
 */
import config from './config'
import request from './request'
// 在webpack 2中不允许混用 import 和 module.exports 所以使用 export default 即可
export default {
  config,
  request
}
// 将URL转换成 json 对象好展开使用
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}
