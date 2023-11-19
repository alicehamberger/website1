<template>
  <div>
    <NodeGraph /> <!-- This line adds the NodeGraph component to your page -->
    <p>NodeGraph above .</p>
  </div>
</template>

<script>
import NodeGraph from './NodeGraph.vue'; // Import the NodeGraph component

export default {
  name: 'HomePage',
  components: {
    NodeGraph // Register the NodeGraph component
  } 
}
// Any component logic goes here - should it be inside export default?
</script>

<style>
body {
  background-color: rgb(160, 228, 1);
  color: white;
}
button {
  background-color: none;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
