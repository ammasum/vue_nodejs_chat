import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      socketInstance: null,
      connections: [],
      activeInput: null,
      conversations: {}
    }
  })