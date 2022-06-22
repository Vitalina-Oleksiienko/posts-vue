<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainContainer",
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1190px;
  //width: 100%;
  margin: 0 auto;
  //padding: 0 10px;
}
@media screen and (max-width: 1199.98px) {
  .container {
    // width: 768px;
    max-width: 100%;
    padding: 0 10px;
  }
}
@media screen and (max-width: 767.98px) {
  .container {
    // max-width: 420px;
    max-width: 100%;
    margin: 0 auto;
  }
}
// @media (min-width: 767.98px) {
//   .container {
//     min-width: 767px;
//   }
// }
</style>
