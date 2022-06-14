<template>
  <div class="comments-list">
    <p class="comments-list__item"><i>Comments №:</i> {{ comments.id }}</p>
    <p class="comments-list__item"><i>User:</i> {{ comments.name }}</p>
    <p class="comments-list__item"><i>Info:</i> {{ comments.email }}</p>
    <p class="comments-list__item"><i>Body:</i> {{ comments.body }}</p>
  </div>
</template>

<script>
export default {
  name: "PostComments",
  props: {
    comments: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-list {
  border: 2px solid green;
  margin-bottom: 15px;
  padding: 10px;
  text-align: left;
  &__item {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  &__item:not(:last-child) {
    margin: 0 0 10px 0;
  }
}
i {
  font-weight: 600;
}
</style>
