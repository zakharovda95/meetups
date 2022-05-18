<template>
  <component :is="tag" class="ui-button" :class="btnVariant" :type="btnType">
    <slot />
  </component>
</template>
<script>
export default {
  name: 'UiButton',
  props: {
    tag: {
      type: [String, Object],
      default: 'button',
    },
    variant: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    btnVariant() {
      return {
        'bg-main': this.variant === 'bgMain',
        'bg-red': this.variant === 'bgWrong',
        'round-red': this.variant === 'roundRed',
      };
    },
    btnType() {
      if (this.tag === 'button') {
        return 'button';
      }
      return false;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
.ui-button {
  margin: 5px;
  letter-spacing: 2px;
  cursor: pointer;
  color: $FONT_COLOR_DARK;
}
.bg-main {
  background: $UI_COLOR;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-size: 1.3em;
}
.round-red {
  width: 48px;
  height: 48px;
  background: $UI_COLOR;
  border-radius: 50px;
  border: none;
  font-size: 2em;
  text-align: center;
  color: $FONT_COLOR_LIGHT;
}
</style>
