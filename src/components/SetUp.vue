<template>
  <el-container style="width: 100%">
    <div>
      <el-card>
        头像设置
      </el-card>
    </div>
    <div>
      <el-col :span="12" style="float: left">
        <el-avatar></el-avatar>
      </el-col>
      <el-col :span="12">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
    </div>
    <el-row>
      <el-col>
        密码设置
      </el-col>
      <el-col>
        <el-input placeholder="请输入新密码" v-model="input1" show-password>
        </el-input>
        <el-input placeholder="再次输入新密码" v-model="input2" show-password></el-input>
      </el-col>
    </el-row>
    <el-row>
      <div>
        <el-button type="primary" icon="el-icon-check" @click="checkPassword">
          确定
        </el-button>
      </div>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: '',
                input1: '',
                input2: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
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
</style>
