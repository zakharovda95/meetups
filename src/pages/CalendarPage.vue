<template>
  <div class="calendar-page">
    <UiLoading v-if="isLoading" />
    <EventCalendar :events="eventsDates" v-else />
  </div>
</template>
<script>
import EventCalendar from '@/components/sections/EventCalendar/EventCalendar';
import UiLoading from '@/components/ui/UiLoading';
export default {
  name: 'CalendarPage',
  components: {
    EventCalendar,
    UiLoading,
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
