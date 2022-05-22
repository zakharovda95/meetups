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
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
.ui-checkbox {
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  font-family: 'JetBrainMono-Light', sans-serif;
}
.ui-checkbox input {
  display: none;
}
.ui-checkbox label {
  display: flex;
  cursor: pointer;
  padding: 0 15px;
  line-height: 34px;
  background: $UI_COLOR;
  color: $FONT_COLOR_DARK;
  border-radius: 18px;
  font-size: 1.1em;
  font-family: 'JetBrainMono-Light', sans-serif;
}

/* Checked */
.ui-checkbox input[type='radio']:checked + label {
  background: $ITEMS_COLOR;
  color: $FONT_COLOR_DARK;
  border: 1px solid $UI_COLOR;
  font-family: 'JetBrainMono-Light', sans-serif;
}

/* Hover */
.ui-checkbox label:hover {
  background: $HOVER_COLOR;
  color: $FONT_COLOR_DARK;
  font-family: 'JetBrainMono-Light', sans-serif;
}
</style>
