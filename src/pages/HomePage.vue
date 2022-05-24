<template>
  <main class="homepage">
    <MainContainer>
      <PostsList :items="posts" :id="posts.id" />
    </MainContainer>
  </main>
</template>

<script>
import PostsList from "@/components/posts/PostsList.vue";
import posts from "@/components/posts/posts.js";
import MainContainer from "@/components/shared/MainContainer.vue";

export default {
  name: "HomePage",
  components: {
    PostsList,
    MainContainer,
  },
  data() {
    return {
      posts,
    };
  },
};
</script>

<style></style>
