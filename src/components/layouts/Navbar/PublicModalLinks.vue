<template>
  <UiModal>
    <p><slot /></p>
    <UiLink id="link" variant="nav-link" :to="{ name: 'login' }"> Вход </UiLink>
    <UiLink variant="nav-link" :to="{ name: 'registration' }">
      Регистрация
    </UiLink>
  </UiModal>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
import UiModal from '@/components/ui/UiModal';

export default {
  name: 'PublicModalLinks',
  components: {
    UiLink,
    UiModal,
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@media (max-width: 1019px) {
  p {
    text-align: center;
    font-size: 1.2rem;
    width: 70%;
    margin: 0 auto;
    font-family: 'Comic Sans MS', sans-serif;
  }
}
@media (min-width: 1020px) {
  p {
    text-align: center;
    font-size: 1.2rem;
    font-family: 'Comic Sans MS', sans-serif;
  }
}
</style>
