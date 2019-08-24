    <template>
  <div class="app">
        <div id="NavSlide">
             <nav>
                <p  @click="toggle()"><router-link to="/foo">首页</router-link>
                </p>
                
                <p  @click="toggle()"><router-link to="/userManange">用户管理</router-link>
                </p>          
             </nav>  
        </div>  
    <div class="footer"></div>
  </div>
</template>


  <script>
  export default {
    name: "Nav",
    data: function() {
      return {
        active:0,
        arr:[
          "首页",
          "用户管理",
          "眼科"
        ],
      };
    },
    methods: {
      setTab: function(name, index, menus) {
        this.nowIndex = index;
        this.menu_index = index + 1;
      },
      toggle:function(){
        this.active
      }
    }
  };
</script>




  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .router-link-active{
       color:brown;
       font-size: 16px
     }
  #app {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ffff;
      text-align: left;
  }
  nav img{
      width: 50px;
     height: 50px;
      padding: 5px;
      margin: 5px;
  }
  #NavSlide {
      width: 100%;
      overflow: hidden;
  }
  #NavSlide nav {
      padding: 0 10px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: middle;
      -ms-flex-align: middle;
      align-items: middle;
      overflow: auto;
      background-color: #31c17b;
  }
  #NavSlide p {
      text-align: center;
      font-size: 16px;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      padding: 10px;
      margin: 5px;
      color: #e5e5e5;
  }
  #NavSlide p a {
      color: #e5e5e5;
      text-decoration: none;
  }
  #NavSlide p a.active {
      color: white;
  }
  #NavSlide .fixadd {
      position: absolute;
      right: -4px;
      background-color: #31c17b;
  }
</style>
