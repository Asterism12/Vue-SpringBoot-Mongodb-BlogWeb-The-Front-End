<template>
  <div style="width: 100%;background-color: #f6f6f6">
    <el-card class="box-card" v-for="blog in blogs":key="blog.bid">

      <div slot="header" class="clearfix" >
        <el-row>
          <el-link @click="GoToBlog(blog.bid)" style="float: left;font-size: large;color: #3399ff">{{blog.title}}</el-link>
        </el-row>
        <el-row>
          <div style="float: bottom">
            <div style="float: right;font-size: smaller;color: #9D9D9D">{{blog.date}}&nbsp;&nbsp;&nbsp;作者:{{blog.author}}&nbsp;&nbsp;&nbsp;阅读量:{{blog.viewCount}}
              &nbsp;&nbsp;&nbsp;评论数:{{blog.commentCount}}</div>
          </div>
        </el-row>
      </div>
      <div class="body">
        <el-col :span="2">
        </el-col>
        <mavon-editor
          class="md"
          :value="blog.abstract"
          :subfield="prop.subfield"
          :defaultOpen="prop.defaultOpen"
          :toolbarsFlag="prop.toolbarsFlag"
          :editable="prop.editable"
          :scrollStyle="prop.scrollStyle"
          style="margin-top: 20px"
        ></mavon-editor>
        <el-col style="height: 15%">
        </el-col>
      </div>
    </el-card>
    <br/>
  </div>
</template>

<script>
  import store from "../store";
    export default {
        name: "BlogList",
        computed: {
            prop() {
                let data = {
                    subfield: false,// 单双栏模式
                    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                    editable: false,
                    toolbarsFlag: false,
                    scrollStyle: true
                }
                return data
            }
        },
        data(){
            return{
                blogs:[],
            }
        },
        created() {
            this.$axios.get('/lists', {
                params: {
                    username:store.state.UserInfo.UserName,
                    keyword:'',
                    classification:this.$store.state.Classification
                }
            })
                .then(response => {
                    this.blogs = response.data
                })
                .catch(error => {
                })
        },
        methods:{
            GoToBlog : function(bid){
                this.$router.push({ name: 'blog', params: { id: bid }})
            }
        }
    }
</script>

<style>
  .text {
    font-size: 14px;
    float: left;
    line-height: 30px;
    font-family: SimHei;

  }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 58%;
    margin-top: 20px;
  }
  body{
    background-color: #f6f6f6;
    position: relative;
  }
</style>
