<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import '~normalize.css/normalize.css'; //normalize.css 样式格式化
#app {
  height: 100%;
}
</style>
