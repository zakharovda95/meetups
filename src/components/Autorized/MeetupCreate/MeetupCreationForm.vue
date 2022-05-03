<template>
  <div class="meetup-creation-form">
    <UiLabel label="Заголовок"><UiInput required></UiInput></UiLabel>
    <UiLabel label="Дата мероприятия"><UiInputDate></UiInputDate></UiLabel>
    <UiLabel label="Место проведения"><UiInput></UiInput></UiLabel>
    <UiLabel label="Описание"><UiInput multiline></UiInput></UiLabel>
  </div>
</template>
<script>
import UiInput from '@/components/ui/UiInput';
import UiInputDate from '@/components/ui/UiInputDate';
import UiLabel from '@/components/ui/UiLabel';
export default {
  name: 'MeetupCreationForm',
  components: { UiLabel, UiInput, UiInputDate },
  data: () => ({}),
};
</script>
<style scoped lang="scss">
.meetup-creation-form {
  display: flex;
  flex-direction: column;
}
</style>
