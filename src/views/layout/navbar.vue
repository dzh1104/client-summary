<style lang="scss" scoped>

</style>

<template>
  <el-menu mode="horizontal">
    <levelbar></levelbar>
    <tabsView></tabsView>
    <el-dropdown trigger="click">
        <div>
            <img src="" alt="avatar">
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
        </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import levelbar from "./levelbar";
import tabsView from "./tabsView";
export default {
  components: {
    levelbar,
    tabsView
  }
};
</script>


