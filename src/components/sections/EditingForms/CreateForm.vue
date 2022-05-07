<template>
  <div class="creation-form">
    <form>
      <UiLabel label="Заголовок">
        <UiInput
          required
          :disabled="loading"
          :model-value="meetupForm.title"
          @update:model-value="updateTitle"
        />
      </UiLabel>
      <UiLabel label="Дата мероприятия">
        <UiInputDate
          :disabled="loading"
          :model-value="meetupForm.date"
          @update:model-value="updateDate"
        />
      </UiLabel>
      <UiLabel label="Место проведения">
        <UiInput
          :disabled="loading"
          :model-value="meetupForm.place"
          @update:model-value="updatePlace"
        />
      </UiLabel>
      <UiLabel label="Описание">
        <UiInput
          multiline
          :disabled="loading"
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
  props: {
    loading: Boolean,
  },
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
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .creation-form {
    width: 100%;
    display: flex;
    align-items: center;
    form {
      width: 80%;
    }
  }
}
@media (min-width: 1020px) {
  .creation-form {
    width: 100%;
    display: flex;
    form {
      width: 100%;
    }
  }
}
</style>
