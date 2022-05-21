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
        Создать митап
      </UiLink>
    </nav>
  </div>
  <teleport to="#modals">
    <UiModal
      header="Чтобы создать митап зарегистрируйтесь или войдите"
      v-if="isModalOpen"
      @update:closeModal="isModalOpen = false"
    />
  </teleport>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
import UiModal from '@/components/ui/UiModal';

export default {
  name: 'PublicLinks',
  components: {
    UiLink,
    UiModal,
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
