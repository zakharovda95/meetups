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
.ui-label {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
  label {
    width: 100%;
    font-size: 1.4em;
    font-family: 'JetBrainMono-Light', sans-serif;
    margin: 5px;
    color: #3535ad;
  }
}
</style>
