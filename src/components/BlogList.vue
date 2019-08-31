<template>
  <div style="width: 490px">
    <el-card class="box-card" v-for="blog in blogs":key="blog.bid">

      <div slot="header" class="clearfix" >
        <el-row>
          <el-link @click="GoToBlog(blog.bid)" style="float: left;font-size: large;color: #3399ff">{{blog.title}}</el-link>
        </el-row>
        <el-row>
          <div style="float: bottom">
            <div style="float: right;font-size: smaller;color: #9D9D9D">{{blog.date}}&nbsp;&nbsp;&nbsp;作者:{{blog.author}}&nbsp;&nbsp;&nbsp;阅读量:{{blog.viewCount}}
              &nbsp;&nbsp;&nbsp;评论数:{{blog.commentCount}}</div>
          </div>
        </el-row>
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
    <br/>
  </div>
</template>

<script>
  import store from "../store";
    export default {
        name: "BlogList",
        data(){
            return{
                blogs:[],
            }
        },
        created() {
            this.$axios.get('/lists', {
                params: {
                    username:store.state.UserInfo.UserName,
                    keyword:'',
                    classification:this.$store.state.Classification
                }
            })
                .then(response => {
                    this.blogs = response.data
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
    float: left;
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
    width: 690px;
    margin-top: 20px;
  }
</style>
