import Vue from 'vue'
import App from './App.vue'
import Socket from '../socket/socket-connection';

Socket(Vue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
