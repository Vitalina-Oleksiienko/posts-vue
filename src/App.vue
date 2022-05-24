<template>
  <div class="content">
    <HeaderApp></HeaderApp>

    <router-view></router-view>

    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";
import posts from "./components/posts/posts";

export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
  },
  data() {
    return {
      posts,
    };
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
