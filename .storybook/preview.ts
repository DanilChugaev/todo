import { RouterLink } from 'vue-router';
import { Preview, setup } from '@storybook/vue3';
import '../src/assets/scss/index.scss';
import components from '../src/components';
import Router from '../src/router';
import directives from '../src/directives';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
};

setup((app) => {
  directives.forEach(directive => {
    app.directive(directive.name, directive);
  });

  components.forEach(component => {
    app.component(component.name, component.component);
  });

  app.use(Router);
  app.component(RouterLink.name, RouterLink);

  app.config.globalProperties.$basePath = '/';
});

export default preview;
