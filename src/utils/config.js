//在 mock 模式下的值是'/api/v1'
const APIURL = '/aip/v1'

module.exports = {
  name: '开源博客系统',
  prefix: 'blog',
  footerText: '博客系统  © 2017 猛犇科技',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: ['location'],
  openPages: ['/login'],
  APIURL,
  cookie_info:{
    domain:'location',
    expiredays:3600
  },
  api: {
    userLogin: `${APIURL}/login/index`,
  },

}
