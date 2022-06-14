<template>
  <div class="posts-item" @click="go">
    <div class="posts-item__content">
      <!-- <p class="posts-item__id">
        ID:
        {{ id }}
      </p> -->
      <p class="posts-item__userId">
        <i>UserID:</i>
        {{ userId }}
      </p>
      <p class="posts-item__title">
        <i>Title:</i>
        {{ title }}
      </p>
      <p class="posts-item__body">
        <i>Body:</i>
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
  flex: 1 0 30%;
  //max-width: 350px;
  //width: calc(30% - 10px);

  //margin: 15px;
  //max-width: 30%;

  //padding: 0 20px;
  //margin-bottom: 30px;

  &__content {
    height: 280px;
    padding: 20px;
    border: 10px solid transparent;
    border-image: linear-gradient(#0b0e7f, #0b95dd);
    border-image-slice: 1;
    text-align: left;
    line-height: 1.4;

    cursor: pointer;
    z-index: 1;
  }
  &__content:hover,
  &__content:focus {
    background: linear-gradient(blue, yellow);
    color: azure;
  }
  &__id {
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    margin-bottom: 5px;
  }
  &__userId {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 10px 0;
  }

  &__title {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 10px 0;
    // max-height: calc(1em * 1.4 * 2);
    // overflow: hidden;
  }
  &__body {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 0 0;
    max-height: calc(1em * 1.4 * 5);
    overflow: hidden;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.posts-item:hover,
.posts-item:focus {
  transform: scale(1.04);
  transition: 250ms ease-in;
}
@media screen and (max-width: 1199.98px) {
  .posts-item {
    //width: calc(45% - 10px);
    flex: 1 0 45%;
  }
}
@media screen and (max-width: 767.98px) {
  .posts-item {
    //width: calc(100% - 5px);
    flex: 1 0 100%;
  }
}
</style>
