<template>
  <el-container>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="写下你的评论"
      v-model="textarea1">
    </el-input>
    <el-button type="primary" ico="-el-icon-s-comment" @click="comment">
      发表评论
    </el-button>

  </el-container>
</template>

<script>
    export default {
        name: "CommentEditor",
        data() {
            return {
                textarea1: ''
            }
        },
        methods: {
            comment() {
                this.$axios.get('/comment', {
                    params: {
                        username: store.state.UserInfo.UserName,
                        bid: this.$route.params.id,
                        content: this.textarea1
                    }
                })
                    .then(response => {
                        alert(response.data.message)
                        this.$router.push({name: 'blog', params: {id: this.$route.params.id,}})
                    })
                    .catch(error => {
                    })
            }
        }
    }
</script>

<style scoped>

</style>
