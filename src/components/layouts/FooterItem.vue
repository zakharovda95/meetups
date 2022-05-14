<template>
  <footer class="footer-item">
    <div class="logo">MEETUPS</div>
    <div class="date">2022 г.</div>
    <div class="links">
      <UiLink class="link" to="/">GitHub</UiLink>
      <UiLink class="link" to="/">Сайт</UiLink>
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
@import '../../assets/styles/constants';
.footer-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  width: 100%;
  background: $footer-color;
  .logo {
    font-size: 1.2em;
    margin: 20px;
    color: $font-color-white;
    font-family: 'JetBrainMono-Light', sans-serif;
  }
  .date {
    display: flex;
    font-family: 'JetBrainMono-Light', sans-serif;
    color: $font-color-white;
    align-self: center;
    margin-left: 20px;
  }
  .links {
    display: flex;
    .link {
      margin-right: 20px;
    }
  }
}
</style>
