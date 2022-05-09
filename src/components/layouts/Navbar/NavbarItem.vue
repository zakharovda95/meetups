<template>
  <div class="navbar-wrapper">
    <div class="navbar-wrapper-header-wrapper">
      <header class="navbar-wrapper-header">
        <div class="navbar-wrapper-header-logo">
          <UiLink :to="{ name: 'meetups' }">MEETUPS</UiLink>
        </div>
      </header>
    </div>
    <PublicLinks :is-authorized="isAuthorized" />
    <LinksForAuthorizedUsers :is-authorized="isAuthorized" />
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
import PublicLinks from '@/components/layouts/Navbar/PublicLinks';
import LinksForAuthorizedUsers from '@/components/layouts/Navbar/LinksForAutorizedUsers';
export default {
  name: 'NavBar',
  components: {
    LinksForAuthorizedUsers,
    PublicLinks,
    UiLink,
  },
  computed: {
    isAuthorized() {
      return !!this.$store.state.main.userInfo;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/fonts/_fonts.css';
@import '../../../assets/styles/constants';
.navbar-wrapper {
  display: flex;
  flex-direction: column;
  font-family: 'JetBrainMono-Bold', sans-serif;

  .navbar-wrapper-header-wrapper {
    display: flex;
    height: 80px;
    background-color: $main-color;

    .navbar-wrapper-header {
      display: flex;
      width: 100%;
      justify-content: center;

      .navbar-wrapper-header-logo {
        display: flex;
        align-self: center;
        font-size: 2.5em;
      }
    }
  }
}
</style>
