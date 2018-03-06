<template>

  <div id="posts">
    <div class="each-post">
      <div class="title">
        <router-link to="/info">
          Leanote Desktop v2.6 released 蚂蚁笔记桌面端2.6发布
        </router-link>
      </div>
      <div class="created-time">
        <i class="fa fa-clock-o"></i> 2017-12-01 12:08:14
        &nbsp;&nbsp;
        <span class="fa fa-eye"></span> 2739
        &nbsp;&nbsp;
        <span class="fa fa-thumbs-o-up"></span> 1
        &nbsp;&nbsp;
        <span class="fa fa-comments-o"></span> 13
      </div>
      <div class="desc">
        <p>蚂蚁笔记桌面端2.6发布.</p><p>修复的问题:</p><ul><li>富文本编辑器查找替换高亮问题</li><li>启动有可能一直停留在Loading界面问题</li></ul><p>v2.4及以上版本可线上更新</p><p>下载地址:&nbsp;<a href="http://app.leanote.com/" data-mce-href="http://app.leanote.com">http://app.leanote.com</a></p>
      </div>
      <div id="moreContainer">
        <a class="more" href="http://leanote.leanote.com/post/Leanote-Desktop-v2.6-released" title="全文">查看</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
