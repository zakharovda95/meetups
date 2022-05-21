<template>
  <div class="main-layout">
    <NavbarItem id="navbar" />
    <div class="content">
      <div class="filter-panel">
        <FilterPanel />
      </div>
      <router-view />
    </div>
    <FooterItem id="footer" />
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  #navbar {
    position: fixed;
    flex: 0 0 auto;
  }
  .content {
    margin-top: 80px;
    flex: 1 0 auto;
    .filter-panel {
      display: flex;
      justify-content: center;
    }
  }
  #footer {
    flex: 0 0 auto;
  }
}
</style>
