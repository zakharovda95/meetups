<template>
  <nav-bar></nav-bar>
  <div class="mdl-grid">
    <router-view></router-view>
  </div>
  <footer-item></footer-item>
</template>
<script>
import NavBar from '@/components/NavBar';
import FooterItem from '@/components/FooterItem';
export default {
  name: 'MainPageLayout',
  components: {
    NavBar,
    FooterItem,
  },
};
</script>
<style scoped lang="scss">
.mdl-grid {
  display: flex;
  flex-grow: 1;
}
</style>
