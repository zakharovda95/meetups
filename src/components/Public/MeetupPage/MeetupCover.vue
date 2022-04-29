<template>
  <div class="meetup-cover">
    <h1 class="meetup-cover-title">{{ title }}</h1>
  </div>
</template>
<script>
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
        ? `url(${this.image})`
        : `url('https://firebasestorage.googleapis.com/v0/b/meetups-ddc9b.appspot.com/o/covers%2Fmeetups_card__background.jpg?alt=media&token=744441d9-c81e-4332-82a5-f41e5cc96b58')`;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
@import '../../../assets/fonts/_fonts.css';
.meetup-cover {
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    v-bind(bgImage);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
  margin: 0 auto;
  .meetup-cover-title {
    text-align: center;
    display: flex;
    align-self: center;
    color: $font-color-white;
    font-family: JetBrainMono-Light, sans-serif;
    font-size: 2em;
  }
}
</style>
