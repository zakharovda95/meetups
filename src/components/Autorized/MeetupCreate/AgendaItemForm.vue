<template>
  <div class="agenda-item-form">
    <div class="row-1">
      <UiDropdown :options="options" />
      <UiButton><UiIcon class="trash" icon-name="trash" /></UiButton>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import UiIcon from '@/components/ui/UiIcon';
import { agendaItemsOptions } from '@/services/_agenda.service';
import UiDropdown from '@/components/ui/UiDropdown';
export default {
  name: 'AgendaItemForm',
  components: { UiDropdown, UiIcon, UiButton },
  props: {
    agendaItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    options: agendaItemsOptions,
  }),
};
</script>
<style scoped lang="scss">
.agenda-item-form {
  display: flex;
  width: 100%;
  border: 1px solid blue;
  .row-1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    .trash {
      width: 32px;
    }
  }
}
</style>
