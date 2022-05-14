<template>
  <div class="ui-checkbox">
    <input
      v-bind="$attrs"
      :id="id"
      @change="proxyModelValue = $event.target.value"
      type="radio"
    />
    <label :for="id"><slot /></label>
  </div>
</template>
<script>
export default {
  name: 'UiCheckbox',
  props: {
    modelValue: {
      type: String,
      default: 'all',
    },
    id: {
      type: String,
    },
  },
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
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
.ui-checkbox {
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
}
.ui-checkbox input {
  display: none;
}
.ui-checkbox label {
  display: flex;
  cursor: pointer;
  padding: 0 15px;
  line-height: 34px;
  background: $main-color;
  border-radius: 6px;
  font-family: 'JetBrainMono-Light', sans-serif;
  color: $font-color-white;
  font-size: 1.1em;
}

/* Checked */
.ui-checkbox input[type='radio']:checked + label {
  font-family: 'JetBrainMono-Light', sans-serif;
  background: $font-color-white;
  color: $main-color;
  border: 2px solid $main-color;
}

/* Hover */
.ui-checkbox label:hover {
  color: #666;
}
</style>
