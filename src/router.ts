import { createRouter, createWebHistory } from 'vue-router';

import Upcoming from './pages/upcoming.vue';
import Today from './pages/today.vue';
import Settings from './pages/settings.vue';
import Info from './pages/info.vue';

const BASE_PATH = import.meta.env.VITE_BASE_PATH;

const routes = [
  { path: `${BASE_PATH}/`, name: 'upcoming', component: Upcoming },
  { path: `${BASE_PATH}/today`, name: 'today', component: Today },
  { path: `${BASE_PATH}/settings`, name: 'settings', component: Settings },
  { path: `${BASE_PATH}/info`, name: 'info', component: Info },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
