<template>
  <div class="main-page">
    <UiLoading v-if="loading" />
    <div v-else class="main-page-content">
      <MeetupsList />
    </div>
  </div>
</template>
<script>
import MeetupsList from '@/components/sections/MeetupList/MeetupsList';
import UiLoading from '@/components/ui/UiLoading';
export default {
  name: 'MainPage',
  components: {
    MeetupsList,
    UiLoading,
  },
  computed: {
    loading() {
      return this.$store.state.main.isLoading;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .main-page {
    display: flex;
    margin: 0 auto;
    width: 90%;
    height: 100%;
    .main-page-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }
  }
}
@media (min-width: 1020px) {
  .main-page {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    .main-page-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }
  }
}
</style>
