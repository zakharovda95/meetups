export const moduleCreating = {
  state: () => ({
    meetupForm: {
      id: Date.now() - 2,
      organizer: '123',
      image: '',
      imageId: Date.now() - 1,
      title: '',
      date: '',
      place: '',
      description: '',
      agenda: [],
    },
    agendaItemForm: {
      id: Date.now(),
      type: '',
      title: '',
      speaker: '',
      description: '',
      language: '',
      startsAt: '07:00',
      endsAt: '08:00',
    },
  }),
  mutations: {
    addAgendaItem(state, payload) {
      state.meetupForm.agenda.push(payload);
    },
    removeAgendaItem(state, payload) {
      state.meetupForm.agenda.forEach((item, index, array) => {
        if (item.id === payload) {
          array.splice(index, 1);
        }
      });
    },
  },
  actions: {
    addAgendaItem({ commit }, payload) {
      commit('addAgendaItem', payload);
    },
    removeAgendaItem({ commit }, payload) {
      commit('removeAgendaItem', payload);
    },
  },
};
