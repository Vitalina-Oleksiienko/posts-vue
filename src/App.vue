<template>
  <div class="content">
    <HeaderApp></HeaderApp>
    <PostItem />

    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";
import PostItem from "./components/posts/PostItem.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    PostItem,
    FooterApp,
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
