import { createRouter, createWebHistory } from 'vue-router';

import Upcoming from './pages/upcoming.vue';
import Today from './pages/today.vue';
import Settings from './pages/settings.vue';

const BASE_PATH = import.meta.env.VITE_BASE_PATH;

const routes = [
  { path: `${BASE_PATH}/`, component: Upcoming },
  { path: `${BASE_PATH}/today`, component: Today },
  { path: `${BASE_PATH}/settings`, component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
