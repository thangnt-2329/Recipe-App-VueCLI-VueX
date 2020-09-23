<template>
  <div id="app">
    <h1>Công thức nấu ăn</h1>
    <img src="./assets/moc.jpg" width="300" height="200">
    <p>----------------------------</p>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
