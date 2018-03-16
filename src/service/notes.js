/**
 * Created by liumeng on 2018/3/14.
 * 博客文章接口
 */
import Index from 'utils'
const { config, request } = Index
const { api } = config
const { notes, notesDetail } = api
export function getLists (params) {
  return request({
    url: notes,
    method: 'get',
    data: params
  })
}
export function getDetail (params) {
  return request({
    url: notesDetail,
    method: 'get',
    data: params
  })
}
