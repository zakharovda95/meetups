<template>
  <div class="ui-label">
    <label v-if="label">{{ label }}</label>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'UiLabel',
  props: {
    label: {
      type: String,
      require: false,
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.ui-label {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
  label {
    width: 100%;
    font-size: 1.4em;
    margin: 5px;
    color: $FONT_COLOR_DARK;
    font-family: 'Comic Sans MS', sans-serif;
  }
}
</style>
