<template>
  <div class="meetup-page">
    <MeetupToggle />
    <div class="content">
      <MeetupView />
    </div>
  </div>
</template>
<script>
import MeetupView from '@/components/meetupPage/MeetupView';
import MeetupToggle from '@/components/meetupPage/MeetupToggle';
export default {
  name: 'MeetupPage',
  components: {
    MeetupToggle,
    MeetupView,
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .meetup-page {
    display: flex;
    flex-direction: column;
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
  .meetup-page {
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
