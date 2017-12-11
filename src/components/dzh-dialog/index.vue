<style lang="scss">
.m-dialog {
  .el-dialog {
    height: 80%;
    .el-dialog__header {
      height: 50px;
      padding-top: 10px;
      background-color: $dialogTitleBg;
      .dzh-dialog-title {
        height: 30px;
        line-height: 30px;
        font-size: $dialog_title;
        color: #fff;
        text-align: center;
      }
      .dzh-dialog-footer {
        display: block;
      }
      .el-dialog__headerbtn {
        position: absolute;
        top: 10px;
        right: 10px;
        .el-dialog__close {
          font-size: 30px;
          color: #fff;
        }
      }
    }
    .el-dialog__footer {
      color: red;
    }
    .el-dialog__body {
      height: calc(100% - 120px);
      overflow: auto;
    }
  }
}
</style>

<template>
  <!-- :visible.sync="dialogVisibleData" -->
  <!-- @close="handleClose" -->
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
    @close="close"
    @open="open"
    @click.native="handleClick"
    class="m-dialog"
    :class="['dialog-height']"
  >
    <!-- slot title -->
    <div slot="title" class="dzh-dialog-title">
      {{title}}
    </div>
    <p>这是一个段落</p>
    <p>这是一个段落</p>
    <div slot="footer" class="dzh-dialog-footer">
      <slot name="footer"></slot>
      <el-button type="primary">footer</el-button>
    </div>
  </el-dialog>
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
      default: "8vh"
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
      type: Function,
      default() {
        return function() {};
      }
    },
    center: {
      type: Boolean,
      default: false
    },
    close: {
      type: Function,
      default() {
        return function() {};
      }
    },
    open: {
      type: Function,
      default() {
        return function() {};
      }
    }
  },
  data() {
    return {
      // 单向数据流 动态prop
      // :visible.sync="dialogVisibleData"
      // handleClose() {
      // this.$emit('update:dialogVisible', false);
      // }
      // this.dialogVisible为true才能看到效果，因为使用data处理prop，不能动态改变
      dialogVisibleData: this.dialogVisible
    };
  },
  computed: {
    dialogVisibleComputed: {
      get() {
        return this.dialogVisible;
      },
      // Computed property "dialogVisibleComputed" was assigned to but it has no setter.
      set(newVal) {
        console.log("newVal", newVal); // false
        // el-dialog组件的子组件相关关闭事件通过this.$emit('update:visible', false)设置 dialogVisibleComputed的值为false，会触发dialogVisibleComputed的setter，在setter中通过自定义事件再去设置外层的值
        this.$emit("update:dialogVisible", newVal);
      }
    }
  },
  methods: {
    // handleClose() {
    //   this.$emit('update:dialogVisible', false);
    // },
    handleBeforeClose(done) {
      this.beforeClose().then(res => {
        done(); // 调用done关闭dialog
      });
    },
    handleClick() {
      console.log("this.dialogVisibleComputed", this.dialogVisibleComputed);
    }
  },
  created() {
    console.log("this.close", this.close);
  }
};
</script>
