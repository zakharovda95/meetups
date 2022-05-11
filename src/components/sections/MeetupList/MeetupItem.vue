<template>
  <div class="meetup-item-wrapper">
    <div class="meetup-item-wrapper-cover">
      <MeetupCover :title="meetup.title" :image="meetup.image" />
    </div>
    <div class="meetup-item-wrapper-info">
      <div class="meetup-item-badge" v-if="userMeetups">
        <UiBadge v-if="isParticipant">Участник</UiBadge>
        <UiBadge v-if="isOrganizer" variant="organizer">Организатор</UiBadge>
      </div>
      <MeetupInfo :meetup="meetup"></MeetupInfo>
    </div>
    <hr />
    <div class="meetup-item-wrapper-link">
      <UiLink
        variant="nav-link"
        :to="{ name: 'meetup', params: { meetupId: meetup.id } }"
      >
        Подробнее
      </UiLink>
    </div>
  </div>
</template>
<script>
import MeetupInfo from '@/components/sections/MeetupPage/MeetupInfo';
import MeetupCover from '@/components/sections/MeetupPage/MeetupCover';
import UiLink from '@/components/ui/UiLink';
import UiBadge from '@/components/ui/UiBadge';
export default {
  name: 'MeetupsItem',
  components: {
    UiBadge,
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
  computed: {
    userMeetups() {
      return this.$store.state.main?.userInfo?.meetups;
    },
    isParticipant() {
      return this.userMeetups.participant.some(item => item === this.meetup.id);
    },
    isOrganizer() {
      return this.userMeetups.organizer.some(item => item === this.meetup.id);
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/fonts/_fonts.css';
@import '../../../assets/styles/constants';

.meetup-item-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  background: $navbar-color-white;
  .meetup-item-wrapper-info {
    .meetup-item-badge {
      display: flex;
      justify-content: flex-end;
    }
  }

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
