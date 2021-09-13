<template>
  <div id="app">
    <h1>Página inicial</h1>
    <br>
    <h1>Faça login clicando <router-link to="/login">Aqui</router-link> </h1>

    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {}
  },

  methods: {
  },

}



</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
