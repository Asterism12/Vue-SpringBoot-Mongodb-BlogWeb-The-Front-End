<template>
  <div style="width: 100%">
    <div style="width: 100%">
      <Nav></Nav>
    </div>
    <div style="margin-top: 180px">
      <el-table
        :data="tableData"
        style="width: 63%;margin:0 auto;">
        <el-table-column
          label="名称"
          width="180">
          <template slot-scope="scope">
            <el-link
              :href="'http://114.115.170.8:8666'+scope.row.path" target="_blank">
              {{ scope.row.title }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column
          label="大小"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.size}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上传时间"
          width="240">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="上传者"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.author }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-upload
      class="upload-demo"
      action="123"
      multiple="false"
      :limit="1"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :before-upload="handleUpload">
      <el-button size="small" type="primary" style="margin-top: 30px">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">文件不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
    import store from "../store";
    import Nav from "./Nav";

    export default {
        name: "FileShare",
        components: {
            Nav
        },
        data() {
            return {
                tableData: [{
                    name: 'name',
                    size: 1024,
                    date: new Date().toLocaleString(),
                    author: 'wang'
                }]
            }
        },
        created() {
            this.reload()
        },
        methods: {
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            handleUpload(file) {
                const formdata = new FormData()
                formdata.append('file', file)
                formdata.append('date',new Date().toLocaleString())
                formdata.append('author', store.state.UserInfo.UserName)
                formdata.append('size',file.size)
                formdata.append('name',file.name)
                console.log(file)
                this.$axios.post(
                    '/upload',
                    formdata,
                    {headers: {'content-Type': 'multipart/form-data'}}
                ).then(successResponse => {
                    alert(successResponse.data.message)
                    this.reload()
                })
                    .catch(failResponse => {
                    })
            },
            reload() {
                this.$axios
                    .post('/filelist')
                    .then(successResponse => {
                        this.tableData = successResponse.data
                        console.log(successResponse.data)
                    })
                    .catch(failResponse => {
                    })
            },
        }
    }
</script>

<style scoped>

</style>
