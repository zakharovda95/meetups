<template>
  <div class="meetup-cover">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>
<script>
import { DEFAULT_IMAGE } from '@/assets/styles/_constants.js';
export default {
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      required: false,
      default: 'title',
    },
    image: {
      type: String,
      required: false,
    },
  },
  computed: {
    bgImage() {
      return this.image
        ? `linear-gradient( 0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${this.image})`
        : `linear-gradient( 0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${DEFAULT_IMAGE})`;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
.meetup-cover {
  background-size: cover;
  background-position: center;
  background-image: v-bind(bgImage);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
  margin: 0 auto;
  .title {
    text-align: center;
    display: flex;
    align-self: center;
    color: $FONT_COLOR_LIGHT;
    font-size: 2em;
  }
}
</style>
