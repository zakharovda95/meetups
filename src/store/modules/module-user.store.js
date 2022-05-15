import { onAuthStateChanged } from 'firebase/auth';
import { fbAuth } from '@/requesters/firebase/_options.firebase';
import {
  fbGetData,
  fbSetData,
} from '@/requesters/firebase/_firebase.database.requesters';

export const moduleUserStore = {
  state: () => ({
    data: {
      userInfo: null,
      errorMessage: '',
    },
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.data.userInfo = userInfo;
    },
    setUserInfoErrorMessage(state, errorMessage) {
      state.data.errorMessage = errorMessage;
    },
    clearUserInfo(state) {
      state.data.userInfo = null;
      state.data.errorMessage = null;
    },
  },
  actions: {
    isUserAuthorized({ commit }) {
      onAuthStateChanged(fbAuth, async user => {
        if (user) {
          const userInfo = await fbGetData('users/' + user.uid);
          commit('setUserInfo', userInfo);
        } else {
          const errorMessage = 'Вы не авторизованы!';
          commit('setUserInfoErrorMessage', errorMessage);
        }
      });
    },
    clearUserInfo({ commit }) {
      commit('clearUserInfo');
    },
    async pushCreatedMeetupToUserData(state, meetup) {
      state.data.userInfo.meetups.organizer.push(meetup);
      await fbSetData('users/' + state.userInfo.uid, state.userInfo);
      state.data.userInfo = await fbGetData('users/' + state.userInfo.uid);
    },
    async cutMeetupFromOrganizedMeetupsInUserData(state, meetupId) {
      state.userInfo.meetups.organizer =
        state.userInfo.meetups.organizer.filter(id => {
          return id !== meetupId;
        });
      await fbSetData('users/' + state.userInfo.uid, state.userInfo);
      state.userInfo = await fbGetData('users/' + state.userInfo.uid);
    },
    async pushMeetupForParticipationToUserData(state, meetupId) {
      state.data.userInfo.meetups.participant.push(meetupId);
      await fbSetData('users/' + state.userInfo.uid, state.userInfo);
      state.data.userInfo = await fbGetData('users/' + state.userInfo.uid);
    },
    async cutMeetupFromParticipationMeetupsInUserData(state, meetupId) {
      state.data.userInfo.meetups.participant =
        state.data.userInfo.meetups.participant.filter(id => {
          return id !== meetupId;
        });
      await fbSetData('users/' + state.userInfo.uid, state.userInfo);
      state.data.userInfo = await fbGetData('users/' + state.userInfo.uid);
    },
  },
};
