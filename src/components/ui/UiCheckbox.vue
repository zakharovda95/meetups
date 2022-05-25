<template>
  <label class="ui-checkbox">
    <input type="checkbox" v-model="modelValueProxy" v-bind="$attrs" />
    <slot />
  </label>
</template>
<script>
export default {
  name: 'UiCheckbox',
  props: ['modelValue'],
  inheritAttrs: false,
  emits: ['update:modelValue'],
  computed: {
    modelValueProxy: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
label {
  display: flex;
  font-size: 1.4em;
  color: $FONT_COLOR_DARK;
  font-family: 'Comic Sans MS', sans-serif;
  input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid blue;
    font-family: 'Comic Sans MS', sans-serif;
  }
}
</style>
