<template>
  <div class="ui-message">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'UiMessage',
};
</script>
<style scoped lang="scss">
.ui-message {
  @import '../../assets/styles/_constants.scss';
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border: 3px solid $main-color;
  margin-top: 25px;
  padding: 25px;
  background: $navbar-color-white;
  font-size: 1.5em;
  font-family: 'JetBrainMono-Light', sans-serif;
  color: $main-color;
}
</style>
