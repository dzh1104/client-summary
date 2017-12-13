<style lang="scss" scoped>
.m-refresh {
  padding: 30px;
}
</style>

<template>
  <div class="m-refresh">
    <h3>刷新当前路由</h3>
    <code>
      在当前页面、路由中，根据某些操作需要刷新当前路由 
    </code>
    <code>
      this.$router.push(current route) it will force the router to match the route even if it is the same with current route
    </code>
    <el-button type="primary" @click="refreshCurrentRoute">refresh</el-button>
  </div>
</template>

<script>
export default {
  // name: "refresh",
  methods: {
    refreshCurrentRoute() {
      // 在appMain中的router-view需要加上key 使其渲染
      this.$router.push({ 
        path: '/advance/refresh',
        query: {
          t: (new Date()).getTime()
        }  
      });
    }
  },
  created() {
    this.$message({
      message: '进入created',
      type: 'success'
    })
  }
};
</script>

