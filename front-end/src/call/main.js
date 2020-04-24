import Vue from 'vue';
import App from './App.vue';
import Routes from '../router/call';
// import store from '../store/chat';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // store,
  router: Routes
}).$mount('#app')
