<template>
  <div style="width: 100%">
    <div>
      <Nav></Nav>
    </div>
    <el-container style="width: 100%">
      <el-aside style="margin-top: 30px;width: 30%">
            <el-dropdown @command="handleCommand" style="float: left;" >
            <span class="el-dropdown-link">
              选择设置<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-item command="1">设置头像</el-dropdown-item>
              <el-dropdown-item command="2">设置个人信息</el-dropdown-item>
            </el-dropdown>
      </el-aside>
      <el-main style="width: 55%;">
          <div v-if="this.set === '1'" style="width: 100%">
            <div style="float: left;width: 100%">
              <el-card style="width: 60%;background-color: #F3F3FA">
                头像设置
              </el-card>
            </div>
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
                    :before-upload="beforeAvatarUpload"
                    :http-request="changefile">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-row>
              </el-container>
              <el-button type="primary" @click="modifyavatar">上传</el-button>
            </div>
          </div>
          <div v-if="this.set === '2'">
            <el-row>
                <div style="float: left;width: 100%">
                  <el-card style="width: 60%;background-color: #F3F3FA">
                    信息设置
                  </el-card>
                </div>
            </el-row>
              <el-row>
                  <div style="width:100%;margin-top: 30px">
                    <span style="float: left">性别：</span>
                    <div style="float: left">
                      <el-radio v-model="sex" label="男" border>男</el-radio>
                      <el-radio v-model="sex" label="女" border>女</el-radio>
                    </div>
                  </div>
              </el-row>
              <el-row>
                  <div style="margin-top: 30px;width: 100%">
                    <span style="float: left">年龄：</span>
                    <el-input v-model.number="age" type='number' style="width: 30%;float: left"></el-input>
                  </div>
              </el-row>
              <el-row>
                <div style="margin-top: 30px;width: 100%">
                  <el-row>
                    <span style="float: left">个性签名：</span>
                  </el-row>
                  <el-row style="margin-top: 20px">
                    <el-input v-model="sign" style="width: 60%;height: 150px;float: left"></el-input>
                  </el-row>
                </div>
              </el-row>
            <el-row>
              <el-button type="primary" icon="el-icon-check" @click="modifyinfo" style="float: left; margin-left: 200px">
                确定
              </el-button>>
              <div style="width: 100%;margin-top: 25px">
              </div>
            </el-row>
          </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    import Nav from "./Nav";
    import store from "../store";
    export default {
        components: {
            Nav
        },
        data() {
            return {
                imageUrl:'',
                file:'',
                set: '1',
                sex: store.state.UserInfo.Sex,
                age: store.state.UserInfo.Age,
                sign: store.state.UserInfo.Sign
            };
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
            modifyinfo(){
                this.$axios
                    .post('/modifyinfo', {
                        username: store.state.UserInfo.UserName,
                        sex:this.sex,
                        age:this.age,
                        sign:this.sign
                    })
                    .then(successResponse => {
                        alert(successResponse.data.message)
                        this.loadUserInfo()
                    })
                    .catch(failResponse => {
                    })
            },
            modifyavatar(){
                const formFile = new FormData();
                formFile.append("file", this.file);
                this.$axios
                    .post('/modifyavatar', {
                        username:store.state.UserInfo.UserName,
                        avatar:formFile
                    })
                    .then(successResponse => {
                        alert(successResponse.data.message)
                        this.loadUserInfo()
                    })
                    .catch(failResponse => {
                    })
            },
            changefile(file){
                this.file=file
            },
            loadUserInfo(){
                this.$axios
                    .get('/user', {
                        params:{username: store.state.UserInfo.UserName}})
                    .then(successResponse => {
                        store.state.LoginState=true
                        store.state.UserInfo.UserName=successResponse.data.username
                        store.state.UserInfo.RegisterDate=successResponse.data.registertime
                        store.state.UserInfo.Blogs=successResponse.data.blogs
                        store.state.UserInfo.Avatar=successResponse.data.avatar
                        store.state.UserInfo.Age=successResponse.data.age
                        store.state.UserInfo.Sex=successResponse.data.sex
                        store.state.UserInfo.Sign=successResponse.data.sign
                    })
                    .catch(failResponse => {
                    })
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
