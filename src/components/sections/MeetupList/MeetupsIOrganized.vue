<template>
  <div class="meetups-i-organized">
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
  name: 'MeetupsIOrganized',
  components: {
    MeetupItem,
    UiMessage,
  },
  computed: {
    meetups() {
      return this.$store.getters.meetupsIOrganized;
    },
  },
};
</script>
<style scoped lang="scss">
.meetups-i-organized {
  width: 100%;
}
</style>
