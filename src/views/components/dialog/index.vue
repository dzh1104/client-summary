<style lang="scss" scoped>

</style>

<template>
  <div>
      <el-button type="primary" @click="openDialog">show</el-button>
      <dzh-dialog :dialogVisible.sync="dialogVisible" :modal="true" :appendToBody="true" :beforeClose="beforeClose" :center="true"></dzh-dialog>
  </div>
</template>

<script>
import dzhDialog from "components/dzh-dialog";
export default {
  name: "dialogDemo",
  components: {
    dzhDialog
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    beforeClose() {
      this.$message({ message: "before-close关闭前的回调 done用于控制是否关闭dialog" });
      return new Promise((resolve, reject) => {
        // do something ...
        resolve();
      })
    },
    openDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>
