import Vue from 'vue';
import ComponentsListing from '../views/ComponentsListing.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function createRoutesForComponents() {

  const componentRoutes = [];
  const componentsRequire = require.context('../../../components/lib/', true, /\.vue$/, 'lazy');
  const componentURLs = [];

  const componentFiles = componentsRequire.keys().filter(fn => !fn.endsWith('.usage.vue'));
  for (const filename of componentFiles) {

    const usageFile = componentsRequire
      .keys()
      .find(usageFilename => `${usageFilename.replace('.usage.vue', '.vue')}` === filename);

    const componentLoader = () => componentsRequire(usageFile || filename).then(module => {
      console.info(`Loaded: ${module.default.__file}`);
      return module.default;
    });

    const componentDisplayFilename = componentsRequire.id.split(' ')[0] + filename.replace(/^./, '');
    const path = `/components/${filename.replace(/^./, '')}`.replace(/\/\//g, '\/');

    componentURLs.push({
      path,
      filename: componentDisplayFilename
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
    component: ComponentsListing,
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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    }
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
