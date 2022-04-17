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
