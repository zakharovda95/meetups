<template>
  <navbar-item></navbar-item>
  <div class="mdl-grid">
    <slot></slot>
  </div>
  <footer-item></footer-item>
</template>
<script>
import NavbarItem from '@/components/NavbarItem';
import FooterItem from '@/components/FooterItem';

export default {
  name: 'MainPageLayout',
  components: {
    NavbarItem,
    FooterItem,
  },
};
</script>
<style scoped lang="scss"></style>
