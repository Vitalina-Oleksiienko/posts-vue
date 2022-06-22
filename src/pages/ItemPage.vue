<template>
  <main>
    <MainContainer>
      <div class="btn">
        <router-link to="/home" class="btn-go-back">go back</router-link>
        <router-link to="/store" class="btn-go-back">store</router-link>
      </div>
      <div v-if="post">
        <h2 class="">Information about post</h2>
        <PostsDetail :details="post"> </PostsDetail>
      </div>
      <div v-for="(postComment, i) in comments" :key="i">
        <PostComments v-if="postComment" :comments="postComment"></PostComments>
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
      comments: [],
      postId: null,
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
        this.comments = response.data;
        console.log(this.comments);
      } catch (error) {
        console.error(error);
      }
    },
  },

  async created() {
    try {
      this.postId = this.$route.params.id;
      const { data } = await getPostsById(this.postId);
      this.post = data;
    } catch (error) {
      console.log(error);
    }
  },

  mounted() {
    this.fetchComments();
    this.getPostsById;
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  flex-direction: row;
}
.btn-go-back {
  text-decoration: none;
  margin-right: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100px;

  color: #0b0e7f;
  border: 3px solid transparent;
  border-image: linear-gradient(#0b0e7f, #0b95dd);
  border-image-slice: 1;
  font-size: 20px;
  font-weight: 700;
}
.btn-go-back:hover,
.btn-go-back:focus {
  background: linear-gradient(blue, yellow);
}
h2 {
  margin: 0 0 10px 0;
}
@media screen and (max-width: 767.98px) {
  .btn {
    flex-direction: column;
    align-items: center;
  }
  .btn-go-back {
    display: inline;
    margin-right: 0;
  }
  .btn-go-back:not(:last-child) {
    margin: 0 0 10px 0;
  }
  h2 {
    margin: 20px 0 10px 0;
  }
}
</style>
