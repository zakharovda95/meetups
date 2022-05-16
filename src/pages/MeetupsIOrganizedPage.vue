<template>
  <div class="organized-page">
    <div class="content">
      <MeetupsIOrganized />
    </div>
  </div>
</template>
<script>
import MeetupsIOrganized from '@/components/sections/MeetupList/MeetupsIOrganized';
export default {
  name: 'MeetupsIOrganizedPage',
  components: {
    MeetupsIOrganized,
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
