<template>
  <el-container>
    <Nav></Nav>
    <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">
      <h3 class="login_title">注册</h3>
      <el-form-item>
        <el-input type="text" v-model="registerForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="registerForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
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
                responseResult: []
            }
        },
        methods: {
            register() {
                this.$axios
                    .post('/register', {
                        username: this.registerForm.username,
                        password: this.registerForm.password
                    })
                    .then(successResponse => {
                        if (successResponse.data.code === 200) {
                            this.$store.state.LoginState=true
                            this.$router.push({path: '/'})
                        } else {
                            alert("fail")
                            this.$router.push({path: '/register'})
                        }
                    })
                    .catch(failResponse => {
                    })
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
</style>
