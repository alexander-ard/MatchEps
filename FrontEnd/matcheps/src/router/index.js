import Vue from 'vue';
import Router from 'vue-router';
import Home from '@components/core/Home';
import EpsMatch from '@components/core/EpsMatch';
import EpsSearch from '@components/core/EpsSearch';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/eps-search',
      name: 'eps-search',
      component: EpsSearch,
    },
    {
      path: '/eps-match',
      name: 'eps-match',
      component: EpsMatch,
      props: true,
    },
  ],
});
