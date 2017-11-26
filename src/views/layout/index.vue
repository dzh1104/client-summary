<style lang="scss" scoped>

</style>

<template>
  <div>
    <sidebar></sidebar>
    <div>
      <navbar></navbar>
      <appMain></appMain>
    </div>
  </div>
</template>

<script>
import { navbar, sidebar, appMain } from "./";
export default {
  name: "layout",
  components: {
    sidebar,
    navbar,
    appMain
  }
};
</script>
