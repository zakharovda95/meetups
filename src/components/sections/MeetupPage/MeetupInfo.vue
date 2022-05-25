<template>
  <UiLoading v-if="loading" />
  <div class="meetup-info" v-else>
    <div class="mdl-card__supporting-text">
      <UiIcon class="card" icon-name="organizer"></UiIcon>
      <div class="text">{{ meetup.organizer.name }}</div>
    </div>
    <div class="mdl-card__supporting-text">
      <UiIcon class="card" icon-name="location"></UiIcon>
      <div class="text">{{ meetup.place }}</div>
    </div>
    <div class="mdl-card__supporting-text time">
      <UiIcon class="card" icon-name="calendar"></UiIcon>
      <div class="text">{{ meetup.date }} ({{ daysBeforeTheEvent }})</div>
    </div>
  </div>
</template>
<script>
import UiIcon from '@/components/ui/UiIcon';
import UiLoading from '@/components/ui/UiLoading';
import moment from 'moment';
export default {
  name: 'MeetupInfo',
  components: {
    UiIcon,
    UiLoading,
  },
  props: {
    meetup: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    loading() {
      return this.$store.state.meetups.isLoading;
    },
    daysBeforeTheEvent() {
      const dateNow = moment().valueOf();
      const eventDate = this.meetup.dateUnix;
      if (eventDate > dateNow) {
        return `Через ${moment(eventDate - dateNow).format('DDD')} дн`;
      }
      if (moment(eventDate).day() === moment(dateNow).day()) {
        return 'Мероприятие состоится сегодня';
      }
      if (eventDate < dateNow) {
        return 'Мероприятие прошло';
      }
      return '';
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.meetup-info {
  width: 100%;
  .mdl-card__supporting-text {
    display: flex;
    margin-bottom: -15px;
    font-size: 1.1em;
    color: $FONT_COLOR_DARK;
    font-family: 'Comic Sans MS', sans-serif;
    .text {
      display: flex;
      align-self: center;
    }
  }
  .card {
    width: 28px;
    margin-right: 25px;
  }
  .time {
    display: flex;
  }
}
</style>
