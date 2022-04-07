<template>
  <div class="main">
    <div class="content">
      <filter-bar></filter-bar>
      <meetups-list></meetups-list>
    </div>
  </div>
</template>
<script>
import MeetupsList from '@/components/MeetupsList';
import FilterBar from '@/components/FilterBar';
export default {
  name: 'MainPage',
  components: {
    MeetupsList,
    FilterBar,
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .main {
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
  .main {
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
