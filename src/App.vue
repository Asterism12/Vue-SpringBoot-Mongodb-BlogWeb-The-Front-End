<template>
  <div id="app">
    <div>
        <Nav></Nav>
    </div>
  </div>

</template>

<script>
  import Nav from "./components/Nav";
  import Classification from "./components/Classification";
export default {
  name: 'App',
    components: {
      "Nav": Nav,
        "Classi":Classification,
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
  background-color: #000000;
}

</style>
