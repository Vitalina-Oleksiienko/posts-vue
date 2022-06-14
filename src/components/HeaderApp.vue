<template>
  <header class="header">
    <MainContainer>
      <HeaderLogo />
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from "../components/shared/MainContainer.vue";
import HeaderLogo from "../components/HeaderLogo.vue";
//import MainContainer from "../components/shared/MainContainer.vue";
export default {
  name: "HeaderApp",
  components: {
    MainContainer,
    HeaderLogo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: linear-gradient(blue, yellow);
  height: 60px;
}
@media screen and (max-width: 419.98px) {
  .header {
    width: 420px;
  }
}
</style>
