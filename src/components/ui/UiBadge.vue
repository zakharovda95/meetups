<template>
  <div class="ui-badge" :class="type">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'UiBadge',
  props: {
    variant: {
      type: String,
      default: 'participant',
    },
  },
  computed: {
    type() {
      return {
        'badge-participant': this.variant === 'participant',
        'badge-organizer': this.variant === 'organizer',
      };
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.ui-badge {
  font-family: Roboto sans-serif;
  display: flex;
  padding: 5px;
  border-radius: 15px;
}
.badge-participant {
  background: $BADGE_COLOR_PARTICIPANT;
  font-size: 0.8rem;
  color: $FONT_COLOR_DARK;
  font-family: 'Comic Sans MS', sans-serif;
}
.badge-organizer {
  background: $BADGE_COLOR_ORGANIZER;
  font-size: 0.8rem;
  color: $FONT_COLOR_DARK;
}
</style>
