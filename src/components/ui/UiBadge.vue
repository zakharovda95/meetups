<template>
  <div class="meetup-item-badge" :class="type">
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
@import '../../assets/styles/_constants.scss';
@import '../../assets/fonts/_fonts.css';
.meetup-item-badge {
  font-family: 'JetBrainMono-Light', sans-serif;
  display: flex;
  padding: 3px;
}
.badge-participant {
  background: rgba(4, 173, 105, 0.2);
  font-size: 0.8rem;
  color: #04bb72;
}
.badge-organizer {
  background: rgba(4, 9, 196, 0.2);
  font-size: 0.8rem;
  color: $main-color;
}
</style>
