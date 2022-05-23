<template>
  <select
    class="ui-dropdown"
    v-bind="$attrs"
    @change="modelValueProxy = $event.target.value"
  >
    <option v-for="option in options" :value="option.value" :key="option.name">
      {{ type }}: {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'UiDropdown',
  emits: ['update:modelValue'],
  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    modelValue: String,
    type: String,
  },
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
.ui-dropdown {
  color: $FONT_COLOR_DARK;
  font-size: 1.2rem;
  display: flex;
  padding: 5px;
  border: 2px solid $UI_COLOR;
  border-radius: 22px;
  font-family: Roboto, sans-serif;
  option {
    padding: 5px;
    font-family: Roboto, sans-serif;
  }
}
</style>
