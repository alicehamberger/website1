<template>
    <div class="contact-info">
      <a href="mailto:alicehamberger@gmail.com">alicehamberger@gmail.com</a>
      <a href="https://instagram.com/alice.rosee" target="_blank">@alice.rosee</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RightMenu'
  }
  </script>
  
  <style scoped>
  .contact-info {
    z-index: 1000; /* Adjust the value as needed */
    position: fixed;
    right: 0;
    left: 1;
    top: 20;
    bottom: 80;
    transform: translateX(-10%) translateY(150%) rotate(-90deg);
    transform-origin: right top;
    background-color: #0a0000;
    padding: 10px;
  }
    .contact-info a {
      margin: 0 10px;
      color: #00bfff9f; /* Text color */
      text-decoration: none; /* Remove underline */
      font-size: 2vh; /* Adjust font size based on viewport height */
    }

    /* Adjust font size for smaller screens */
    @media (max-height: 600px) {
  .contact-info {
    transform: translateY(-50%) rotate(-90deg) translateX(-50%);
  }
  .contact-info a {
    font-size: 1.5vh;
  }
}

@media (max-height: 400px) {
  .contact-info {
    transform: translateY(150%) rotate(-90deg) translateX(20%);
  }
  .contact-info a {
    font-size: 2vh;
  }
}
</style>