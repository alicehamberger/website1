import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration
import ImageContainer from './components/ImageContainer.vue';

const app = createApp(App);
app.component('ImageContainer', ImageContainer); // Register the ImageContainer component
app.use(router); // Use the router
app.mount('#app'); // Mount the app
