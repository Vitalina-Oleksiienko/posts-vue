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
        <div>
          <UserInfo :userData="info"></UserInfo>
        </div>
      </ModalInfo>
    </div>
  </section>
</template>

<script>
//import axios from "axios";
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
      info: {},
      userId: null,
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
      this.id = this.$route.params.userId;
      const { userInfo } = await getUserInfo(this.id);
      this.info = userInfo;
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    // async fetchUserInfo() {
    //   try {
    //     const response = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users",
    //       {
    //         params: {
    //           userId: this.id,
    //         },
    //       }
    //     );
    //     this.userId = this.$route.params.id;
    //     this.info = response.data;
    //     console.log(this.info);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
  mounted() {
    //this.fetchUserInfo();
    this.getUserInfo;
  },
};
</script>

<style lang="scss" scoped>
.posts-item__userId {
  cursor: pointer;
}
</style>
