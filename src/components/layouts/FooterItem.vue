<template>
  <footer class="footer-item">
    <div class="logo">ВСТРЕЧИ</div>
    <div class="date">2022 г.</div>
    <div class="links">
      <UiLink
        tag="a"
        class="link"
        target="_blank"
        href="https://github.com/zakharovda95/vuejs-option_api-20220404-pet_project-meetups-spa"
      >
        GitHub
      </UiLink>
      <UiLink
        tag="a"
        class="link"
        target="_blank"
        href="https://vk.com/id625689222"
      >
        Сайт
      </UiLink>
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
@import '~@/assets/styles/_constants.scss';
.footer-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  width: 100%;
  background: $FOOTER_COLOR;
  .logo {
    font-size: 1.2em;
    margin: 20px;
    color: $FONT_COLOR_LIGHT;
    font-family: 'Comic Sans MS', sans-serif;
    cursor: default;
  }
  .date {
    display: flex;
    color: $FONT_COLOR_LIGHT;
    align-self: center;
    margin-left: 20px;
    font-family: 'Comic Sans MS', sans-serif;
    cursor: default;
  }
  .links {
    display: flex;
    .link {
      color: $FONT_COLOR_LIGHT;
      margin-right: 20px;
    }
  }
}
</style>
