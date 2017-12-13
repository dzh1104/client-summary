<style lang="scss" scoped>
.m-back-to-top {
  padding: 30px;
}
</style>


<template>
  <div class="m-back-to-top">
    <code>页面滚动到指定位置会在右下角出现返回顶部按钮</code>
    <code>可自定义按钮的样式、show/hide临界点、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素 </code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <code>我是占位</code>
    <!--可自定义按钮的样式、show/hide临界点、返回的位置  -->
    <!--如需文字提示，可在外部添加element的<el-tooltip></el-tooltip>元素  -->
    <el-tooltip placement="top" content="文字提示">
      <back-to-top transitionName="fade" :visibilityHeight="200"></back-to-top>
    </el-tooltip>
  </div>
</template>

<script>
import backToTop from 'components/backToTop';
export default {
  name: 'backToTopDemo',
  components: {
    backToTop
  }
}
</script>

