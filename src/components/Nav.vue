<template>
  <div class="app">
    <div id="NavSlide">
      <nav>
        <p @click="toggle()"><router-link to="/Main">首页</router-link></p>
        <p @click="toggle()"><router-link to="/UserMain">用户空间</router-link></p>
      </nav>
    </div>
    <div class="footer"></div>
  </div>
</template>


<script>
  export default {
    name: 'app',
    data: function () {
      return {
        active: 0,
        arr: [
          '首页',
          '用户空间'
        ]
      }
    },
    methods: {
      setTab: function (name, index, menus) {
        this.nowIndex = index
        this.menu_index = index + 1
      },
      toggle: function () {
        // eslint-disable-next-line no-unused-expressions
        this.active
      }
    }
  }
</script>

<style scoped>
  .router-link-active{
    color:brown;
    font-size: 16px;
  }
  #app{
    position: relative;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffff;
    text-align: left;
  }
  #NavSlide{
    position: absolute;
    width: 100%;
    overflow: hidden;
    background: rgb(49, 193, 123);
  }
  #NavSlide nav{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: auto;
  }
  #NavSlide p{
    text-align: center;
    font-size: 16px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 10px;
    margin: 5px;
    color: #e5e5e5;
  }
  #NavSlide p a{
    color: #e5e5e5;
    text-decoration: none;
  }
  #NavSlide p a active{
    color: white;
  }
  #NavSlide .fixadd{
    position: absolute;
    right: -4px;
    background-color: rgb(49,193,123);
  }
</style>
