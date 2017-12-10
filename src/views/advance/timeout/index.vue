<style lang="scss" scoped>
.m-timeout {
  .m-scroll {
    max-height: 400px;
    overflow-y: auto;
  }
  padding: 30px;
}
</style>

<template>
  <div class="m-timeout">
    <h3>节点渲染延时挂载事件的处理</h3>
    <code>
      一个元素在满足一定条件时才渲染，使用v-if处理，若给该元素绑定鼠标滚动事件，需要一些处理
    </code>
    <div class="m-scroll" v-if="scrollInfo" @mousewheel="handleMousewheel">
      <code v-for="(item, index) in scrollInfo.list" :key="index">
        我是占位{{item}}
      </code>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollInfo: null,
      timer: null
    };
  },
  created() {
    setTimeout(() => {
      this.scrollInfo = {
        list: 20
      };
    }, 2000);
  },
  methods: {
    // vue的方式绑定滚轮事件，元素渲染就会绑定
    handleMousewheel(e) {
      // e.preventDefault();
      console.log(123);
      this.$message({
        message: "scroll",
        type: "success"
      });
    }
  },
  mounted() {
    setTimeout(() => {
      const scrollBox = $(".m-scroll");
      console.log("scrollBox", scrollBox); // 长度为0，因为节点还没有渲染
      scrollBox.on("scroll", () => {
        // 事件没有绑定成功，所以不会有任何效果
        console.log("scroll: monuted");
      });
    }, 3000); // 加上定时器且时间确保节点渲染完成，滚动事件绑定成功

    // nextTick在mounted中不生效
    this.$nextTick(() => {
      const scrollBox = $(".m-scroll");
      console.log("scrollBox", scrollBox);
      scrollBox.on("scroll", () => {
        console.log("scroll: monuted nextTick");
      });
    });
  },
  watch: {
    // 仍然使用DOM方式绑定滚轮事件，采取监听scrollInfo，确定在条件为true时，绑定滚动事件
    // 但是条件为true，节点并不一定渲染完成，还要使用nextTick
    scrollInfo(newVal) {
      if (newVal) {
        console.log("nextTick前 scrollBox", $(".m-scroll")); // 长度为0
        this.$nextTick(() => {
          console.log("nextTick后 scrollBox", $(".m-scroll")); // 长度为1
          $(".m-scroll").off("scroll");
          $(".m-scroll").on("scroll", () => {
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              console.log("scroll: watch nextTick");
            }, 1000);
          });
        });
      }
    }
  }
};
</script>

