<template>
  <div style="width: 100%">
    <div>
      <Nav></Nav>
    </div>
    <el-container style="width: 100%">
      <el-row style="margin-top: 30px;width: 100%">
        <el-col style="width: 100%">
            <el-dropdown @command="handleCommand" style="float: left;" >
            <span class="el-dropdown-link">
              选择设置<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-item command="1">设置头像</el-dropdown-item>
              <el-dropdown-item command="2">设置个人信息</el-dropdown-item>
            </el-dropdown>
        </el-col>
        <el-col style="width: 100%">
          <div v-if="this.set === '1'" style="width: 100%">
            <el-row>
              <div>
                <el-card style="width: 60%;margin:0 auto;background-color: #F3F3FA">
                  头像设置
                </el-card>
              </div>
            </el-row>
            <div style="width: 100%">
              <el-container style="width: 100%">
                <el-row style="width: 100%">
                  <el-avatar src="this.$store.state.AvatarUrl" :size="90"></el-avatar>
                </el-row>
                <el-row style="width: 100%">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-row>
              </el-container>
            </div>
          </div>
          <div v-if="this.set === '2'">
            <el-row>
              <el-col>
                <div>
                  <el-card style="width: 60%;margin:0 auto;">
                    信息设置
                  </el-card>
                </div>
              </el-col>
              <el-col>
                <div>
                  <el-radio v-model="sex" label="男" border>男</el-radio>
                  <el-radio v-model="sex" label="女" border>女</el-radio>
                </div>
                <br/>
                <el-input placeholder="再次输入新密码" v-model="input2" show-password style="width: 40%;margin-top: 20px"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <div>
                <el-button type="primary" icon="el-icon-check" @click="checkPassword" style="margin-top: 30px">
                  确定
                </el-button>
              </div>
            </el-row>
          </div>
          <!--<div v-if="this.set === '2'">
            <el-row>
              <el-col>
                <div>
                  <el-card style="width: 60%;margin:0 auto;">
                    密码设置
                  </el-card>
                </div>
              </el-col>
              <el-col>
                <el-input placeholder="请输入新密码" v-model="input1" show-password style="width: 40%;margin-top: 40px">
                </el-input>
                <br/>
                <el-input placeholder="再次输入新密码" v-model="input2" show-password style="width: 40%;margin-top: 20px"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <div>
                <el-button type="primary" icon="el-icon-check" @click="checkPassword" style="margin-top: 30px">
                  确定
                </el-button>
              </div>
            </el-row>
          </div>-->
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
    import Nav from "./Nav";
    export default {
        components: {
            Nav
        },
        data() {
            return {
                imageUrl: '',
                input1: '',
                input2: '',
                set: '1',
                sex: '',
                age: 0,
                sign: ''
            };
        },
        created() {
            this.$axios
                .post('/user', {
                    username: this.$store.state.UserName,
                })
                .then(successResponse => {
                        this.sex=successResponse.data.ret.sex
                        this.age=successResponse.data.ret.age
                })
                .catch(failResponse => {
                })
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            handleCommand(command) {
                this.set = command
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            checkPassword() {
                if (this.input1 === this.input2) {
                    this.$axios
                        .post('/changepwd', {
                            username: this.$store.state.UserName,
                            password: this.inpu
                        })
                        .then(successResponse => {
                            if (successResponse.data.code === 200) {
                                alert("success")
                                this.$store.state.LoginState=true
                                this.$store.state.UserName=this.registerForm.username
                                this.$router.push({path: '/'})
                            } else {
                                alert("fail")
                                this.input1 = ''
                                this.input2 = ''
                                this.$router.push({path: 'setup'})
                            }
                        })
                }
                else{
                    alert("fail")
                    this.input1 = ''
                    this.input2 = ''
                    this.$router.push({path: 'setup'})
                }
            }
        }
    }
</script>

<style scoped>
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader :hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
