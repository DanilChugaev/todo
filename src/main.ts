import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Router from './router';
import directives from './directives';
import toggleDarkMode from './functions/toggleDarkMode';
import components from './components';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$basePath = import.meta.env.VITE_BASE_PATH;
app.provide('toggleDarkMode', toggleDarkMode());

directives.forEach(directive => {
  app.directive(directive.name, directive);
});

components.forEach(component => {
  app.component(component.name, component.component);
});

app
  .use(pinia)
  .use(Router)
  .mount('#app');
