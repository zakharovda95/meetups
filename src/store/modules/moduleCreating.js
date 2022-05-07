import { uuid } from 'vue-uuid';
import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
import moment from 'moment';

export const moduleCreating = {
  state: () => ({
    meetupForm: {
      id: uuid.v1(),
      imageId: null,
      image: null,
      imageName: null,
      organizer: '123',
      title: '',
      date: moment().format('YYYY-MM-DD'),
      place: '',
      description: '',
      agenda: [],
    },
    isLoading: false,
  }),
  mutations: {
    addAgendaItem(state) {
      const agendaItemForm = {
        id: uuid.v1(),
        type: 'registration',
        title: '',
        speaker: '',
        description: '',
        language: '',
        startsAt: '07:00',
        endsAt: '08:00',
      };
      if (state.meetupForm.agenda.length) {
        agendaItemForm.startsAt = state.meetupForm.agenda.at(-1).endsAt;
        agendaItemForm.endsAt = agendaItemForm.startsAt;
      }
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
      state.meetupForm.imageId = uuid.v1();
      state.meetupForm.image = payload.url;
      state.meetupForm.imageName = payload.file.name;
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
    updateAgendaSpeaker(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.speaker = payload[0];
    },
    updateAgendaLanguage(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.language = payload[0];
    },
    updateAgendaDescription(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.description = payload[0];
    },
    removeAgendaItem(state, payload) {
      state.meetupForm.agenda.forEach((item, index, array) => {
        if (item.id === payload) {
          array.splice(index, 1);
        }
      });
    },
    resetMeetupForm(state) {
      state.meetupForm = {
        id: uuid.v1(),
        imageId: null,
        image: null,
        imageName: null,
        organizer: '123',
        title: '',
        date: '',
        place: '',
        description: '',
        agenda: [],
      };
    },
  },
  actions: {
    addAgendaItem({ commit }) {
      commit('addAgendaItem');
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
      commit('updateAgendaTitle', payload);
    },
    updateAgendaSpeaker({ commit }, payload) {
      commit('updateAgendaSpeaker', payload);
    },
    updateAgendaLanguage({ commit }, payload) {
      commit('updateAgendaLanguage', payload);
    },
    updateAgendaDescription({ commit }, payload) {
      commit('updateAgendaDescription', payload);
    },
    removeAgendaItem({ commit }, payload) {
      commit('removeAgendaItem', payload);
    },
    resetMeetupForm({ commit }) {
      commit('resetMeetupForm');
    },
    async createMeetup({ state, dispatch }) {
      state.isLoading = true;
      await setFirebaseData('meetups/' + state.meetupForm.id, state.meetupForm);
      await dispatch('getMeetups');
      state.isLoading = false;
    },
  },
};
