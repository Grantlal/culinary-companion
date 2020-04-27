import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Account from '../views/Account.vue';
import About from '../views/About.vue';
import RecipePage from '../views/RecipePage.vue';
import TechniquePage from '../views/TechniquePage.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipePage,
  },
  {
    path: '/technique/:id',
    name: 'technique',
    component: TechniquePage,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;