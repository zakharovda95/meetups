import {
  formatEventDates,
  getDaysInMonthArray,
  getWeekdayMonthBegin,
  weekdays,
} from '@/services/_event-calendar.service';
import moment from 'moment';

export const moduleCalendarStore = {
  state: () => ({
    data: {
      weekdays: weekdays,
      daysInCurrentMonth: null,
      weekdayMonthBegin: null,
      currentMonth: null,
      currentYear: null,
      formattedEvents: null,
    },
  }),
  getters: {
    month(state) {
      return moment([state.data.currentYear, state.data.currentMonth]).format(
        'MMMM',
      );
    },
    year(state) {
      return moment([state.data.currentYear, state.data.currentMonth]).format(
        'YYYY',
      );
    },
  },
  mutations: {
    setFormattedEvents(state, formattedEvents) {
      state.data.formattedEvents = formattedEvents;
    },
    setCurrentMonthAndYear(state, { currentMonth, currentYear }) {
      state.data.currentMonth = currentMonth;
      state.data.currentYear = currentYear;
    },
    setDaysInCurrentMonthAndWeekDayMonthBegin(
      state,
      { daysInCurrentMonth, weekdayMonthBegin },
    ) {
      state.data.daysInCurrentMonth = daysInCurrentMonth;
      state.data.weekdayMonthBegin = weekdayMonthBegin;
    },
    setEvents(state) {
      state.data.formattedEvents.forEach(event => {
        state.data.daysInCurrentMonth.forEach(day => {
          if (
            state.data.currentMonth + 1 === event.date.month &&
            state.data.currentYear === event.date.year &&
            day.day === event.date.day
          ) {
            day.events.push(event);
          }
        });
      });
    },
    previousMonth(state) {
      state.data.currentMonth -= 1;
      if (state.data.currentMonth < 0) {
        state.data.currentMonth = 11;
        state.data.currentYear -= 1;
      }
    },
    nextMonth(state) {
      state.data.currentMonth += 1;
      if (state.data.currentMonth > 11) {
        state.data.currentMonth = 0;
        state.data.currentYear += 1;
      }
    },
  },
  actions: {
    formatEvents({ commit }, events) {
      const result = formatEventDates(events);
      commit('setFormattedEvents', result);
    },
    getCurrentMonthAndYear({ commit }) {
      const currentMonth = +moment().format('M') - 1;
      const currentYear = +moment().format('YYYY');
      commit('setCurrentMonthAndYear', { currentMonth, currentYear });
    },
    getCurrentMonthData({ commit, state }) {
      const daysInCurrentMonth = getDaysInMonthArray(
        state.data.currentYear,
        state.data.currentMonth,
      );
      const weekdayMonthBegin = getWeekdayMonthBegin(
        state.data.currentYear,
        state.data.currentMonth,
      );
      commit('setDaysInCurrentMonthAndWeekDayMonthBegin', {
        daysInCurrentMonth,
        weekdayMonthBegin,
      });
    },
    setEvents({ commit }) {
      commit('setEvents');
    },
    previousMonth({ commit, dispatch }) {
      commit('previousMonth');
      dispatch('getCurrentMonthData');
      commit('setEvents');
    },
    nextMonth({ commit, dispatch }) {
      commit('nextMonth');
      dispatch('getCurrentMonthData');
      commit('setEvents');
    },
  },
};
