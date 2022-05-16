<template>
  <component :is="tag" class="ui-button" :class="btnVariant" :type="btnType">
    <slot></slot>
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
        'mdl-button mdl-js-button mdl-button--primary': this.variant === 'blue',
        'mdl-button mdl-js-button mdl-button--accent': this.variant === 'red',
        'mdl-button mdl-js-button': this.variant === 'black',
        'bg-main': this.variant === 'bgMain',
        'bg-red': this.variant === 'bgWrong',
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
}
.bg-main {
  background: $UI_COLOR;
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-size: 1.3em;
}
</style>
