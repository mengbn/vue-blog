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
