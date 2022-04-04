import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import Store from './store';
import Router from './router';

import('primevue/resources/themes/lara-light-blue/theme.css');
import('primevue/resources/primevue.min.css');
import('primeicons/primeicons.css');         

createApp(App)
  .use(Store)
  .use(Router)
  .use(PrimeVue)
  .mount('#app');
