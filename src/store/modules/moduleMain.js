import { getFirebaseData } from '@/api/firebase/_firebase.services';

export const moduleMain = {
  state: () => ({
    navbarLinks: null,
    meetups: null,
  }),
  getters: {},
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
      state.meetups = payload;
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
  },
};
