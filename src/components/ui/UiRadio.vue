<template>
  <div class="ui-checkbox">
    <input v-bind="$attrs" :id="id" type="radio" />
    <label :for="id"><slot /></label>
  </div>
</template>
<script>
export default {
  name: 'UiCheckbox',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
@import '../../assets/fonts/_fonts.css';
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
