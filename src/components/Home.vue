<template>
  <div class="home">
    <!--<Background style="z-index: 0;margin: 0 auto"></Background>-->
    <el-container style="z-index: 1;width: 100%;width: 100%">
      <el-row>
        <div>
          <Nav></Nav>
        </div>
      </el-row>
      <el-row style="width: 100%;height: 100%" :gutter="10">
        <el-col :span="4" style="position: fixed;margin-top: 20px">
          <div>
            <el-row class="tac">
              <el-col :span="12">
                <el-menu mode="vertical"
                         default-active="0"
                         class="el-menu-vertical"
                         @select="handleSelect"
                         @open="handleOpen"
                         @close="handleClose"
                         background-color="#ffffff"
                         text-color="#555"
                         active-text-color="#ffd04b">
                  <template>
                    <h5 class="aside-title">博客分类</h5>
                  </template>
                  <el-submenu index="1">
                    <template>
                    </template>
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>总览</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1">
                        Java
                      </el-menu-item>
                      <el-menu-item index="2">
                        Python
                      </el-menu-item>
                      <el-menu-item index="3">
                        云计算/大数据
                      </el-menu-item>
                      <el-menu-item index="4">
                        人工智能
                      </el-menu-item>
                      <el-menu-item index="5">
                        其它
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="16" offset="4">
          <div style="margin-left: 5px">
            <BlogList></BlogList>
          </div>
        </el-col>
        <el-col style="position: fixed;margin-left: 915px">
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
        inject: ['reload'],
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
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key) {
                if (key === '0')
                {
                    this.$store.state.Classification = 0
                }
                if (key === '1')
                {
                    this.$store.state.Classification = 1
                }
                if (key === '2')
                {
                    this.$store.state.Classification = 2
                }
                if (key === '3')
                {
                    this.$store.state.Classification = 3
                }
                if (key === '4')
                {
                    this.$store.state.Classification = 4
                }
                if (key === '5')
                {
                    this.$store.state.Classification = 5
                }
                this.reload()
            }
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

  .home{
    background-color: #f6f6f6;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 auto;
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

  .tac {
    width: 200px;
  }
  .el-menu-vertical{
    width: 200px;
    position: center;
  }

  .el-icon-location{
    margin-left: -20px;
  }

  .aside-title{
    height: 20px;
    font-size: medium;
  }
</style>
