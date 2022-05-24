<template>
  <main>
    <MainContainer>
      <h2>iformation about post</h2>
      <PostsDetail :details="post" />
    </MainContainer>
  </main>
</template>

<script>
import MainContainer from "@/components/shared/MainContainer.vue";
import posts from "@/components/posts/posts.js";
import PostsDetail from "../components/posts/PostsDetail.vue";

export default {
  name: "ItemPage",
  components: {
    MainContainer,
    PostsDetail,
  },
  computed: {
    post() {
      return posts.find((post) => post.id === this.$route.params.id);
    },
  },
  mounted() {
    console.log(posts);
  },
};
</script>

<style lang="scss" scoped></style>
