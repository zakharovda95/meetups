<template>
  <div class="auth-layout">
    <NavbarItem />
    <router-view />
    <FooterItem />
  </div>
</template>
<script>
import NavbarItem from '@/components/layouts/Navbar/NavbarItem';
import FooterItem from '@/components/layouts/FooterItem';
export default {
  name: 'MainPageLayout',
  components: {
    NavbarItem,
    FooterItem,
  },
};
</script>
<style scoped lang="scss"></style>
