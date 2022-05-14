<template>
  <div class="links-for-authorized-users" v-if="isAuthorized">
    <nav class="links">
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
      <UiLink variant="nav-link" @click="logOut" to="#">
        Выйти ({{ userName }})
      </UiLink>
    </nav>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';

export default {
  name: 'LinksForAuthorizedUsers',
  components: {
    UiLink,
  },
  props: {
    isAuthorized: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    userName() {
      return this.$store.state.main.userInfo.name;
    },
  },
  methods: {
    async logOut() {
      await this.$store.dispatch('signOut');
      await this.$router.push({ name: 'meetups' });
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
.links-for-authorized-users {
  display: flex;
  justify-content: center;
  height: 80px;
  background: $navbar-color-white;
  .links {
    display: flex;
    align-self: center;
    font-size: 1.4em;
    font-family: 'JetBrainMono-Light', sans-serif;
  }
}
</style>
