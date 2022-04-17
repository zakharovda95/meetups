<template>
  <div class="agenda-item-wrapper">
    <div class="agenda-item-wrapper-icon">
      <UiIcon class="agenda-item-icon" :icon-name="agendaItemIconName" />
    </div>
    <div class="agenda-item-wrapper-info"></div>
  </div>
</template>
<script>
import UiIcon from '@/components/ui/UiIcon';
import { agendaItemIcons } from '@/services/_agenda.service';

export default {
  name: 'MeetupAgendaItem',
  components: { UiIcon },
  props: {
    agendaItem: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    agendaItemIconName() {
      return agendaItemIcons[this.agendaItem.type];
    },
  },
};
</script>
<style scoped lang="scss">
.agenda-item-wrapper {
  .agenda-item-wrapper-icon {
    display: flex;
    margin-top: 25px;
    .agenda-item-icon {
      width: 40px;
    }
  }
}
</style>
