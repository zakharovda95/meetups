<template>
  <div class="meetup-page">
    <MeetupToggle />
    <div class="content">
      <MeetupView />
    </div>
  </div>
</template>
<script>
import MeetupView from '@/components/sections/MeetupPage/MeetupView';
import MeetupToggle from '@/components/sections/MeetupPage/MeetupToggle';
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
    flex: 0 0 auto;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    .content {
      display: flex;
      flex: 1 0 auto;
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
    flex: 0 0 auto;
    flex-direction: column;
    width: 50%;
    .content {
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }
  }
}
</style>
