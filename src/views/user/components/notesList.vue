<template>
  <section class="todoapp">
  <section class="main">
    <ul class="todo-list">
      <li class="todo selected">
        <div class="view"><span><svg-icon icon-class="noteslogo"></svg-icon></span><div class="title">标题名称</div></div>
        <div class="contents">中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容</div>
        <div class="foots"><span class="date-size">2018-09-23</span><span class="file-size">50.5KB</span></div>
      </li>
      <li class="todo">
        <div class="view"><span><svg-icon icon-class="noteslogo"></svg-icon></span><div class="title">标题名称</div></div>
        <div class="contents">中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容</div>
        <div class="foots"><span class="date-size">2018-09-23</span><span class="file-size">50.5KB</span></div>
      </li>
      <li class="todo">
        <div class="view"><span><svg-icon icon-class="noteslogo"></svg-icon></span><div class="title">标题名称</div></div>
        <div class="contents">中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容中间的内容</div>
        <div class="foots"><span class="date-size">2018-09-23</span><span class="file-size">50.5KB</span></div>
      </li>
    </ul>
  </section>
    <footer class="footer">
      <span class="todo-count">总共10项</span>
    </footer>
  </section>
</template>
<script>
export default{
  name: 'notesList',
  created: function () {
    console.log(1)
  }
}
</script>
<style lang="scss">
  @import './index.scss';
</style>
