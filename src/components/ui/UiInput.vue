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
@import '../../assets/styles/_constants.scss';
.ui-input {
  border: 1px solid $UI_COLOR;
  border-radius: 18px;
  padding: 7px 7px 7px 15px;
  font-size: 1.1em;
  max-width: 70vw;
  background: $ITEMS_COLOR;
}
</style>
