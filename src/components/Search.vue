<template>
  <div>
    <div class="goback">
      <el-button type="danger" @click="goback">
        返回
      </el-button>
    </div>
    <div>
      <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
      <el-button type="primary" @click="Search">搜索</el-button>
    </div>
    <div v-if="blogresults.length>0">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <p>搜索文章</p>
            <el-card class="box-card" v-for="blogresult in blogresults":key="bid">
              <div slot="header" class="clearfix">
                <span>{{blogresult.title}}</span>
                <el-button style="float: right; padding: 3px 0" type="text"></el-button>
              </div>
              <div class="text item">
                {{blogresult.abstract}}
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <p>搜索用户</p>
            <el-card class="box-card" v-for="userresult in userresults":key="uid">
              <div slot="header" class="clearfix">
                <span>{{userresult.username}}</span>
                <el-button style="float: right; padding: 3px 0" type="text"></el-button>
              </div>
              <div class="text item">
                {{userresult.userinfo}}
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                search: "",
                list: [],
                blogresults: [],
                userresults: []
            }
        },
        methods: {
            goback() {
                this.$router.go(-1);
            },
            Search() {
                var search = this.search;
                if (search) {
                    this.blogresults = this.list.filter(function(product)
                    {
                        return Object.keys(product).some(function (key) {
                            return (
                                String(product[key]).toLowerCase.indexOf(search)>-1
                            );
                        });
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
