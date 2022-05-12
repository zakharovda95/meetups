<template>
  <div class="meetup-button-group">
    <div class="organizer-button-group" v-if="isOrganizer">
      <UiButton variant="bgBlue" @click="editMeetup">Редактировать</UiButton>
      <UiButton variant="bgRed" @click="removeMeetup">Удалить</UiButton>
    </div>
    <div class="participant-button-group" v-if="!isOrganizer">
      <UiButton v-if="!isParticipant" variant="bgBlue" @click="participate">
        Участвовать
      </UiButton>
      <UiButton
        v-if="isParticipant"
        variant="bgRed"
        @click="cancelParticipation"
      >
        Отменить участие
      </UiButton>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import { removeImage } from '@/requesters/firebase/_firebase.storage.requesters';
import { removeFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
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
      return this.$store.state.main?.userInfo?.meetups;
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
      'pushMeetupForParticipation',
      'cutMeetupFromParticipationMeetups',
      'cutMeetupFromOrganizedMeetups',
    ]),
    editMeetup() {
      this.$router.push({ name: 'edit', params: { meetupId: this.meetup.id } });
    },
    async removeMeetup() {
      await removeImage('covers/' + this.meetup.imageName);
      await removeFirebaseData('meetups/' + this.meetup.id);
      await this.cutMeetupFromOrganizedMeetups(this.meetup.id);
      await this.getMeetups();
      await this.$router.push({ name: 'meetups' });
      await this.$toast.success('Митап удален!');
    },
    async participate() {
      await this.pushMeetupForParticipation(this.meetup.id);
    },
    async cancelParticipation() {
      await this.cutMeetupFromParticipationMeetups(this.meetup.id);
    },
  },
};
</script>
<style scoped lang="scss">
.meetup-button-group {
  display: flex;
  .organizer-button-group,
  .participant-button-group {
    display: flex;
    flex-direction: column;
  }
}
</style>
