import VueSocketIO from 'vue-socket.io'

export default (Vue) => {
    Vue.use(new VueSocketIO({
        debug: true,
        connection: 'http://localhost:4200'
    }));

}