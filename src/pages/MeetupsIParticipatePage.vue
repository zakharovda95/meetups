<template>
  <UiLoading v-if="loading" />
  <div class="participant-page" v-if="!loading">
    <div class="content">
      <MeetupsList />
    </div>
  </div>
</template>
<script>
import MeetupsList from '@/components/sections/MeetupList/MeetupsList';
import UiLoading from '@/components/ui/UiLoading';
export default {
  name: 'MeetupsIParticipatePage',
  components: {
    MeetupsList,
    UiLoading,
  },
  computed: {
    loading() {
      return !!this.$store.state.meetups.data.meetups?.length;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .participant-page {
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
  .participant-page {
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
