<template>
  <div class="public-links" v-if="!isAuthorized">
    <nav class="links">
      <UiLink variant="nav-link" v-if="backArrowLink" :to="{ name: 'meetups' }">
        &#10229; К списку
      </UiLink>
      <UiLink variant="nav-link" :to="{ name: 'login' }">Вход</UiLink>
      <UiLink variant="nav-link" :to="{ name: 'registration' }">
        Регистрация
      </UiLink>
      <UiLink variant="nav-link" to="/" @click="redirectToLogin">
        Создать митап
      </UiLink>
    </nav>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';

export default {
  name: 'PublicLinks',
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
    backArrowLink() {
      return this.$route.meta.showReturnToMeetupList;
    },
  },
  methods: {
    redirectToLogin() {
      this.$router.replace({ path: '/auth/login' });
      this.$toast.error('Чтобы создать встречу залогиньтесь!');
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .public-links {
    display: flex;
    .links {
      display: flex;
      margin-bottom: 20px;
    }
  }
}
@media (min-width: 1020px) {
  .public-links {
    display: flex;
    .links {
      display: flex;
    }
  }
}
</style>
