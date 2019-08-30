<template>
  <el-container id="header">
    <el-row style="width: 100%;height: 10px">
      <el-col>
        <el-menu mode="horizontal" class="el-menu" router :default-active="$route.path"
                 @select="handleSelect" @open="handleOpen"
                 @close="handleClose" background-color="#505458" active-text-color="#ffffff">
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="/blog/edit" v-if="this.$store.state.LoginState">
            <i class="el-icon-edit"></i>
            <span>编辑博文</span>
          </el-menu-item>
          <el-menu-item index="/share" v-if="this.$store.state.LoginState">
            <i class="el-icon-folder-opened"></i>
            <span>资源分享</span>
          </el-menu-item>
          <el-col v-if="this.$store.state.LoginState" style="width: 400px;height: 100%;margin-left: 60px;margin-top: 0">
            <Search></Search>
          </el-col>
          <el-submenu v-if="this.$store.state.LoginState" style="float: right">
            <template slot="title">
              <i class="el-icon-star-on>"></i>
              {{this.$store.state.UserInfo.UserName}}
            </template>
            <el-menu-item index="/setup">
              个人设置
            </el-menu-item>
            <el-menu-item @click="GoToUserMain">
              个人主页
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/login" v-if="!this.$store.state.LoginState" style="float: right">
            <i class="el-icon-user-solid"></i>
            <span>登录</span>
          </el-menu-item>
          <el-menu-item index="/register" v-if="!this.$store.state.LoginState" style="float: right">
            <i class="el-icon-user"></i>
            <span>注册</span>
          </el-menu-item>
        </el-menu>
       </el-col>
    </el-row>
  </el-container>
</template>


<script>
    import Search from "./Search";
    import store from "../store";
    export default {
        name: 'Nav',
        components: {Search},
        data: function () {
            return {
                query: '',
            }
        },
        methods:{
            GoToUserMain(){
                this.$router.push({ name: 'usermain', params: { username: store.state.UserInfo.UserName }})
            }
        }
    };
</script>

<style scoped>
  #header {
    width: 100%;
    height: 70px;
    line-height: 70px;

    position: fixed;
    z-index: 1;
    top: 0;


  }

</style>
