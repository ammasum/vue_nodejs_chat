<template>
  <div class="main-wrapper">
    <div class="chatapp">
      <app-header></app-header>
      <app-body-mobile v-if="isMobileVersion()"></app-body-mobile>
      <app-body v-else></app-body>
      <!-- <app-body></app-body> -->
    </div>
  </div>
</template>

<script>
import chatMixin from '../mixins/chat';
import responsiveMixin from '../mixins/responsive';
import Header from '../components/chat/common/Header.vue';
import appBody from '../components/chat/Wrapper.vue'
import appBodyMobile from '../components/chat/Wrapper-mobile.vue'
export default {
  mixins: [chatMixin, responsiveMixin],
  data: function() {
    return {
      name: "Hello",
    }
  },
  components: {
    appHeader: Header,
    appBody,
    appBodyMobile
  },
  methods: {
    updateConnectionStore(connections) {
      connections.forEach(connection => {
        if(connection.id in this.$store.state.conversations) {
          return;
        }
        this.$store.state.conversations[connection.id] = [];
      });
      this.$store.state.connections = connections;
    },
    connectToCall(data) {
      window.location.href = `/call/calling/${data.data.id}?accept=1`;
    }
  },
  created() {
    // const host = window.location.host.split(':')[0];
    const id = prompt("Please enter your id");
    const ws = new WebSocket(`ws://192.168.0.105:8080?id=${id}&type=message`);
    this.$store.state.socketInstance = ws;
    ws.onmessage = (event) => {
      let data = event.data;
      if(typeof data === 'string') {
        data = JSON.parse(data);
      }
      switch(data.type) {
        case 'CONNECTION_LIST':
          this.updateConnectionStore(data.connections);
          break;
        case 'USER_MESSAGE':
          this.storeConversation(data.message, data.from);
          break;
        case 'REQ_TO_CONNECT_CALL':
          this.connectToCall(data);
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>