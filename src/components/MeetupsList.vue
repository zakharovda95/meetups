<template>
  <div class="meetups_list">
    <meetup-item
      v-for="meetup in meetups"
      :key="meetup.id"
      :meetup="meetup"
    ></meetup-item>
  </div>
</template>
<script>
import MeetupItem from '@/components/MeetupItem';
export default {
  name: 'MeetupsList',
  components: {
    MeetupItem,
  },
  computed: {
    meetups() {
      return this.$store.getters.filteredMeetups;
    },
  },
};
</script>
<style scoped lang="scss">
.meetups_list {
  width: 100%;
}
</style>
