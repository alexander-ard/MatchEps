import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@components/core/Landing';
import Home from '@components/core/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
});
