<template>
  <div class="main">
    <div class="content">
      <h1>Страница</h1>
      <meetup-view />
    </div>
  </div>
</template>
<script>
import MeetupView from '@/components/meetupPage/MeetupView';
export default {
  name: 'MeetupPage',
  components: {
    MeetupView,
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
      h1 {
        margin-top: 100px;
      }
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
      h1 {
        margin-top: 100px;
      }
    }
  }
}
</style>
