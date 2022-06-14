<template>
  <main class="homepage">
    <MainContainer>
      <PostsList :items="posts" :id="posts" />
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
};
</script>

<style>
.page__wrapper {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 10px 0 10px 0;

  cursor: pointer;
}
.page {
  border: 1px solid rgb(23, 65, 23);
  border-radius: 5px 0 5px 0;
  padding: 10px;
}
.page:not(:last-child) {
  margin-right: 5px;
}
.page:hover,
.page:focus {
  border: 3px solid darkgreen;
  background: linear-gradient(blue, yellow);
}
.current-page {
  border: 3px solid darkgreen;
}
</style>
