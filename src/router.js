import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import Page1 from '@/components/page1.vue';
import Page2 from '@/components/page2.vue';
import Page3 from '@/components/page3.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3
  }
  // ... other routes ...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
