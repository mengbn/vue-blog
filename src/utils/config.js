// 在 mock 模式下的值是'/api/v1'
const APIURL = '/mock'
module.exports = {
  name: '开源博客系统',
  prefix: 'blog',
  footerText: '博客系统  © 2017',
  logo: '/logo.png',
  CORS: ['location'],
  openPages: ['/login'],
  APIURL,
  cookie_info: {
    domain: 'location',
    expiredays: 3600
  },
  api: {
    menus: `${APIURL}/menus/index`,
    blogSite: `${APIURL}/blog/site`,
    notes: `${APIURL}/blog/note`,
    notesDetail: `${APIURL}/blog/detail`
  }
}
