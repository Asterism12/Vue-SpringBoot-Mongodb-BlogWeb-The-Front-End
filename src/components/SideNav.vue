<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2"
               class="el-menu-vertical"
               @open="handleOpen"
               @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
      active-text-color="#ffd04b">
        <template>
          <h5 class="aside-title">博客分类</h5>
        </template>
        <el-submenu index="1">
          <template>
          </template>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>总览</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1">
              Java
            </el-menu-item>
            <el-menu-item index="2">
              Python
            </el-menu-item>
            <el-menu-item index="3">
              云计算/大数据
            </el-menu-item>
            <el-menu-item index="4">
              区块链
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "SideNav",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

  .tac {
    width: 100%;
  }
  .el-menu-vertical{
    width: 200px;
    position: center;
  }

  .el-icon-location{
    margin-left: -20px;
  }

  .aside-title{
    height: 20px;
    font-size: medium;
  }
</style>
