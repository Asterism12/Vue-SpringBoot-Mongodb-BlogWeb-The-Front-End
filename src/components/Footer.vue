<template>
  <div class="webfooter">
    <p>{{footer}}</p>
  </div>
</template>

<script>
    export default {
        name: "Footer",
        data () {
            return {
                footer: 'SHARE'
            }
        }
    }
</script>

<style scoped>
  .webfooter{
    width: 100%;
    background: #eee;
  }

  .webfooter p {
    width: 1200px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    text-align: center;
  }

  .webfooter p a{
    font-size: 18px;
    color: #000;
    font-weight: bold;
  }

  .webfooter p a:hover{
    color: #42b983;
  }
</style>
