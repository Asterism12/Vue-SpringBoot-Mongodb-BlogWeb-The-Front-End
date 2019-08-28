<template>
  <div style="width: 100%">
    <div class="Search">
      <el-input v-model="search" placeholder="请输入搜索内容" style="width: 75%;height: 50px"></el-input>
      <el-button type="primary" @click="Search" style="width: 22%">搜索</el-button>
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
                var search = this.search;
                if(search) {
                    this.$router.push({
                        path: "/search",
                        params: {
                            keyword:this.search
                        }
                    })
                }

            }
        }
    }
</script>

<style scoped>

</style>
