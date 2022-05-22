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
        'default': this.variant === 'default',
        'bg-main': this.variant === 'bgMain',
        'bg-red': this.variant === 'bgWrong',
        'round-btn': this.variant === 'roundBtn',
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
.ui-button:hover {
  background: $HOVER_COLOR;
  color: $FONT_COLOR_DARK;
}
.bg-red {
  background: $ERROR_COLOR;
  color: $FONT_COLOR_LIGHT;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-size: 1.2em;
}
.bg-main {
  background: $MAIN_COLOR;
  color: $FONT_COLOR_DARK;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-size: 1.2em;
}
.round-btn {
  width: 48px;
  height: 48px;
  background: $FOOTER_COLOR;
  border-radius: 50px;
  border: none;
  font-size: 2em;
  text-align: center;
  color: $FONT_COLOR_LIGHT;
}
.default {
  border: none;
  background: none;
  color: $FONT_COLOR_DARK;
  padding: 8px;
}
.default:hover {
  border-radius: 18px;
  background: $HOVER_COLOR;
}
</style>
