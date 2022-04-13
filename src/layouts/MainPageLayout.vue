<template>
  <div class="layout_wrapper">
    <div class="navbar">
      <nav-bar></nav-bar>
    </div>
    <div class="mdl-grid">
      <router-view></router-view>
    </div>
    <!--    <div class="footer">-->
    <!--      <footer-item></footer-item>-->
    <!--    </div>-->
  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
// import FooterItem from '@/components/FooterItem';
export default {
  name: 'MainPageLayout',
  components: {
    NavBar,
    // FooterItem,
  },
};
</script>
<style scoped lang="scss"></style>
