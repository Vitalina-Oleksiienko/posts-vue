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
//import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "HomePage",
  components: {
    PostsList,
    MainContainer,
  },

  methods: {
    ...mapMutations({
      setPage: "post/setPage",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),

    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPosts();
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
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
  border: 3px solid transparent;
  border-image: linear-gradient(#0b0e7f, #0b95dd);
  border-image-slice: 1;
  background: linear-gradient(blue, yellow);
  color: azure;
}
.current-page {
  border: 3px solid transparent;
  border-image: linear-gradient(#0b0e7f, #0b95dd);
  border-image-slice: 1;
}
</style>
