<style lang="scss" scoped>
.m-dytemp {
  padding: 30px;
}
</style>

<template>
  <div class="m-dytemp">
    <h3>动态模板$options.template</h3>
    <code v-html="content1"></code>
    <code>
      <dytempItem1 :content="content2"></dytempItem1>
    </code>
    <code>
      <dytempItem2 :content="content2" @triggerBySubClick="triggerBySubClick"></dytempItem2>
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 使用原生html写法onclick可以，使用vue语法绑定点击事件不生效
      // v-html无法渲染局部模板，需要使用这个组件来实现
      content1: `
        <p @click="handleClick('v-html vue绑定事件')" class="f-cur">这是段落1</p>
        <p onclick="alert('v-html html绑定事件')" class="f-cur">这是段落2</p>
      `,
      content2: `
        <p @click="handleClick('v-html vue绑定事件')" class="f-cur">这是段落1</p>
        <p onclick="alert('v-html html绑定事件')" class="f-cur">这是段落2</p>
      `
    }
  },
  methods: {
    triggerBySubClick() {
      this.$message({
        message: '子组件动态模板上绑定的click事件触发自定义事件',
        type: 'success'
      })
    }
  },
  components: {
    /**
     * 组件渲染过程 : template先于props
     * 所以下面的组件dytempItem1显示undefined，使用动态模板this.$opeions.template设置可以渲染props穿过来的模板
     */
    dytempItem1: {
      props: {
        content: String
      },
      template: `<div>${this.content}</div>`,
      created() {
        // this.$options.template = `<div>${this.content}</div>`
      },
      methods: {
        handleClick(str) {
          alert(str);
        }
      }
    },
    dytempItem2: {
      props: {
        content: String
      },
      // template: `<div>${this.content}</div>`,
      created() {
        this.$options.template = `<div>${this.content}</div>`
      },
      methods: {
        handleClick(str) {
          alert(str);
          this.$emit('triggerBySubClick');
        }
      }
    }
  }
}
</script>
