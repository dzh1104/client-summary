<style lang="scss" scoped>
.login-box {
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
}
</style>

<template>
<div class="login-box">
  <el-form label-width="80px" class="" size="medium" class="login-area">
    <el-form-item label="用户名">
      <el-input v-model="loginInfo.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="loginInfo.password" @keyup.enter.native="login"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import LoginApi from 'api/login';
export default {
  data() {
    return {
      loginInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      alert(1);
      let username = this.loginInfo.username;
      let password = this.loginInfo.password;
      LoginApi.login(username, password).then(res => {
        console.log('login', res);
      })
    }
  }
}
</script>


