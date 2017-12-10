<style lang="scss" scoped>
.m-dblclick {
  padding: 30px;
}
</style>


<template>
  <div class="m-dblclick">
    <h3>
      单击双击
    </h3>
    <code>
      <strong>问题 : </strong>
      在同一个元素上，同时绑定单击双击事件，dblclick事件会触发click事件，怎么样设置才能两个事件互不干扰，解决单击和双击事件的冲突？
    </code>
    <code>
      <strong>答案 : </strong>
      可以利用setTimeout()方法来延时完成click事件的处理，在需要停止click的时候利用clearTimeout()方法停止这一事件的处理
    </code>
    <el-button 
      type="primary"
      @click="handleClick"
      @dblclick.native="handleDblClick"
    >
    单击双击
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    }
  },
  methods: {
    handleClick() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$message({
          message: '我被单击了',
          showClose: true,
          type: 'success'
        })
      }, 300);
    },
    handleDblClick() {
      this.timer && clearTimeout(this.timer);
      this.$message({
        message: '我被双击了',
          showClose: true,
          type: 'success'
        })
    }
  }
}
</script>

