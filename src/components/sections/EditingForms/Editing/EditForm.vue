<template>
  <div class="edit-form">
    <form>
      <UiLabel label="Заголовок">
        <UiInput
          name="title"
          :disabled="loading"
          :model-value="editableMeetup.title"
          @update:model-value="editTitle"
        />
      </UiLabel>
      <UiLabel label="Дата мероприятия">
        <UiInputDate
          :disabled="loading"
          :model-value="editableMeetup.date"
          @update:model-value="editDate"
        />
      </UiLabel>
      <UiLabel label="Место проведения">
        <UiInput
          name="place"
          :disabled="loading"
          :model-value="editableMeetup.place"
          @update:model-value="editPlace"
        />
      </UiLabel>
      <UiLabel label="Описание">
        <UiInput
          multiline
          name="description"
          :disabled="loading"
          :model-value="editableMeetup.description"
          @update:model-value="editDescription"
        />
      </UiLabel>
    </form>
  </div>
</template>
<script>
import UiLabel from '@/components/ui/UiLabel';
import UiInput from '@/components/ui/UiInput';
import UiInputDate from '@/components/ui/UiInputDate';
import { mapActions } from 'vuex';
export default {
  name: 'EditForm',
  components: {
    UiLabel,
    UiInput,
    UiInputDate,
  },
  data: () => ({}),
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    editableMeetup() {
      return this.$store.state.editing.editableMeetup;
    },
  },
  methods: {
    ...mapActions(['editTitle', 'editDate', 'editPlace', 'editDescription']),
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .edit-form {
    width: 100%;
    display: flex;
    align-items: center;
    form {
      width: 80%;
    }
  }
}
@media (min-width: 1020px) {
  .edit-form {
    width: 100%;
    display: flex;
    form {
      width: 100%;
    }
  }
}
</style>
