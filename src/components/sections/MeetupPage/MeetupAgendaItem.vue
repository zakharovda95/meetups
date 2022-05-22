<template>
  <hr />
  <div class="agenda-item">
    <div class="icon-wrapper">
      <UiIcon class="icon" :icon-name="agendaItemIconName" />
    </div>
    <div class="info-wrapper">
      <div class="time">
        {{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}
      </div>
      <div class="title">
        {{ title }}

        <div class="description">
          {{ agendaItem.description }}
        </div>
        <div class="speaker">
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
      default: () => ({}),
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
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
.agenda-item {
  display: flex;
  margin-top: 30px;
  width: 100%;
  font-family: 'JetBrainMono-Light', sans-serif;
  .icon-wrapper {
    margin-right: 10px;
    display: flex;
    .icon {
      display: flex;
      width: 32px;
    }
  }
  .info-wrapper {
    display: flex;
    align-self: center;
    .time {
      display: flex;
      color: $FONT_COLOR_DARK;
      align-self: center;
    }
    .title {
      display: flex;
      align-self: center;
      flex-direction: column;
      margin-left: 25px;
      .description {
        display: flex;
        font-size: 0.8em;
        margin-top: 10px;
      }
      .speaker {
        display: flex;
        font-size: 0.8em;
        margin-top: 10px;
      }
    }
  }
}
</style>
