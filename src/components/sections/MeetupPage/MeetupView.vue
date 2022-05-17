<template>
  <UiLoading v-if="!meetup" />
  <div class="meetup-view mdl-shadow--2dp" v-else>
    <div class="cover">
      <MeetupCover :image="meetup.image" :title="meetup.title" />
    </div>
    <div class="buttons">
      <MeetupInfo :meetup="meetup" />
      <MeetupButtonGroup :meetup="meetup" />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import UiLoading from '@/components/ui/UiLoading';
import MeetupCover from '@/components/sections/MeetupPage/MeetupCover';
import MeetupInfo from '@/components/sections/MeetupPage/MeetupInfo';
import MeetupButtonGroup from '@/components/sections/MeetupPage/MeetupButtonGroup';
export default {
  name: 'MeetupView',
  components: {
    UiLoading,
    MeetupCover,
    MeetupInfo,
    MeetupButtonGroup,
  },
  mounted() {
    this.$store.dispatch('chooseMeetupById', this.meetupId);
  },
  computed: {
    meetupId() {
      return this.$route.params.meetupId;
    },
    meetup() {
      return this.$store.getters.meetup;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .meetup-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: whitesmoke;
    padding: 25px;
    margin-bottom: 38px;
    .cover {
      display: flex;
      align-self: center;
      width: 100%;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 100%;
      align-items: center;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-self: center;
      font-size: 1.5em;
      width: 100%;
    }
  }
}
@media (min-width: 1020px) {
  .meetup-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: whitesmoke;
    padding: 25px;
    margin-bottom: 56px;
    .cover {
      display: flex;
      align-self: center;
      width: 100%;
    }
    .buttons {
      margin-top: 20px;
      display: flex;
      align-self: center;
      width: 100%;
      justify-content: space-between;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-self: center;
      font-size: 1.5em;
      width: 100%;
    }
  }
}
</style>
