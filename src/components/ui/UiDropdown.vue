<template>
  <select
    class="ui-dropdown"
    v-bind="$attrs"
    @change="proxyDropdown = $event.target.value"
  >
    <option v-for="option in options" :value="option.value" :key="option.name">
      {{ type }}: {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'UiDropdown',
  inheritAttrs: false,
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
    proxyDropdown: {
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
.ui-dropdown {
  font-family: JetBrainMono-Light, sans-serif;
  color: blue;
  font-size: 1.2rem;
  display: flex;
  padding: 5px;
  border: 2px solid blue;
  option {
    padding: 5px;
  }
}
</style>
