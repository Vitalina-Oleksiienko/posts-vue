<template>
  <HeaderApp></HeaderApp>
  <div class="content">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <BtnLoadMore></BtnLoadMore>
    <FooterApp />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BtnLoadMore from "./components/BtnLoadMore.vue";
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BtnLoadMore,
    FooterApp,
    HeaderApp,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
