<template>
  <div class="meetup-agenda-wrapper" v-if="agenda">
    <h4>Программа:</h4>
    <div
      class="meetup-agenda-wrapper-item"
      v-for="item in agenda"
      :key="item.id"
    >
      <MeetupAgendaItem :agenda-item="item" />
    </div>
  </div>
  <UiMessage v-else>Программа не найдена</UiMessage>
  <hr />
</template>
<script>
import MeetupAgendaItem from '@/components/Public/MeetupPage/MeetupAgendaItem';
import UiMessage from '@/components/ui/UiMessage';
export default {
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem,
    UiMessage,
  },
  computed: {
    agenda() {
      return this.$store.getters.meetup.agenda;
    },
  },
};
</script>
<style scoped lang="scss">
.meetup-agenda-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
