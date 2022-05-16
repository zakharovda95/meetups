<template>
  <div class="meetup-layout">
    <NavbarItem id="navbar" />
    <router-view id="content" />
    <FooterItem id="footer" />
  </div>
</template>
<script>
import NavbarItem from '@/components/layouts/Navbar/NavbarItem';
import FooterItem from '@/components/layouts/FooterItem';
export default {
  name: 'MeetupPageLayout',
  components: {
    NavbarItem,
    FooterItem,
  },
};
</script>
<style scoped lang="scss">
.meetup-layout {
  #navbar {
    flex: 0 0 auto;
  }
  #content {
    flex: 1 0 auto;
  }
  #footer {
    flex: 0 0 auto;
  }
}
</style>
