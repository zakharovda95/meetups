<template>
  <div class="meetup-agenda" v-if="agenda">
    <h4>Программа:</h4>
    <div class="item" v-for="item in agenda" :key="item.id">
      <MeetupAgendaItem :agenda-item="item" />
    </div>
  </div>
  <UiMessage v-else>Программа не найдена</UiMessage>
  <hr />
</template>
<script>
import MeetupAgendaItem from '@/components/sections/MeetupPage/MeetupAgendaItem';
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
@import '~@/assets/styles/_constants.scss';
.meetup-agenda {
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  h4 {
    font-family: Roboto, sans-serif;
  }
}
</style>
