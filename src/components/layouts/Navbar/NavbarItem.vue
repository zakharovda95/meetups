<template>
  <div class="navbar-item">
    <div class="header-wrapper">
      <header class="header">
        <div class="logo">
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
@import '../../../assets/styles/constants';
.navbar-item {
  display: flex;
  flex-direction: column;
  font-family: 'JetBrainMono-Bold', sans-serif;

  .header-wrapper {
    display: flex;
    height: 80px;
    background-color: $main-color;

    .header {
      display: flex;
      width: 100%;
      justify-content: center;

      .logo {
        display: flex;
        align-self: center;
        font-size: 2.5em;
      }
    }
  }
}
</style>
