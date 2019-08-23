<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Classification></Classification>
  </div>
</template>

<script>
    import Classification from "./components/Classification/Classification";

    export default {
        name: 'App',
        components: {Classification}
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
</style>
