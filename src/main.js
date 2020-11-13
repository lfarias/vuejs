import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, // ou apenas routes, pois ambos possuem o mesmo nome. no ecmascript6 quando as 2 pripriedades possuem o mesmo nome pode ser usado apenas um nome.
  mode: 'hash'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
