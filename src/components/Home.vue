<template class="home">
  <el-container class="container">
    <el-row>
      <el-header class="head">
          <div>
            <Nav></Nav>
          </div>
      </el-header>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-aside class="aside">
          <SideNav></SideNav>
        </el-aside>
      </el-col>
      <el-col :span="12">
        <el-main>
          <div class="head-info">
            <h2>
              今日推荐 <input type="" name="" v-model="query">
            </h2>
            <!--<div v-for="blog in Blogs" class="item">
              <h3>
                <router-link to="{name: 'ReadBlog', params: {id:blog.id}}">
                  {{blog.title}}
                </router-link>
              </h3>
              <p class="bloginfo">
                <span>
                  作者: {{blog.author}}
                </span>
                <span>
                  标签: <span v-for="tag in blog.tags">{{tag}}{{blog.tags.indexOf(tag) == blog.tags.length-1 ? "" : ","}}</span>
                </span>
              </p>
              <p>{{blog.content | cutContent}}</p>
            </div>-->
          </div>
        </el-main>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  import Nav from "./Nav";
  import SideNav from "./SideNav";
    export default {
        name: "Home",
        components: {
          "Nav":Nav,
          "SideNav":SideNav
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

  .container{
    background-repeat: no-repeat;
  }
  .head {
    width: 100%;
    padding: 0px;
  }

  .head-info{
    margin-top: 28px;
  }

  .aside{
    margin-top: 0px;
  }

  h2 {
    width: 70%;
    margin: 0 auto;
    font-weight: bold;
    margin-bottom: 20px;
  }


  .item {
    width: 70%;
    margin: 20px auto;
    padding: 20px;
    background-color: rgba(240,240,240,0.8);
  }

  .item h3 {
    margin-bottom: 10px;
  }

  .item h3 a{
    color: #42b983;
    text-decoration: none;
  }

  .item .bloginfo{
    margin: 10px 0;
    font-size: 12px;
    color: #999
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
