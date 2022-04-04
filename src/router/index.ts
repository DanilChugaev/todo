import { createRouter, createWebHistory } from 'vue-router';

import Index from 'Pages/index.vue';
import Todos from 'Pages/todos.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/todos/:id', component: Todos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;