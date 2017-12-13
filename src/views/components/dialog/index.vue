<style lang="scss" scoped>
.m-dialog-demo {
  padding: 30px;
  .u-button {
    margin-bottom: 30px;
  }
}
</style>

<template>
  <div class="m-dialog-demo">
      <code>
        正常dialog
      </code>
      <el-button type="primary" @click="openNormalDialog" class="u-button">normal</el-button>
      <dzh-dialog 
        :dialogVisible.sync="normalDialogVisible" 
        :modal="true" 
        :modalAppendToBody="false"
        :beforeClose="beforeClose" 
        :hasFooter="true"
      >
        <div v-if="normalDialogVisible">
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
          <p>这是占位</p>
        </div>
        <div slot="footer">
          <el-button type="primary" @click="closeDialog">关闭</el-button>
        </div>
      </dzh-dialog>

      <code>
        全屏dialog
      </code>
      <el-button type="primary" @click="openFullDialog" class="u-button">full</el-button>
      <dzh-dialog 
        :dialogVisible.sync="fullDialogVisible" 
        :modal="true" 
        :appendToBody="true" 
        :beforeClose="beforeClose" 
        :closeOnClickModal="false"
        :fullscreen="true"
        :hasFooter="true"
        :close="close"
      >
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <p>这是占位</p>
        <div slot="footer">
          <el-button type="primary">footer</el-button>
        </div>
      </dzh-dialog>
  </div>
</template>

<script>
import dzhDialog from "components/dzh-dialog";
export default {
  name: "dialog",
  components: {
    dzhDialog
  },
  data() {
    return {
      normalDialogVisible: false,
      fullDialogVisible: false
    };
  },
  methods: {
    closeDialog() {
      this.normalDialogVisible = false;
    },
    beforeClose() {
      this.$message({ message: "before-close关闭前的回调 done用于控制是否关闭dialog" });
      return new Promise((resolve, reject) => {
        if (true) {
          // do something ...
          resolve(true);
          return;
        }
        // do another something ...
        resolve(false);
      });
    },
    openNormalDialog() {
      this.normalDialogVisible = true;
    },
    openFullDialog() {
      this.fullDialogVisible = true;
    },
    close() {
      // do something...
      alert("通过prop传入close回调");
    }
  }
};
</script>
