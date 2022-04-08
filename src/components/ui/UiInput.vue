<template>
  <component id="sample1" :is="tag" class="ui_input" :type="type"></component>
</template>
<script>
export default {
  name: 'UiInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    modelValue: [String, Number],
    multiline: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  computed: {
    proxyModelValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
    tag() {
      return this.multiline ? 'textarea' : 'input';
    },
  },
};
</script>
<style scoped lang="scss">
.ui_input {
  margin: 5px;
  padding: 8px;
  font-size: 1.1em;
  font-family: JetBrainMono-Light, sans-serif;
  width: 30vh;
}
</style>
