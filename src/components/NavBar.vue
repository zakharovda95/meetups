<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">
          <ui-link variant="logo" :to="{ name: 'meetups' }">MEETUPS</ui-link>
        </span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link
            v-if="$route.meta.showReturnToMeetupList"
            class="mdl-navigation__link"
            :to="{ name: 'meetups' }"
          >
            К списку
          </router-link>
          <router-link
            v-for="link in navbarLinks"
            :key="link.about"
            class="mdl-navigation__link"
            :to="link.data.path"
          >
            {{ link.data.name }}
          </router-link>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer mdl-layout--small-screen-only">
      <span class="mdl-layout-title">
        <ui-link variant="logo" :to="{ name: 'meetups' }">MEETUPS</ui-link>
      </span>
      <nav class="mdl-navigation">
        <router-link
          v-if="$route.meta.showReturnToMeetupList"
          class="mdl-navigation__link"
          :to="{ name: 'meetups' }"
        >
          К списку
        </router-link>
        <router-link
          v-for="link in navbarLinks"
          :key="link.about"
          class="mdl-navigation__link"
          href=""
          :to="link.data.path"
        >
          {{ link.data.name }}
        </router-link>
      </nav>
    </div>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
export default {
  name: 'NavBar',
  components: {
    UiLink,
  },
  computed: {
    navbarLinks() {
      return this.$store.state.main.navbarLinks;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../assets/styles/_constants.scss';
@import '../assets/fonts/_fonts.css';
.mdl-layout__header {
  display: flex;
  height: 60px;
  flex: 0 0 auto;
  .mdl-layout__header-row {
    display: flex;
    .mdl-layout-title {
      display: flex;
      align-self: center;
      font-size: 2.5em;
      font-family: 'JetBrainMono-Bold', sans-serif;
      .main_link {
        text-decoration: none;
        color: white;
      }
    }
    .mdl-navigation__link {
      font-size: 1.4em;
      font-family: 'JetBrainMono-Light', sans-serif;
    }
  }
}
.mdl-layout__drawer {
  .mdl-layout-title {
    font-size: 2.5em;
    font-family: 'JetBrainMono-Bold', sans-serif;
    .main_link {
      text-decoration: none;
      color: gray;
    }
  }
  .mdl-navigation__link {
    font-size: 1.4em;
    font-family: 'JetBrainMono-Light', sans-serif;
  }
}
</style>
