<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    // 被子组件触发的事件
    triggerBySub() {
      this.$message({
        message: "被子组件触发的事件",
        type: "warning"
      });
    }
  }
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css"; //normalize.css 样式格式化
#app {
  width: 100%;
  height: 100%;
}
</style>
