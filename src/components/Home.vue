<template class="home">
  <div class="back" >
    <Background style="z-index: 0;margin: 0 auto"></Background>
    <el-container style="z-index: 1;width: 100%">
      <el-row>
        <div>
          <Nav></Nav>
        </div>
      </el-row>
      <el-row style="width: 100%" :gutter="10">
        <el-col :span="4" style="position: fixed">
          <div>
            <SideNav></SideNav>
          </div>
        </el-col>
        <el-col :span="10" offset="13">
          <div>
            <BlogList></BlogList>
          </div>
        </el-col>
        <el-col offset="16" style="position: fixed">
          <div>
            <Recommended></Recommended>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
  import Nav from "./Nav";
  import SideNav from "./SideNav";
  import BlogEditor from "./BlogEditor";
  import Background from "./Background";
  import Recommended from "./Recommended";
  import BlogList from "./BlogList";

    export default {
        name: "Home",
        components: {
            BlogList,
            Recommended,
            Background,
            BlogEditor,
          "Nav":Nav,
          "SideNav":SideNav
        },
        mounted() {
            this.show(this.$route.name);
        },
        watch: {
            $route (to, from) {
                this.show(this.$route.name);
            }
        },
        data () {
            return {
                query: '',
            }
        },
        methods: {
        },
        props: ["blogs"],

        computed: {
            Blogs: function() {
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.query);
                })
            }
        },

        filters: {
            cutContent: function(content) {
                var clearContent = content.replace(/<[^>]*>/g,'');
                if (clearContent.length > 120) {
                    return clearContent.slice(0,120)+'......';
                } else {
                    return clearContent + '......';
                }
            },
        }
    }
</script>

<style scoped>
  .back{
    position: absolute;
  }
  .fore{
    background: rgba(0,0,0,0);
    margin:0 auto;
  }

  h2 {
    width: 70%;
    margin: 0 auto;
    font-weight: bold;
    margin-bottom: 20px;
  }



  input {
    margin-left: 30px;
    color: #424242;
    width: 220px;
    height: 30px;
    padding: 0 10px 0 34px;
    line-height: 30px;
    display: inline-block;
    border: none;
    outline: none;
    border-radius: 15px;
    font-size: 18px;
    vertical-align: -1px;
    border: 1px solid #8a8a8a;
    opacity: 0.5;
    background: #fff;
    background-size: 16px 16px;
    background-position: 10px 7px;
    vertical-align: 3px;
  }

  input:focus {
    opacity: 1;
    width: 320px;
    border-color: #42b983;
  }
</style>
