<style lang="scss" scoped>
.m-home {
  padding: 30px;
  canvas {
    width: 800px;
    height: 600px;
    border: 1px dashed $borderDashed;
    &:hover {
      border-color: $borderHover;
    }
  }
}
</style>

<template>
  <div class="m-home">
    <canvas ref="canvas">
      你的浏览器居然不支持Canvas？！赶快换一个吧！！
    </canvas>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");
    // 创建渐变
    const grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // 填充渐变
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
  }
};
</script>


