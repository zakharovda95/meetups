<template>
  <div class="ui-scroll-up" @click="teleportTo">
    <component id="content" :is="tag">
      <slot />
    </component>
  </div>
</template>
<script>
export default {
  name: 'UiShift',
  props: {
    to: {
      type: String,
      default: 'index',
    },
    hash: {
      type: String,
      required: true,
    },
    tag: {
      type: [String, Object],
      default: 'div',
    },
  },
  methods: {
    teleportTo() {
      this.$router.push({ name: this.to, hash: this.hash });
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .ui-scroll-up {
    z-index: 100;
    display: flex;
    justify-content: center;
    height: 45px;
    width: 45px;
    cursor: pointer;
    border-radius: 30px;
    background-color: $UI_SHIFT_COLOR;
    #content {
      display: flex;
      align-self: center;
      color: $FONT_COLOR_LIGHT;
      font-size: 1.1rem;
      font-family: Roboto, sans-serif;
    }
  }
  .ui-scroll-up:hover {
    background-color: $UI_SHIFT_COLOR_HOVER;
  }
}
@media (min-width: 1019px) {
  .ui-scroll-up {
    z-index: 100;
    display: flex;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    cursor: pointer;
    background-color: $UI_SHIFT_COLOR;
    #content {
      display: flex;
      align-self: center;
      color: $FONT_COLOR_LIGHT;
      font-size: 1.8rem;
      font-family: Roboto, sans-serif;
    }
  }
  .ui-scroll-up:hover {
    background-color: $UI_SHIFT_COLOR_HOVER;
  }
}
</style>
