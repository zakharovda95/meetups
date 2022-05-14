<template>
  <div class="main-layout">
    <NavbarItem />
    <div class="filter-panel">
      <FilterPanel />
    </div>
    <router-view />
    <FooterItem />
  </div>
</template>
<script>
import NavbarItem from '@/components/layouts/Navbar/NavbarItem';
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
.main-layout {
  .filter-panel {
    display: flex;
    justify-content: center;
  }
}
</style>
