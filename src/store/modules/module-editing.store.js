import moment from 'moment';
import { uuid } from 'vue-uuid';
import { fbSetData } from '@/requesters/firebase/_firebase.database.requesters';
import { cloneDeep } from 'lodash';

export const moduleEditingStore = {
  state: () => ({
    editableMeetup: {},
  }),
  mutations: {
    addAgendaItemToEditableMeetup(state) {
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
      // eslint-disable-next-line no-prototype-builtins
      if (!state.editableMeetup.hasOwnProperty('agenda')) {
        state.editableMeetup.agenda = [];
      }
      if (state.editableMeetup.agenda.length) {
        agendaItemForm.startsAt = state.editableMeetup.agenda.at(-1).endsAt;
        agendaItemForm.endsAt = agendaItemForm.startsAt;
      }
      state.editableMeetup.agenda.push(agendaItemForm);
    },
    getEditableMeetup(state, payload) {
      payload.date = moment(payload.dateUnix).format('YYYY-MM-DD');
      state.editableMeetup = payload;
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
    editAgendaType(state, payload) {
      const elem = state.meetupForm.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.type = payload[0];
    },
    editAgendaStartsAt(state, payload) {
      const elem = state.editableMeetup.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.startsAt = payload[0];
    },
    editAgendaEndsAt(state, payload) {
      const elem = state.editableMeetup.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.endsAt = payload[0];
    },
    editAgendaTitle(state, payload) {
      const elem = state.editableMeetup.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.title = payload[0];
    },
    editAgendaSpeaker(state, payload) {
      const elem = state.editableMeetup.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.speaker = payload[0];
    },
    editAgendaLanguage(state, payload) {
      const elem = state.editableMeetup.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.language = payload[0];
    },
    editAgendaDescription(state, payload) {
      const elem = state.editableMeetup.agenda.find(item => {
        return item.id === payload[1];
      });
      elem.description = payload[0];
    },
    removeEditableAgendaItem(state, payload) {
      state.editableMeetup.agenda.forEach((item, index, array) => {
        if (item.id === payload) {
          array.splice(index, 1);
        }
      });
    },
  },
  actions: {
    addAgendaItemToEditableMeetup({ commit }) {
      commit('addAgendaItemToEditableMeetup');
    },
    async getEditableMeetup({ dispatch, rootState, commit }, payload) {
      const meetups = cloneDeep(rootState.meetups.data.meetups);
      const editableMeetup = meetups.find(item => item.id === payload);
      commit('getEditableMeetup', editableMeetup);
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
    editAgendaType({ commit }, payload) {
      commit('editAgendaType', payload);
    },
    editAgendaStartsAt({ commit }, payload) {
      commit('editAgendaStartsAt', payload);
    },
    editAgendaEndsAt({ commit }, payload) {
      commit('editAgendaEndsAt', payload);
    },
    editAgendaTitle({ commit }, payload) {
      commit('editAgendaTitle', payload);
    },
    editAgendaSpeaker({ commit }, payload) {
      commit('editAgendaSpeaker', payload);
    },
    editAgendaLanguage({ commit }, payload) {
      commit('editAgendaLanguage', payload);
    },
    editAgendaDescription({ commit }, payload) {
      commit('editAgendaDescription', payload);
    },
    removeEditableAgendaItem({ commit }, payload) {
      commit('removeEditableAgendaItem', payload);
    },
    async editMeetup({ state }) {
      state.isLoading = true;
      await fbSetData(
        'meetups/' + state.editableMeetup.id,
        state.editableMeetup,
      );
      state.isLoading = false;
    },
  },
};
