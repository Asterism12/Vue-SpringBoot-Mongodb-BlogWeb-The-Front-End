<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>今日推荐</span>
      </div>
      <div v-for="blog in blogs" :key="blog.bid" class="text item">
        <el-row style="margin-top:10px;width: 100%">
          <el-col style="width: 100%">
            <el-card style="height: 60px">
              <el-link @click="GoToBlog(blog.bid)" style="margin:0 auto">{{blog.title.length<15?blog.title:blog.title.slice(0,15)+"..."}}
              </el-link>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>

  </div>
</template>

<script>
    import store from "../store";

    export default {
        name: "Recommended",
        data() {
            return {
                blogs: [],
            }
        },
        created() {
            this.$axios.post('/recommend', {
                username: store.state.UserInfo.UserName
            })
                .then(response => {
                    console.log(response.data)
                    this.blogs = response.data;
                })
                .catch(error => {
                })
        },
        methods: {
            GoToBlog: function (bid) {
                this.$router.push({name: 'blog', params: {id: bid}})
            }
        }
    }
</script>

<style scoped>
  .text {
    font-size: 10px;
  }

  .item {
    margin-bottom: 5px;
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
