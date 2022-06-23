<template>
  <main class="homepage">
    <MainContainer>
      <PostsList :items="posts" :id="posts" />
      <div v-intersection="loadMorePosts" class="load-more"></div>
      <div>
        <div
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{
            'current-page': page == pageNumber,
          }"
          @click="changePage(pageNumber)"
        ></div>
      </div>
    </MainContainer>
  </main>
</template>

<script>
import PostsList from "@/components/posts/PostsList.vue";
import MainContainer from "@/components/shared/MainContainer.vue";
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
      loadMorePosts: "post/loadMorePosts",
    }),
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
.load-more {
  margin-bottom: 5px;
}
</style>
