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
import { getPostsList } from "@/services/posts.service";

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
  async created() {
    try {
      const { data } = await getPostsList();
      this.posts = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>
