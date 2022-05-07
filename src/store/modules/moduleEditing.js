export const moduleEditing = {
  state: () => ({
    editableMeetup: null,
  }),
  mutations: {
    getEditableMeetup(state, payload) {
      state.editableMeetup = payload;
    },
  },
  actions: {
    async getEditableMeetup({ dispatch, rootState, commit }, payload) {
      await dispatch('getMeetups');
      const meetups = rootState.main.meetups;
      const editableMeetup = meetups.find(item => item.id === payload);
      commit('getEditableMeetup', editableMeetup);
    },
    editTitle(state, payload) {
      state.editableMeetup.title = payload;
    },
    editDate(state, payload) {
      state.editableMeetup.date = payload;
    },
    editPlace(state, payload) {
      state.editableMeetup.place = payload;
    },
    editDescription(state, payload) {
      state.editableMeetup.description = payload;
    },
    editImage(state, payload) {
      state.editableMeetup.image = payload.url;
      state.editableMeetup.imageName = payload.file.name;
    },
  },
  editTitle({ commit }, payload) {
    commit('editTitle', payload);
  },
  editDate({ commit }, payload) {
    commit('editDate', payload);
  },
  editPlace({ commit }, payload) {
    commit('editPlace', payload);
  },
  editDescription({ commit }, payload) {
    commit('editDescription', payload);
  },
  editImage({ commit }, payload) {
    commit('editImage', payload);
  },
};
