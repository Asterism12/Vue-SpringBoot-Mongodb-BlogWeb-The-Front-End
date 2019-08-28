<template>
  <div>
    <el-row>
      <el-form>
        <el-form-item label="文章标题">
          <el-col :span="6">
            <el-input v-model="model.title"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col>
            <mavon-editor v-model="model.content"></mavon-editor>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col>
            <el-button type="primary" size="small" @click="submit">发表</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "BlogEditorV2",
        data() {
            return {
                model: {
                    title: '',
                    content: '',
                }
            }
        },
        methods: {
            submit() {
                this.$axios.post('/publish', this.model)
                    .then(res => {
                        if(res.data.Code === 200) {
                            alert("success")
                            //TO DO
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>
