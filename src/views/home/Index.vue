<template>
  <div id="postsContainer">
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
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="noteTotal">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  created: function () {
    // 获取当前的url地址有没有分页信息
    this.$store.dispatch('noteList', this.currentPage)
    // 初始化首页数据
  },
  // 属性的使用方式,可以在模板中可以直接使用{{属性名称}} 获取
  computed: {
    // 展开getters.js中的数据
    ...mapGetters([
      'noteTotal'
    ])
  },
  methods: {
    handleSizeChange (val) {
      this.$store.dispatch('noteList', val).then(() => {
        this.$router.push({path: '/blog', query: {p: val}})
      })
    },
    handleCurrentChange (val) {
      this.$store.dispatch('noteList', val).then(() => {
        this.$router.push({path: '/blog', query: {p: val}})
      })
    }
  },
  data () {
    // 初始化分页数据并且支持刷新返回当前页面数据
    let page = 1
    if (this.$route.query.p) {
      page = parseInt(this.$route.query.p)
    }
    return {
      currentPage: page
    }
  }
}
</script>
<style>
  .block{
    padding: 0 15% 0 10%;
    padding-top: 10px
  }
</style>
