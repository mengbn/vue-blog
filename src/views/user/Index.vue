<template>
  <div class="dashboard-container">
    <notes-list></notes-list>
    <detail-container></detail-container>
  </div>
</template>
<script>
import notesList from './components/notesList'
import detailContainer from './components/detailContainer'
export default{
  name: 'Index',
  components: {
    notesList,
    detailContainer
  }
}
</script>

<style lang="scss">
.dashboard-container {
  height:100%;
}
</style>
