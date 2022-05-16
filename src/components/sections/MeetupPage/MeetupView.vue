<template>
  <ui-loading v-if="!meetup" />
  <div class="meetup-view" v-else>
    <div class="cover">
      <MeetupCover :image="meetup.image" :title="meetup.title" />
    </div>
    <div class="info-buttons-group">
      <MeetupInfo :meetup="meetup" />
      <MeetupButtonGroup :meetup="meetup" />
    </div>
    <div class="meetup-view-wrapper-description-agenda">
      <router-view />
    </div>
  </div>
</template>
<script>
import MeetupCover from '@/components/sections/MeetupPage/MeetupCover';
import MeetupInfo from '@/components/sections/MeetupPage/MeetupInfo';
import UiLoading from '@/components/ui/UiLoading';
import MeetupButtonGroup from '@/components/sections/MeetupPage/MeetupButtonGroup';
export default {
  name: 'MeetupView',
  components: {
    MeetupCover,
    MeetupInfo,
    UiLoading,
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
    .cover {
      display: flex;
      align-self: center;
      width: 100%;
    }
    .meetup-view-wrapper-description-agenda {
      display: flex;
      flex-direction: column;
      align-self: center;
      font-size: 1.5em;
      width: 100%;
    }
    .info-buttons-group {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 100%;
      align-items: center;
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
    .cover {
      display: flex;
      align-self: center;
      width: 100%;
    }
    .meetup-view-wrapper-description-agenda {
      display: flex;
      flex-direction: column;
      align-self: center;
      font-size: 1.5em;
      width: 100%;
    }
    .info-buttons-group {
      margin-top: 20px;
      display: flex;
      align-self: center;
      width: 100%;
      justify-content: space-between;
    }
  }
}
</style>
