<style lang="scss" scoped>

</style>

<template>
  <section class="m-app-main">
      <transition name="fade" mode="out-in">
          <router-view :key="key"></router-view>
      </transition>
  </section>
</template>


<script>
export default {
  name: "appMain",
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  },
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

