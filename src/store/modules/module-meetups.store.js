import { fbCreateIconsList } from '@/requesters/firebase/_firebase.storage.requesters';
import moment from 'moment';
import 'moment/locale/ru';
import {
  filterMeetupsByInput,
  filterMeetupsInWhichIOrganizeOrParticipate,
  sortMeetupsByDate,
} from '@/services/_meetups.service';
import { getEventsDates } from '@/services/_event-calendar.service';
import { fbDb } from '@/requesters/firebase/_options.firebase';
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
    filteredMeetups(state) {
      const sortedMeetups = sortMeetupsByDate(
        state.data.meetups,
        state.sortingParams.radioButtonValue,
      );
      return filterMeetupsByInput(
        sortedMeetups,
        state.sortingParams.inputValue,
      );
    },
    meetupsIOrganize(state, getters, rootState) {
      const meetups = filterMeetupsInWhichIOrganizeOrParticipate(
        state.data.meetups,
        rootState.user.data.userInfo?.meetups?.organizer,
      );
      const sortedMeetups = sortMeetupsByDate(
        meetups,
        state.sortingParams.radioButtonValue,
      );
      return filterMeetupsByInput(
        sortedMeetups,
        state.sortingParams.inputValue,
      );
    },
    meetupsIParticipate(state, getters, rootState) {
      const meetups = filterMeetupsInWhichIOrganizeOrParticipate(
        state.data.meetups,
        rootState.user.data.userInfo?.meetups?.participant,
      );
      const sortedMeetups = sortMeetupsByDate(
        meetups,
        state.sortingParams.radioButtonValue,
      );
      return filterMeetupsByInput(
        sortedMeetups,
        state.sortingParams.inputValue,
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
    async getMeetups({ state, commit }) {
      try {
        state.isLoading = true;
        /** Фаербейсовский сокет - прослушка изменений БД **/
        await onValue(ref(fbDb, 'meetups'), response => {
          const data = response.val();
          const formattedData = Object.values(data);
          commit('setMeetups', formattedData);
          state.isLoading = false;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getIconList({ commit, state }) {
      try {
        state.isLoading = true;
        await fbCreateIconsList(commit, 'icons/');
        state.isLoading = false;
      } catch (err) {
        console.log(err);
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
