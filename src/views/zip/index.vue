<style lang="scss" scoped>
.m-zip {
  padding: 30px;
  .u-input {
    width: 240px;
  }
  .u-button {
    margin-bottom: 20px;
  }
}
</style>

<template>
  <div class="m-zip">
    <el-input 
      placeholder="请输入文件名(默认file)" 
      prefix-icon="el-icon-document" 
      class="u-input"
      v-model="filename"
    >
    </el-input>
    <el-button 
      type="primary" 
      icon="document" 
      class="u-button"
      @click="handleDownload" 
      :loading="downLoading"
    >
      导出zip
    </el-button>
    
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="文章标题">
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="作者" width="95" align="center">
        <template slot-scope="scope">
          <el-tag>{{scope.row.author}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="阅读数" width="115" align="center">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="发布时间" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      filename: "",
      downloadLoading: false,
      list: null,
      listLoading: false
    };
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true;
      // code split 将一些js模块给独立出一个个js文件，然后需要用到的时候，再创建一个script对象，加入到document.head对象中即可，浏览器会自动去请求这个js文件，再写个回调，去定义得到这个js文件后，需要做什么业务逻辑操作
      // webpack的功能 require.ensure是一个代码分离的分割线，表示回调里的require是我们要分割出去的，即require('vendor/Export2Zip')，把其分割出去，形成一个webpack打包的单独文件
      // 不是在组件初始化挂载就引入，只有用户点击导出zip才会加载相应的依赖，点击后可以查看到index.html中head加了一个script标签
      // https://doc.webpack-china.org/guides/migrating/#require-ensure-amd-require-
      // https://cnodejs.org/topic/586823335eac96bb04d3e305
      // 第一个参数[] 是一个数组，当前这个 require.ensure所依赖的其他 异步加载的模块
      require.ensure([], () => {
        const { export_txt_to_zip } = require("vendor/Export2Zip");
        const tHeader = ["序号", "文章标题", "作者", "阅读数", "发布时间"];
        const filterVal = [
          "id",
          "title",
          "author",
          "pageviews",
          "display_time"
        ];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        export_txt_to_zip(tHeader, data, this.filename, this.filename);
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>

