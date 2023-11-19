<template>
    <div class="image-container" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="border-wrapper" :class="{ hover: hover }">
        <img :src="imageSrc" alt="Image description" class="osteria-image"/>
      </div>
      <p class="image-description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageContainer',
    props: {
      imageSrc: String,
      description: String
    },
    data() {
      return {
        hover: false
      };
    }
  }
  </script>
  
  <style scoped>
  .image-container {
    text-align: center;
    margin: 20px;
  }
  
  .border-wrapper {
  width: 20vw;
  height: 20vw;
  padding: 15%;
  box-sizing: border-box;
  transition: padding 3s ease;
  border: 2px solid green; /* Add a green border */
}

.border-wrapper.hover {
  padding: 1%;
}
  
  .osteria-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .image-description {
    color: #fff;
    font-size: 16px;
    text-align: justify;
  }
  </style>
  