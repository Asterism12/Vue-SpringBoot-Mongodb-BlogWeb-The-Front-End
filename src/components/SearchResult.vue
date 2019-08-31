<template>
  <div>

    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple-dark">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </el-col>
      <el-col :span="4"></el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <el-button @click="Search()">开始搜索</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <p>搜索文章</p>
          <el-card class="box-card" v-for="blog in blogresults" :key="blog.bid">
            <div slot="header" class="clearfix">
              <el-link @click="GoToBlog(blog.bid)" style="float: left;font-size: large;color: #3399ff">{{blog.title}}</el-link>
            </div>
            <div class="text item">
              {{blog.abstract}}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <p>搜索用户</p>
          <el-card class="box-card" v-for="userresult in userresults" :key="userresult.uid">
            <div slot="header" class="clearfix">
              <el-link @click="GoToUser(userresult.username)" style="float: left;font-size: large;color: #d8bfd8">
                <el-avatar :src="'http://114.115.170.8:8666/avatar/'+userresults.username+'.jpg'" :size="small" shape="square" fit="true" style="float: left"></el-avatar>
                <span style="float: left;margin-top: 13px">&nbsp;&nbsp;&nbsp;{{userresult.username}}</span>
              </el-link>
            </div>
            <div class="text item">
              <hr color="#f6f6f6"/>
              <el-row style="margin-top: 15px">
                <span style="float: left;color: #000000">性 别:{{userresult.sex}}</span>
              </el-row>
              <el-row style="margin-top: 15px">
                <span style="float: left;color: #000000">年 龄:{{userresult.age}}</span>
              </el-row>
              <el-row style="margin-top: 15px">
                <span style="float: left;color: #000000">注 册 时 间:{{userresult.registerdate}}</span>
              </el-row>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import store from "../store";

    export default {
        name: "SearchResult",
        data() {
            return {
                input: this.$store.state.SearchKeyword,
                blogresults: [],
                userresults: []
            }
        },
        mounted() {
            this.Search()
        },
        methods: {
            Search: function () {
                this.$axios.get('/lists', {
                    params: {
                        username:store.state.UserInfo.UserName,
                        keyword: this.input,
                        classification:0
                    }
                })
                    .then(response => {
                        this.blogresults = response.data;
                    })
                    .catch(error => {
                    })
                this.$axios.get('/userlists', {
                    params: {
                        keyword: this.input,
                    }
                })
                    .then(response => {
                        this.userresults = response.data;
                    })
                    .catch(error => {
                    })
            },
            GoToBlog : function(bid){
                this.$router.push({ name: 'blog', params: { id: bid }})
            },
            GoToUser : function(username){
                this.$router.push({ name: 'usermain', params: { username: username }})
            }
        }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;

    line-height: 30px;
    font-family: SimHei;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    margin: 0 auto;
    margin-top: 10px;
  }
</style>
