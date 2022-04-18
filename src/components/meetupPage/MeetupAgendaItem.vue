<template>
  <hr />
  <div class="agenda-item-wrapper">
    <div class="agenda-item-wrapper-icon">
      <UiIcon class="agenda-item-icon" :icon-name="agendaItemIconName" />
    </div>
    <div class="agenda-item-wrapper-info">
      <div class="agenda-item-wrapper-info-time">
        {{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}
      </div>
      <div class="agenda-item-wrapper-info-title">
        {{ title }}

        <div class="agenda-item-wrapper-info-description">
          {{ agendaItem.description }}
        </div>
        <div class="agenda-item-wrapper-info-speaker">
          {{ agendaItem.speaker }} {{ agendaItem.language }}
        </div>
      </div>
    </div>
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
    title() {
      return this.agendaItem.title
        ? this.agendaItem.title
        : this.agendaItem.type;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
.agenda-item-wrapper {
  display: flex;
  margin-top: 30px;
  .agenda-item-wrapper-icon {
    margin-right: 10px;
    display: flex;
    .agenda-item-icon {
      display: flex;
      width: 32px;
    }
  }
  .agenda-item-wrapper-info {
    display: flex;
    align-self: center;
    .agenda-item-wrapper-info-time {
      display: flex;
      color: $main-color;
    }
    .agenda-item-wrapper-info-title {
      display: flex;
      align-self: center;
      flex-direction: column;
      margin-left: 25px;
      .agenda-item-wrapper-info-description {
        display: flex;
        font-size: 0.8em;
        margin-top: 10px;
      }
      .agenda-item-wrapper-info-speaker {
        display: flex;
        font-size: 0.8em;
        margin-top: 10px;
      }
    }
  }
}
</style>
