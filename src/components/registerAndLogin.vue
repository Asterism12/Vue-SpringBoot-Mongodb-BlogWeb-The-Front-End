<template>
  <el-dialog title="登录" :width="50%" :visible="dialogVisible" @close="cancel">
    <el-form>
      <el-form-item label="邮箱" :label-width="formLabelWidth" >
        <el-input type="password" placeholder="密码" v-model="params.password" autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item v-if="handleFlag === 'register'" label="昵称" :label-width="formLabelWidth">
        <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item v-if="handleFlag === 'register'" label="手机" :label-width="formLabelWidth">
        <el-input v-model="params.phone" placeholder="手机号" autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item v-if="handleFlag === 'register'" label="空间" :label-width="formLabelWidth">
        <el-input v-model="params.desc" placeholder="个人空间" autocomplete="off">
        </el-input>
      </el-form-item>
      <div slot="footer" class="dialog-footer">
        <el-button v-if="handFlag === 'login'" :loading="btnLoading"
                   type="primary" @click="handleOk('login')">登录</el-button>
        <el-button v-if="handleFlag === 'register'" :loading="btnLoading"
                   type="primary" @click="handleOk('register')">注册</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
  import {Prop} from "vue/types/options"

  improt { Component, Emit, Prop, Vue} from "vue-property-decorator";
  import config from "@/utils/config";

  @Component({

  })

  export default class RegisterAndLogin extends Vue{
      @Prop({ default: false}) visible!: boolean;
      @Prop({ default: false}) handleFlag!: string;
      @Prop({ default: false}) isMobile!: string;

      btnLoading: boolean = false;
      loading: boolean = false;
      formLabelWidth: string = "60px";
      data () {
        return {
            params: {
                email: "",
                name: "",
                password: "",
                phone: "",
                desc: ""
            }
            rules: {
                name: [
                    {required: true, message : '请输入用户名'}
                ]
            }
        }
      }


      mounted() {}

      //computed
      get dialogVisible() {
          return this.visible;
      }

      //method


    name: 'registerAndLogin'
  }
</script>

<style scoped>

</style>
