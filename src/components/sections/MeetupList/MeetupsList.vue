<template>
  <div class="meetups-list">
    <UiMessage id="message" v-if="!meetups.length">
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
    isUserAuthorized() {
      return this.$store.state.user.data.isUserAuthorized;
    },
    meetups() {
      if (this.$route.name === 'meetups') {
        return this.$store.getters.filteredMeetups;
      }
      if (this.$route.name === 'organizer' && this.isUserAuthorized) {
        return this.$store.getters.meetupsIOrganize;
      }
      if (this.$route.name === 'participant' && this.isUserAuthorized) {
        return this.$store.getters.meetupsIParticipate;
      }
      return false;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  #message {
    display: flex;
    justify-content: center;
    width: 90%;
  }
  .meetups-list {
    width: 100%;
  }
}
@media (min-width: 1020px) {
  #message {
    display: flex;
    justify-content: center;
    width: 94%;
  }
  .meetups-list {
    width: 100%;
  }
}
</style>
