<template>
  <el-input
    type="textarea"
    :autosize="{ minRows: 2, maxRows: 4}"
    placeholder="写下你的评论"
    v-model="textarea1">
  </el-input>
</template>

<script>
    export default {
        name: "CommentEditor",
        data() {
            return {
                textarea1: ''
            }
        },
        comment () {
            this.$axios.get('api/comment', {
                params: {
                    username:this.$store.state.UserName,
                    id: this.$route.params.id,
                    content:this.textarea1
                }
            })
                .then(response => {
                    alert("success")
                })
                .catch(error => {
                })
        }
    }
</script>

<style scoped>

</style>
