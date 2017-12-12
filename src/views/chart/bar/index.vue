<style lang="scss" scoped>
.m-chart-bar {
  width: 400px;
  height: 400px;
}
</style>

<template>
  <div class="m-chart-bar">
    bar
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart: null
    };
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el); // 挂载在当前组件的根节点
      this.chart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  }
};
</script>
