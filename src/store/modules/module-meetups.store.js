import { fbGetData } from '@/requesters/firebase/_firebase.database.requesters';
import { fbCreateIconsList } from '@/requesters/firebase/_firebase.storage.requesters';
import moment from 'moment';
import 'moment/locale/ru';
import {
  filterMeetupsByInput,
  sortMeetupsByDate,
} from '@/services/_sorting.service';
import { getEventsDates } from '@/services/_event-calendar.service';
import { onAuthStateChanged } from 'firebase/auth';
import { fbAuth, fbDb } from '@/requesters/firebase/_options.firebase';
import { ref, onValue } from 'firebase/database';

moment.locale('ru');

export const moduleMeetupsStore = {
  state: () => ({
    isLoading: false,
    data: {
      meetups: [],
      icons: [],
    },
    sortingParams: {
      inputValue: '',
      radioButtonValue: 'all',
    },
    currentMeetupId: '',
  }),
  getters: {
    eventsDates(state) {
      return getEventsDates(state.data.meetups);
    },
    filteredMeetups(state, getters) {
      return filterMeetupsByInput(
        getters.sortedMeetups,
        state.sortingParams.inputValue,
      );
    },
    sortedMeetups(state) {
      return sortMeetupsByDate(
        state.data.meetups,
        state.sortingParams.radioButtonValue,
      );
    },
    meetup(state) {
      return state.data.meetups.find(
        meetup => meetup.id === state.currentMeetupId,
      );
    },
  },
  mutations: {
    setMeetups(state, meetups) {
      meetups.forEach(meetup => {
        meetup.dateUnix = moment(meetup.date).valueOf();
        meetup.date = moment(meetup.date).format('DD MMMM yy г.');
      });
      state.data.meetups = meetups;
    },
    chooseMeetupById(state, id) {
      state.currentMeetupId = id;
    },
    checkLoading(state, value) {
      state.isLoading = value;
    },
    setIcons(state, iconUrl) {
      state.data.icons.push(iconUrl);
    },
    updateInputValue(state, value) {
      state.sortingParams.inputValue = value;
    },
    updateRadioValue(state, value) {
      state.sortingParams.radioButtonValue = value;
    },
  },
  actions: {
    chooseMeetupById({ commit }, meetupId) {
      commit('chooseMeetupById', meetupId);
    },
    getMeetups({ commit }) {
      try {
        commit('checkLoading', true);
        /** Фаербейсовский сокет - прослушка изменений БД **/
        onValue(ref(fbDb, 'meetups'), response => {
          const data = response.val();
          const formattedData = Object.values(data);
          commit('setMeetups', formattedData);
        });
      } catch (error) {
        console.log(error);
      } finally {
        commit('checkLoading', false);
      }
    },
    checkUserStatus({ commit }) {
      onAuthStateChanged(fbAuth, async user => {
        if (user) {
          const data = await fbGetData('users/' + user.uid);
          commit('setUserInfo', data);
        } else {
          console.log('Вы не авторизованы');
        }
      });
    },
    async getIconList({ commit }) {
      try {
        commit('checkLoading', true);
        await fbCreateIconsList(commit, 'icons/');
      } catch (err) {
        console.log(err);
      } finally {
        commit('checkLoading', false);
      }
    },
    updateInputValue({ commit }, value) {
      commit('updateInputValue', value);
    },
    updateRadioValue({ commit }, value) {
      commit('updateRadioValue', value);
    },
  },
};
