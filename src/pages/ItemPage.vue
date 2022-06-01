<template>
  <main>
    <MainContainer>
      <router-link to="/home">go back</router-link>
      <div v-if="post">
        <h2>iformation about post</h2>
        <PostsDetail :details="post" />
      </div>
      <div v-for="postComment in comments" :key="postComment">
        <PostComments :comments="comments">{{ postComment }}</PostComments>
      </div>
    </MainContainer>
  </main>
</template>

<script>
import MainContainer from "@/components/shared/MainContainer.vue";
import PostsDetail from "../components/posts/PostsDetail.vue";
import PostComments from "@/components/posts/PostComments.vue";
import axios from "axios";
import { getPostsById } from "@/services/posts.service";

export default {
  name: "ItemPage",
  components: {
    MainContainer,
    PostsDetail,
    PostComments,
  },
  data() {
    return {
      post: null,
      comments: [this.postId],
      postId: 1,
    };
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
          {
            params: {
              postId: this.postId,
            },
          }
        );
        this.comment = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    // async getPostsById() {
    //   try {
    //     const { id } = this.$route.params;
    //     const responsePost = await axios.get(
    //       `https://jsonplaceholder.typicode.com/posts/`,
    //       {
    //         params: {
    //           id: this.id,
    //         },
    //       }
    //     );
    //     this.post = responsePost.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
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
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    this.fetchComments();
    this.getPostsById;
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
