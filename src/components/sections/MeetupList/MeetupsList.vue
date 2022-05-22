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
  <UiShift v-if="!isNoScroll" hash="#modals" id="scroll-up">&#9650;</UiShift>
</template>
<script>
import MeetupItem from '@/components/sections/MeetupList/MeetupItem';
import UiMessage from '@/components/ui/UiMessage';
import UiShift from '@/components/ui/UiShift';
export default {
  name: 'MeetupsList',
  components: {
    UiShift,
    MeetupItem,
    UiMessage,
  },
  data: () => ({
    offsetX: window.pageXOffset,
    offsetY: window.pageYOffset,
  }),
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
    isNoScroll() {
      return this.offsetX === 0 && this.offsetY === 0;
    },
  },
  methods: {
    handleScroll() {
      this.offsetX = window.pageXOffset;
      this.offsetY = window.pageYOffset;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
  #scroll-up {
    position: fixed;
    bottom: 37vh;
    right: 10px;
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
  #scroll-up {
    position: fixed;
    bottom: 40vh;
    right: 50px;
  }
}
</style>
