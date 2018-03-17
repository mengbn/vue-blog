<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="header">
          <router-link to="/">
          <img alt="logo" class="logo" src="https://www.vue-js.com/public/images/vue.png" />
          <span class="title">个人笔记</span>
          </router-link>
        </div>
        <div class="desc">笔记同步博客,开源分享</div>
      </div>
      <div class="main">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="帐号密码登录" name="first">
            <el-form class="demo-ruleForm">
              <el-form-item prop="username">
                <el-input placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item prop="username">
                <el-input type="password" placeholder="密码" auto-complete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-checkbox-group >
                  <el-checkbox v-model="checked" label="下次免登录" name="is_login"></el-checkbox>
                  <el-button style="float: right" type="text">忘记密码?</el-button>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button size="medium" type="primary" :loading="true">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="扫码登录" name="second">暂未开放</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="footer">底部现实内容</div>
  </div>
</template>
<script>
export default{
  name: 'login',
  data () {
    return {
      activeName: 'first',
      checked: true
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width:100%;
    background: #f0f2f5;
    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
  }
  .content {
    padding: 32px 0;
    flex: 1;
    padding: 112px 0 24px 0;
  }
  .top {
    text-align: center;
  }
  .header {
    height: 44px;
    line-height: 44px;
  }
  .logo {
    height: 44px;
    vertical-align: top;
    margin-right: 16px;
  }
  .title {
    font-size: 33px;
    color: rgba(0,0,0,.85);
    font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
  }
  .desc {
    font-size: 14px;
    color: rgba(0,0,0,.45);
    margin-top: 12px;
    margin-bottom: 40px;
  }
  .main{
    width: 368px;
    margin: 0 auto;
  }
  .footer{
    padding: 0 16px;
    margin: 48px 0 24px 0;
    text-align: center;
  }

</style>
