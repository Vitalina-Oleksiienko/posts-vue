<template>
  <div>
    <div>
      <p>Name:{{ name }}</p>
      <p>Username:{{ info.username }}</p>
      <ul>
        Address:
        <li>street:{{}}</li>
        <li>suite:{{}}</li>
        <li>city:{{}}</li>
      </ul>
      <p>Phone: {{ info.phone }}</p>
      <p>Website: {{ website }}</p>
      <p>Company: {{}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    info: {
      type: Object,
      required: true,
      // default() {
      //   return {};
      // },
    },
  },
};
</script>

<style lang="scss" scoped></style>
