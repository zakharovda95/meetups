<template>
  <div class="meetup-item-wrapper">
    <div class="meetup-item-wrapper-title">
      <h2 class="meetup-item-wrapper-title-text">{{ meetup.title }}</h2>
    </div>
    <div class="meetup-item-wrapper-info">
      <meetup-info :meetup="meetup"></meetup-info>
    </div>
    <div class="meetup-item-wrapper-link">
      <ui-link
        variant="nav-link"
        :to="{ name: 'meetup', params: { meetupId: meetup.id } }"
      >
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
.meetup-item-wrapper > .meetup-item-wrapper-title {
  height: 250px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('../assets/images/meetups_card__background.jpg') center / cover;
}
.meetup-item-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  background: $navbar-color-white;

  .meetup-item-wrapper-title {
    display: flex;

    .meetup-item-wrapper-title-text {
      display: flex;
      align-self: flex-end;
      font-family: JetBrainMono-Bold, sans-serif;
      font-size: 2em;
      color: white;
      margin-left: 25px;
    }
  }
  .meetup-item-wrapper-link {
    text-align: center;
    width: 120px;
  }
}
</style>
