<template>
  <el-container>
    <el-row>
      <el-col>
        <el-card>
          头像设置
        </el-card>
      </el-col>
      <el-col>
        <el-avatar></el-avatar>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        密码设置
      </el-col>
      <el-col>
        <el-input placeholder="请输入新密码" show-password>
        </el-input>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "SetUp"
    }
</script>

<style scoped>

</style>
