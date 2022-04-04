import { getFirebaseData } from '@/api/firebase/_firebase.services';

export const moduleMain = {
  state: () => ({
    navbarLinks: null,
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
  },
  actions: {
    async setNavbarLinks({ commit }) {
      try {
        const response = await getFirebaseData('links/mainPageLinks');
        commit('setNavbarLinks', response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
