<style lang="scss" scoped>
.m-icons {
  display: flex;
  flex-wrap: wrap;
  .icon-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    margin: 8px;
    text-align: center;
    // border: 1px dotted blue;
    // border-radius: 10px;
    .svg-icon {
      font-size: 30px;
      color: #409eff;
    }
    .u-icon {
      font-size: 18px;
    }
  }
}
</style>

<template>
  <div class="m-icons">
    <div>
      <el-button type="primary" @click="change">change</el-button>
    </div>
    <div class="icon-item f-cur" v-for="(item, index) in iconsMap" :key="index" @click="handleClipboard(generateIconCode(item),$event)">
      <el-tooltip placement="top">
        <div slot="content">
          {{generateIconCode(item)}}
        </div>
        <div class="u-icon">
          <svg-icon :icon-class="item"></svg-icon>
          <p>{{item}}</p>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import icons from "./generateIconsView";
import clipboard from "utils/clipboard";

export default {
  name: "icons",
  data() {
    return {
      iconsMap: [],
      flag: true
    };
  },
  mounted() {
    const iconsMap = icons.state.iconsMap.map(i => {
      return i.default.id.split("-")[1];
    });
    this.iconsMap = iconsMap;
  },
  methods: {
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`;
    },
    handleClipboard(text, event) {
      if (event.target.nodeName === 'svg') {
        return;
      }
      if (event.target.nodeName === 'use') {
        return;
      }
      clipboard(text, event);
    },
    change() {
      this.flag = false;
    }
  }
};
</script>
