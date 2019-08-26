<template>
  <el-row>
    <el-table :data="blog.comments">
      <el-table-column prop="username" label="用户名">
      </el-table-column>

      <el-table-column prop="content" label="评论">
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
    export default {
        name: "BlogList",
        data(){

        }
    }
</script>

<style scoped>

</style>
