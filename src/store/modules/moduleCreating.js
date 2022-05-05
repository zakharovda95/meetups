import { uuid } from 'vue-uuid';

export const moduleCreating = {
  state: () => ({
    meetupForm: {
      id: uuid.v1(),
      imageId: null,
      image: null,
      imageFile: null,
      organizer: '123',
      title: '',
      date: '',
      place: '',
      description: '',
      agenda: [],
    },
  }),
  mutations: {
    addAgendaItem(state) {
      const agendaItemForm = {
        id: uuid.v1(),
        type: '',
        title: '',
        speaker: '',
        description: '',
        language: '',
        startsAt: '07:00',
        endsAt: '08:00',
      };
      state.meetupForm.agenda.push(agendaItemForm);
    },
    updateTitle(state, payload) {
      state.meetupForm.title = payload;
    },
    updateDate(state, payload) {
      state.meetupForm.date = payload;
    },
    updatePlace(state, payload) {
      state.meetupForm.place = payload;
    },
    updateDescription(state, payload) {
      state.meetupForm.description = payload;
    },
    uploadImage(state, payload) {
      state.meetupForm.image = payload.url;
      state.meetupForm.imageId = uuid.v1();
      state.meetupForm.imageFile = payload.file;
    },
    removeImage(state) {
      state.meetupForm.image = null;
      state.meetupForm.imageId = null;
      state.meetupForm.imageFile = null;
    },
    updateAgendaType(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.type = payload[0];
    },
    updateAgendaStartsAt(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.startsAt = payload[0];
    },
    updateAgendaEndsAt(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.endsAt = payload[0];
    },
    updateAgendaTitle(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.title = payload[0];
    },
  },
  actions: {
    addAgendaItem({ commit }, payload) {
      commit('addAgendaItem', payload);
    },
    updateTitle({ commit }, payload) {
      commit('updateTitle', payload);
    },
    updateDate({ commit }, payload) {
      commit('updateDate', payload);
    },
    updatePlace({ commit }, payload) {
      commit('updatePlace', payload);
    },
    updateDescription({ commit }, payload) {
      commit('updateDescription', payload);
    },
    uploadImage({ commit }, payload) {
      commit('uploadImage', payload);
    },
    removeImage({ commit }) {
      commit('removeImage');
    },
    updateAgendaType({ commit }, payload) {
      commit('updateAgendaType', payload);
    },
    updateAgendaStartsAt({ commit }, payload) {
      commit('updateAgendaStartsAt', payload);
    },
    updateAgendaEndsAt({ commit }, payload) {
      commit('updateAgendaEndsAt', payload);
    },
    updateAgendaTitle({ commit }, payload) {
      commit('updateAgendaEndsAt', payload);
    },
  },
};
