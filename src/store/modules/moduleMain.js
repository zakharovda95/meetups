import { getFirebaseData } from '@/api/firebase/_firebase.database.services';
import { getStorageDataLink } from '@/api/firebase/_firebase.storage.services';
import { listAll, ref } from 'firebase/storage';
import { fbStorage } from '@/api/firebase/_options.firebase';
//import { debounce } from 'lodash';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export const moduleMain = {
  state: () => ({
    isLoading: false,
    mainPageIcons: [],
    meetups: [],
    inputValue: '',
    meetupId: '',
  }),
  getters: {
    filteredMeetups(state) {
      return state.meetups.filter(item => {
        return item.title
          .toUpperCase()
          .includes(state.inputValue.toUpperCase());
      });
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
        await listAll(ref(fbStorage, 'icons/')).then(res =>
          res.items.forEach(async item => {
            const link = await getStorageDataLink(item);
            commit('setMainPageIcons', { name: item.name, url: link });
          }),
        );
      } catch (err) {
        console.log(err);
      } finally {
        commit('checkLoading', false);
      }
    },
    updateInputValue({ commit }, payload) {
      commit('updateInputValue', payload);
    },
  },
};
