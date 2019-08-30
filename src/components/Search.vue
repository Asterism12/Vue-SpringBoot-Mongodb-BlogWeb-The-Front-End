<template>
  <div style="width: 100%">
    <div class="Search">
      <el-input prefix-icon="el-icon-search" v-model="search" placeholder="请输入搜索内容" style="width: 75%;height: 50px"></el-input>
      <el-button type="primary" @click="Search" style="width: 22%;background-color: #f6f6f6;color: #555">搜 索</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                search: "",
            }
        },
        methods: {
            Search() {
                this.$store.state.SearchKeyword = this.search
                this.$router.push({
                    name: 'SearchResult',
                })
            }
        }
    }
</script>

<style scoped>

</style>
