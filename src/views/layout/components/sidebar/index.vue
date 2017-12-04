<style lang="scss" scoped>

</style>

<template>
  <el-menu 
    mode="vertical" 
    unique-opened 
    :default-active="$route.path" 
    background-color="#304156"
    text-color="#fff"
    class="g-sidebar"
    active-text-color="#409eff"
    :collapse="isCollapse"
  >
    <sidebarItem :routes="routes"></sidebarItem>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import sidebarItem from "./sidebarItem";
export default {
  components: {
    sidebarItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["routes", "sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>


