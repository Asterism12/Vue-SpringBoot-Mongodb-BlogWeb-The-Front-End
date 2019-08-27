<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>今日推荐</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="blog in blogs" :key="bid" class="text item">
        {{blog.title.lenth<15?blog.title:blog.title.slice(0,15)+"..."}}
      </div>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "Recommended",
        data(){
            return{
                blogs:{}
            }
        },
        created() {
            this.$axios.get('/blogs', {
                params: {
                    bid: this.id
                }
            })
                .then(response => {
                    this.blog = response.data;
                })
                .catch(error => {
                })
        }
    }
</script>

<style scoped>
  .box-card {
    width: 350px;
  }
</style>
