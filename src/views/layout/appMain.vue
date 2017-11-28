<style lang="scss" scoped>
section {
    flex: 1;
}
</style>

<template>
  <section>
      <transition name="fade" mode="out-in">
          <router-view :key="key"></router-view>
      </transition>
  </section>
</template>


<script>
export default {
  name: 'appMain',
  computed: {
      key() {
          return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
  }
}
</script>

