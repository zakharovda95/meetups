<template>
  <ui-loading v-if="!meetup" />
  <div class="meetup_view" v-else>
    <meetup-cover :meetup="meetup" />
    <meetup-info :meetup="meetup" />
    <meetup-description :meetup="meetup" />
  </div>
</template>
<script>
import MeetupCover from '@/components/meetupPage/MeetupCover';
import MeetupInfo from '@/components/meetupPage/MeetupInfo';
import MeetupDescription from '@/components/meetupPage/MeetupDescription';
import UiLoading from '@/components/ui/UiLoading';

export default {
  name: 'MeetupView',
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
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
.meetup_view {
  display: flex;
}
</style>
