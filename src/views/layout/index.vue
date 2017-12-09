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
