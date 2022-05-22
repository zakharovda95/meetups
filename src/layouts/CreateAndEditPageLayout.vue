<template>
  <div class="create-and-edit-layout">
    <NavbarItem id="navbar" />
    <router-view id="content" />
    <FooterItem id="footer" />
  </div>
</template>
<script>
import NavbarItem from '@/components/layouts/Navbar/NavbarItem';
import FooterItem from '@/components/layouts/FooterItem';
export default {
  name: 'CreateAndEditPageLayout',
  components: {
    NavbarItem,
    FooterItem,
  },
};
</script>
<style scoped lang="scss">
.create-and-edit-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  #navbar {
    flex: 0 0 auto;
  }
  #content {
    margin-top: 20px;
    flex: 1 0 auto;
  }
  #footer {
    flex: 0 0 auto;
  }
}
</style>
