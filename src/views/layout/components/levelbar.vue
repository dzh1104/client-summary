<style lang="scss" scoped>

</style>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <span v-if="item.redirect === 'noredirect' || index === levelList.length - 1"></span>
        <router-link v-else :to="item.redirect || item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    created() {

    },
    data() {
        return {
            levelList: null
        }
    },
    watch: {
        $route() {

        }
    }
};
</script>


