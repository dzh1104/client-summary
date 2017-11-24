<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
/*
 * @Author: dzh 
 * @Date: 2017-11-24 16:04:16 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-24 16:29:19
 */

// 使用 webpack 的 require.context 实现路由“去中心化”管理 https://www.v2ex.com/t/359380

// webpack 插件 svg-sprite-loader的使用 http://blog.csdn.net/zb0567/article/details/77987727?locationNum=9&fps=1

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
};
</script>


