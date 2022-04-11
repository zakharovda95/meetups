<template>
  <div class="meetup_view">
    <meetup-cover />
    <!--    <meetup-info :meetup="meetup" />-->
    <meetup-description />
  </div>
</template>
<script>
import MeetupCover from '@/components/meetupPage/MeetupCover';
//import MeetupInfo from '@/components/meetupPage/MeetupInfo';
import MeetupDescription from '@/components/meetupPage/MeetupDescription';

export default {
  name: 'MeetupView',
  components: {
    MeetupCover,
    // MeetupInfo,
    MeetupDescription,
  },
  mounted() {
    this.$store.dispatch('setMeetupId', this.meetupId);
    console.log(this.meetup);
  },
  computed: {
    meetupId() {
      return Number(this.$route.params.meetupId);
    },
    meetup() {
      return this.$store.getters.meetupById[0];
    },
  },
};
</script>
<style scoped lang="scss">
.meetup_view {
  display: flex;
}
</style>
