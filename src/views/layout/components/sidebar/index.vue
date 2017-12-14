<template>
  <scrollBar>
    <el-menu 
      class="g-sidebar"
      mode="vertical" 
      unique-opened 
      text-color="#fff"
      background-color="#304156"
      active-text-color="#409eff"
      :default-active="$route.path" 
      :collapse="isCollapse"
    >
      <sidebarItem :routes="routes"></sidebarItem>
    </el-menu>
  </scrollBar>
</template>

<script>
import { mapGetters } from "vuex";
import sidebarItem from "./sidebarItem";
import scrollBar from "components/scrollBar";
export default {
  computed: {
    ...mapGetters(["routes", "sidebar"]),
    isCollapse() {
      return !this.sidebar.isOpen;
    }
  },
  components: {
    scrollBar,
    sidebarItem
  }
};
</script>
