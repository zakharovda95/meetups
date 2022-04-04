<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">MEETUPS</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" href="">Главная</a>
          <a class="mdl-navigation__link" href="">Вход</a>
          <a class="mdl-navigation__link" href="">Регистрация</a>
          <a class="mdl-navigation__link" href="">Создать митап</a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer mdl-layout--small-screen-only">
      <span class="mdl-layout-title">MEETUPS</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Главная</a>
        <a class="mdl-navigation__link" href="">Вход</a>
        <a class="mdl-navigation__link" href="">Регистрация</a>
        <a class="mdl-navigation__link" href="">Создать митап</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { testRoutes } from '@/api/localDataBase/routes';
export default {
  name: 'NavbarItem',
  data: () => ({
    routes: testRoutes,
  }),
};
</script>
<style scoped lang="scss">
@import '../assets/styles/_constants.scss';
@import '../assets/fonts/_fonts.css';
.mdl-layout__header {
  display: flex;
  height: 60px;
  .mdl-layout__header-row {
    display: flex;
    .mdl-layout-title {
      display: flex;
      align-self: center;
      font-size: 2.5em;
      font-family: 'JetBrainMono-Bold', sans-serif;
    }
    .mdl-navigation__link {
      font-size: 1.8em;
      font-family: 'JetBrainMono-Bold', sans-serif;
    }
  }
}
.mdl-layout__drawer {
  .mdl-layout-title {
    font-size: 2.5em;
    font-family: 'JetBrainMono-Bold', sans-serif;
  }
  .mdl-navigation__link {
    font-size: 1.8em;
    font-family: 'JetBrainMono-Bold', sans-serif;
  }
}
</style>
