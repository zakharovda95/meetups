import { getFirebaseData } from '@/api/firebase/_firebase.database.services';
import { getStorageDataLink } from '@/api/firebase/_firebase.storage.services';
import { listAll, ref } from 'firebase/storage';
import { fbStorage } from '@/api/firebase/_options.firebase';

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export const moduleMain = {
  state: () => ({
    mainPageIcons: [],
    filteredMeetups: [],
    navbarLinks: null,
    meetups: [],
    inputValue: '',
  }),
  getters: {
    filteredMeetups(state) {
      return (state.filteredMeetups = state.meetups.filter(item => {
        return item.title
          .toUpperCase()
          .includes(state.inputValue.toUpperCase());
      }));
    },
  },
  mutations: {
    setNavbarLinks(state, payload) {
      const dataEntries = Object.entries(payload);
      state.navbarLinks = dataEntries.map(item => {
        return {
          about: item[0],
          data: item[1],
        };
      });
    },
    setMeetups(state, payload) {
      payload.forEach(item => {
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
  },
  actions: {
    async getNavbarLinks({ commit }) {
      try {
        const response = await getFirebaseData('links/mainPageLinks');
        commit('setNavbarLinks', response);
      } catch (err) {
        console.log(err);
      }
    },
    async getMeetups({ commit }) {
      try {
        const response = await getFirebaseData('meetups');
        commit('setMeetups', response);
      } catch (err) {
        console.log(err);
      }
    },
    async getIconList({ commit }) {
      try {
        await listAll(ref(fbStorage, 'icons/')).then(res =>
          res.items.forEach(async item => {
            const link = await getStorageDataLink(item);
            commit('setMainPageIcons', { name: item.name, url: link });
          }),
        );
      } catch (err) {
        console.log(err);
      }
    },
    updateInputValue({ commit }, payload) {
      commit('updateInputValue', payload);
    },
  },
};
