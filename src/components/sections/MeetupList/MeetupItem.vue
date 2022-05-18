<template>
  <div class="meetup-item mdl-shadow--2dp">
    <div class="cover">
      <MeetupCover :title="meetup.title" :image="meetup.image" />
    </div>
    <div class="info">
      <div class="badge" v-if="userMeetups">
        <UiBadge v-if="isParticipant">Участник</UiBadge>
        <UiBadge v-if="isOrganizer" variant="organizer">Организатор</UiBadge>
      </div>
      <MeetupInfo :meetup="meetup"></MeetupInfo>
    </div>
    <hr />
    <div class="link">
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
      return this.$store.state.user.data.userInfo?.meetups;
    },
    isParticipant() {
      if (this.userMeetups) {
        return this.userMeetups.participant.some(
          item => item === this.meetup.id,
        );
      }
      return false;
    },
    isOrganizer() {
      if (this.userMeetups) {
        return this.userMeetups.organizer.some(item => item === this.meetup.id);
      }
      return false;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
.meetup-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  background: $ITEMS_COLOR;
  .info {
    .badge {
      display: flex;
      justify-content: flex-end;
      padding-right: 10px;
      padding-top: 10px;
    }
  }
  .link {
    display: flex;
    text-align: center;
    margin-top: -16px;
  }
}
</style>
