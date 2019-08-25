<template>
  <div>
    <h1>User</h1>
    <p>{{msg}}</p>
    <el-row>
      <el-table :data="userinfo">
        <el-table-column prop="Id" label="用户名">
        </el-table-column>

        <el-table-column prop="Sex" label="性别">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "UserMain",
        data() {
            return {
                msg: "This is the homepage of the User"
                userinfo: {}
            }
        },
        created() {
            axios.get('api/user', {
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
