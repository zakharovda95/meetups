<template>
  <div class="meetups-i-participate">
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
  name: 'MeetupsIParticipate',
  components: {
    MeetupItem,
    UiMessage,
  },
  mounted() {
    console.log(this.meetups);
  },
  computed: {
    meetups() {
      return this.$store.getters.meetupsIParticipate;
    },
  },
};
</script>
<style scoped lang="scss">
.meetups-i-participate {
  width: 100%;
}
</style>
