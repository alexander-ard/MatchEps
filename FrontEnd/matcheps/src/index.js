// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@fortawesome/fontawesome-free/js/all';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAlertify from 'vue-alertify';
import { firestorePlugin } from 'vuefire';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(firestorePlugin);
Vue.use(VueAlertify);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzLeEu_mpVkyegeKqM-gVtXiYKkfYlkeY',
    libraries: 'places',
  }
})

Vue.config.productionTip = process.env.NODE_ENV === 'production';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
