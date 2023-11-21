<template>
  <div class="video-background">
    <video autoplay muted loop id="backgroundVideo">
      <source src="/videos/video.MP4" type="video/mp4">
    </video>
    <div class="content">
      <ImageContainer 
        :imageSrc="require('@/assets/DSC02800.jpg')" 
        description="Description of Image"
      />
      <p> page 1 descrpt.</p>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'ImageTextDisplay'
    // JavaScript logic goes here
  }
  </script>
  
  <style>
  .video-background {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
  }
  
  #backgroundVideo {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
    z-index: -100; /* Ensure video stays in the background */
    object-fit: contain; /* Cover the entire area of the parent */
  }
  
  .content {
    position: relative;
    z-index: 100; /* Content on top of the video */
    color: white; /* Assuming white text for visibility */
  }

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
    max-width: 20%; /* Adjust the percentage as needed */
    height: 10%; /* This maintains the aspect ratio */
  }
  </style>
  