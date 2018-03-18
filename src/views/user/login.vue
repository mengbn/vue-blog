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
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="demo-ruleForm">
              <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="密码" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox-group v-model="loginForm.defautlog">
                  <el-checkbox label="下次免密码登录" name="defautlog"></el-checkbox>
                  <el-button style="float: right" type="text">忘记密码?</el-button>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button style="width: 100%;" @click="submitForm('loginForm')" type="primary" >登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="APP扫码登录" name="second">
            <el-card class="box-card">
              <img src="../../assets/qcode.png"/>
            </el-card>
          </el-tab-pane>
          <div class="otherLogin">
            其他登录方式:
            <el-button style="float: right" type="text">点击用户注册</el-button>
          </div>
        </el-tabs>
      </div>
    </div>
    <div class="footer">Copyright @ 2018互联网爱好者出品</div>
  </div>
</template>
<script>
export default{
  name: 'login',
  data () {
    return {
      activeName: 'first', // 初始化Tab选项卡
      loginForm: {
        username: '', // 用户名
        password: '', // 密码
        defautlog: []
      },
      // 设置表单验证规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 用户切换Tab
    handleClick (tab, event) {
    // console.log(tab);
    },
    // 提交动作
    submitForm (formName) {
      // form 标签必须要有ref 属性,并且传递的值必须是 ref的值
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 提交请求接口
          this.$store.dispatch('comitLogin', this.loginForm)
        } else {
          return false
        }
      })
    }

  }
}
</script>

<style>
  .box-card {
    width: 100%;
    height: 250px;;
  }
  .demo-ruleForm{
    height: 250px;
  }
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
    margin: 48px 0 24px;
    text-align: center;
  }
  .otherLogin {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;
  }

</style>
