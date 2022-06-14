<template>
  <main>
    <MainContainer>
      <router-link to="/home" class="btn-go-back">go back</router-link>
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
      this.postId = this.$route.params.id;
      const { data } = await getPostsById(this.postId);
      this.post = data;
    } catch (error) {
      console.log(error);
    }
  },
  // async created() {
  //   try {
  //     this.id = this.$route.params.userId;
  //     const { userInfo } = await getUserInfo(this.id);
  //     this.info = userInfo;
  //     console.log(userInfo);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  mounted() {
    this.fetchComments();
    this.getPostsById;
  },
};
</script>

<style lang="scss" scoped>
.btn-go-back {
  text-decoration: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 100px;

  color: darkgreen;
  border: 1px solid darkgreen;
  border-radius: 5px;
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
</style>
