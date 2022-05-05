<template>
  <div class="meetup-button-group">
    <div class="organizer-button-group">
      <UiButton variant="bgBlue">Редактировать</UiButton>
      <UiButton variant="bgRed">Удалить</UiButton>
    </div>
    <div class="participant-button-group" v-if="false">
      <UiButton variant="bgBlue">Участвовать</UiButton>
      <UiButton variant="bgRed">Отменить участие</UiButton>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
export default {
  name: 'MeetupButtonGroup',
  components: {
    UiButton,
  },
  data: () => ({}),
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
