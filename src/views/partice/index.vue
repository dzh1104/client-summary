<style lang="scss" scoped>
.partice-container {
    header {
        margin: 0 auto;
        width: 400px;
        background-color: yellow;
    }
    main {
        // position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40px;
        background-color: red;
    }
}
</style>

<template>
  <div class="partice-container">
      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
  </div>
</template>

<script>
export default {
  
}
</script>

