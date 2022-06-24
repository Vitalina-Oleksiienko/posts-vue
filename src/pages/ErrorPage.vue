<template>
  <section class="error">
    <h2 class="error__title">Page not found</h2>
  </section>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.error {
  &__title {
    font-size: 60px;
    text-align: center;
    height: 100vh;
    margin: 0;
  }
}
</style>
