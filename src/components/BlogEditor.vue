<template>
    <el-container>
      <el-row>
        <Nav></Nav>
      </el-row>
      <el-row>
        <el-input
          type="textarea"
          autosize
          placeholder="标题"
          v-model="textarea1">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="正文"
          v-model="textarea2">
        </el-input>
      </el-row>
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
                axios.get('api/publish', {
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
</style>
