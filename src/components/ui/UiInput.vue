<template>
  <component
    @input="proxyModelValue = $event.target.value"
    :value="modelValue"
    :is="tag"
    class="ui-input"
    :type="type"
  ></component>
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
.ui-input {
  margin: 5px;
  padding: 8px;
  font-size: 1.1em;
  font-family: JetBrainMono-Light, sans-serif;
  width: 30vh;
}
</style>
