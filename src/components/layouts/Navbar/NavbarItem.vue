<template>
  <header class="navbar-item mdl-shadow--4dp">
    <div class="content">
      <UiLink id="logo" :to="{ name: 'index' }"> RENCONTRES </UiLink>
      <PublicLinks id="public-links" :is-authorized="isAuthorized" />
      <LinksForAuthorizedUsers
        id="private-links"
        :is-authorized="isAuthorized"
      />
    </div>
  </header>
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
      return !!this.$store.state.user.data.userInfo;
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
@media (max-width: 1019px) {
  .navbar-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: $MAIN_COLOR;
    min-height: 70px;
    .content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-top: 20px;
      #logo {
        display: flex;
        justify-content: center;
        color: $FONT_COLOR_DARK;
        font-size: 2.8em;
        text-decoration: none;
        font-family: 'JetBrainMono-Bold', sans-serif;
      }
      #public-links,
      #private-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-family: 'JetBrainMono-Bold', sans-serif;
      }
    }
  }
}
@media (min-width: 1020px) {
  .navbar-item {
    display: flex;
    width: 100%;
    height: 72px;
    background-color: $MAIN_COLOR;
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      margin-left: 20px;
      #logo {
        display: flex;
        color: $FONT_COLOR_DARK;
        font-size: 2.8em;
        align-self: center;
        text-decoration: none;
        font-family: 'JetBrainMono-Bold', sans-serif;
      }
      #public-links,
      #private-links {
        margin-right: 20px;
        font-family: 'JetBrainMono-Bold', sans-serif;
      }
    }
  }
}
</style>
