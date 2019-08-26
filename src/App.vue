<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <div class="main">
      </div>
    </div>
    <br><br><br>
  </div>
</template>

<script>
  import Nav from "./components/Nav";
  import Home from "./components/Home";

export default {
  name: 'App',
    components: {
      "Nav": Nav,
        "Home":Home
    },
    data () {
      return {
          showHomePage: 0,
      }
    },
    methods:{
      show: function (name) {
        this.showHomePage = 1;
        if(name === "Home"){
            this.showHomePage = 1;
        }
      }
    },
    mounted() {
      this.show(this.$route.name)
    },
    watch: {
      $route (to,from) {
          this.show(this.$route.name)
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .main {
    margin-top: 70px;
    min-height: 500px;
  }

</style>
