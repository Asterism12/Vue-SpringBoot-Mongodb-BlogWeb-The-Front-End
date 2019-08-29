<template>
  <div>
    <div style="z-index: 1">
      <Nav></Nav>
    </div>
    <el-card>
      <el-row>
        <el-col :span="12">
          <div style="width: 50%;">
            <h2 style="float: left">{{this.blog.title}}</h2>
          </div>
        </el-col>
        <el-col>
          <div style="float: bottom">
            <div style="float: right;font-size: smaller;color: #9D9D9D">{{this.blog.date}}&nbsp;&nbsp;&nbsp;作者:{{this.blog.author}}&nbsp;&nbsp;&nbsp;阅读量:{{this.blog.viewCount}}
              &nbsp;&nbsp;&nbsp;评论数:{{this.blog.commentCount}}</div>
          </div>
        </el-col>
      </el-row>
      <hr>
      <el-row style="z-index: 0">
        <mavon-editor
          class="md"
          :value="this.blog.content"
          :subfield="prop.subfield"
          :defaultOpen="prop.defaultOpen"
          :toolbarsFlag="prop.toolbarsFlag"
          :editable="prop.editable"
          :scrollStyle="prop.scrollStyle"
          style="margin-top: 20px"
        ></mavon-editor>
      </el-row>
    </el-card>
    <el-row>
      <div>
        <el-card class="box-card" v-for="comment in blog.list" :key="blog.list.bid">
          <div slot="header" class="clearfix">
            <span>{{comment.username}}</span>
          </div>
          <div class="text item">
            {{comment.content}}
          </div>
        </el-card>
      </div>
    </el-row>
    <el-row v-if="!UserName === ''">
      <CommentEditor></CommentEditor>
    </el-row>
  </div>
</template>

<script>
    import CommentEditor from "./CommentEditor";
    import Nav from "./Nav";
    export default {
        name: "BlogV2",
        components: {CommentEditor,Nav},
        data() {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
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
        created() {
            this.$axios.get('/blogs', {
                params: {
                    bid: this.id
                }
            })
                .then(response => {
                    this.blog = response.data;
                })
                .catch(error => {
                })
        }
    }
</script>

<style scoped>

</style>
