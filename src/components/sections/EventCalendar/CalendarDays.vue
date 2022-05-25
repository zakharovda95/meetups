<template>
  <div class="calendar-days" v-for="day in daysInCurrentMonth" :key="day.day">
    <div class="day">{{ day.day }}</div>
    <CalendarEvents :events="day.events" />
  </div>
</template>
<script>
import CalendarEvents from '@/components/sections/EventCalendar/CalendarEvents';

export default {
  name: 'CalendarDays',
  components: {
    CalendarEvents,
  },
  computed: {
    daysInCurrentMonth() {
      return this.$store.state.calendar.data.daysInCurrentMonth;
    },
    weekdayMonthBegin() {
      return this.$store.state.calendar.data.weekdayMonthBegin;
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .calendar-days {
    display: grid;
    justify-self: stretch;
    padding: 5px;
    min-height: 8vw;
    max-height: 10vw;
    border: 1px solid $UI_COLOR;
    width: auto;
    text-align: right;
    background-color: $ITEMS_COLOR;
    .day {
      color: $FONT_COLOR_DARK;
      font-family: 'Comic Sans MS', sans-serif;
    }
  }
  .calendar-days:first-child {
    grid-column: v-bind(weekdayMonthBegin);
  }
}
@media (min-width: 1020px) {
  .calendar-days {
    display: grid;
    justify-self: stretch;
    padding: 5px;
    min-height: 8vw;
    max-height: 10vw;
    border: 1px solid $UI_COLOR;
    width: auto;
    text-align: right;
    background-color: $ITEMS_COLOR;
    .day {
      color: $FONT_COLOR_DARK;
      font-family: 'Comic Sans MS', sans-serif;
    }
  }
  .calendar-days:first-child {
    grid-column: v-bind(weekdayMonthBegin);
  }
}
</style>
