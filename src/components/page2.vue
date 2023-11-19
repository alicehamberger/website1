<template>
  <div>
    <ImageContainer 
        :imageSrc="require('@/assets/DSC02729.jpg')" 
        description="Description of Image"
      />
    <p>This is a text paragraph describing the image or any other content you wish to include.</p>
    
  </div>
</template>

<script>
export default {
  name: 'ImageTextDisplay'
  // JavaScript logic goes here
}
</script>

<style>
body {
  background-color: black;
  color: white; /* This makes the text color white for visibility */
}
button {
  background-color: #4CAF50; /* Green */
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
img {
  max-width: 50%; /* Adjust the percentage as needed */
  height: auto; /* This maintains the aspect ratio */
}
</style>
