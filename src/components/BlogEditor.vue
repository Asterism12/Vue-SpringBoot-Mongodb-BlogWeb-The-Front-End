<template>
    <div>
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
    </div>
</template>

<script>
  import store from "../store";
    export default {
        name: "BlogEditor",
        data() {
            return {
                textarea1: '',
                textarea2: ''
            }
        },
        methods: {
            publish () {
                axios.get('api/user', {
                    params: {
                        username:store.state.UserName,
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

</style>
