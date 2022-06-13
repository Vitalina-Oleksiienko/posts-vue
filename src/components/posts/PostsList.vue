<template>
  <div class="posts-list">
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
  </div>
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
  justify-content: space-around;
  margin-left: -15px;
  margin-right: -15px;

  &__item {
    margin-bottom: 30px;
  }
}
</style>
