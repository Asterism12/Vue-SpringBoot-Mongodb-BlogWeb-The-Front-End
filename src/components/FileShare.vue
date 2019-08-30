<template>
  <div>
    <el-table
      :data="fileList"
      style="width: 100%">
      <el-table-column
        label="名称"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="大小"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
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
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">下载
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-upload
      class="upload-demo"
      action="123"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
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
    export default {
        name: "FileShare",
        data:{
            fileList:[]
        },
        created() {
            this.reload()
        },
        methods: {
            handleEdit(index, row) {
                //To-DO download
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            handleUpload(file) {
                const formFile = new FormData();
                formFile.append("file", file);
                this.$axios
                    .post('/upload', {
                        file:formFile
                    })
                    .then(successResponse => {
                        alert(successResponse.data.message)
                        this.reload()
                    })
                    .catch(failResponse => {
                    })
            },
            reload(){
                //Reload file list
                this.$axios
                    .post('/filelist')
                    .then(successResponse => {
                        this.fileList=successResponse.data
                    })
                    .catch(failResponse => {
                    })
            }
        }
    }
</script>

<style scoped>

</style>
