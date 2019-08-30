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
      <div>
        <span>用户名:{{this.$store.state.UserInfo.UserName}}</span>
        <hr/>
      </div>
      <div>
        <span>性别:{{this.$store.state.UserInfo.Sex}}</span>
        <hr/>
      </div>
      <div>
        <span>年龄:{{this.$store.state.UserInfo.Age}}</span>
        <hr/>
      </div>
      <div>
        <span>注册时间:{{this.$store.state.UserInfo.RegisterDate.toLocaleString()}}</span>
        <hr/>
      </div>
      <div>
        <span>签名:{{this.$store.state.UserInfo.Sign}}</span>
        <hr/>
      </div>
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
