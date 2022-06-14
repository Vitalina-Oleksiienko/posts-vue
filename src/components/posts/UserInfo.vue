<template>
  <div class="user-list">
    <p class="user-list__item"><i>Name:</i> {{ info.name }}</p>
    <p class="user-list__item"><i>Username:</i> {{ info.username }}</p>
    <ul class="user-list__item">
      <i>Address:</i>
      <li><i class="user-list__adress">city:</i> {{ info.address.city }}</li>
      <li>
        <i class="user-list__adress">street:</i> {{ info.address.street }}
      </li>
      <li>
        <i class="user-list__adress">apartments:</i> {{ info.address.suite }}
      </li>
      <li>
        <i class="user-list__adress">zipcode: </i> {{ info.address.zipcode }}
      </li>
    </ul>
    <p class="user-list__item"><i>Phone:</i> {{ info.phone }}</p>
    <p class="user-list__item"><i>Website:</i> {{ info.website }}</p>
    <p class="user-list__item"><i>Company:</i> {{ info.company.name }}</p>
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
  //font-style: italic;
}
i {
  font-weight: 600;
}
.user-list {
  text-align: left;
  &__item {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  &__item:not(:last-child) {
    margin: 0 0 10px 0;
  }
  &__adress {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
