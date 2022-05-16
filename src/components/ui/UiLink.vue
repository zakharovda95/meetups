<template>
  <component class="ui-link" :is="tag" :class="linkClasses">
    <slot />
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
        'nav-link': this.variant === 'nav-link',
        'ui-link-filter-panel-button-link':
          this.variant === 'filter-button-link',
        'ui-link-event-calendar-item': this.variant === 'calendar-link',
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
.ui-link {
  text-decoration: none;
  font-family: 'JetBrainMono-Light', sans-serif;
  color: $FONT_COLOR;
}
.nav-link {
  display: flex;
  align-self: center;
  margin: 10px;
  padding: 10px;
  color: $FONT_COLOR;
  text-align: center;
  letter-spacing: 0.5px;
  font-size: 1.2em;
}
.nav-link:hover {
  border-radius: 21px;
  background: $HOVER_COLOR;
}
.ui-link-filter-panel-button-link {
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

.ui-link-event-calendar-item {
  font-size: 0.9rem;
  overflow: hidden;
  color: white;
  background: $main-color;
}

.router-link-exact-active {
  border-bottom: 1px solid $HOVER_COLOR;
}
</style>
