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
          <el-card class="box-card" v-for="blogresult in blogresults" :key="blogresult.bid">
            <div slot="header" class="clearfix">
              <el-link @click="GoToBlog(blog.bid)">{{blog.title}}</el-link>
            </div>
            <div class="text item">
              {{blogresult.abstract}}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <p>搜索用户</p>
          <el-card class="box-card" v-for="userresult in userresults" :key="userresult.uid">
            <div slot="header" class="clearfix">
              <el-link @click="GoToBlog(userresult.username)">{{userresult.username}}</el-link>
            </div>
            <div class="text item">
              {{userresult.userinfo}}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
                alert(this.input)
                this.$axios.get('/lists', {
                    params: {
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
  }
</style>
