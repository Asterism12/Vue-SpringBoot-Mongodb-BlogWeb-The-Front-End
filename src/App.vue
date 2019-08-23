<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-container>
      <headerNav></headerNav>
    </el-container>
    <Classification></Classification>
  </div>
</template>

<script>
    import Classification from "./components/Classification/Classification";
    import Nav from './components/Nav'

    export default {
        name: 'App',
        components: {
            Classification,
            headerNav: Nav
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
</style>
