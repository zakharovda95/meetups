import { onAuthStateChanged } from 'firebase/auth';
import { fbAuth, fbDb } from '@/requesters/firebase/_options.firebase';
import { fbSetData } from '@/requesters/firebase/_firebase.database.requesters';
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
    /** Проверка авторизован ли пользователь **/
    isUserAuthorized({ commit }) {
      onAuthStateChanged(fbAuth, async user => {
        if (user) {
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
    /** Добавление/удаление информации о митапах (как участник/как организатор) в userInfo**/
    async pushCreatedMeetupToUserData({ state }, meetup) {
      state.data.userInfo.meetups.organizer.push(meetup);
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
    },
    async cutMeetupFromOrganizedMeetupsInUserData({ state }, meetupId) {
      state.data.userInfo.meetups.organizer =
        state.data.userInfo.meetups.organizer.filter(id => {
          return id !== meetupId;
        });
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
    },
    async pushMeetupForParticipationToUserData({ state }, meetupId) {
      state.data.userInfo.meetups.participant.push(meetupId);
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
    },
    async cutMeetupFromParticipationMeetupsInUserData({ state }, meetupId) {
      state.data.userInfo.meetups.participant =
        state.data.userInfo.meetups.participant.filter(id => {
          return id !== meetupId;
        });
      await fbSetData('users/' + state.data.userInfo.uid, state.data.userInfo);
    },
  },
};
