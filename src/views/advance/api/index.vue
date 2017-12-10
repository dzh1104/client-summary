<style lang="scss" scoped>
.m-api {
  padding: 30px;
}
</style>


<template>
  <div class="m-api">
    <h2>当前触发已渲染组件事件</h2>
    <el-button type="primary" @click="emitParent">emitParent父组件</el-button>
    <el-button type="primary" @click="emitRoot">emitRoot根组件</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 已知层级关系 父组件
    emitParent() {
      console.log('parent', this.$parent); // 通过$el section.m-app-main可以知道父组件是layout/components/appMain.vue
      this.$parent.triggerBySub();
    },
    // 已知层级关系 根组件
    emitRoot() {
      console.log('root', this.$root); // App.vue
      try {
        this.$root.triggerBySub();
      } catch(e) {
        this.$message({
          message: '无法触发根组件App.vue的方法',
          type: 'error'
        })
      }
    }
  }
}
</script>

