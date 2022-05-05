<template>
  <div class="creation-form">
    <form>
      <UiLabel label="Заголовок">
        <UiInput
          required
          :model-value="meetupForm.title"
          @update:model-value="updateTitle"
        />
      </UiLabel>
      <UiLabel label="Дата мероприятия">
        <UiInputDate
          :model-value="meetupForm.date"
          @update:model-value="updateDate"
        />
      </UiLabel>
      <UiLabel label="Место проведения">
        <UiInput
          :model-value="meetupForm.place"
          @update:model-value="updatePlace"
        />
      </UiLabel>
      <UiLabel label="Описание">
        <UiInput
          multiline
          :model-value="meetupForm.description"
          @update:model-value="updateDescription"
        />
      </UiLabel>
    </form>
  </div>
</template>
<script>
import UiInput from '@/components/ui/UiInput';
import UiLabel from '@/components/ui/UiLabel';
import UiInputDate from '@/components/ui/UiInputDate';
export default {
  name: 'CreateForm',
  components: {
    UiLabel,
    UiInput,
    UiInputDate,
  },
  data: () => ({}),
  computed: {
    meetupForm() {
      return this.$store.state.creating.meetupForm;
    },
  },
  methods: {
    updateTitle(event) {
      this.$store.dispatch('updateTitle', event);
    },
    updateDate(event) {
      this.$store.dispatch('updateDate', event);
    },
    updatePlace(event) {
      this.$store.dispatch('updatePlace', event);
    },
    updateDescription(event) {
      this.$store.dispatch('updateDescription', event);
    },
  },
  updated() {
    console.log(this.meetupForm);
  },
};
</script>
<style scoped lang="scss"></style>
