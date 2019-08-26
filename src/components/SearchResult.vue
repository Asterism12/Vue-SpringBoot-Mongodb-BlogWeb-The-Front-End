<template>
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
</template>

<script>
    export default {
        name: "SearchResult",
        data(){
            return{
                blogresults:[{title:"title",abstract:"abstract",bid:"1"}],
                userresults:[{username:"Asterism",userinfo:"happy"}]
            }
        },
        created() {
            //required
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
