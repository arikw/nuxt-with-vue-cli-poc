import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function createRoutesForComponents() {

  const componentRoutes = [];
  const componentURLs = [];

  const componentsRequire = require.context('../../../components/lib/', true, /^((?![\\/]node_modules|vendor[\\/]).)*\.vue$/, 'lazy');
  const componentFiles = componentsRequire.keys();
  for (const filename of componentFiles) {

    const componentLoader = () => componentsRequire(filename).then(module => {
      console.info(`Loaded: ${module.default.__file}`);
      return module.default;
    });

    const componentDisplayFilename = componentsRequire.id.split(' ')[0] + filename.replace(/^./, '');
    const path = `/components/${filename.replace(/^./, '')}`.replace(/\/\//g, '\/');

    componentURLs.push({
      path,
      filename: componentDisplayFilename,
      hidden: !filename.endsWith('.usage.vue')
    });

    componentRoutes.push({
      path,
      component: componentLoader,
      meta: {
        filename
      }
    });
  }

  componentRoutes.push({
    path: '/',
    component: () => import('../views/ComponentsList.vue'),
    meta: {
      components: componentURLs
    }
  });

  return componentRoutes;
}

const routes = [
  ...createRoutesForComponents(),
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/404.vue')
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
