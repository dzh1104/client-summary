<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import incrementalUpdate from 'utils/incrementalUpdate';
export default {
  created() {
    console.log('incrementalUpdate', incrementalUpdate);
    let recordData = incrementalUpdate.getRecordData(1, 'auth.login', {
      name: ['a']
    });
    console.log('recordData', recordData);
  },
  name: "app",
  methods: {
    ...mapMutations([
      'ADD_VISITED_VIEWS',
      'DEL_VISITED_VIEWS'
    ]),
    // 被子组件触发的事件
    triggerBySub() {
      this.$message({
        message: "被子组件触发的事件",
        type: "warning"
      });
    },
    generateRoute() {
      if (this.$route.name) {
        return this.$route;
      }
      return false;
    },
    addVisitedViews() {
      const route = this.generateRoute();
      if (!route) {
        return false;
      }
      this.ADD_VISITED_VIEWS(route);
    }
  },
  watch: {
    $route() {
      this.addVisitedViews();
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
