<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-container>
      <common></common>
    </el-container>
  </div>
</template>

<script>
    import Common from './components/Common'
    import Nav from './components/Nav'

    export default {
        name: 'App',
        components: {
            common: Nav
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
