<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  created() {
    this.getMeetups();
    this.getIconList();
    this.checkUserStatus();
    setTimeout(() => {
      this.$toast.show('Приветствую на моем демонстрационном проекте!');
    }, 2000);
  },
  methods: {
    ...mapActions(['getMeetups', 'getIconList', 'checkUserStatus']),
  },
};
</script>
<style lang="scss">
@import './assets/styles/_constants.scss';
* {
  margin: 0;
  padding: 0;
  body {
    width: 100%;
    height: 100%;
    background-color: $layout-color;
  }
}
</style>
