<template>
  <el-container>
    <Nav></Nav>
    <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">
      <h3 class="login_title">注 册</h3>
      <el-form-item>
        <el-input type="text" v-model="registerForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="password1"
                  auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="password2"
                  auto-complete="off" placeholder="请重新输入密码"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 50%;background: #d8bfd8;border: none" v-on:click="register">注册账号
        </el-button>
      </el-form-item>
    </el-form>
    </body>
  </el-container>
</template>

<script>
  import store from "../store";
  import Nav from "./Nav";
    export default {
        name: 'Register',
        components:{Nav},
        data() {
            return {
                registerForm: {
                    username: '',
                    password: ''
                },
                responseResult: [],
                password1:'',
                password2:'',
            }
        },
        methods: {
            register() {
                if (this.password2 !== this.password1) {
                    this.$alert('两次密码不一致','注册失败', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message ({
                                type:'info',
                                    message: '注册失败'
                            })
                        }
                    })
                }
                else{
                    this.registerForm.password = this.password1
                    this.$axios
                        .post('/register', {
                            username: this.registerForm.username,
                            password: this.registerForm.password
                        })
                        .then(successResponse => {
                            if (successResponse.data.code === 200) {
                                this.$alert('','注册成功', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        this.$message ({
                                            type:'info',
                                            message: '注册成功'
                                        })
                                    }
                                })
                                store.state.LoginState=true
                                store.state.UserInfo.UserName=this.registerForm.username
                                this.$router.push({path: '/'})
                            } else {
                                this.$alert('','注册失败', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        this.$message ({
                                            type:'info',
                                            message: successResponse.data.message
                                        })
                                    }
                                })
                                this.$router.push({path: '/register'})
                            }
                        })
                        .catch(failResponse => {
                        })
                }
            }
        }
    }
</script>

<style>
  #poster {
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body {
    margin: 0px;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  body{
    background-color: #f6f6f6;
    position: relative;
  }
</style>
