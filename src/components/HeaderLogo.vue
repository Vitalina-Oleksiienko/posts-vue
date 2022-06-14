<template>
  <router-link to="/home">
    <img
      class="logo"
      src="../assets/interaction_conversation_communication_letter_email_mail_message_chat_icon_221265.png"
      alt="logo"
    />
  </router-link>
</template>

<script>
export default {
  name: "HeaderLogo",
};
</script>

<style lang="scss" scoped>
.logo {
  width: 7%;
  height: 50%;
}
@media screen and (max-width: 1199.98px) {
  .logo {
    width: 12%;
  }
}
@media screen and (max-width: 767.98px) {
  .logo {
    width: 20%;
  }
}
</style>
