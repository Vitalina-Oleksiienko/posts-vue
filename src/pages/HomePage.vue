<template>
  <main class="homepage">
    <MainContainer>
      <PostsList :items="posts" :id="posts" /> /*:id="posts.id" */
      <div class="page__wrapper">
        <div
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="page"
          :class="{
            'current-page': page == pageNumber,
          }"
          @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </div>
    </MainContainer>
  </main>
</template>

<script>
import PostsList from "@/components/posts/PostsList.vue";
import MainContainer from "@/components/shared/MainContainer.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    PostsList,
    MainContainer,
  },
  data() {
    return {
      posts: null,
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
      //this.fetchPosts();
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    page() {
      this.fetchPosts();
    },
  },
  // async created() {
  //   try {
  //     const response = await getPostsList({
  //       params: {
  //         _page: this.page,
  //         _limit: this.limit,
  //       },
  //     });
  //     this.totalPages = Math.ceil(
  //       response.headers["x-total-count"] / this.limit
  //     );
  //     this.posts = response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
};
</script>

<style>
.page__wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
}
.page {
  border: 1px solid rgb(23, 65, 23);
  padding: 10px;
}
.page:not(:last-child) {
  margin-right: 5px;
}
.current-page {
  border: 3px solid darkgreen;
}
</style>
