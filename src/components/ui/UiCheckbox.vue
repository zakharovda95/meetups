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
  emits: ['update:ModelValue'],
  inheritAttrs: false,
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
@import '../../assets/styles/_constants.scss';
label {
  display: flex;
  font-size: 1.4em;
  color: $FONT_COLOR_DARK;
  input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid blue;
  }
}
</style>
