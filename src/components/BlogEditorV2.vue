<template>
  <div>
    <el-row>
      <el-form>
        <el-form-item label="文章标题">
          <el-col :span="6">
            <el-input v-model="model.title"></el-input>
          </el-col>
        </el-form-item>
        <el-card>
          <div>
            {{this.model.date}}
          </div>
        </el-card>
        <el-form-item>
          <el-col>
            <mavon-editor v-model="model.content"></mavon-editor>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-row>
            <el-col :span="4">
              <el-dropdown @command="handleCommand" trigger="click" style="float: left;height: 100%">
            <span class="el-dropdown-link">
                分类<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="1">Java</el-dropdown-item>
                  <el-dropdown-item command="2">Python</el-dropdown-item>
                  <el-dropdown-item command="3">云计算/大数据</el-dropdown-item>
                  <el-dropdown-item command="4">人工智能</el-dropdown-item>
                  <el-dropdown-item command="5">其它</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <div style="width: 200px;height: 40px;" >
                <div style="margin-top: 0px">{{this.classname}}</div>
              </div>
            </el-col>
            <el-col :span="20">
              <el-button type="primary" size="large" @click="submit" style="float: right">发表</el-button>
            </el-col>
          </el-row>
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
                    username: this.$store.state.UserName,
                    title: '',
                    content: '',
                    classification:0,
                    date: new Date().toLocaleString()
                },
                classname: ""
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
            },
            handleCommand(command) {
                this.model.classification= command;
                if(command === "1") {
                    this.classname = "Java"
                }
                if(command === "2") {
                    this.classname = "Python"
                }
                if(command === "3") {
                    this.classname = "云计算/大数据"
                }
                if(command === "4") {
                    this.classname = "人工智能"
                }
                if(command === "5") {
                    this.classname = "其它"
                }
            }
        }
    }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
