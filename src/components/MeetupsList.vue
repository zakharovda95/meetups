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
      return this.$store.state.main.meetups;
    },
  },
};
</script>
<style scoped lang="scss">
.meetups_list {
  margin-top: 55px;
  width: 100%;
}
</style>
