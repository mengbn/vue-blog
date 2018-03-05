<template>
  <div id="app">
    <Container>
      <Aside width="200px">Aside</Aside>
      <Main>haha</Main>
    </Container>
  </div>
</template>

<script>
import { Container, Aside, Main } from 'element-ui'
export default {
  name: 'App',
  components: {
    Container,
    Aside,
    Main
  }
}
</script>
<style>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
