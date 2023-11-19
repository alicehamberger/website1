<template>
  <div id="app">
    <TopMenuBar />
    <RightMenu/>
    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<script>
import RightMenu from './components/RightMenu.vue';
import TopMenuBar from './components/MenuBar.vue'; // Import the TopMenuBar component

export default {
  name: 'App',
  components: {
    TopMenuBar // Register the TopMenuBar component
    ,
    RightMenu
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  cursor: url('assets/bigcursor.png'), auto; /* Replace with the path to your circle cursor image */
}

a:hover {
  cursor: url('assets/smallcursor.png'), auto; /* Replace with the path to your contracted circle cursor image */
}
</style>

