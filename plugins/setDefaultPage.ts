import { Plugin } from '@nuxt/types';

import { RouteLocationNormalized } from 'vue-router';

const setDefaultPage: Plugin = ({ app }) => {
  app.router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    if (to.path === '/') {
      next('/index');
    } else {
      next();
    }
  });
};

export default setDefaultPage;