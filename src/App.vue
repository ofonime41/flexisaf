<template>
  <nav>
    <!-- <router-link to="/">Home]]</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <!-- <HomeView/> -->

  <router-view/>
</template>
<script>
// import HomeView from '@/views/HomeView.vue'

// export default {
//   name: '',
//   components: {
//    HomeView

    
//   }
// }

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>
