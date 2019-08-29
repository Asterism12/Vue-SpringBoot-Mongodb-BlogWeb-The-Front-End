<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>今日推荐</span>
      </div>
      <div v-for="blog in blogs" :key="bid" class="text item">
        <el-link @click="GoToBlog(blog.bid)">{{blog.title.length<15?blog.title:blog.title.slice(0,15)+"..."}}</el-link>
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
            this.$axios.get('/lists', {
                params: {
                    keyword:'',
                    classification:0
                }
            })
                .then(response => {
                    this.blogs = response.data;
                })
                .catch(error => {
                })
        },
        methods:{
            GoToBlog : function(bid){
                alert(bid)
                this.$router.push({ name: 'blog', params: { id: bid }})
            }
        }
    }
</script>

<style scoped>
  .box-card {
    width: 350px;
  }
</style>
