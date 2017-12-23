<style lang="scss" scoped>
.m-date {
  padding: 30px;
}
</style>

<template>
  <div class="m-date">
    <el-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">

    </el-time-select>

    <el-time-picker
      is-range
      v-model="value4"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
    <el-time-picker
      is-range
      arrow-control
      v-model="value5"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
    <el-button @click="formatDateTime" type="primary">格式化</el-button>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'dateDemo',
  data() {
    return {
      value1: '',
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  },
  methods: {
    formatDateTime() {
      console.log('time', moment(this.value4[0]).format('YYYY-MM-DD HH:mm:ss'))
    }
  }
};
</script>

