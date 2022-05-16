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
@import '../../assets/styles/_constants.scss';
.ui-message {
  display: flex;
  height: 100%;
  width: 80%;
  align-items: center;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid $MAIN_COLOR;
  margin-top: 25px;
  padding: 25px;
  background: $HOVER_COLOR;
  font-size: 1.5em;
  color: $FONT_COLOR_LIGHT;
  border-radius: 25px;
}
</style>
