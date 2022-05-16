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
        'mdl-button mdl-js-button mdl-button--raised mdl-button--colored':
          this.variant === 'bgBlue',
        'mdl-button mdl-js-button mdl-button--raised mdl-button--accent':
          this.variant === 'bgRed',
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
.ui-button {
  margin: 5px;
  letter-spacing: 2px;
}
</style>
