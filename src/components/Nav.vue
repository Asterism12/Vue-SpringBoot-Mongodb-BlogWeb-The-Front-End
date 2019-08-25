<template>
  <div id="header">
    <ul>
      <li class="home" :class="{clicked: showHomePage}">
        <router-link to="/">Home</router-link>
      </li>
      <li :class="{clicked: showAddBlog}">
        <router-link to="/add-blog">
          Add Blog
        </router-link>
      </li>
      <li :class="{clicked: showAbout}">
        <router-link to="/about">
          About
        </router-link>
      </li>
      <li :class="{clicked: showLogin}" style="float: right">
        <router-link to="/login">
          登录
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
    export default {
        name: 'Nav',
        props: ["showPage","showHomePage","showAddBlog","showAbout"],

        data: function () {
            return {
                query: '',
            }
        }
    };
</script>

<style scoped>
  #header {
    width: 100%;
    height: 70px;
    line-height: 70px;

    background-color: #d8bfd8;
    position: fixed;
    z-index: 1;
    top: 0;
  }
  ul {
    margin: 0 auto;
    width: 80%;
  }
  ul li {
    float: left;
    padding: 0 20px;
    list-style: none;
  }

  ul li a{
    color: #fff;
    font-size: 18px;
    height: 36px;
    text-decoration: none;
    padding: 0 10px;
    line-height: 36px;
    cursor: pointer;
    display: inline-block;
    border-radius: 3px;
    vertical-align: -1px;
  }




  ul li input:focus {
    opacity: 1;
  }

  ul li a:hover{
    background-color: #fff;
    color: #42b983;
  }

  ul li.clicked a{
    background-color: #fff;
    color: #42b983;
  }

  ul li.home a {
    font-size: 26px;
    font-weight: bold;
    vertical-align: -4px;
  }

</style>
