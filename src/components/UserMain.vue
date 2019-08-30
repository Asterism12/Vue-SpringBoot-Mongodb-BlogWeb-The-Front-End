<template>
  <div style="width: 100%;">
    <div>
      <Nav></Nav>
    </div>
    <div>
      <el-avatar :src="this.$store.state.UserInfo.Avatar" :size="90"></el-avatar>
    </div>
    <p></p>
    <el-card style="width: 25%;margin:0 auto">
      <el-row>
        <span style="float: left;color: #000000">用 户 名:{{this.$store.state.UserInfo.UserName}}</span>
      </el-row>
      <hr color="#f6f6f6"/>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">性 别:{{this.$store.state.UserInfo.Sex}}</span>
      </el-row>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">年 龄:{{this.$store.state.UserInfo.Age}}</span>
      </el-row>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">注 册 时 间:{{this.$store.state.UserInfo.RegisterDate.toLocaleString()}}</span>
      </el-row>
      <hr color="#f6f6f6"/>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">签 名:{{this.$store.state.UserInfo.Sign}}</span>
      </el-row>
    </el-card>
    <div style="width: 490px">
      <el-card class="box-card" v-for="blog in this.$store.state.UserInfo.Blogs":key="blog.bid">
        <div slot="header" class="clearfix" >
          <el-link @click="GoToBlog(blog.bid)">{{blog.title}}</el-link>
        </div>
        <div class="body">
          <el-col :span="2" style="background-color: #42b983">
          </el-col>
          <el-col>
            <div class="text">
              {{blog.abstract}}
            </div>
          </el-col>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import Nav from "./Nav";
    export default {
        name: "UserMain",
        components: {
            Nav,
        },
        data() {
            return {}
        },
        methods:{
            GoToBlog : function(bid){
                this.$router.push({ name: 'blog', params: { id: bid }})
            }
        }
    }
</script>

<style scoped>

</style>
