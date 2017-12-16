<style lang="scss">
.m-input {
  padding: 30px;
  .input-width {
    display: block;
    width: 240px;
    margin-bottom: 20px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .el-input {
    >input[readonly] {
      border: 1px solid transparent;
    }
  }
}
</style>

<template>
  <div class="m-input">
      <el-input v-model="value" placeholder="请输入内容" class="input-width"></el-input>
      <el-input v-model="value" placeholder="请输入内容" class="input-width" disabled></el-input>
      <el-input v-model="value" placeholder="请输入内容" class="input-width" clearable></el-input>
      <el-input v-model="value" placeholder="请输入内容" class="input-width" suffix-icon="el-icon-date"></el-input>
      <el-input v-model="value" placeholder="请输入内容" class="input-width" prefix-icon="el-icon-search"></el-input>
      <el-input v-model="value" placeholder="请输入内容" class="input-width">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input v-model="value" placeholder="请输入内容" class="input-width">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-input v-model="value" type="textarea" placeholder="请输入内容" class="input-width" :rows="4"></el-input>
      <el-input v-model="value" type="textarea" placeholder="请输入内容" class="input-width" :autosize="{minRows: 3}"></el-input>
      <div style="margin-bottom: 20px;">
        <el-input v-model="value" placeholder="请输入内容" style="width: 400px;">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div style="margin-bottom: 20px;">
        <el-input v-model="value" placeholder="请输入内容" style="width: 400px;">
          <template slot="append">.com</template>
        </el-input>
      </div>
      <div style="margin-bottom: 20px;">
        <el-input placeholder="请输入内容" v-model="value" style="width: 600px;">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div style="margin-bottom: 20px;">
        <el-input v-model="value" placeholder="我是只读的" :readonly="readonly" style="width: 240px;"></el-input>
        <el-button type="primary" @click="changeRead">修改</el-button>
      </div>
  </div>
</template>

<script>
export default {
  // [Vue warn]: Do not use built-in or reserved HTML elements as component id: input => inputDemo
  name: "inputDemo",
  data() {
    return {
      value: "",
      select: '',
      readonly: true
    };
  },
  methods: {
    changeRead() {
      this.readonly = !this.readonly;
    }
  }
};
</script>
