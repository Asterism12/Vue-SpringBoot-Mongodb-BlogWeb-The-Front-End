<template>
  <div class="Blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.article}}</article>
    <el-row>
      <el-table :data="blog.comments">
        <el-table-column prop="username" label="用户名">
        </el-table-column>

        <el-table-column prop="content" label="评论">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Blog",
        data() {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
        created() {
            this.$axios.get('api/blogs', {
                params: {
                    bid: this.id
                }
            })
                .then(response => {
                    console.log(response);
                    this.blog = response.data;
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
