<template>
  <div class="content">
    <HeaderApp></HeaderApp>
    <PostsItem
      :id="posts.id"
      :userId="posts.userId"
      :title="posts.title"
      :body="posts.body"
    />

    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";
import PostsItem from "./components/posts/PostsItem.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    PostsItem,
    FooterApp,
  },
  data() {
    return {
      posts: {
        id: 1,
        title: "lorem",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        userId: 1,
      },
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
