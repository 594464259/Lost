<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /* html, body, .page{
    height: 100%;
  } */

  body {
    background: rgba(246, 246, 246, 1);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* margin-top: 60px; */

    display: flex;
    flex-direction: column;
  }
</style>
