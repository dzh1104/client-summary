<style lang="scss" scoped>
.m-style-class {
  width: 400px;
  padding: 30px;
  .class1 {
    color: red;
  }
  .active {
    text-decoration: underline;
  }
  .error {
    background-color: yellow;
  }
}
</style>

<template>
  <div class="m-style-class">
    <!-- 字符串 -->
    <p :class="'cla' + 'ss1'">
      段落class1
    </p>
    <!-- 对象 -->
    <p :class="{active: isActive}">
      段落class2
    </p>
    <!-- 数组 -->
    <p :class="[activeClass, errorClass]">
      段落class3
    </p>
    <!-- 数组加对象 -->
    <p :class="[{active: isActive}, errorClass]">
      段落class4
    </p>

    <!-- 字符串 -->
    <p :style="'font-size: 22px; color: pink;'">
      段落style1
    </p>
    <!-- 对象 -->
    <p :style="{fontSize: '32px', backgroundColor: 'blue'}">
      段落style2
    </p>
    <!-- 数组 -->
    <p :style="[styleObj1, styleObj2]">
      段落style3
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      activeClass: 'active',
      errorClass: 'error',
      styleObj1: {
        fontSize: '26px'
      },
      styleObj2: {
        color: 'orange'
      }
    }
  }
}
</script>
