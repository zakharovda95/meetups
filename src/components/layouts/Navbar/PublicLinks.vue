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
      <UiLink v-if="!auth" @click.prevent="openModal" variant="nav-link" to="/">
        Создать
      </UiLink>
    </nav>
    <teleport to="#aboard">
      <PublicModalLinks
        v-if="isModalOpen"
        @update:closeModal="isModalOpen = false"
      >
        <b>Чтобы создать встречу зарегистрируйтесь или войдите</b>
      </PublicModalLinks>
    </teleport>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
import PublicModalLinks from '@/components/layouts/Navbar/PublicModalLinks';

export default {
  name: 'PublicLinks',
  components: {
    PublicModalLinks,
    UiLink,
  },
  props: {
    isAuthorized: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isModalOpen: false,
  }),
  computed: {
    auth() {
      return (
        this.$route.name === 'login' || this.$route.name === 'registration'
      );
    },
    backArrowLink() {
      return this.$route.meta.showReturnToMeetupList;
    },
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      this.isModalOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .public-links {
    display: flex;
    flex-wrap: wrap;
    .links {
      display: flex;
      margin-bottom: 20px;
    }
  }
}
@media (min-width: 1020px) {
  .public-links {
    display: flex;
    flex-wrap: wrap;
    .links {
      display: flex;
    }
  }
}
</style>
