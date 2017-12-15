<style lang="scss" scoped>
.m-navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .m-hamburger {
    float: left;
    height: 50px;
    line-height: 58px;
    padding: 0 10px;
  }
  .m-operation-area {
    float: right; // 父级已设置高度 不需要用伪类清除浮动
    height: 50px;
    .m-screenfull {
      float: left;
      height: 20px;
      margin-top: 15px;
      margin-right: 8px;
    }
    .m-avatar-container {
      float: left;
      height: 50px;
      margin-right: 8px;
      // margin-top: 5px;
      .avatar-wrap {
        .u-img {
          width: 40px;
          height: 40px;
          vertical-align: middle;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>

<template>
  <el-menu mode="horizontal" class="m-navbar">

    <hamburger class="m-hamburger"></hamburger>

    <!-- 右侧操作区 -->
    <div class="m-operation-area">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <screenfull class="m-screenfull"></screenfull>
      </el-tooltip>

      <el-dropdown trigger="click" class="m-avatar-container">
          <div class="avatar-wrap f-cur">
              <img class="u-img" :src="avatar" alt="avatar">
              <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                  <el-dropdown-item>
                      首页
                  </el-dropdown-item>
              </router-link>
              <a target="_blank" href="https://github.com/dzh1104/client-summary">
                  <el-dropdown-item>
                      项目地址
                  </el-dropdown-item>
              </a>
              <el-dropdown-item divided>
                  <span @click="logout">退出登录</span>
              </el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import hamburger from "components/hamburger";
import screenfull from "components/screenfull";
import authApi from "api/auth";
export default {
  data() {
    return {
      avatar:
        "https://github.com/dzh1104/docs/blob/master/docs/logo.jpg?raw=true"
    };
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  methods: {
    logout() {
      authApi.clientLogout().then(res => {
        this.$router.push({ path: "/login" });
      });
    }
  },
  components: {
    hamburger,
    screenfull
  }
};
</script>


