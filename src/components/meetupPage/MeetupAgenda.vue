<template>
  <div class="meetup-agenda-wrapper">
    <h4>Программа:</h4>
    <div
      class="meetup-agenda-wrapper-item"
      v-for="item in agenda"
      :key="item.id"
    >
      <MeetupAgendaItem :agenda-item="item" />
    </div>
  </div>
</template>
<script>
import MeetupAgendaItem from '@/components/meetupPage/MeetupAgendaItem';
export default {
  name: 'MeetupAgenda',
  components: { MeetupAgendaItem },
  computed: {
    agenda() {
      return this.$store.getters.meetup.agenda;
    },
  },
};
</script>
<style scoped lang="scss"></style>
