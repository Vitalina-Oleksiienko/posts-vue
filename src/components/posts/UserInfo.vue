<template>
  <div>
    <div>
      <p>Name:{{ name }}</p>
      <p>Username:{{ username }}</p>
      <ul>
        Address:
        <li>street:{{}}</li>
        <li>suite:{{}}</li>
        <li>city:{{}}</li>
      </ul>
      <p>Phone: {{ phone }}</p>
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
    },
  },
};
</script>

<style lang="scss" scoped></style>
