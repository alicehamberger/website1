<template>
    <div class="top-menu-bar" v-show="isVisible">
      <router-link
        class="menu-item"
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
      >
        {{ item.name }}
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        menuItems: [
          { name: 'page 0', path: '/' },
          { name: 'creative', path: '/page1' },
          { name: 'tech', path: '/page2' },
          { name: 'links', path: '/page3' }
        ]
      };
    },
    mounted() {
      window.addEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
      handleMouseMove(event) {
        this.isVisible = event.clientY < 50;
      }
    }
  }
  </script>
  
  <style scoped>
    .top-menu-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7); /* Black translucent background */
      display: flex;
      justify-content: center;
      transition: all 0.3s ease; /* Transition effect */
    }
  
    .menu-item {
  margin: 10px;
  padding: 10px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
  text-decoration: none; /* Remove underline */
  color: #346131; /* Dark snake green color */
}

.menu-item:hover {
  border-color: white;
}
  </style>