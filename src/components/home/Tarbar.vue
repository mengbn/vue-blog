<template>
  <div>
  <div id="headerAndNav">
    <div id="headerContainer" class="container">
      <div id="header">
        <h1>
          <a href="javascript:void(0);" id="logo">

            <div class="blog-logo">
              <img src="http://leanote.com/public/upload/520/52d26b4e99c37b609a000001/images/logo/2e8a1c7fe014112ec803716da583e0aa.jpeg" title="Leanote官方博客">
            </div>

            <div>
              开源博客系统
            </div>
          </a>
        </h1>
        <div id="blogDesc">
          知识, 博客, 分享, 协作...
        </div>
      </div>
    </div>
    <div class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="javascript:void(0);">

            <img src="http://leanote.com/public/upload/520/52d26b4e99c37b609a000001/images/logo/2e8a1c7fe014112ec803716da583e0aa.jpeg" title="Leanote官方博客">
            开源博客系统
          </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li  v-for="item in menus" v-bind:key="item.id" @click="selected(item.route)" :class="{active: activePath==item.route}"><router-link :to="item.route">{{item.name}}</router-link></li>

          </ul>
          <form class="navbar-form navbar-right" id="search" onsubmit="search(event);return false;">
            <div class="input-group">
              <span class="input-group-addon" id="searchIcon" onclick="search(event);"><i class="fa fa-search"></i></span>
              <input type="text" placeholder="search" id="searchInput" class="form-control" value="">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import { mapGetters } from 'vuex'
export default {
  name: 'Tarbar',
  // created 这个钩子在实例被创建之后被调用
  created: function () {
    // 初始化博客菜单数据,直接调用store/app.js 中 actions为:getMenus 的方法
    this.$store.dispatch('getMenus')
  },
  // 属性的使用方式,可以在模板中可以直接使用{{属性名称}} 获取
  computed: {
    // 展开getters.js中的数据
    ...mapGetters([
      'menus'
    ])
  },
  // 用来做view层的临时变量使用
  data () {
    let route = this.$route // 获取路由内容
    return {
      activePath: route.path // 初始化默认选中
    }
  },
  // 方法调用的方式,可以在模板中使用时间来调用方法,然会就会执行方法@click="方法名"
  methods: {
    /*
    * 例如
    getMenus: function () {
      console.log(this.menus)
    }
    */
    selected: function (getPath) {
      this.activePath = getPath // 获取当前用户点击的path
    }
  },
  // 模板渲染成功后自动调用,只调用一次,使用router-link 进行跳转的时候不会执行该方法
  mounted () {
  },
  // 页面发生变化会引起一系列的变化会自动调用该函数【监听器】
  watch: {
    $route (route) {
      console.log(route)
    }
  }
}
</script>
<style>
  html {
    overflow-x: hidden;
  }
  #posts img {
    max-width: 100%;
    /*margin: 0 auto;*/
    /*display: block;*/
  }
  #content *, .desc * {
    font-size: 14px;
    line-height: 1.7em;
  }
  .desc pre * {
    font-size: 14px;
    /*line-height: 24px;*/
  }
  #content h1, .desc h1 {
    font-size: 24px;
  }
  #content h2, .desc h2 {
    font-size: 20px;
  }
  #content h3, .desc h3 {
    font-size: 18px;
  }
  #content h4, .desc h4 {
    font-size: 16px;
  }
  blockquote {
    border-color: #BF1827!important;
  }
  code {
    background-color: #e8f2fb!important;
    border: 1px solid #c9e1f6;
    border-radius: 3px!important;
    color: #000;
  }
  pre.prettyprint {
    background-color: #e8f2fb!important;
    border-color: #c9e1f6!important;
  }
  .input-group {
    border: 1px solid #fff;
    border-radius: 4px;
  }
  .input-group-addon {
    background: none;
  }
  .input-group-addon > .fa {
    color: #fff;
  }
  #searchInput {
    border: none;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #ccc;
  }
  .input-group-addon {
    border: none;
  }
  @-webkit-keyframes dropdown {
    0% {
      margin-top: -25px;
      opacity: 0;
    }
    90% {
      margin-top: 2px;
    }
    100% {
      margin-top: 0;
      opacity: 1;
    }
  }
  @-moz-keyframes dropdown {
    0% {
      margin-top: -25px;
      opacity: 0;
    }
    90% {
      margin-top: 2px;
    }
    100% {
      margin-top: 0;
      opacity: 1;
    }
  }
  @-ms-keyframes dropdown {
    0% {
      margin-top: -25px;
      opacity: 0;
    }
    90% {
      margin-top: 2px;
    }
    100% {
      margin-top: 0;
      opacity: 1;
    }
  }
  @keyframes dropdown {
    0% {
      margin-top: -25px;
      opacity: 0;
    }
    90% {
      margin-top: 2px;
    }
    100% {
      margin-top: 0;
      opacity: 1;
    }
  }
  @-webkit-keyframes pulldown {
    0% {
      top: 0;
      opacity: 0;
    }
    90% {
      top: 90%;
    }
    100% {
      top: 100%;
      opacity: 1;
    }
  }
  @-moz-keyframes pulldown {
    0% {
      top: 0;
      opacity: 0;
    }
    90% {
      top: 90%;
    }
    100% {
      top: 100%;
      opacity: 1;
    }
  }
  @-ms-keyframes pulldown {
    0% {
      top: 0;
      opacity: 0;
    }
    90% {
      top: 90%;
    }
    100% {
      top: 100%;
      opacity: 1;
    }
  }
  @keyframes pulldown {
    0% {
      top: 0;
      opacity: 0;
    }
    90% {
      top: 90%;
    }
    100% {
      top: 100%;
      opacity: 1;
    }
  }
  a,
  .btn {
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .btn:focus {
    outline: none;
  }
  ul.dropdown-menu {
    box-shadow: rgba(0, 0, 0, 0.172549) 0px 6px 12px 0px;
  }
  ul.dropdown-menu:before {
    content: "";
    width: 20px;
    height: 12px;
    position: absolute;
    top: -12px;
    right: 20px;
    background-image: url("../../assets/logo.png");
    background-size: 20px 12px;
  }
  ul.dropdown-menu {
    display: block;
    visibility: hidden;
    opacity: 0;
  }
  .open ul.dropdown-menu {
    -webkit-animation: pulldown .2s;
    animation: pulldown .2s;
    visibility: visible;
    opacity: 1;
  }
  .created-time .fa {
    color: #c7c7c7;
  }
  #blogNav {
    display: none;
    background-color: rgba(0,0,0,0.5);
    opacity: 0.7;
    position: fixed;
    z-index: 10;
    padding: 3px;
    border-radius: 3px;
    padding: 10px;
  }
  #blogNavContent {
    overflow-y: auto;
    max-height: 250px;
    display: none;
    -webkit-overflow-scrolling: touch !important;
  }
  #blogNavContent li {
    color: #fff;
  }
  #blogNavNav {
    cursor: pointer;
    color: #fff;
  }
  #blogNavNav .fa {
    color: #fff;
  }
  #blogNav a {
    color: #ddd;
  }
  #blogNav:hover {
    opacity: 0.9;
  }
  #blogNav a:hover {
    color: #fff;
    font-size: 14px;
  }
  #blogNav ul {
    padding-left: 20px;
  }
  #blogNav ul .nav-h2 {
    margin-left: 20px;
  }
  #blogNav ul .nav-h3 {
    margin-left: 30px;
  }
  #blogNav ul .nav-h4 {
    margin-left: 40px;
  }
  #blogNav ul .nav-h5 {
    margin-left: 50px;
  }
  .mobile-created-time {
    display: none;
  }
  #footer {
    padding-bottom: 10px;
    margin: auto !important;
  }
  .navbar-brand {
    display: none;
  }
  #themeList label {
    text-align: center;
    margin-bottom: 5px;
  }
  #themeList .preview {
    display: block;
    width: 400px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
  }

  /*"HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue", Helvetica, "Microsoft Yahei", Verdana, Simsun, "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",  "BBAlpha Sans", "S60 Sans", Arial, sans-serif;*/
  ::selection {
    background: #000000;
    color: #ffffff;
  }
  ::-moz-selection {
    background: #000000;
    color: #ffffff;
  }
  ::-webkit-selection {
    background: #000000;
    color: #ffffff;
  }
  *,
  body {
    /*font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;*/
    font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-weight: 300;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  h1,
  h2,
  h3 {
    font-family: 'Open Sans', 'Helvetica Neue', Arial, 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif;
    font-weight: 300 !important;
  }
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: none !important;
  }
  .nav > li {
    text-align: center;
  }
  #headerAndNav {
    position: fixed!important;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    width: 30%;
    height: 100%;
    max-width: 700px;
    border-right: 1px solid #ebeff2;
    text-align: right;
    -webkit-box-shadow: -1px 1px 6px rgba(0,0,0,0.35);
    -moz-box-shadow: -1px 1px 6px rgba(0,0,0,0.35);
    box-shadow: -1px 1px 6px rgba(0,0,0,0.35);
    background: url(../../assets/logo.png) top left no-repeat #666666;
    background-size: cover;
  }
  #headerContainer {
    width: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
  }
  #headerContainer {
    /*background-color: #fff;*/
  }
  #postsContainer {
    margin-left: 31%;
  }

  #postsContainer .container,
  #footerContainer .container {
    width: 800px;
  }
  #postsContainer .container {
    margin-left: 12px;
  }
  /* header */
  #header {
    color: #000000;
    padding: 0 0 20px 0;
    margin-top: 30px;
  }
  #header h1 {
    margin: 0;
    font-size: 24px;
  }
  #header h1 a {
    color: #000000;
    font-size: 24px;
    text-align: center;
    display: block;
    letter-spacing: 2px;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  }
  #header h1 .blog-logo {
    height: 95px;
    width: 95px;
    line-height: 90px;
    margin: auto;
  }
  #header h1 .blog-logo img {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #fff;
    display: inline-block;
  }
  #header h1 a div {
    font-size: 30px;
    margin-top: 10px;
    font-weight: 400;
    color: #fff;
    padding: 2px 0;
    letter-spacing: 2px;
    font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }
  #header #blogDesc {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bbbbbb;
    font-size: 18px;
    color: #fff;
    line-height: 1.7em;
  }
  #logo {
    word-wrap: break-word;
    overflow: hidden;
  }
  .navbar {
    margin-bottom: 0;
    border-radius: 0;
    border: none;
  }
  .navbar .container {
    width: 300px;
    height: 100%;
    /*overflow-y: scroll;*/
  }
  .navbar-default {
    /*background: none;*/
    border-color: #e7e7e7;
    background: rgba(0, 0, 0, 0.2);
    /*height: calc(100% - 350px);*/
    padding-bottom: 30px;
  }
  .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }
  .navbar-form {
    padding: 0;
  }
  .navbar-nav {
    float: none;
  }
  .navbar-nav > li {
    float: none;
  }
  .navbar-default .navbar-nav > .active > a,
  .navbar-default .navbar-nav > .active > a:hover,
  .navbar-default .navbar-nav > .active > a:focus {
    font-weight: bold;
    background: none;
    color: #fff!important;
    font-size: 20px;
  }
  .navbar-nav > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    color: #ccc;
  }
  .navbar-default .navbar-nav > li > a {
    color: #ddd!important;
  }
  .navbar-default .navbar-nav > li > a:hover {
    color: #fff!important;
    font-size: 20px;
  }
  /* posts */
  #posts {
    width: 100%;
  }
  #posts .each-post {
    /*border-bottom: 2px solid #dddddd;*/
    margin-bottom: 10px;
    padding: 0 15% 0 10%;
    padding-top: 10px;
  }
  #posts .each-post::after {
    content: '';
    height: 30px;
    width: 35%;
    border-bottom: 1px solid #dddddd;
    display: block;

  }
  #posts .each-post .title {
    font-size: 24px;
    /*color: #0fb264;*/
    /*font-weight: bold;*/
    padding: 10px 0 15px 0;
  }
  #posts .each-post .title a:hover {
    color: #7b0f19;
  }
  #posts .each-post .title a {
    font-size: 24px;
    /*font-weight: bold;*/
    color: #333333;
    padding: 10px 0 15px 0;
  }
  #posts .each-post .created-time {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  #posts .each-post .more {
    /*background: #000;*/
    padding: 5px 10px;
    border-radius: 15px;
    line-height: 1;
    font-size: 13px;
    display: inline-block;
    text-transform: uppercase;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #BF1827;
    border: 1px solid #BF1827;
  }
  #posts .each-post .more:hover {
    color: #7b0f19;
    border: 1px solid #7b0f19;
  }
  #disqus_thread {
    border-top: 1px solid #eee;
    padding: 5px 0 0 0;
  }
  #search {
    width: 170px;
    padding-right: 15px;
    margin-top: 30px;
  }
  #footerContainer {
    background-color: #3f3f3f;
    color: #fff;
    margin-left: -10px;
    padding: 0;
    padding-left: 30%;
  }
  #footerContainer #footer a {
    color: #fff;
  }
  #footerContainer #footer ul {
    list-style: none;
    margin: 0;
    padding-left: 20px;
  }
  .tab-content {
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeff2;
  }
  .mce-btn {
    background: none !important;
  }
  @media screen and (max-width: 600px) {
    html,
    body {
      overflow-x: hidden;
      background-color: #fbfcf7;
    }
    * {
      font-size: 14px;
    }
    #headerContainer{
      background-color: rgba(51, 51, 51, 0.98);
      margin: 10px 0;
    }
    #footerContainer {
      margin: 10px 0;
      background-color: rgba(0, 0, 0, 0);
      padding-left: 0;
    }
    #posts .each-post,
    #postsContainer {
      /*background-color:  rgba(51, 51, 51, 0.98) !important;*/
    }
    img {
      max-width: 100%;
    }
    #posts .each-post {
      padding: 10px;
    }
    #posts .each-post .title {
      font-size: 30px;
      /*border-left: 5px solid #65bd77;*/
      font-weight: normal;
      padding: 5px 0;
      padding-left: 10px;
      margin-bottom: 10px;
    }
    blockquote {
      /*border-color: rgba(0, 0, 0, 0)!important;*/
      border-left: 2px solid #BF1827;
      font-size: 14px!important;
    }
    .navbar-header {
      /*background-color: rgba(51, 51, 51, 0.98)!important;*/
      background-color: rgba(0, 0, 0, 0.5);
    }
    .container {
      padding-right: 10px;
      padding-left: 10px;
    }
    .created-time {
      display: none;
    }
    .mobile-created-time {
      display: block;
    }
    .mobile-created-time #userLogo {
      display: inline-block;
      max-height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    #content {
      margin-top: 10px;
    }
    .right-section .dropdown,
    .right-section .btn {
      display: none !important;
    }
    #blogNav {
      left: initial !important;
      right: 10px !important;
      /*top: 210px!important;*/
      /*background-color: rgba(0,0,0,0.98);*/
      background: #BF1827;
    }
    #postsContainer .container,
    #footerContainer .container {
      max-width: 100%;
    }
    #postsContainer {
      margin: 0 !important;
      max-width: 100%;
      padding: 10px;

    }
    #posts {
      max-width: 100% !important;
    }
    #footerContainer #footer a {
      padding: 3px;
    }
    #footerContainer #footer a:hover,
    #footerContainer #footer a:focus {
      color: #65bd77;
    }
    #headerAndNav {
      /*position: fixed!important;*/
      position: static!important;
      text-align: left;
      width: 100%;
      /*height: 200px;*/
      border-bottom: 2px dashed #ebeff2;
    }
    #headerAndNav #headerContainer {
      width: 100%;
      height: auto;
      padding-top: 30px;
    }
    #headerAndNav #header {
      margin: 0;
      padding: 0;
      background: rgba(0, 0, 0, 0.2);
    }
    #headerAndNav #header h1 {
      display: none;
    }
    #headerAndNav .navbar-collapse {
      overflow-x: hidden;
      background: rgba(20, 20, 20, 0.98);
    }
    #headerAndNav #blogDesc {
      border: none;
      margin-top: 20px;
      font-size: 18px;
    }
    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {
      background-color: #fff;
      color: #222;
    }
    #headerAndNav .navbar-brand {
      display: inline-block;
      line-height: 50px;
      padding: 0;
      padding-left: 10px;
      color: #fff;
    }
    #headerAndNav .navbar-brand img {
      height: 40px;
      border: 2px solid #fff;
      display: inline-block;
      border-radius: 50%;
      width: 40px;
      overflow: hidden;
      background: #fff;
    }
    #headerAndNav .navbar .container {
      width: auto;
      padding: 0 15px;
    }
    #headerAndNav .navbar {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      /*background: #fbfcf7;*/
      z-index: 1000;
      border-bottom: 1px solid #000;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), inset 0 1px 0 #000000;
      /*background-color: rgba(51, 51, 51, 0.98);*/
      background-color: rgba(0, 0, 0, 0.2);
      padding-bottom: 0px!important;
    }
    #headerAndNav .navbar-nav {
      margin: 0 10px;
    }
    #headerAndNav .navbar-nav a {
      padding-left: 10px;
      border-radius: 5px;
    }
    #headerAndNav #search {
      width: 100%;
      margin: 10px;
    }
    #headerAndNav .navbar-form {
      border: none;
    }
    #myTab,
    .tab-content {
      padding: 0 10px;
    }

    #footerContainer,
    #footerContainer #footer a {
      color: #000;
    }

    #headerContainer {
      background: transparent;
    }

  }
  .desc strong {
    font-weight: bold;

  }
  .desc {
    color: #666666;
  }
  .desc *, #content * {
    word-wrap: break-word;
  }

  /* 琛ㄦ牸 */

  table {
    margin-bottom: 16px;
  }
  table th, table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }
  table th {
    font-weight: bold;
  }

  table tr {
    background-color: none;
    border-top: 1px solid #ccc;
  }
  table tr:nth-child(2n) {
    background-color: rgb(247, 247, 249);
  }
  .mce-item-table, .mce-item-table td, .mce-item-table th, .mce-item-table caption {
    border: 1px solid #ddd;
    border-collapse: collapse;
    padding: 6px 13px;
  }
  .footer-leanote {
    text-align: center;
    padding: 5px 0;
    font-size: 12px;
  }
</style>
