<template>
  <div class="navbar-links-public" v-if="!isAuthorized">
    <nav class="navbar-wrapper-nav">
      <UiLink
        variant="nav-link"
        v-if="$route.meta.showReturnToMeetupList"
        :to="{ name: 'meetups' }"
      >
        &#10229; К списку
      </UiLink>
      <UiLink variant="nav-link" :to="{ name: 'login' }">Вход</UiLink>
      <UiLink variant="nav-link" :to="{ name: 'registration' }">
        Регистрация
      </UiLink>
      <UiLink variant="nav-link" :to="{ name: 'login' }">
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
};
</script>
<style scoped lang="scss">
@import '../../../assets/fonts/_fonts.css';
@import '../../../assets/styles/constants';
.navbar-links-public {
  display: flex;
  justify-content: center;
  height: 80px;
  background: $navbar-color-white;
  .navbar-wrapper-nav {
    display: flex;
    align-self: center;
    font-size: 1.4em;
    font-family: 'JetBrainMono-Light', sans-serif;
  }
}
</style>
