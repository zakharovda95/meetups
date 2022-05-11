<template>
  <div class="meetup-button-group">
    <div class="organizer-button-group" v-if="isOrganizer">
      <UiButton variant="bgBlue" @click="editMeetup">Редактировать</UiButton>
      <UiButton variant="bgRed" @click="removeMeetup">Удалить</UiButton>
    </div>
    <div class="participant-button-group">
      <UiButton v-if="!isParticipant" variant="bgBlue" @click="participate">
        Участвовать
      </UiButton>
      <UiButton v-else variant="bgRed">Отменить участие</UiButton>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import { removeImage } from '@/requesters/firebase/_firebase.storage.requesters';
import { removeFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
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
      return this.userMeetups.participant.some(item => item === this.meetup.id);
    },
    isOrganizer() {
      return this.userMeetups.organizer.some(item => item === this.meetup.id);
    },
  },
  methods: {
    editMeetup() {
      this.$router.push({ name: 'edit', params: { meetupId: this.meetup.id } });
    },
    async removeMeetup() {
      this.isLoading = true;
      await removeImage('covers/' + this.meetup.imageName);
      await removeFirebaseData('meetups/' + this.meetup.id);
      await this.$store.dispatch('getMeetups');
      await this.$router.push({ name: 'meetups' });
      await this.$toast.success('Митап удален!');
      this.isLoading = false;
    },
    async participate() {
      const id = this.$route.params.meetupId;
      await this.$store.dispatch('pushMeetupForParticipation', id);
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
