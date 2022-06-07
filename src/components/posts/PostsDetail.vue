<template>
  <section>
    <div class="posts-item">
      <div class="posts-item__content">
        <p class="posts-item__id">ID:{{ details.id }}</p>
        <p @click="showDialog" class="posts-item__userId">
          UserID:{{ details.userId }}
        </p>
        <p class="posts-item__title">Title:{{ details.title }}</p>
        <p class="posts-item__body">Body:{{ details.body }}</p>
      </div>
      <ModalInfo v-model:show="dialogVisible">
        <UserInfo></UserInfo>
      </ModalInfo>
    </div>
  </section>
</template>

<script>
import ModalInfo from "./ModalInfo.vue";
import UserInfo from "./UserInfo.vue";

export default {
  name: "PostsDetail",
  components: {
    ModalInfo,
    UserInfo,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.posts-item__userId {
  cursor: pointer;
}
</style>
