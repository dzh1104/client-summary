<style lang="scss" scoped>

</style>

<template>
  <div>
    <el-button type="primary" @click="handleClick">点击触发input传值</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('input', '子组件通过input传递过来的值')
    }
  }
}
</script>
