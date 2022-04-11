<template>
  <component :is="tag" :class="linkClasses"><slot></slot> </component>
</template>
<script>
export default {
  name: 'UiLink',
  props: {
    tag: {
      type: [String, Object],
      default: 'router-link',
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    linkClasses() {
      return {
        'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect':
          this.variant === 'default',
        'main_link': this.variant === 'logo',
      };
    },
  },
};
</script>
<style scoped lang="scss">
.main_link {
  text-decoration: none;
  color: white;
}
</style>
