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
  border: 3px solid transparent;
  border-image: linear-gradient(#0b95dd, #f5f564);
  border-image-slice: 1;
  border-radius: 5px;
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
