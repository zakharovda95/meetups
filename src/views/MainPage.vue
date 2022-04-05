<template>
  <div class="main">
    <div class="content">
      <meetups-list></meetups-list>
    </div>
  </div>
</template>
<script>
import MeetupsList from '@/components/MeetupsList';
export default {
  name: 'MainPage',
  components: {
    MeetupsList,
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .main {
    margin: 0 auto;
    display: flex;
    width: 90%;
    height: 100%;
    .content {
      display: flex;
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
    width: 50%;
    height: 100%;
    .content {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }
  }
}
</style>
