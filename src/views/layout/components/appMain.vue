<style lang="scss" scoped>

</style>

<template>
  <section class="m-app-main">
      <transition name="fade" mode="out-in">
          <keep-alive :include="cachedViews">
            <router-view></router-view>
          </keep-alive>
      </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "appMain",
  computed: {
    ...mapGetters([
      'cachedViews'
    ]),
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
  },
  watch: {
    cachedViews(newVal) {
      console.log('newVal', newVal);
    }
  }
};
</script>

