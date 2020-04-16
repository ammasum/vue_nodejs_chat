import Vue from 'vue'
import VueRouter from 'vue-router'

import ChatBox from '../components/chat/partials/chat-container/Chat-box.vue';
import BlankChatBox from '../components/chat/partials/chat-container/Blank-chat-box.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: BlankChatBox },
    { path: '/:userid', component: ChatBox }
]

export default new VueRouter({
    routes
});