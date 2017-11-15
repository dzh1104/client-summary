<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <el-button type="primary" @click="test">TEST</el-button>
  </div>
</template>

<script>
import Test from 'api/test';
export default {
  name: "app",
  methods: {
    test() {
      Test.test({
        name: 'dzh'
      }).then(res => {
        console.log('res', res);
      }).catch(err => {
        console.log('err', err);
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
