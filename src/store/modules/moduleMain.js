import { getFirebaseData } from '@/api/firebase/_firebase.services';

export const moduleMain = {
  state: () => ({
    navbarLinks: null,
    navbarLinksFormatted: null,
  }),
  getters: {},
  mutations: {
    setNavbarLinks(state, payload) {
      state.navbarLinks = payload;
    },
    // formatNavbarLinks(state) {
    //
    // }
  },
  actions: {
    async setNavbarLinks({ commit }) {
      try {
        const response = await getFirebaseData('mainPageRoutes');
        commit('setNavbarLinks', response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
