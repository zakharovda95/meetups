<template>
  <div class="links-for-authorized-users" v-if="isAuthorized">
    <nav class="links" v-if="isShowed || widthX > 1019">
      <UiLink
        variant="nav-link"
        v-if="$route.meta.showReturnToMeetupList"
        :to="{ name: 'meetups' }"
      >
        &#10229; К списку
      </UiLink>
      <UiLink variant="nav-link" :to="{ name: 'participant' }">
        Мои митапы
      </UiLink>
      <UiLink variant="nav-link" :to="{ name: 'organizer' }">
        Организуемые митапы
      </UiLink>
      <UiLink variant="nav-link" :to="{ name: 'create' }">
        Создать митап
      </UiLink>
      <UiLink variant="nav-link" @click="logout" to="#">
        Выйти ({{ userName }})
      </UiLink>
    </nav>
    <UiButton class="mobile-menu-button" variant="roundBtn" @click="showMenu">
      <UiIcon id="arrow" :icon-name="isShowed ? 'top' : 'down'" />
    </UiButton>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
import UiIcon from '@/components/ui/UiIcon';
import { fbLogout } from '@/requesters/firebase/_firebase.auth.requesters';
import UiButton from '@/components/ui/UiButton';

export default {
  name: 'LinksForAuthorizedUsers',
  components: {
    UiButton,
    UiLink,
    UiIcon,
  },
  data: () => ({
    isShowed: false,
    widthX: window.innerWidth,
  }),
  props: {
    isAuthorized: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    userName() {
      return this.$store.state.user.data.userInfo.name;
    },
  },
  methods: {
    async logout() {
      await fbLogout();
      await this.$store.dispatch('clearUserInfo');
      await this.$router.push({ name: 'meetups' });
    },
    showMenu() {
      this.isShowed = !this.isShowed;
    },
  },
  created() {
    window.addEventListener('resize', () => {
      this.widthX = window.innerWidth;
    });
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
@media (max-width: 1019px) {
  .links-for-authorized-users {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .links {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-bottom: 20px;
      font-family: 'JetBrainMono-Bold', sans-serif;
    }
    .mobile-menu-button {
      position: relative;
      top: 15px;
      text-align: center;
      margin: 0 auto;
      #arrow {
        width: 19px;
        font-family: 'JetBrainMono-Bold', sans-serif;
      }
    }
    .mobile-menu-button:hover {
      background: $UI_COLOR;
    }
  }
}
@media (min-width: 1020px) {
  .links-for-authorized-users {
    display: flex;
    .links {
      display: flex;
      font-family: 'JetBrainMono-Bold', sans-serif;
    }
    .mobile-menu-button {
      display: none;
      #arrow {
        width: 19px;
        font-family: 'JetBrainMono-Bold', sans-serif;
      }
    }
  }
}
</style>
