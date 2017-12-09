<style lang="scss" scoped>
.m-icons {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px 0;
  .icon-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    margin: 8px;
    font-size: 18px;
    text-align: center;
    // border: 1px dotted blue;
    // border-radius: 10px;
    .u-icon {

    }
  }
}
</style>

<template>
  <div class="m-icons">
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
      iconsMap: []
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
      clipboard(text, event);
    }
  }
};
</script>

