<template>
  <div>
    <div>
      <p>Name:{{ info.name }}</p>
      <p>Username:{{ info.username }}</p>
      <ul>
        Address:
        <li>city:{{ info.address.city }}</li>
        <li>street:{{ info.address.street }}</li>
        <li>suite:{{ info.address.suite }}</li>
        <li>zipcode:{{ info.address.zipcode }}</li>
      </ul>
      <p>Phone: {{ info.phone }}</p>
      <p>Website: {{ info.website }}</p>
      <p>Company: {{ info.company.name }}</p>
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

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
