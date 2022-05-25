<template>
  <div class="event-calendar mdl-shadow--8dp">
    <CalendarFilterPanel />
    <div class="weekday-panel">
      <CalendarWeekdayPanel />
    </div>
    <div class="days-panel">
      <CalendarDays />
    </div>
  </div>
</template>
<script>
import CalendarFilterPanel from '@/components/sections/EventCalendar/CalendarFilterPanel';
import { mapActions } from 'vuex';
import CalendarWeekdayPanel from '@/components/sections/EventCalendar/CalendarWeekdayPanel';
import CalendarDays from '@/components/sections/EventCalendar/CalendarDays';

export default {
  name: 'EventCalendar',
  components: {
    CalendarDays,
    CalendarWeekdayPanel,
    CalendarFilterPanel,
  },
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions([
      'formatEvents',
      'getCurrentMonthAndYear',
      'getCurrentMonthData',
      'setEvents',
    ]),
  },
  mounted() {
    this.formatEvents(this.events);
    this.getCurrentMonthAndYear();
    this.getCurrentMonthData();
    this.setEvents();
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .event-calendar {
    width: 90%;
    margin: 0 auto;
    border: 2px solid $UI_COLOR;
    border-radius: 0 25px 25px 25px;
    padding: 5px;
    background-color: $MAIN_COLOR;
    .weekday-panel,
    .days-panel {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(7, 1fr);
      justify-items: stretch;
      align-items: stretch;
      padding: 5px;
      gap: 5px;
      color: $FONT_COLOR_DARK;
      font-family: 'Comic Sans MS', sans-serif;
    }
  }
}
@media (min-width: 1020px) {
  .event-calendar {
    width: 60%;
    margin: 0 auto;
    border: 4px solid $UI_COLOR;
    border-radius: 0 32px 32px 32px;
    padding: 10px;
    background-color: $MAIN_COLOR;
    .weekday-panel,
    .days-panel {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(7, 1fr);
      justify-items: stretch;
      align-items: stretch;
      padding: 5px;
      gap: 5px;
      color: $FONT_COLOR_DARK;
      font-family: 'Comic Sans MS', sans-serif;
    }
  }
}
</style>
