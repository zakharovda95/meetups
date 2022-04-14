<template>
  <div class="meetup_view__toggle">
    <meetup-toggle />
  </div>
  <ui-loading v-if="!meetup" />
  <div class="meetup_view" v-else>
    <div class="meetup_view__meetup_cover">
      <meetup-cover :meetup="meetup" />
    </div>
    <div class="meetup_view__meetup_description">
      <meetup-description :meetup="meetup" />
    </div>
    <div class="meetup_view__meetup_info">
      <meetup-info :meetup="meetup" />
    </div>
  </div>
</template>
<script>
import MeetupCover from '@/components/meetupPage/MeetupCover';
import MeetupInfo from '@/components/meetupPage/MeetupInfo';
import MeetupDescription from '@/components/meetupPage/MeetupDescription';
import MeetupToggle from '@/components/meetupPage/MeetupToggle';
import UiLoading from '@/components/ui/UiLoading';

export default {
  name: 'MeetupView',
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupToggle,
    UiLoading,
  },

  mounted() {
    this.$store.dispatch('setMeetupById', this.meetupId);
  },
  computed: {
    meetupId() {
      return Number(this.$route.params.meetupId);
    },
    meetup() {
      return this.$store.getters.meetup;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .meetup_view__toggle {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 25px;
  }
  .meetup_view {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'JetBrainMono-Light', sans-serif;
    background: whitesmoke;
    padding: 25px;
    .meetup_view__meetup_cover {
      display: flex;
      align-self: center;
    }
    .meetup_view__meetup_description {
      display: flex;
      flex-direction: column;
      align-self: center;
      font-size: 1.5em;
      width: 100%;
    }
    .meetup_view__meetup_info {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 100%;
    }
  }
}
@media (min-width: 1020px) {
  .meetup_view__toggle {
    display: flex;
    justify-content: flex-start;
    margin-top: 80px;
    margin-bottom: 25px;
  }
  .meetup_view {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'JetBrainMono-Light', sans-serif;
    background: whitesmoke;
    padding: 25px;
    .meetup_view__meetup_cover {
      display: flex;
      align-self: center;
    }
    .meetup_view__meetup_description {
      display: flex;
      flex-direction: column;
      align-self: center;
      font-size: 1.5em;
      width: 100%;
    }
    .meetup_view__meetup_info {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 100%;
    }
  }
}
</style>
