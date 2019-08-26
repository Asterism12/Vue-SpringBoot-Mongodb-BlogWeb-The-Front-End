<template>
  <div>
    <el-card class="box-card" v-for="blog in blogs":key="blog.bid">
      <div slot="header" class="clearfix">
        <span>{{blog.title}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="GoToBlog(blog.bid)">查看原文</el-button>
      </div>
      <div  class="text item">
        {{blog.abstract}}
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "BlogList",
        data(){
            return{
                blogs:{}
            }
        },
        created() {
            this.$axios.get('/lists', {
                params: {
                    keyword:'',
                    classification:''
                }
            })
                .then(response => {
                    this.blog = response.data;
                })
                .catch(error => {
                })
        },
        methods:{
            GoToBlog : function(bid){
                this.$router.push({ name: 'blog', params: { id: bid }})
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
