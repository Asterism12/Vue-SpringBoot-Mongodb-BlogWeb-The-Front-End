<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
          label="名称"
          width="180">
          <template slot-scope="scope">
            <el-link
              href="http://114.115.170.8:8666/download?:file='scope.row.name'" target="_blank">
              {{ scope.row.name }}
            </el-link>
          </template>
        </el-table-column>
      <el-table-column
        label="大小"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.size }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="上传时间"
        width="180">
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
    <el-upload
      class="upload-demo"
      action="123"
      multiple="false"
      :limit="1"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :before-upload="handleUpload">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">文件不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
    import store from "../store";

    export default {
        name: "FileShare",
        data(){
            return{
                tableData:[{
                    name:'name',
                    size:1024,
                    data:new Date().toLocaleString(),
                    author:'wang'
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
                this.$axios({
                    method: 'post',
                    url: '/upload',
                    data: {
                        file:file,
                        username:store.state.UserInfo.UserName
                    },
                    transformRequest: [
                        function (data) {
                            let ret = ''
                            for (let it in data) {
                                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                            }
                            ret = ret.substring(0, ret.lastIndexOf('&'));
                            return ret
                        }
                    ],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
            },
            reload(){
                this.$axios
                    .post('/filelist')
                    .then(successResponse => {
                        this.tableData=successResponse.data
                    })
                    .catch(failResponse => {
                    })
            }
        }
    }
</script>

<style scoped>

</style>
