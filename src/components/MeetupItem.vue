<template>
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ meetup.title }}</h2>
    </div>
    <div class="meetups_item__previews_info">
      <div class="mdl-card__supporting-text">
        <ui-icon class="ui_icon__card" icon-name="organizer"></ui-icon
        >{{ meetup.organizer }}
      </div>
      <div class="mdl-card__supporting-text">
        <ui-icon class="ui_icon__card" icon-name="location"></ui-icon
        >{{ meetup.place }}
      </div>
      <div class="mdl-card__supporting-text">
        <ui-icon class="ui_icon__card" icon-name="calendar"></ui-icon
        >{{ meetup.date }}
      </div>
    </div>
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
import UiIcon from '@/components/ui/UiIcon';
export default {
  name: 'MeetupsItem',
  components: {
    UiIcon,
  },
  props: {
    meetup: {
      type: Object,
      default: () => {},
    },
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
.ui_icon__card {
  width: 32px;
  margin-right: 25px;
}
</style>
