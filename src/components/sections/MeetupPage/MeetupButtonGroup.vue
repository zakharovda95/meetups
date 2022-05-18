<template>
  <div class="meetup-button-group" v-if="isAuthorized">
    <div class="organizer" v-if="isOrganizer">
      <UiButton variant="bgWrong" @click="editMeetup">Редактировать</UiButton>
      <UiButton variant="bgMain" @click="removeMeetup">Удалить</UiButton>
    </div>
    <div class="participant" v-if="!isOrganizer">
      <UiButton v-if="!isParticipant" variant="bgWrong" @click="participate">
        Участвовать
      </UiButton>
      <UiButton
        v-if="isParticipant"
        variant="bgMain"
        @click="cancelParticipation"
      >
        Отменить
      </UiButton>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import { fbRemoveImage } from '@/requesters/firebase/_firebase.storage.requesters';
import { fbRemoveData } from '@/requesters/firebase/_firebase.database.requesters';
import { mapActions } from 'vuex';
export default {
  name: 'MeetupButtonGroup',
  components: {
    UiButton,
  },
  props: {
    meetup: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isLoading: false,
  }),
  computed: {
    userMeetups() {
      return this.$store.state.user.data.userInfo?.meetups;
    },
    isAuthorized() {
      return !!this.$store.state.user.data.userInfo;
    },
    isParticipant() {
      if (this.userMeetups) {
        return this.userMeetups.participant.some(
          item => item === this.meetup.id,
        );
      }
      return false;
    },
    isOrganizer() {
      if (this.userMeetups) {
        return this.userMeetups.organizer.some(item => item === this.meetup.id);
      }
      return false;
    },
  },
  methods: {
    ...mapActions([
      'getMeetups',
      'pushMeetupForParticipationToUserData',
      'cutMeetupFromParticipationMeetupsInUserData',
      'cutMeetupFromOrganizedMeetupsInUserData',
    ]),
    editMeetup() {
      this.$router.push({
        name: 'edit',
        params: { meetupId: this.meetup.id },
      });
    },
    async removeMeetup() {
      await fbRemoveImage('covers/' + this.meetup.imageName);
      await fbRemoveData('meetups/' + this.meetup.id);
      await this.cutMeetupFromOrganizedMeetupsInUserData(this.meetup.id);
      await this.$router.push({ name: 'meetups' });
      await this.$toast.success('Митап удален!');
    },
    async participate() {
      await this.pushMeetupForParticipationToUserData(this.meetup.id);
    },
    async cancelParticipation() {
      await this.cutMeetupFromParticipationMeetupsInUserData(this.meetup.id);
    },
  },
};
</script>
<style scoped lang="scss">
.meetup-button-group {
  display: flex;
  .organizer,
  .participant {
    display: flex;
    flex-direction: column;
  }
}
</style>
