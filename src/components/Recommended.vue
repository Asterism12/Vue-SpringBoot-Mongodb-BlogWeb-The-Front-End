<template>
  <div>
<<<<<<< HEAD

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>今日推荐</span>
      </div>
      <div v-for="blog in blogs" :key="blog.bid" class="text item">
        <el-row style="margin-top: 10px;width: 100%">
          <el-col style="width: 100%">
            <el-card>
              <el-link @click="GoToBlog(blog.bid)">{{blog.title.length<15?blog.title:blog.title.slice(0,15)+"..."}}</el-link>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>

=======
    <el-table
      :data="blogs"
      style="width: 100%">
      <el-table-column
        label="今日推荐"
        width="width:200%">
        <template slot-scope="scope">
          <el-link @click="GoToBlog(scope.row.bid)">
            {{ scope.row.title.length<20?scope.row.title:scope.row.title.slice(0,20)+"..." }}
          </el-link>
        </template>
      </el-table-column>
    </el-table>
>>>>>>> 4443e9a0ba092b227ddd9fa1ece5042756c333bb
  </div>
</template>

<script>
  import store from "../store";
    export default {
        name: "Recommended",
        data(){
            return{
                blogs:[],
            }
        },
        created() {
            this.$axios.post('/recommend', {
                params: {
                    username:store.state.UserInfo.UserName
                }
            })
                .then(response => {
                    console.log(response.data)
                    this.blogs = response.data;
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
    width: 24%;
    font-weight: bold;
  }
</style>
