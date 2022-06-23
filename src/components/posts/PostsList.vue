<template>
  <section class="posts-list">
    <PostsItem
      v-for="{ id, userId, title, body, postId } in items"
      :key="id"
      :id="id"
      :userId="userId"
      :title="title"
      :body="body"
      :postId="postId"
      class="posts-list__item"
    />
  </section>
</template>

<script>
import PostsItem from "./PostsItem";

export default {
  name: "PostsList",
  components: {
    PostsItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  min-height: 100vh;
}
@media screen and (max-width: 1199.98px) {
  .posts-list {
    justify-content: center;
  }
}
@media screen and(max-width: 767.98px) {
  .posts-list {
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
  }
}
</style>
