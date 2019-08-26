<template>
    <el-container>
      <div style="width: 100%">
        <Nav></Nav>
      </div>
      <body id="poster" style="width: 100%">
      <el-form class="blog-container" label-position="left"
               label-width="0px">
        <h3 class="blog_title">编辑博客</h3>
        <el-form-item>
          <el-input
            type="textarea"
            autosize
            placeholder="标题"
            v-model="textarea1">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="正文"
            v-model="textarea2">
          </el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 50%;background: #505458;border: none" v-on:click="publish">提交</el-button>
        </el-form-item>
      </el-form>
      </body>
    </el-container>
</template>

<script>
    import Nav from "./Nav";
    export default {
        name: "BlogEditor",
        components: {Nav},
        data() {
            return {
                textarea1: '',
                textarea2: ''
            }
        },
        methods: {
            publish () {
                this.$axios.get('api/publish', {
                    params: {
                        username:this.$store.state.UserName,
                        title:this.textarea1,
                        article:this.textarea2
                    }
                })
                    .then(response => {
                        alert("success")
                    })
                    .catch(error => {
                    })
            }
        }
    }
</script>

<style scoped>
  .editor {

  }
  #poster {
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .blog-container{
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    position: center;
  }
</style>
