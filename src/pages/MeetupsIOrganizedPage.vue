<template>
  <div class="organized-page">
    <div class="content">
      <MeetupsList />
    </div>
  </div>
</template>
<script>
import MeetupsList from '@/components/sections/MeetupList/MeetupsList';
import UiLoading from '@/components/ui/UiLoading';
export default {
  name: 'MeetupsIOrganizedPage',
  components: {
    MeetupsList,
  },
  computed: {
    isUserAuthorized() {
      return this.$store.state.user.data.isUserAuthorized;
    },
  },
  methods: {
    guard() {
      if (!this.isUserAuthorized) {
        this.$router.replace({ name: 'meetups' });
      }
    },
  },
  created() {
    this.guard();
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .organized-page {
    display: flex;
    margin: 0 auto;
    width: 90%;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }
  }
}
@media (min-width: 1020px) {
  .organized-page {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }
  }
}
</style>
