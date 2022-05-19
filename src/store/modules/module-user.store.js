import { onAuthStateChanged } from 'firebase/auth';
import { fbAuth, fbDb } from '@/requesters/firebase/_options.firebase';
import {
  // fbGetData,
  fbSetData,
} from '@/requesters/firebase/_firebase.database.requesters';
import { onValue, ref } from 'firebase/database';

export const moduleUserStore = {
  state: () => ({
    data: {
      userInfo: null,
      errorMessage: null,
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
          // const userInfo = await fbGetData('users/' + user.uid);
          // commit('setUserInfo', userInfo);
          // console.log(userInfo);
          /** Фаербейсовский сокет - прослушка изменений БД **/
          onValue(ref(fbDb, 'users/' + user.uid), response => {
            const userInfo = response.val();
            commit('setUserInfo', userInfo);
          });
        } else {
          const errorMessage = 'Вы не авторизованы!';
          commit('setUserInfoErrorMessage', errorMessage);
        }
      });
    },
    clearUserInfo({ commit }) {
      commit('clearUserInfo');
    },
    async pushCreatedMeetupToUserData({ state }, meetup) {
      state.data.userInfo.meetups.organizer.push(meetup);
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
      // const newValue = await fbGetData('users/' + state.data.userInfo.uid);
      // commit('setUserInfo', newValue);
    },
    async cutMeetupFromOrganizedMeetupsInUserData({ state }, meetupId) {
      state.data.userInfo.meetups.organizer =
        state.data.userInfo.meetups.organizer.filter(id => {
          return id !== meetupId;
        });
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
      // const newValue = await fbGetData('users/' + state.data.userInfo.uid);
      // commit('setUserInfo', newValue);
    },
    async pushMeetupForParticipationToUserData({ state }, meetupId) {
      state.data.userInfo.meetups.participant.push(meetupId);
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
      // const newValue = await fbGetData('users/' + state.data.userInfo.uid);
      // commit('setUserInfo', newValue);
    },
    async cutMeetupFromParticipationMeetupsInUserData({ state }, meetupId) {
      state.data.userInfo.meetups.participant =
        state.data.userInfo.meetups.participant.filter(id => {
          return id !== meetupId;
        });
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
      // const newValue = await fbGetData('users/' + state.data.userInfo.uid);
      // commit('setUserInfo', newValue);
    },
  },
};
