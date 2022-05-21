import { onAuthStateChanged } from 'firebase/auth';
import { fbAuth, fbDb } from '@/requesters/firebase/_options.firebase';
import { fbSetData } from '@/requesters/firebase/_firebase.database.requesters';
import { onValue, ref } from 'firebase/database';
import { checkLocalStorageUserToken } from '@/services/_guards.service';

export const moduleUserStore = {
  state: () => ({
    data: {
      userInfo: null,
      isUserAuthorized: false,
    },
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.data.userInfo = userInfo;
    },
    clearUserInfo(state) {
      localStorage.removeItem('user_token');
      state.data.userInfo = null;
      state.data.isUserAuthorized = false;
    },
    isUserAuthorized(state, value) {
      state.data.isUserAuthorized = value;
    },
  },
  actions: {
    /** Проверка авторизован ли пользователь **/
    isUserAuthorized({ commit }) {
      commit('isUserAuthorized', checkLocalStorageUserToken());
      onAuthStateChanged(fbAuth, async user => {
        if (user) {
          /** Фаербейсовский сокет - прослушка изменений БД **/
          onValue(ref(fbDb, 'users/' + user.uid), response => {
            const userInfo = response.val();
            localStorage.setItem('user_token', userInfo.uid);
            commit('setUserInfo', userInfo);
          });
        } else {
          console.log('Вы не авторизованы');
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
