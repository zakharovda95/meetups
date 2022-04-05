<template>
  <navbar-item></navbar-item>
  <div class="mdl-grid">
    <router-view></router-view>
  </div>
</template>
<script>
import NavbarItem from '@/components/NavbarItem';

export default {
  name: 'MainPageLayout',
  components: {
    NavbarItem,
  },
};
</script>
<style scoped lang="scss">
.mdl-grid {
  display: flex;
}
</style>
