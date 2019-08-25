<template>
  <div class="Blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
    export default {
        name: "Blog",
        data(){
            return{
                id:this.$route.params.id,
                blog:{}
            }
        },
        created(){
            axios.get('/blog')//wait for fix
                .then(response=>{
                    console.log(response);
                    this.blog=response.data;
                })
                .catch(error=>{
                })
        },
    }
</script>

<style scoped>
  .Blog{
    max-width: 960px;
    margin:0 auto;
    padding:20px;
    background: #eee;
    border:1px dotted #aaa;
  }
</style>
