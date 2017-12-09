<template>
  <el-menu 
    class="g-sidebar"
    mode="vertical" 
    unique-opened 
    :default-active="$route.path" 
    text-color="#fff"
    background-color="#304156"
    active-text-color="#409eff"
    menu-trigger="click"
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
  computed: {
    ...mapGetters(["routes", "sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>


