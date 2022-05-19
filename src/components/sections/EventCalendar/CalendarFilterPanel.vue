<template>
  <div class="filter-panel-wrapper">
    <div class="items">
      <UiButton @click="previousMonth" variant="default">&#8592;</UiButton>
      <div class="date">{{ month }} {{ year }}</div>
      <UiButton @click="nextMonth" variant="default">&#8594;</UiButton>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'CalendarFilterPanel',
  components: {
    UiButton,
  },
  methods: {
    ...mapActions(['previousMonth', 'nextMonth']),
  },
  computed: {
    ...mapGetters(['year', 'month']),
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
@media (max-width: 1019px) {
  .filter-panel-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: $FONT_COLOR_DARK;
    justify-content: center;
    font-size: 1.2em;
    .items {
      display: flex;
      justify-content: space-between;
      border: 1px solid $UI_COLOR;
      border-radius: 24px;
      width: 95%;
      margin-top: 5px;
      background-color: $ITEMS_COLOR;
      button {
        font-size: 1.2em;
      }
      button:hover {
        background: $HOVER_COLOR;
        border-radius: 19px;
      }
      .date {
        display: flex;
        align-self: center;
      }
    }
  }
}
@media (min-width: 1020px) {
  .filter-panel-wrapper {
    margin: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    color: $FONT_COLOR_DARK;
    font-size: 1.5em;
    .items {
      display: flex;
      justify-content: space-between;
      border: 1px solid $UI_COLOR;
      border-radius: 24px;
      width: 50%;
      background-color: $ITEMS_COLOR;
      button {
        font-size: 1.2em;
      }
      button:hover {
        background: $HOVER_COLOR;
        border-radius: 19px;
      }
      .date {
        display: flex;
        align-self: center;
      }
    }
  }
}
</style>
