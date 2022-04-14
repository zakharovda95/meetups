<template>
  <component class="ui-link" :is="tag" :class="linkClasses"
    ><slot></slot>
  </component>
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
        'ui-link-header-nav-links': this.variant === 'nav-link',
        'ui-link-filterbar-button-link': this.variant === 'filter-button-link',
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
@import '../../assets/fonts/_fonts.css';
.ui-link {
  text-decoration: none;
  font-family: 'JetBrainMono-Light', sans-serif;
  color: $font-color-white;
}
.ui-link-header-nav-links {
  display: flex;
  align-self: center;
  margin: 10px;
  padding: 10px;
  color: $main-color;
  text-align: center;
  letter-spacing: 0.5px;
}
.ui-link-header-nav-links:hover {
  background: $navbar-link-hover;
}
.ui-link-filterbar-button-link {
  display: flex;
  align-self: center;
  margin: 10px;
  padding: 10px 15px 10px 15px;
  color: $font-color-white;
  font-size: 1.2em;
  text-align: center;
  letter-spacing: 0.5px;
  background: $main-color;
}
</style>
