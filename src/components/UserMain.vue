<template>
  <div style="width: 100%;">
    <div>
      <Nav></Nav>
    </div>
    <div>
      <el-avatar style="margin-top: 20px" :src="UserInfo.Avatar" :size="90"></el-avatar>
    </div>
    <p></p>
    <el-card style="width: 30%;margin:0 auto">
      <el-row>
        <span style="float: left;color: #000000">用 户 名:{{UserInfo.UserName}}</span>
      </el-row>
      <hr color="#f6f6f6"/>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">性 别:{{UserInfo.Sex}}</span>
      </el-row>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">年 龄:{{UserInfo.Age}}</span>
      </el-row>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">注 册 时 间:{{UserInfo.RegisterDate}}</span>
      </el-row>
      <hr color="#f6f6f6"/>
      <el-row style="margin-top: 15px">
        <span style="float: left;color: #000000">签 名:{{UserInfo.Sign}}</span>
      </el-row>
    </el-card>
    <div style="width: 80%;margin: 0 auto">
      <el-card class="box-card" v-for="blog in this.UserInfo.Blogs":key="blog.bid">
        <div slot="header" class="clearfix" >
          <el-link @click="GoToBlog(blog.bid)" style="float: left;font-size: large;color: #3399ff">{{blog.title}}</el-link>
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
            return {
                UserName:this.$route.params.username,
                UserInfo:{
                    UserName:''
                }
            }
        },
        created(){
            this.$axios
                .get('/user', {
                    params:{username: this.UserName}})
                .then(successResponse => {
                    this.UserInfo.UserName=successResponse.data.username
                    this.UserInfo.RegisterDate=successResponse.data.registertime
                    this.UserInfo.Blogs=successResponse.data.blogs
                    this.UserInfo.Avatar=successResponse.data.avatarurl
                    this.UserInfo.Age=successResponse.data.age
                    this.UserInfo.Sex=successResponse.data.sex
                    this.UserInfo.Sign=successResponse.data.sign
                })
                .catch(failResponse => {
                })
        },
        methods:{
            GoToBlog : function(bid){
                this.$router.push({ name: 'blog', params: { id: bid }})
            }
        }
    }
</script>

<style scoped>
    .box-card{
      margin: 0 auto;
      margin-top: 25px;
    }

    .text {
      font-size: 14px;
      float: left;
      line-height: 30px;
      font-family: SimHei;

    }
</style>
