<style lang="scss" scoped>
.m-navbar {
  .m-hamburger {
    float: left;
    height: 50px;
    padding: 0 10px;
    line-height: 50px;
  }
  .m-operation-area {
    float: right; // 父级已设置高度 不需要用伪类清除浮动
    height: 100%;
    margin-right: 10px;
    .m-avatar-container {
      height: 100%;
      margin-top: 5px;
      .avatar-wrap {
        .u-img {
          width: 40px;
          height: 40px;
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
import levelbar from "./levelbar";
import tabsView from "./tabsView";
import { mapGetters } from "vuex";
import hamburger from "components/hamburger";
export default {
  components: {
    levelbar,
    tabsView
  },
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
    logout() {}
  },
  components: {
    hamburger
  }
};
</script>


