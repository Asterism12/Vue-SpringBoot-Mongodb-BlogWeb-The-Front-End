<template>
  <el-container id="header">
    <el-menu mode="horizontal" class="el-menu" router :default-active="$route.path"
             @select="handleSelect" @open="handleOpen"
             @close="handleClose">
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="/blog/edit">
        <i class="el-icon-edit"></i>
        <span>编辑博文</span>
      </el-menu-item>
      <el-menu-item index="/login">
        <i class="el-icon-user-solid"></i>
        <span>登录</span>
      </el-menu-item>
      <el-menu-item index="/register">
        <i class="el-icon-user"></i>
        <span>注册</span>
      </el-menu-item>
    </el-menu>
  </el-container>
</template>


<script>
    export default {
        name: 'Nav',

        data: function () {
            return {
                query: '',
            }
        }
    };
</script>

<style scoped>
  #header {
    width: 100%;
    height: 70px;
    line-height: 70px;

    background-color: #ffffff;
    position: fixed;
    z-index: 1;
    top: 0;

    border: white;
    border-radius: 25px;
  }


</style>
