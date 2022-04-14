<template>
  <div class="layout-wrapper">
    <div class="layout-wrapper-navbar">
      <NavbarItem />
    </div>
    <div class="layout-wrapper-filterbar">
      <FilterbarItem />
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
import NavbarItem from '@/components/NavbarItem';
import FilterbarItem from '@/components/FilterbarItem';
import FooterItem from '@/components/FooterItem';
export default {
  name: 'MainPageLayout',
  components: {
    NavbarItem,
    FilterbarItem,
    FooterItem,
  },
};
</script>
<style scoped lang="scss">
.layout-wrapper {
  .layout-wrapper-filterbar {
    display: flex;
    justify-content: center;
  }
}
</style>
