<template>
  <div class="creation-form">
    <UiLabel label="Заголовок">
      <UiInput
        name="title"
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
        name="place"
        :model-value="meetupForm.place"
        @update:model-value="updatePlace"
      />
    </UiLabel>
    <UiLabel label="Описание">
      <UiInput
        multiline
        name="description"
        :model-value="meetupForm.description"
        @update:model-value="updateDescription"
      />
    </UiLabel>
  </div>
</template>
<script>
import UiInput from '@/components/ui/UiInput';
import UiLabel from '@/components/ui/UiLabel';
import UiInputDate from '@/components/ui/UiInputDate';
import { mapActions } from 'vuex';
export default {
  name: 'CreateForm',
  components: {
    UiLabel,
    UiInput,
    UiInputDate,
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
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
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
