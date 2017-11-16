<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <el-button type="primary" @click="testApi">TEST</el-button>
  </div>
</template>

<script>
import Test from 'api/test';
export default {
  name: "app",
  methods: {
    testApi() {
      Test.test({
        id: 1
      }).then(res => {
        console.log('resTestApi', res);
      })
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
