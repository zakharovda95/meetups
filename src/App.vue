<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('getNavbarLinks');
    this.$store.dispatch('getMeetups');
  },
};
</script>
<style lang="scss">
body {
  @import './assets/styles/_constants.scss';
  width: 100%;
  height: 100%;
  background-color: $layout-color;
}
</style>
