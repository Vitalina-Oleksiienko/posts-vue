<template>
  <div>
    <div class="comments__list">
      <p>
        Comments:
        {{ comments.id }}
      </p>
      <p>
        User:
        {{ comments.name }}
      </p>
      <p>
        Info:
        {{ comments.email }}
      </p>
      <p>
        Body:
        {{ comments.body }}
      </p>
    </div>
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
.comments__list {
  border: 2px solid green;
}
</style>
