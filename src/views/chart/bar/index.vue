<style lang="scss" scoped>
.m-chart-bar {
}
</style>

<template>
  <div class="m-chart-bar">
    <div ref="bar1" style="width: 400px; height: 400px;"></div>
    <div ref="bar2" style="width: 800px; height: 800px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart1: null,
      chart2: null
    };
  },
  methods: {
    initChart1() {
      this.chart1 = echarts.init(this.$refs.bar1); // 挂载在当前组件的根节点
      this.chart1.setOption({
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
    },
    initChart2() {
      this.chart2 = echarts.init(this.$refs.bar2);
      var dataAll = [
        [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        [
          [10.0, 9.14],
          [8.0, 8.14],
          [13.0, 8.74],
          [9.0, 8.77],
          [11.0, 9.26],
          [14.0, 8.1],
          [6.0, 6.13],
          [4.0, 3.1],
          [12.0, 9.13],
          [7.0, 7.26],
          [5.0, 4.74]
        ],
        [
          [10.0, 7.46],
          [8.0, 6.77],
          [13.0, 12.74],
          [9.0, 7.11],
          [11.0, 7.81],
          [14.0, 8.84],
          [6.0, 6.08],
          [4.0, 5.39],
          [12.0, 8.15],
          [7.0, 6.42],
          [5.0, 5.73]
        ],
        [
          [8.0, 6.58],
          [8.0, 5.76],
          [8.0, 7.71],
          [8.0, 8.84],
          [8.0, 8.47],
          [8.0, 7.04],
          [8.0, 5.25],
          [19.0, 12.5],
          [8.0, 5.56],
          [8.0, 7.91],
          [8.0, 6.89]
        ]
      ];

      var markLineOpt = {
        animation: false,
        label: {
          normal: {
            formatter: "y = 0.5 * x + 3",
            textStyle: {
              align: "right"
            }
          }
        },
        lineStyle: {
          normal: {
            type: "solid"
          }
        },
        tooltip: {
          formatter: "y = 0.5 * x + 3"
        },
        data: [
          [
            {
              coord: [0, 3],
              symbol: "none"
            },
            {
              coord: [20, 13],
              symbol: "none"
            }
          ]
        ]
      };

      var option = {
        title: {
          text: "Anscombe's quartet",
          x: "center",
          y: 0
        },
        grid: [
          { x: "7%", y: "7%", width: "38%", height: "38%" },
          { x2: "7%", y: "7%", width: "38%", height: "38%" },
          { x: "7%", y2: "7%", width: "38%", height: "38%" },
          { x2: "7%", y2: "7%", width: "38%", height: "38%" }
        ],
        tooltip: {
          formatter: "Group {a}: ({c})"
        },
        xAxis: [
          { gridIndex: 0, min: 0, max: 20 },
          { gridIndex: 1, min: 0, max: 20 },
          { gridIndex: 2, min: 0, max: 20 },
          { gridIndex: 3, min: 0, max: 20 }
        ],
        yAxis: [
          { gridIndex: 0, min: 0, max: 15 },
          { gridIndex: 1, min: 0, max: 15 },
          { gridIndex: 2, min: 0, max: 15 },
          { gridIndex: 3, min: 0, max: 15 }
        ],
        series: [
          {
            name: "I",
            type: "scatter",
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0],
            markLine: markLineOpt
          },
          {
            name: "II",
            type: "scatter",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1],
            markLine: markLineOpt
          },
          {
            name: "III",
            type: "scatter",
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[2],
            markLine: markLineOpt
          },
          {
            name: "IV",
            type: "scatter",
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[3],
            markLine: markLineOpt
          }
        ]
      };
      this.chart2.setOption(option);
    }
  },
  mounted() {
    this.initChart1();
    this.initChart2();
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
