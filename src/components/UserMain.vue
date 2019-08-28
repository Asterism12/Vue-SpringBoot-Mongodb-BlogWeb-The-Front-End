<template>
  <div style="width: 100%;">
    <div>
      <Nav></Nav>
    </div>
    <div>
      <el-avatar src="this.$store.state.AvatarUrl" :size="90"></el-avatar>
    </div>
    <p></p>
    <el-card style="width: 25%;margin:0 auto">
      <div>
        <span>用户名:{{this.$store.state.UserName}}</span>
        <hr/>
      </div>
      <div>
        <span>性别:{{this.$store.state.Sex}}</span>
      </div>
    </el-card>
    <div style="margin:0 auto;width: 50%">
      <listtest></listtest>
    </div>
  </div>
</template>

<script>
  import Nav from "./Nav";
    export default {
        name: "UserMain",
        components: {
            Nav,

        },
        data() {
            return {
                msg: "This is the homepage of the User",
                userinfo: {}
            }
        },
        created() {
            this.$axios.get('api/user', {
                params: {
                    uid: this.id
                }
            })
                .then(response => {
                    console.log(response);
                    this.userinfo = response.data;
                })
                .catch(error => {
                })
        },
    }
</script>

<style scoped>

</style>
