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
                <el-button style="width: 100%;" @click="submitForm('loginForm')" :loading="loading" type="primary" >登录</el-button>
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
import { mapGetters, mapActions } from 'vuex'
export default{
  name: 'login',
  data () {
    return {
      activeName: 'first', // 初始化Tab选项卡
      loading: false, // 按钮加载特效
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
  computed: {
    // 展开getters.js中的数据
    ...mapGetters([
      'loginToken'
    ])
  },
  methods: {
    // 展开store中的所有操作方法就是Action中的方法
    ...mapActions({
      comitLogin: 'login/comitLogin'
    }),
    // 用户切换Tab
    handleClick (tab, event) {
    // console.log(tab);
    },
    // 提交动作
    submitForm (formName) {
      // form 标签必须要有ref 属性,并且传递的值必须是 ref的值
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          // 提交请求接口
          this.comitLogin(this.loginForm).then(() => {
            this.$router.push({ path: '/user' })
          })
          this.loading = false
        } else {
          return false
        }
      })
    }

  }
}
</script>

<style lang="scss">
  @import './login.scss';
</style>
