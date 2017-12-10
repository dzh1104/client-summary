<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import generateIconsView from '@/views/svg-icons/generateIconsView.js';

// 使用 webpack 的 require.context 实现路由“去中心化”管理 https://www.v2ex.com/t/359380

// webpack 插件 svg-sprite-loader的使用 http://blog.csdn.net/zb0567/article/details/77987727?locationNum=9&fps=1

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./svg', false, /\.svg$/);
const iconMap = requireAll(req);
console.log('svg');
generateIconsView.generate(iconMap);
// 使用:
//  1.先去阿里的iconfont下载图标 文件名为ABC.svg文件到icons-svg/svg下
//  2.在页面中使用全局注册的组件<icon-svg icon-class="ABC"></icon-svg>
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


