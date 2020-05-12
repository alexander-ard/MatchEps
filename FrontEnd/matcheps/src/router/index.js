import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@components/core/Landing';
import Home from '@components/core/Home';
import EpsMatch from '@components/core/EpsMatch';
import Locations from '@components/core/Locations';
import Comments from '@components/comments/Comments';

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
    {
      path: '/eps-match',
      name: 'eps-match',
      component: EpsMatch,
      props: true,
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    }, ,
    {
      path: '/locations',
      name: 'locations',
      component: Locations
    },    
  ],
});
