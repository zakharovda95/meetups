import { uuid } from 'vue-uuid';
import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
import {
  defaultMeetupAgendaItemForm,
  defaultMeetupForm,
} from '@/services/_forms.service';

export const moduleCreating = {
  state: () => ({
    meetupForm: null,
    isLoading: false,
  }),
  mutations: {
    addAgendaItem(state) {
      const agendaItemForm = defaultMeetupAgendaItemForm;
      if (state.meetupForm.agenda.length) {
        agendaItemForm.startsAt = state.meetupForm.agenda.at(-1).endsAt;
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
    initMeetupForm(state) {
      state.meetupForm = defaultMeetupForm;
    },
    resetMeetupForm(state) {
      state.meetupForm = null;
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
    initMeetupForm({ commit }) {
      commit('initMeetupForm');
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
