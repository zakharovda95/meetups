<template>
  <div class="ui-message">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'UiMessage',
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.ui-message {
  display: flex;
  height: 100%;
  width: 90%;
  align-items: center;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid $UI_COLOR;
  margin-top: 25px;
  padding: 25px;
  background: $MAIN_COLOR;
  font-size: 1.2em;
  color: $FONT_COLOR_DARK;
  border-radius: 13px;
  text-align: center;
  font-family: 'Comic Sans MS', sans-serif;
}
</style>
