import Vue from 'vue'
import VueRouter from 'vue-router'

import Calling from '@/components/call/Wrapper.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/call/calling/:id', component: Calling }
]

export default new VueRouter({
    mode: 'history',
    routes
});