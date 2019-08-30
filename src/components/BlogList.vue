<template>
  <div style="width: 490px">
    <el-card class="box-card" v-for="blog in blogs":key="blog.bid">
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
    <br/>
  </div>
</template>

<script>
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
                    keyword:'',
                    classification:0
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
