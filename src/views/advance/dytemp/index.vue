<style lang="scss" scoped>
.m-dytemp {
  padding: 30px;
}
</style>

<template>
  <div class="m-dytemp">
    <h3>动态模板</h3>
    <el-button type="primary" @click="generateTemp">生成模板</el-button>
    <code v-html="content1"></code>
    <code>
      <dytempItem1 :content="content2"></dytempItem1>
    </code>
    <code>
      <dytempItem2 :content="content2"></dytempItem2>
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 使用原生html写法onclick可以，使用vue语法绑定点击事件不生效
      content1: `<p @click="alert('v-html vue绑定事件')">这是段落1</p><p onclick="alert('v-html html绑定事件')">这是段落2</p>`,
      content2: `<p @click="handleClick('v-html vue绑定事件')">这是段落1</p><p onclick="alert('v-html html绑定事件')">这是段落2</p>`
    }
  },
  methods: {
    generateTemp() {

    }
  },
  components: {
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
        }
      }
    }
  }
}
</script>
