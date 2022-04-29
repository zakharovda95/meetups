<template>
  <footer class="footer-item-wrapper">
    <div class="footer-wrapper-logo">MEETUPS</div>
    <div class="footer-date">2022 г.</div>
    <div class="footer-wrapper-links">
      <UiLink class="footer-link" to="/">GitHub</UiLink>
      <UiLink class="footer-link" to="/">Сайт</UiLink>
    </div>
  </footer>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
export default {
  name: 'FooterItem',
  components: { UiLink },
};
</script>
<style scoped lang="scss">
@import '../../assets/fonts/_fonts.css';
@import '../../assets/styles/constants';
.footer-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  width: 100%;
  background: $footer-color;
  .footer-wrapper-logo {
    font-size: 1.2em;
    margin: 20px;
    color: $font-color-white;
    font-family: 'JetBrainMono-Light', sans-serif;
  }
  .footer-wrapper-links {
    display: flex;
    .footer-link {
      margin-right: 20px;
    }
  }
  .footer-date {
    display: flex;
    font-family: 'JetBrainMono-Light', sans-serif;
    color: $font-color-white;
    align-self: center;
    margin-left: 20px;
  }
}
</style>
