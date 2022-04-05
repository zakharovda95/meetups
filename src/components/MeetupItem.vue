<template>
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ meetup.title }}</h2>
    </div>
    <div class="mdl-card__supporting-text">{{ meetup.organizer }}</div>
    <div class="mdl-card__supporting-text">{{ meetup.place }}</div>
    <div class="mdl-card__supporting-text">{{ meetup.date }}</div>
    <div class="mdl-card__actions mdl-card--border">
      <router-link
        to="/"
        class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
      >
        Подробнее
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeetupsItem',
  props: {
    meetup: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    console.log(this.meetup);
  },
};
</script>
<style scoped lang="scss">
@import '../assets/fonts/_fonts.css';
@import '../assets/styles/_constants.scss';
.demo-card-wide {
  display: flex;
  width: 100%;
  margin-top: 25px;
}
.demo-card-wide > .mdl-card__title {
  height: 250px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('../assets/images/meetups_card__background.jpg') center / cover;
}
.mdl-card__title-text {
  font-family: JetBrainMono-Bold, sans-serif;
  font-size: 1.8em;
  color: white;
}
.mdl-card__supporting-text {
  margin-bottom: -15px;
  font-family: JetBrainMono-Bold, sans-serif;
  font-size: 1.1em;
  color: $footer-color;
}
.mdl-card--border {
  margin-top: 15px;
}
</style>
