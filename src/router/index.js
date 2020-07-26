import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Catalog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Contact.vue'),
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Product.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
