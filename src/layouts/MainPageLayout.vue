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
@media (max-width: 1019px) {
  .main-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    #navbar {
      flex: 0 0 auto;
    }
    .content {
      flex: 1 0 auto;
      .filter-panel {
        margin-top: 30px;
        display: flex;
        justify-content: center;
      }
    }
    #footer {
      flex: 0 0 auto;
    }
  }
}
@media (min-width: 1020px) {
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
}
</style>
