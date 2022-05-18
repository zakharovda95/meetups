<template>
  <div class="creation-form">
    <Form>
      <UiLabel label="Заголовок">
        <UiInput
          name="title"
          :model-value="meetupForm.title"
          @update:model-value="updateTitle"
        />
        <ErrorMessage name="title" class="error" />
      </UiLabel>
      <UiLabel label="Дата мероприятия">
        <UiInputDate
          name="date"
          :model-value="meetupForm.date"
          @update:model-value="updateDate"
        />
        <ErrorMessage name="date" class="error" />
      </UiLabel>
      <UiLabel label="Место проведения">
        <UiInput
          name="place"
          :model-value="meetupForm.place"
          @update:model-value="updatePlace"
        />
        <ErrorMessage name="place" class="error" />
      </UiLabel>
      <UiLabel label="Описание">
        <UiInput
          multiline
          name="description"
          :model-value="meetupForm.description"
          @update:model-value="updateDescription"
        />
        <ErrorMessage name="description" class="error" />
      </UiLabel>
    </Form>
  </div>
</template>
<script>
import UiInput from '@/components/ui/UiInput';
import UiLabel from '@/components/ui/UiLabel';
import UiInputDate from '@/components/ui/UiInputDate';
import { mapActions } from 'vuex';
import { Form, ErrorMessage } from 'vee-validate';
export default {
  name: 'CreateForm',
  components: {
    UiLabel,
    UiInput,
    UiInputDate,
    Form,
    ErrorMessage,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    meetupForm() {
      return this.$store.state.creating.meetupForm;
    },
  },
  methods: {
    ...mapActions([
      'updateTitle',
      'updateDate',
      'updatePlace',
      'updateDescription',
    ]),
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
