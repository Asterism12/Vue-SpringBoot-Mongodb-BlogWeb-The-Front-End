<template>
  <div>
    <el-table
      :data="blogs"
      style="width: 100%">
      <el-table-column
        label="今日推荐"
        width="180">
        <template slot-scope="scope">
          <el-link @click="GoToBlog(scope.row.bid)">
            {{ scope.row.title.length<20?scope.row.title:scope.row.title.slice(0,20)+"..." }}
          </el-link>
        </template>
      </el-table-column>
    </el-table>
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
    width: 300px;
  }
</style>
