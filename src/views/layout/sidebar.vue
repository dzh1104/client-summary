<style lang="scss" scoped>

</style>

<template>
  <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse">
      <sidebarItem :routes="permissionRouters"></sidebarItem>
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
      permissionRouters: []
    };
  },
  computed: {
    //   ...mapGetters([
    //       'permissionRouters'
    //   ]),
    isCollapse() {
      return true;
    }
  }
};
</script>


