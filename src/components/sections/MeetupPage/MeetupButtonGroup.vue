<template>
  <div class="meetup-button-group">
    <div class="organizer-button-group">
      <UiButton variant="bgBlue" @click="editMeetup">Редактировать</UiButton>
      <UiButton variant="bgRed" @click="removeMeetup">Удалить</UiButton>
    </div>
    <div class="participant-button-group" v-if="false">
      <UiButton variant="bgBlue">Участвовать</UiButton>
      <UiButton variant="bgRed">Отменить участие</UiButton>
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
