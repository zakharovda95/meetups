<template>
  <div class="meetups-list">
    <UiMessage v-if="!meetups.length">
      По заданным параметрам ничего не найдено :(
    </UiMessage>
    <MeetupItem
      v-else
      v-for="meetup in meetups"
      :key="meetup.id"
      :meetup="meetup"
    ></MeetupItem>
  </div>
</template>
<script>
import MeetupItem from '@/components/sections/MeetupList/MeetupItem';
import UiMessage from '@/components/ui/UiMessage';
export default {
  name: 'MeetupsList',
  components: {
    MeetupItem,
    UiMessage,
  },
  computed: {
    meetups() {
      return this.$store.getters.filteredMeetups;
    },
  },
};
</script>
<style scoped lang="scss">
.meetups-list {
  width: 100%;
}
</style>
