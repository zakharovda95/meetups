<template>
  <navbar-item></navbar-item>
  <div class="mdl-grid">
    <router-view></router-view>
    <footer-item></footer-item>
  </div>
</template>
<script>
import NavbarItem from '@/components/NavbarItem';
import FooterItem from '@/components/FooterItem';
export default {
  name: 'MainPageLayout',
  components: {
    NavbarItem,
    FooterItem,
  },
};
</script>
<style scoped lang="scss">
.mdl-grid {
  display: flex;
}
</style>
