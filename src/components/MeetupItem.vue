<template>
  <div class="meetup-item-wrapper">
    <div class="meetup-item-wrapper-cover">
      <MeetupCover :title="meetup.title" :image="meetup.image" />
    </div>
    <div class="meetup-item-wrapper-info">
      <meetup-info :meetup="meetup"></meetup-info>
    </div>
    <hr />
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
import MeetupCover from '@/components/meetupPage/MeetupCover';
import UiLink from '@/components/ui/UiLink';
export default {
  name: 'MeetupsItem',
  components: {
    MeetupCover,
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
    url('https://firebasestorage.googleapis.com/v0/b/meetups-ddc9b.appspot.com/o/covers%2Fmeetups_card__background.jpg?alt=media&token=744441d9-c81e-4332-82a5-f41e5cc96b58')
      center / cover;
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
    margin-top: -15px;
    text-align: center;
    width: 120px;
  }
}
</style>
