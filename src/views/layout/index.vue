<style lang="scss" scoped>
.g-app {
  height: 100%;
  .g-content-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    .m-navbar {
      height: 50px;
      line-height: 50px;
      border-radius: 0px !important;
    }
    .m-app-main {
      flex-grow: 1;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>


<template>
  <div class="g-app" :class="{'s-hide-sidebar': !sidebar.open}">
    <sidebar class="g-sidebar"></sidebar>
    <div class="g-content-wrap">
      <navbar></navbar>
      <appMain></appMain>
    </div>
  </div>
</template>

<script>
import { navbar, sidebar, appMain } from "./components";
import { mapGetters } from "vuex";
export default {
  name: "layout",
  components: {
    sidebar,
    navbar,
    appMain
  },
  computed: {
    ...mapGetters(["sidebar"])
  }
};
</script>
