<template>
  <el-container>
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
          <el-card class="box-card" v-for="blogresult in blogresults":key="bid">
            <div slot="header" class="clearfix">
              <span>{{blogresult.title}}</span>
              <el-button style="float: right; padding: 3px 0" type="text"></el-button>
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
          <el-card class="box-card" v-for="userresult in userresults":key="uid">
            <div slot="header" class="clearfix">
              <span>{{userresult.username}}</span>
              <el-button style="float: right; padding: 3px 0" type="text"></el-button>
            </div>
            <div class="text item">
              {{userresult.userinfo}}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "SearchResult",
        data(){
            return{
                input: '',
                blogresults:[{title:"title",abstract:"abstract",bid:"1"}],
                userresults:[{username:"Asterism",userinfo:"happy"}]
            }
        },
        created() {
            //required for text
        },
        methods:{
            Search:function () {
                this.$axios.get('/lists', {
                    params: {
                        keyword:this.input,
                    }
                })
                    .then(response => {
                        this.blogresults = response.data;
                    })
                    .catch(error => {
                    })
                this.$axios.get('/userlists', {
                    params: {
                        keyword:this.input,
                    }
                })
                    .then(response => {
                        this.userresults = response.data;
                    })
                    .catch(error => {
                    })
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
