<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: "FooterApp",
};
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(blue, yellow);
  height: 100px;
}
@media screen and (max-width: 419.98px) {
  .footer {
    width: 420px;
  }
}
</style>
