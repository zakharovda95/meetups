<template>
  <div class="weekday-panel-item" v-for="day in weekdays" :key="day">
    {{ day }}
  </div>
</template>
<script>
export default {
  name: 'CalendarWeekdayPanel',
  computed: {
    weekdays() {
      return this.$store.state.calendar.data.weekdays;
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .weekday-panel-item {
    background-color: $ITEMS_COLOR;
    border: 1px solid $UI_COLOR;
    padding: 5px;
    font-family: 'Comic Sans MS', sans-serif;
  }
}
@media (min-width: 1020px) {
  .weekday-panel-item {
    background-color: $ITEMS_COLOR;
    border: 1px solid $UI_COLOR;
    padding: 5px;
    color: $FONT_COLOR_DARK;
    font-family: 'Comic Sans MS', sans-serif;
  }
}
</style>
