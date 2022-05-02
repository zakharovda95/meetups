<template>
  <div class="layout-wrapper">
    <div class="layout-wrapper-navbar">
      <NavbarItem />
    </div>
    <div class="layout-wrapper-pages">
      <router-view />
    </div>
    <div class="layout-wrapper-footer">
      <FooterItem />
    </div>
  </div>
</template>
<script>
import NavbarItem from '@/components/LayoutComponents/NavbarItem';
import FooterItem from '@/components/LayoutComponents/FooterItem';
export default {
  name: 'MainPageLayout',
  components: {
    NavbarItem,
    FooterItem,
  },
};
</script>
<style scoped lang="scss">
.layout-wrapper {
}
</style>
