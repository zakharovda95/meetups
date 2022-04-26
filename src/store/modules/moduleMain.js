import { getFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
import { createIconsList } from '@/requesters/firebase/_firebase.storage.requesters';
import moment from 'moment';
import 'moment/locale/ru';
import {
  filterMeetupsByInput,
  sortMeetupsByDate,
} from '@/services/_sorting.service';
moment.locale('ru');

export const moduleMain = {
  state: () => ({
    isLoading: false,
    mainPageIcons: [],
    meetups: [],
    inputValue: '',
    meetupId: '',
    meetupSortParam: 'all',
  }),
  getters: {
    eventsDates(state) {
      return state.meetups.map(item => {
        return {
          id: item.id,
          date: item.dateUnix,
        };
      });
    },
    filteredMeetups(state, getters) {
      return filterMeetupsByInput(getters.sortedMeetups, state.inputValue);
    },
    sortedMeetups(state) {
      return sortMeetupsByDate(state.meetups, state.meetupSortParam);
    },
    meetup(state) {
      let elem = null;
      state.meetups.forEach(item => {
        if (item.id === state.meetupId) {
          elem = item;
        }
      });
      return elem;
    },
  },
  mutations: {
    chooseMeetupById(state, payload) {
      state.meetupId = payload;
    },
    checkLoading(state, payload) {
      state.isLoading = payload;
    },
    setMeetups(state, payload) {
      payload.forEach(item => {
        item.dateUnix = item.date;
        item.date = moment(item.date).format('DD MMMM yy г.');
      });
      state.meetups = payload;
    },
    setMainPageIcons(state, payload) {
      state.mainPageIcons.push(payload);
    },
    updateInputValue(state, payload) {
      state.inputValue = payload;
    },
    updateRadioValue(state, payload) {
      state.meetupSortParam = payload;
    },
  },
  actions: {
    setMeetupById({ commit }, payload) {
      commit('chooseMeetupById', payload);
    },
    async getMeetups({ commit }) {
      try {
        commit('checkLoading', true);
        const response = await getFirebaseData('meetups');
        commit('setMeetups', response);
      } catch (err) {
        console.log(err);
      } finally {
        commit('checkLoading', false);
      }
    },
    async getIconList({ commit }) {
      try {
        commit('checkLoading', true);
        await createIconsList(commit, 'icons/');
      } catch (err) {
        console.log(err);
      } finally {
        commit('checkLoading', false);
      }
    },
    updateInputValue({ commit }, payload) {
      commit('updateInputValue', payload);
    },
    updateRadioValue({ commit }, payload) {
      commit('updateRadioValue', payload);
    },
  },
};
