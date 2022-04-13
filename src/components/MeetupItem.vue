<template>
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ meetup.title }}</h2>
    </div>
    <meetup-info :meetup="meetup"></meetup-info>
    <div class="mdl-card__actions mdl-card--border">
      <ui-link :to="{ name: 'meetup', params: { meetupId: meetup.id } }">
        Подробнее
      </ui-link>
    </div>
  </div>
</template>
<script>
import MeetupInfo from '@/components/meetupPage/MeetupInfo';
import UiLink from '@/components/ui/UiLink';
export default {
  name: 'MeetupsItem',
  components: {
    MeetupInfo,
    UiLink,
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
.mdl-card--border {
  margin-top: 15px;
}
</style>
