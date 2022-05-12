<template>
  <div class="participant-page">
    <div class="content">
      <MeetupsIParticipate />
    </div>
  </div>
</template>
<script>
import MeetupsIParticipate from '@/components/sections/MeetupList/MeetupsIParticipate';
export default {
  name: 'MeetupsIParticipatePage',
  components: {
    MeetupsIParticipate,
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .participant-page {
    display: flex;
    margin: 0 auto;
    width: 90%;
    height: 100%;
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
    height: 100%;
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
