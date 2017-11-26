<style lang="scss" scoped>

</style>

<template>
  <div>
      <template v-for="item in routes">

        <router-link v-if="!item.hidden && item.noDropdown && item.children.length > 0" :to="item.children[0].path">
            <el-menu-item :index="item.path + '/' + item.children[0].path">
            <icon-svg v-if="item.icon" :icon-class="item.icon"></icon-svg>
            <span>{{item.children[0].name}}</span>
            </el-menu-item>
        </router-link>

        <el-submenu v-if="!item.noDropdown && !item.hidden" :index="item.name">
            <template slot="title">
                <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg><span>{{item.name}}</span>
            </template>

            <template v-for="child in item.children" v-if='!child.hidden'>
                <sidebarItem class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'></sidebarItem>

                <router-link v-else :to="item.path+'/'+child.path">
                    <el-menu-item :index="item.path+'/'+child.path">
                        <icon-svg v-if='child.icon' :icon-class="child.icon"></icon-svg><span>{{child.name}}</span>
                    </el-menu-item>
                </router-link>

            </template>
        </el-submenu>        
        
      </template>
  </div>
</template>

<script>
/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:55:47 
 * @Last Modified by: dzh
 * @Last Modified time: 2017-11-24 09:56:29
 */
export default {
    name: 'sidebarItem',
    props: {
        routes: {
            type: Array
        }
    }
};
</script>


