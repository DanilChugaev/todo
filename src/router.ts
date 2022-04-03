import { createRouter, createWebHistory } from 'vue-router';

import Index from './pages/index.vue';
import Home from './pages/home.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;