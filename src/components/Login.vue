<template>
  <el-container>
    <div>
      <Nav></Nav>
    </div>
    <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">
      <h3 class="login_title">登 录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 50%;background: #505458;border: none" v-on:click="login">登录</el-button>
      </el-form-item>
    </el-form>
    </body>
  </el-container>
</template>


<script>

    import Nav from "./Nav";
    import store from "../store";

    export default {
        name: 'Login',
        components: {Nav},
        props: ["showHome"],
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },
        methods: {
            login() {
                this.$axios
                    .post('/login', {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })
                    .then(successResponse => {
                        if (successResponse.data.code === 200) {
                            alert(successResponse.data.message)
                            store.state.UserInfo.UserName=this.loginForm.username
                            this.loadUserInfo()
                            this.$router.push({path: '/'})
                        } else {
                            alert(successResponse.data.message)
                            this.$router.push({path: '/login'})
                        }
                    })
                    .catch(failResponse => {
                    })
            },
            handleSelect(key, keyPath) {
                console.log(key.keyPath);
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
    color: #000000;
  }

</style>

