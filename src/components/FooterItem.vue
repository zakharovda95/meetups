<template>
  <footer class="mdl-mini-footer">
    <div class="mdl-mini-footer__left-section">
      <div class="mdl-logo">MEETUPS</div>
      <ul class="mdl-mini-footer__link-list">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterItem',
};
</script>
<style scoped lang="scss">
@import '../assets/styles/_constants.scss';
@import '../assets/fonts/_fonts.css';
.mdl-mini-footer {
  background: $main-color;
  position: absolute;
  padding: 0;
  width: 100%;
  left: 0;
  bottom: 0;
  .mdl-mini-footer__left-section {
    padding: 25px;
    .mdl-logo {
      font-size: 1.2em;
      font-family: JetBrainMono-Bold, sans-serif;
    }
    .mdl-mini-footer__link-list {
      font-size: 1.1em;
      font-family: JetBrainMono-Bold, sans-serif;
    }
  }
}
</style>
