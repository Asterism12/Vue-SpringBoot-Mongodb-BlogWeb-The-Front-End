<template class="home">
  <div class="back">
    <!--<Background style="z-index: 0;"></Background>-->
    <el-container style="z-index: 1;width: 100%" class="fore" >
      <el-row>
        <el-col :span="30">
          <Nav></Nav>
        </el-col>
      </el-row>
      <el-row style="width: 100%">
        <el-col :span="6">
          <el-aside class="aside">
            <SideNav></SideNav>
          </el-aside>
        </el-col>
        <el-col :span="18">
          <el-main>
            <div class="head-info">
              <h2>
                今日推荐 <input type="" name="" v-model="query">
              </h2>
            </div>
          </el-main>
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

    export default {
        name: "Home",
        components: {
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
    position: absolute;
  }
  .container{

  }
  .head {
    width: 100%;
    padding: 0px;
    background: rgba(0,0,0,0);
  }

  .fore{
  }
  .head-info{
    margin-top: 28px;
  }

  .aside{
    margin-top: 20px;
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
