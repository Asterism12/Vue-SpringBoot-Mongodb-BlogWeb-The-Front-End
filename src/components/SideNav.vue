<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu mode="vertical"
              default-active="0"
               class="el-menu-vertical"
               @select="handleSelect"
               @open="handleOpen"
               @close="handleClose"
                background-color="#ffffff"
                text-color="#555"
      active-text-color="#ffd04b"
      :default-openeds=["0"]>
        <template>
          <h5 class="aside-title">博客分类</h5>
        </template>
        <el-submenu index="0">
          <el-menu-item-group>
            <el-menu-item index="0">
              总览
            </el-menu-item>
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
              人工智能
            </el-menu-item>
            <el-menu-item index="5">
              其它
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
        inject: ["reload"],
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key) {
                this.$store.state.classification = key
                this.reload()
            }
        }
    }
</script>

<style scoped>

  .tac {
    width: 200px;
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
