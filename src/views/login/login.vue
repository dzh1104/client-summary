<style lang="scss">
.login-container {
  position: relative;
  width: 100%;
  min-width: 1000px;
  height: 100vh;
  background-color: $bg;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
    .title {
      color: $light_gray;
      text-align: center;
      font-size: $fs_large;
    }
    .operate-btn {
      width: 100%;
    }
    .change-area {
      .el-form-item__content {
        display: flex !important;
      }
      .notice {
        color: $light_gray;
        font-size: $fs_medium;
      }
      .change-type-btn {
        flex-grow: 1;
      }
    }
  }
}
</style>

<template>
<div class="login-container">
  <el-form class="login-form">
    <h3 class="title">welcome to summary</h3>
    <template v-if="type">
      <el-form-item>
        <el-input v-model="loginInfo.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginInfo.password" placeholder="密码"></el-input>
      </el-form-item>
    </template>

    <template v-else>
      <el-form-item>
        <el-input v-model="registInfo.username" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="registInfo.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="registInfo.repassword" placeholder="再次确认密码"></el-input>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="operate" class="operate-btn">
        <template v-if="type">
          登 录
        </template>
        <template v-else>
          注 册
        </template>
      </el-button>
    </el-form-item>
    <el-form-item class="change-area">
      <span class="notice">
        <template v-if="type">
          新用户注册，请点击
        </template>
        <template v-else>
          使用已有账号登录，请点击
        </template>
        <i class="el-icon-arrow-right"></i></span>
      <el-button type="primary" @click="changeOperate" class="change-type-btn">
        <template v-if="type">注 册</template>
        <template v-else>登 录</template>
      </el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import LoginApi from "api/login";
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      },
      registInfo: {
        username: "",
        password: "",
        repassword: ""
      },
      type: true
    };
  },
  methods: {
    operate() {
      if (this.type) {
        let username = this.loginInfo.username;
        let password = this.loginInfo.password;
        LoginApi.login(username, password).then(res => {
          console.log("login", res);
        });
      } else {
        let username = this.registInfo.username;
        let password = this.registInfo.password;
        let repassword = this.registInfo.repassword;
        LoginApi.regist(username, password, repassword).then(res => {
          console.log('regist', res);
        })
      }

    },
    changeOperate() {
      this.type = !this.type;
    }
  }
};
</script>


