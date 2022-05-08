<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('getMeetups');
    this.$store.dispatch('getIconList');
    setTimeout(() => {
      this.$toast.show('Приветствую на моем демонстрационном проекте!');
    }, 2000);
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
