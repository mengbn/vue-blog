// 批量导入操作方法
module.exports = file => () => import('@/views/' + file + '.vue')
