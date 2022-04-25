<template>
  <div class="calendar-page">
    <EventCalendar />
  </div>
</template>
<script>
import EventCalendar from '@/components/EventCalendar';

export default {
  name: 'CalendarPage',
  components: {
    EventCalendar,
  },
};
</script>

<style lang="scss">
.calendar-page {
  margin-top: 25px;
}
</style>
