<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>

  </div>
</template>

<script>
  import Nav from "./components/Nav";
  import Home from "./components/Home";

export default {
  name: 'App',
  provide(){
    return {
        reload: this.reload
    }
  },
    components: {
      "Nav": Nav,
        "Home":Home
    },
    data () {
      return {
          showHomePage: 0,
          isRouterAlive: true
      }
    },
    methods:{
      show: function (name) {
        this.showHomePage = 1;
        if(name === "Home"){
            this.showHomePage = 1;
        }
      },
        reload () {
          this.isRouterAlive = false
            this.$nextTick(function(){
              this.isRouterAlive = true
            })
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
