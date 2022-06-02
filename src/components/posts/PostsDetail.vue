<template>
  <section>
    <div class="posts-item">
      <div class="posts-item__content">
        <p class="posts-item__id">ID:{{ details.id }}</p>
        <p class="posts-item__userId">UserID:{{ details.userId }}</p>
        <p class="posts-item__title">Title:{{ details.title }}</p>
        <p class="posts-item__body">Body:{{ details.body }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PostsDetail",
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-item__userId {
  cursor: pointer;
}
</style>
