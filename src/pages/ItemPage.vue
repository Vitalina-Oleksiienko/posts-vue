<template>
  <main>
    <MainContainer>
      <div v-if="post">
        <h2>iformation about post</h2>
        <PostsDetail :details="post" />
      </div>
    </MainContainer>
  </main>
</template>

<script>
import MainContainer from "@/components/shared/MainContainer.vue";
//import posts from "@/components/posts/posts.js";
import PostsDetail from "../components/posts/PostsDetail.vue";
import { getPostsById } from "@/services/posts.service";
import { getComments } from "@/services/posts.service";

export default {
  name: "ItemPage",
  components: {
    MainContainer,
    PostsDetail,
  },
  data() {
    return {
      post: null,
      comment: [],
    };
  },
  // computed: {
  //   post() {
  //     return posts.find((post) => post.id == this.$route.params.id);
  //   },
  // },
  // mounted() {
  //   console.log(this.post);
  //   console.log(this.$route);
  // },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getPostsById(id);
      this.post = data;

      const { postId } = this.$route.params;
      const { comments } = await getComments(postId);
      this.comment = comments;
    } catch (error) {
      console.log(error);
    }
  },
  // async created() {
  //   try {
  //     const { id } = this.$route.params;
  //     const { data } = await getComments(id);
  //     this.posts = data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
</script>

<style lang="scss" scoped></style>
