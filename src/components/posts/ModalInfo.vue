<template>
  <div v-if="show" @click.stop="hideDialog" class="dialog">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalInfo",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.295);
  display: flex;
}
.dialog__content {
  margin: auto;
  padding: 15px;
  background: white;
  border-radius: 10px;
  min-width: 300px;
  min-height: 50px;
}
</style>
