<template>
  <div class="posts-item" @click="go">
    <div class="posts-item__content">
      <p class="posts-item__id">
        ID:
        {{ id }}
      </p>
      <p class="posts-item__userId">
        UserID:
        {{ userId }}
      </p>
      <p class="posts-item__title">
        Title:
        {{ title }}
      </p>
      <p class="posts-item__body">
        Body:
        {{ body }}
      </p>
      <router-link
        :to="{ name: 'post', params: { id, userId }, query: { title } }"
        class="posts-item__link"
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
  },
  methods: {
    log() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-item {
  position: relative;
  max-width: 350px;
  padding: 0 20px;
  margin-bottom: 30px;

  &__content {
    padding: 20px;
    background: rgb(120, 182, 182);
    min-height: 200px;
    text-align: left;
    line-height: 1.4;

    cursor: pointer;
    z-index: 1;
  }
  &__id {
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
  }
  &__userId {
    font-size: 20px;
    font-weight: 400;
  }
  &__title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  &__body {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    // max-height: calc(1em * 1.4 * 4);
    // overflow: hidden;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
