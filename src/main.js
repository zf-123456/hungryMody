import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({
  routes: [
    { path: '/goods', component: goods },
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
router.push('/goods');
