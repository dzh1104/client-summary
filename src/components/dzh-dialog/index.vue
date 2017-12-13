<style lang="scss">
.el-dialog {
  display: flex;
  flex-direction: column;
  min-height: 50%;
  max-height: 80%;
  &.is-fullscreen {
    max-height: 100%;
  }
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
    height: 65px;
    .s-has-footer {
      color: red;
    }
  }
  .el-dialog__body {
    flex-grow: 1;
    padding: 0;
    overflow: auto;
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
  >
    <!-- slot title -->
    <div slot="title" class="dzh-dialog-title">
      {{title}}
    </div>
    <slot></slot>
    <div slot="footer" v-if="hasFooter">
      <slot name="footer"></slot>      
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
      // 父级不传 为undefined 返回一个Promise的函数
      type: Function 
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
    },
    // 在父级加slot="footer" 还需要设置:hasFooter="true"
    hasFooter: {
      type: Boolean,
      default: false
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
        this.$emit("update:dialogVisible", false);
      }
    }
  },
  methods: {
    // handleClose() {
    //   this.$emit('update:dialogVisible', false);
    // },
    handleBeforeClose(done) {
      if (this.beforeClose) {
        this.beforeClose().then(res => {
          if (res) {
            done(); // 调用done关闭dialog
          }
        });
        return;
      }
      this.$message({
        message: '父级没有传beforeClose prop',
        type: 'success'
      })
      done();
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
