<template>
  <div class="main-wrapper">
    <div class="chatapp">
      <app-header></app-header>
      <app-body></app-body>
    </div>
  </div>
</template>

<script>
import Header from '../components/chat/common/Header.vue';
import appBody from '../components/chat/Wrapper.vue'
export default {
  data: function() {
    return {
      name: "Hello",
    }
  },
  components: {
    appHeader: Header,
    appBody
  },
  methods: {
    updateConnectionStore(connections) {
      this.$store.state.connections = connections;
    }
  },
  created() {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      console.log(event);
      let data = event.data;
      if(typeof data === 'string') {
        data = JSON.parse(data);
      }
      this.updateConnectionStore(data.connections);
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
