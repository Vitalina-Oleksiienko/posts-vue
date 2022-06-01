<template>
  <div>
    <div>
      <p>
        Comments:
        {{ comments.name }}
      </p>
      <p>
        Info:
        {{ comments.postId }}
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

<style lang="scss" scoped></style>
