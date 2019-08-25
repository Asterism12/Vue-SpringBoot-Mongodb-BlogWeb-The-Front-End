<template>
  <div class="log">
    用户名:<input type="text" v-model="registerForm.username" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="registerForm.password" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">注册</button>
  </div>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                registerForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },
        methods: {
            login () {
                this.$axios
                    .post('api/login', {
                        username: this.registerForm.username,
                        password: this.registerForm.password
                    })
                    .then(successResponse => {
                        alert("success jieshou")
                        if (successResponse.data.code === 200) {
                            this.$router.replace({path: '/HelloWorld'})
                        }else{
                            this.$router.replace({path: '/HelloWorld'})
                        }
                    })
                    .catch(failResponse => {
                    })
            }
        }
    }
</script>

<style>
  .log {
    margin-top: 200px;
  }
</style>
