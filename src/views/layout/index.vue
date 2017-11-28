<style lang="scss" scoped>
.g-app {
  height: 100%;
  &.s-hide-sidebar {
    .g-sidebar {
      width: 36px;
      overflow: inherit;
    }
    .g-content-wrap {
      margin-left: 36px;
    }
  }
  .g-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1001;
    width: 180px;
    overflow-y: auto;
    transition: width 0.28s ease-out;
    &::-webkit-scrollbar { // 隐藏滚动条
      display: none;
    }
  }
  .g-content-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 180px;
    transition: margin-left 0.28s ease-out;
  }
}
</style>

<template>
  <div class="g-app" :class="{'s-hide-sidebar': !sidebar.open}">
    <sidebar></sidebar>
    <div class="g-content-wrap">
      <navbar></navbar>
      <appMain></appMain>
    </div>
  </div>
</template>

<script>
import { navbar, sidebar, appMain } from "./";
import { mapGetters } from 'vuex';
export default {
  name: "layout",
  components: {
    sidebar,
    navbar,
    appMain
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  }
};
</script>
