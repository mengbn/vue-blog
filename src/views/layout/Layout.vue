<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
        <navbar></navbar>
        <tags-view></tags-view>
        <app-main></app-main>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/index.scss' // global css
import { Navbar, Sidebar, TagsView, AppMain } from './components'
export default {
  name: 'layout',
  components: {
    Sidebar,
    TagsView,
    AppMain,
    Navbar
  },
  computed: {
    sidebar () {
      return this.$store.state.users.sidebar
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
