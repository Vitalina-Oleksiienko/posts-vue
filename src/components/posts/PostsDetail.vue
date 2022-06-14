<template>
  <section>
    <div class="posts-item">
      <div class="posts-item__content">
        <!-- <p class="posts-item__id">ID:{{ details.id }}</p> -->
        <p @click="showDialog" class="posts-item__userId">
          <i>UserID:</i> {{ details.userId }}
        </p>
        <p class="posts-item__title"><i>Title:</i> {{ details.title }}</p>
        <p class="posts-item__body"><i>Body:</i> {{ details.body }}</p>
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
.posts-item {
  &__userId {
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 10px 0;

    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(1.1);
      transition: 250ms ease-in;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 10px 0;
  }
  &__body {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 10px 0;
  }
}

i {
  font-weight: 600;
}
</style>
