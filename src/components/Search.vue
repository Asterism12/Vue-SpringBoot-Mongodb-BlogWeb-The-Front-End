<template>
  <div style="width: 100%;margin-top: 0;height: 20px">
    <div class="Search">
      <el-input size="small" prefix-icon="el-icon-search" v-model="search" placeholder="请输入搜索内容" style="width: 75%;height: 50px"></el-input>
      <el-button size="small" type="primary" @click="Search" style="width: 22%;color: #fff">搜 索</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Search",
        inject:["reload"],
        data() {
            return {
                search: "",
            }
        },
        methods: {
            Search() {
                this.$store.state.SearchKeyword = this.search
                this.reload()
                this.$router.push({
                    name: 'SearchResult',
                })
            }
        }
    }
</script>

<style scoped>
  .Search {
    margin-top: 0;
  }
</style>
