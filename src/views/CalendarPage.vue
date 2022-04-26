<template>
  <div class="calendar-page">
    <UiLoading v-if="isLoading" />
    <EventCalendar :events="eventsDates" v-else />
  </div>
</template>
<script>
import EventCalendar from '@/components/EventCalendar';

export default {
  name: 'CalendarPage',
  components: {
    EventCalendar,
  },
  computed: {
    eventsDates() {
      return this.$store.getters.eventsDates;
    },
    isLoading() {
      return this.$store.state.main.isLoading;
    },
  },
};
</script>

<style lang="scss">
.calendar-page {
  margin-top: 25px;
}
</style>
