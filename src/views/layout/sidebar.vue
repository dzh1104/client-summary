<style lang="scss" scoped>

</style>

<template>
  <el-menu 
    mode="vertical" 
    unique-opened 
    :default-active="$route.path" 
    background-color="#2d3a4b"
    text-color="#fff"
    class="g-sidebar"
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
    return {
    }
  },
  computed: {
    ...mapGetters(["routes"])
  }
};
</script>


