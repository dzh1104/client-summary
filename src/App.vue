<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import echarts from 'echarts';
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
  },
  created() {
    console.log('echarts', echarts);
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
