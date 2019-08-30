<template>
  <div>
    <el-row style="z-index: 2">
      <Nav></Nav>
    </el-row>
    <el-row style="margin-top: 35px;z-index: 1">
      <el-form>
        <el-form-item label="文章标题" style="width: 80%;margin: 0 auto">
          <el-col :span="6">
            <el-input v-model="model.title"></el-input>
          </el-col>
        </el-form-item>
        <el-card style="width: 80%;margin:0 auto;margin-top: 20px">
          <div>
            {{this.model.date}}
          </div>
        </el-card>
        <el-form-item>
          <el-col>
            <mavon-editor v-model="model.content" style="width: 80%;margin:0 auto" @imgAdd="imgAdd" @imgDel="imgDel" ref="md"></mavon-editor>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-row style="width: 80%;margin: 0 auto">
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
    import Nav from "./Nav";
    export default {
        name: "BlogEditorV2",
        components: {Nav},
        data() {
            return {
                model: {
                    username: store.state.UserInfo.UserName,
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
                this.$axios.get('/publish', {params:{username:this.model.username,title:this.model.title,content:this.model.content,
                                                    classification:this.model.classification,date:this.model.date}})
                    .then(res => {
                        if(res.data.code === 200) {
                            alert("success")
                            this.$router.push({path:'/'})
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
            },
            imgAdd(pos, $file) {
              var formData = new FormData();
              formData.append('image',$file);
              this.img_file[pos] =$file;
              this.$axios.post('/uploadimg', formData).then(res => {
                    if (res.data.code === 200) {
                        this.$Message.success('上传成功')
                        let url = res.data.data
                        let name = $file.name
                        if (name.includes('-')) {
                            name = name.replace(/-/g, '')
                        }
                        let content = this.model.content
                        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)  这里是必须要有的
                        if (content.includes(name)) {
                            let oStr = `(${pos})`
                            let nStr = `(${url})`
                            let index = content.indexOf(oStr)
                            let str = content.replace(oStr, '')
                            let insertStr = (soure, start, newStr) => {
                                return soure.slice(0, start) + newStr + soure.slice(start)
                            }
                            this.model.content = insertStr(str, index, nStr)
                        }
                    }
                  }

              )
            },
            imgDel(pos) {
                delete this.img_file[pos];
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
