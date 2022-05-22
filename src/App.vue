<template>
  <div class="app">
    <router-view />
    <UiContacts id="contacts" />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import UiContacts from '@/components/ui/UiContacts';

export default {
  name: 'App',
  components: { UiContacts },
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
@media (max-width: 1019px) {
  * {
    margin: 0;
    padding: 0;
    body {
      width: 100%;
      background-color: $LAYOUT_COLOR;
      #contacts {
        display: none;
      }
    }
  }
}
@media (min-width: 1020px) {
  * {
    margin: 0;
    padding: 0;
    body {
      width: 100%;
      background-color: $LAYOUT_COLOR;
      #contacts {
        display: flex;
      }
    }
  }
}
</style>
