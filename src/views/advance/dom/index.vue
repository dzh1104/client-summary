<style lang="scss" scoped>
.m-dom {
  padding: 30px;
}
</style>

<template>
  <div class="m-dom">
    <h3>vue获取dom节点($refs的使用)</h3>
    <code class="f-cur" @click="showDom1" ref="rootDom">
      获取当前组件的根节点
    </code>
    <code class="f-cur" @click="showDom2" ref="childDom">
      获取当前组件的其他dom
    </code>
    <code class="f-cur" @click="showChildComponent">
      获取子组件
    </code>
    <backToTop ref="backToTop"></backToTop>
  </div>
</template>

<script>
import backToTop from 'components/backToTop';
export default {
  methods: {
    showDom1() {
      console.log('rootdom', this.$el);
    },
    showDom2() {
      console.log('childdom', this.$refs.childDom);
      const oCode = this.$refs.childDom;
      oCode.style.color = 'red';
    },
    showChildComponent() {
      console.log('this.$refs.backToTop', this.$refs.backToTop);
    }
  },
  components: {
    backToTop
  }
}
</script>
