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
label {
  display: flex;
  font-family: 'JetBrainMono-Light', sans-serif;
  font-size: 1.4em;
  color: #3535ad;
  input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border: 2px solid blue;
  }
}
</style>
