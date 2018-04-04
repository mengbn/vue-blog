<template>
  <div id="postsContainer">
  <div id="posts">

    <div v-for="items in noteList" v-bind:key="items.id" class="each-post">
      <div class="title">
        <router-link :to="{path:'/info',query:{id:items.id}}">
          {{items.title}}
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
       简单的内容说明可以使用html布局现实代码
      </div>
      <div id="moreContainer">
        <router-link class="more" :to="{path:'/info',query:{id:items.id}}">查看</router-link>
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
      'noteTotal',
      'noteList'
    ])
  },
  methods: {
    // 当用户直接输入跳转页面的时候执行
    handleSizeChange (val) {
      this.$store.dispatch('noteList', val).then(() => {
        this.$router.push({path: '/blog', query: {p: val}})
      })
    },
    // 当用户点击下一页的时候出发该方法
    handleCurrentChange (val) {
      this.$store.dispatch('noteList', val).then(() => {
        this.$router.push({path: '/blog', query: {p: val}})
      })
    }
  },
  // 给当前组件赋值所用的所有数据
  data () {
    // 初始化分页数据并且支持刷新返回当前页面数据
    let page = 1
    if (this.$route.query.p) {
      page = parseInt(this.$route.query.p)
    }
    return {
      currentPage: page
    }
  },
  // 所有操作完成后执行,并且回到页面最顶部
  updated () {
    window.scroll(0, 0)
  }
}
</script>
<style>
  .block{
    padding: 0 15% 0 10%;
    padding-top: 10px
  }
</style>
