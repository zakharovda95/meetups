<template>
  <div class="navbar-wrapper">
    <div class="navbar-wrapper-header-wrapper">
      <header class="navbar-wrapper-header">
        <div class="navbar-wrapper-header-logo">
          <UiLink :to="{ name: 'meetups' }">MEETUPS</UiLink>
        </div>
      </header>
    </div>
    <div class="navbar-wrapper-nav-wrapper">
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
        <UiLink variant="nav-link" :to="{ name: 'create' }">
          Создать митап
        </UiLink>
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
};
</script>
<style scoped lang="scss">
@import '../../assets/fonts/_fonts.css';
@import '../../assets/styles/constants';
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
  .navbar-wrapper-nav-wrapper {
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
}
</style>
