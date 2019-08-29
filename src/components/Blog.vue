<template>
  <div class="Blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <el-row>
      <div>
        <el-card class="box-card" v-for="comment in blog.commentsArrayList":key="blog.comments.bid">
            <div slot="header" class="clearfix">
            <span>{{comment.username}}</span>
          </div>
          <div  class="text item">
            {{comment.content}}
          </div>
        </el-card>
      </div>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Blog",
        data() {
            return {
                id: this.$route.params.id,
                blog: {},
                test:[]
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
                    alert(this.blog.commentsArrayList)
                })
                .catch(error => {
                })
        },
    }
</script>

<style scoped>
  .Blog {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
  }
</style>
