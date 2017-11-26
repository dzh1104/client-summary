<style lang="scss" scoped>

</style>

<template>
  <el-menu mode="vertical" unique-opened :default-active="$route.path">
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
    ...mapGetters(["routes"])
  }
};
</script>


