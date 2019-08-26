<template>
  <div style="width: 100%">
  <el-card class="box-card" v-for="blog in blogs":key="blog.bid">
    <div slot="header" class="clearfix" >
      <span class="title">{{blog.title}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="GoToBlog(blog.bid)">查看博客</el-button>
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
</template>

<script>
    export default {
        name: "BlogList",
        data(){
            return{
                blogs:[{title:'titletitle',abstract:'abstractabstract',bid:1},
                    {title:'titletitle',abstract:'abstractabstract',bid:2}]
            }
        },
        methods:{
            GoToBlog : function(bid){
                alert(bid);
                this.$router.push({ name: 'blog', params: { id: bid }})
            }
        }
    }
</script>

<style>
  .text {
    font-size: 12px;
    float: left;
  }

  .title{
    float: left;
    font-weight: bold;
    font-family: "Microsoft YaHei";
    font-size: large;
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
    margin-top: 20px;
    position: center;
  }
</style>
