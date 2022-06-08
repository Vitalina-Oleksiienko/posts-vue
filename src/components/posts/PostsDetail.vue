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
        <div v-if="infoUser">
          <UserInfo :info="infoUser"></UserInfo>
        </div>
      </ModalInfo>
    </div>
  </section>
</template>

<script>
//import axios from "axios";
//v-bind="infoUser" :key="infoUser"
//v-for="infoUser in infoUsers" :key="infoUser.id"
import ModalInfo from "./ModalInfo.vue";
import UserInfo from "./UserInfo.vue";
import { getUserInfo } from "@/services/posts.service";

export default {
  name: "PostsDetail",
  components: {
    ModalInfo,
    UserInfo,
  },
  data() {
    return {
      dialogVisible: false,
      infoUser: {},
      userId: null,
      id: null,
    };
  },
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  async created() {
    try {
      console.log("router:", this.$route.params);
      this.id = this.$route.params.userId;
      const infoUser = await getUserInfo(this.id);
      this.infoUser = infoUser.data;
      console.log(infoUser);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.getUserInfo;
  },
};
</script>

<style lang="scss" scoped>
.posts-item__userId {
  cursor: pointer;
}
</style>
