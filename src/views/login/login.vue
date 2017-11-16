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
      <el-input v-model="loginInfo.password"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        username: '',
        password: ''
      }
    }
  }
}
</script>


