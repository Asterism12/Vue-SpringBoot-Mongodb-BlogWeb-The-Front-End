<template>
  <div>
    <el-card style="width: 50%">
      <h2>{{this.blog.title}}</h2>
    </el-card>
    <mavon-editor
      class="md"
      :value="this.blog.content"
      :subfield = "prop.subfield"
      :defaultOpen = "prop.defaultOpen"
      :toolbarsFlag = "prop.toolbarsFlag"
      :editable="prop.editable"
      :scrollStyle="prop.scrollStyle"
      style="margin-top: 20px"
    ></mavon-editor>
    <el-row>
      <div>
        <el-card class="box-card" v-for="comment in blog.comments":key="blog.comments.bid">
          <div slot="header" class="clearfix">
            <span>{{comment.username}}</span>
          </div>
          <div  class="text item">
            {{comment.content}}
          </div>
        </el-card>
      </div>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "BlogV2",
        data () {
            return {
                blog: {title:'test',content:'==asdfdsfa=='}
            }
    },
        computed: {
            prop () {
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
    }
</script>

<style scoped>

</style>
