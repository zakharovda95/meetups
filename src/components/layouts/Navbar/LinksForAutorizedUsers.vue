<template>
  <div class="links-for-authorized-users" v-if="isAuthorized">
    <nav class="links" v-if="width >= 1019 || isShowed">
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
    <UiButton
      class="show"
      variant="roundRed"
      @click="showMenu"
      v-if="width <= 1019"
    >
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
    width: 0,
    isShowed: false,
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
    resize() {
      this.width = document.documentElement.clientWidth;
    },
    showMenu() {
      this.isShowed = !this.isShowed;
    },
  },
  created() {
    window.addEventListener('resize', this.resize);
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
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
    }
    .show {
      text-align: center;
      margin: 0 auto;
      #arrow {
        width: 19px;
      }
    }
  }
}
@media (min-width: 1020px) {
  .links-for-authorized-users {
    display: flex;
    .links {
      display: flex;
    }
  }
}
</style>
