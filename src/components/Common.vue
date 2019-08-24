<template>
  <div>
    <div>
      <Nav></Nav>
    </div>
    <div>
      <Classification>
      </Classification>
    </div>
  </div>
</template>

<script>
  import Nav from './Nav'
  import Classification from './Classification'
  export default {
    name: 'Common',
    components : {Classification, Nav}
  }
</script>

<style scoped>

</style>
