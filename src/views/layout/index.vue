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
/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:55:21 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-24 13:43:11
 */
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


