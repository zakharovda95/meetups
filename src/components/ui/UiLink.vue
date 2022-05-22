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
        'calendar-link': this.variant === 'calendar-link',
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
.ui-link {
  text-decoration: none;
  color: $FONT_COLOR_DARK;
  font-family: 'JetBrainMono-Light', sans-serif;
}
.nav-link {
  display: flex;
  align-self: center;
  margin: 10px;
  padding: 10px;
  color: $FONT_COLOR_DARK;
  text-align: center;
  letter-spacing: 0.5px;
  font-size: 1.2em;
  font-family: 'JetBrainMono-Light', sans-serif;
}
.nav-link:hover {
  border-radius: 21px;
  background: $HOVER_COLOR;
  font-family: 'JetBrainMono-Light', sans-serif;
}

.calendar-link {
  font-size: 0.8rem;
  overflow: hidden;
  background: $MAIN_COLOR;
  color: $FONT_COLOR_DARK;
  padding: 2px;
  font-family: 'JetBrainMono-Light', sans-serif;
}

.router-link-exact-active {
  border-bottom: 1px solid $HOVER_COLOR;
  font-family: 'JetBrainMono-Light', sans-serif;
}
</style>
