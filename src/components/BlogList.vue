<template>
  <el-card class="box-card" :data="blog">
    <div slot="header" class="clearfix">
      <span>{{blog.title}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="GoToRoute"()>查看原文</el-button>
    </div>
    <div  class="text item">
      {{blog.abstract}}
    </div>
  </el-card>
</template>

<script>
    export default {
        name: "BlogList",
        data(){
            return{
                blog:{}
            }
        },
        methods:{
            GoToRoute : function(){
                this.$router.push({ name: 'blog', params: { id: blog.bid }})
            }
        }
    }
</script>

<style>
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
