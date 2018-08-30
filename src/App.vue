<template>
  <div id="app">
    <Heading/>
    <nav>
      <router-link exact to="/">Home</router-link>
      <router-link to="/experience">Experience</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Heading from './components/Heading.vue'

export default {
  name: 'app',
  components: {
    Heading
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Caveat:400,700|Ubuntu:300');
#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 1em;
}

nav a.router-link-active {
  border-bottom: 2px solid #2c3e50;
  font-weight: bold;
}

nav a:hover {
  border-bottom: 2px solid #2c3e50;
}

.container {
  margin-top: 2rem;
}
</style>
