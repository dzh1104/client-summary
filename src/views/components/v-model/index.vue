<style lang="scss" scoped>
.m-model {
  padding: 30px;
}
</style>

<template>
  <div class="m-model">
    <code>
      <subComponent v-model="value"></subComponent>
    </code>

    <code>
      {{value}}
    </code>
  </div>
</template>

<script>
import subComponent from './subComponent';

export default {
  data() {
    return {
      value: ''
    }
  },
  components: {
    subComponent
  }
}
</script>
