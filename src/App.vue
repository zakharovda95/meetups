<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  created() {
    this.getMeetups();
    this.getIconList();
    this.isUserAuthorized();
    setTimeout(() => {
      this.$toast.show('Приветствую на моем демонстрационном проекте!');
    }, 2000);
  },
  methods: {
    ...mapActions(['getMeetups', 'getIconList', 'isUserAuthorized']),
  },
  computed: {
    user() {
      return this.$store.state.user.data.userInfo;
    },
    meetups() {
      return this.$store.state.meetups.data.meetups;
    },
  },
};
</script>
<style lang="scss">
@import './assets/styles/_constants.scss';
@import './assets/fonts/_fonts.css';
* {
  margin: 0;
  padding: 0;
  body {
    width: 100%;
    background-color: $LAYOUT_COLOR;
  }
}
</style>
