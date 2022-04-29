<template>
  <div class="event-calendar">
    <div class="event-calendar-filter-panel">
      <div class="event-calendar-filter-panel-items-group">
        <UiButton @click="previousMonth">&#8592;</UiButton>
        <div class="event-calendar-filter-panel-current-date">
          {{ month }} {{ year }}
        </div>
        <UiButton @click="nextMonth">&#8594;</UiButton>
      </div>
    </div>
    <div class="event-calendar-weekday-panel">
      <div
        class="event-calendar-weekday-panel-item"
        v-for="day in weekDays"
        :key="day"
      >
        {{ day }}
      </div>
    </div>
    <div class="event-calendar-container">
      <div
        class="event-calendar-item"
        v-for="day in daysInCurrentMonth"
        :key="day.day"
      >
        <div class="event-calendar-item-day">{{ day.day }}</div>
        <div class="event-calendar-item-events" v-if="day.events.length">
          <UiLink
            variant="calendar-link"
            v-for="event in day.events"
            :key="event.id"
            :to="{ name: 'meetup', params: { meetupId: event.id } }"
          >
            {{ event.title }}
          </UiLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import UiButton from '@/components/ui/UiButton';
import UiLink from '@/components/ui/UiLink';

export default {
  name: 'EventCalendar',
  components: { UiLink, UiButton },
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    daysInCurrentMonth: null,
    weekDayMonthBegin: null,
    currentMonth: null,
    currentYear: null,
    formattedEvents: null,
  }),
  methods: {
    getDaysInMonthArray(year, month) {
      let monthDate = moment([year, month]).startOf('month');
      return [...Array(monthDate.daysInMonth())].map((_, i) => {
        return {
          day: i + 1,
          events: [],
        };
      });
    },
    setEvents() {
      this.formattedEvents.forEach(item => {
        this.daysInCurrentMonth.forEach(elem => {
          if (
            this.currentMonth === item.date.month &&
            this.currentYear === item.date.year &&
            elem.day === item.date.day
          ) {
            elem.events.push(item);
          }
        });
      });
    },
    getWeekdayMonthBegin(year, month) {
      if (+moment([year, month]).startOf('month').format('d') === 0) {
        return 7;
      }
      return moment([year, month]).startOf('month').format('d');
    },
    getCurrentMonthData() {
      this.daysInCurrentMonth = this.getDaysInMonthArray(
        this.currentYear,
        this.currentMonth,
      );
      this.weekDayMonthBegin = this.getWeekdayMonthBegin(
        this.currentYear,
        this.currentMonth,
      );
    },
    previousMonth() {
      this.currentMonth -= 1;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      }
      this.getCurrentMonthData();
      this.setEvents();
    },
    nextMonth() {
      this.currentMonth += 1;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      }
      this.getCurrentMonthData();
      this.setEvents();
    },
    formatEventsDates() {
      return this.events.map(item => {
        return {
          id: item.id,
          title: item.title,
          date: {
            day: +moment(item.date).format('D'),
            month: +moment(item.date).format('M'),
            year: +moment(item.date).format('YYYY'),
          },
        };
      });
    },
  },
  computed: {
    month() {
      return moment([this.currentYear, this.currentMonth]).format('MMMM');
    },
    year() {
      return moment([this.currentYear, this.currentMonth]).format('YYYY');
    },
  },
  mounted() {
    this.formattedEvents = this.formatEventsDates();
    this.currentYear = +moment().format('YYYY');
    this.currentMonth = +moment().format('M') - 1;
    this.getCurrentMonthData();
    this.setEvents();
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
@import '../../../assets/fonts/_fonts.css';
@media (max-width: 1019px) {
  .event-calendar {
    width: 90%;
    margin: 0 auto;
    font-family: 'JetBrainMono-Bold', sans-serif;
    border: 2px solid $main-color;
    background-color: $calendar-background-color;
    .event-calendar-filter-panel {
      width: 100%;
      display: flex;
      flex-direction: row;
      color: $main-color;
      justify-content: center;
      font-size: 1.2em;
      .event-calendar-filter-panel-items-group {
        display: flex;
        justify-content: space-between;
        border: 1px solid $main-color;
        width: 95%;
        margin-top: 5px;
        background-color: $calendar-item-color;
        button {
          font-size: 1.2em;
        }
        .event-calendar-filter-panel-current-date {
          display: flex;
          align-self: center;
        }
      }
    }
    .event-calendar-weekday-panel-item {
      background-color: $calendar-item-color;
      border: 1px solid $main-color;
      padding: 5px;
    }
    .event-calendar-weekday-panel,
    .event-calendar-container {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(7, 1fr);
      justify-items: stretch;
      align-items: stretch;
      padding: 5px;
      gap: 5px;
      color: $main-color;
      .event-calendar-item {
        display: grid;
        justify-self: stretch;
        padding: 5px;
        min-height: 8vw;
        max-height: 10vw;
        border: 1px solid $main-color;
        width: auto;
        text-align: right;
        background-color: $calendar-item-color;
      }
      .event-calendar-item:hover {
        background-color: #dfe1ee;
      }
    }
    .event-calendar-container div:first-child {
      grid-column: v-bind(weekDayMonthBegin);
    }
  }
}
@media (min-width: 1020px) {
  .event-calendar {
    width: 60%;
    margin: 0 auto;
    font-family: 'JetBrainMono-Bold', sans-serif;
    border: 2px solid $main-color;
    background-color: $calendar-background-color;
    .event-calendar-filter-panel {
      margin: 5px;
      width: 100%;
      display: flex;
      justify-content: center;
      color: $main-color;
      font-size: 1.5em;
      .event-calendar-filter-panel-items-group {
        display: flex;
        justify-content: space-between;
        border: 1px solid $main-color;
        width: 50%;
        background-color: $calendar-item-color;
        button {
          font-size: 1.2em;
        }
        .event-calendar-filter-panel-current-date {
          display: flex;
          align-self: center;
        }
      }
    }
    .event-calendar-weekday-panel-item {
      background-color: $calendar-item-color;
      border: 1px solid $main-color;
      padding: 5px;
      color: $main-color;
    }
    .event-calendar-weekday-panel,
    .event-calendar-container {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(7, 1fr);
      justify-items: stretch;
      align-items: stretch;
      padding: 5px;
      gap: 5px;
      color: $main-color;
      .event-calendar-item {
        display: grid;
        justify-self: stretch;
        padding: 5px;
        min-height: 8vw;
        max-height: 10vw;
        border: 1px solid $main-color;
        width: auto;
        text-align: right;
        background-color: $calendar-item-color;
      }
      .event-calendar-item:hover {
        background-color: #dfe1ee;
      }
    }
    .event-calendar-container div:first-child {
      grid-column: v-bind(weekDayMonthBegin);
    }
  }
}
</style>
