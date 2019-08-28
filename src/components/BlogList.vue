<template>
  <div style="width: 490px">
    <el-card class="box-card" v-for="blog in blogs":key="blog.Id">
      <div slot="header" class="clearfix" >
        <span class="title">{{blog.title}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="GoToBlog(blog.Id)">查看博客</el-button>
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
                blogs:[]
            }
        },
        created() {
            this.$axios.get('/lists', {
                params: {
                    keyword:'',
                    classification:0
                }
            })
                .then(response => {
                    alert("success")
                    this.blogs = response.data
                })
                .catch(error => {
                })
        },
        methods:{
            GoToBlog : function(bid){
                alert("ahah")
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
