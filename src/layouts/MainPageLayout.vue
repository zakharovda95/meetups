<template>
  <div class="layout-wrapper">
    <div class="layout-wrapper-navbar">
      <NavbarItem />
    </div>
    <div class="layout-wrapper-filter-panel">
      <FilterPanel />
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
import NavbarItem from '@/components/layouts/NavbarItem';
import FilterPanel from '@/components/layouts/FilterPanel';
import FooterItem from '@/components/layouts/FooterItem';
export default {
  name: 'MainPageLayout',
  components: {
    NavbarItem,
    FilterPanel,
    FooterItem,
  },
};
</script>
<style scoped lang="scss">
.layout-wrapper {
  .layout-wrapper-filter-panel {
    display: flex;
    justify-content: center;
  }
}
</style>
