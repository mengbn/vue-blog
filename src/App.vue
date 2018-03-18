<template>
  <div class="root" id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
  *{
    padding:0;
    margin:0;
  }
  .root{
    height: 100%;
  }
</style>
