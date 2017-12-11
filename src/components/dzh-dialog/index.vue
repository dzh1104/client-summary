<style lang="scss" scoped>

</style>

<template>
  <div class="m-dialog">
    <el-dialog
      :visible.sync="dialogVisibleComputed"
      :title="title"
      :fullscreen="fullscreen"
      :top="top"
      :modal="modal"
      :modal-append-to-body="modalAppendToBody"
      :append-to-body="appendToBody"
      :lock-scroll="lockScroll"
      :custom-class="customClass"
      :close-on-click-modal="closeOnClickModal"
      :close-on-press-escape="closeOnPressEscape"
      :show-close="showClose"
      :before-close="handleBeforeClose"
      :center="center"
      @close="handleClose"
      @open="handleOpen"
    >

    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "dialog title"
    },
    width: {
      type: String,
      default: "50%"
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "15vh"
    },
    modal: {
      type: Boolean,
      default: true
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisibleData: this.dialogVisible
    };
  },
  computed: {
    dialogVisibleComputed: {
      get() {
        return this.dialogVisible;
      },
      set(newVal) {
        console.log('newVal', newVal); // false
        this.$emit('update:dialogVisible', newVal);
      }
    }
  },
  methods: {
    handleClose() {
      // this.$emit('update:dialogVisible', false);
    },
    handleOpen() {
    },
    handleBeforeClose(done) {
      this.beforeClose().then(res => {
        done();
      });
      // this.$confirm("确认关闭？")
      //   .then(_ => {
      //     // done();
      //     this.$emit('update:dialogVisible', false);
      //   })
      //   .catch(_ => {});
    }
  }
};
</script>
