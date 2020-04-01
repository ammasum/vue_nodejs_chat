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
  name: 'App',
  components: {
    appHeader: Header,
    appBody
  },
  sockets: {
    connect() {
      console.log("Socket connect 11");
    },
    pMessage(data) {
      console.log(data);
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
