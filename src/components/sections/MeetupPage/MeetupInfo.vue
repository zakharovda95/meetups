<template>
  <UiLoading v-if="loading" />
  <div class="meetup_info" v-else>
    <div class="mdl-card__supporting-text">
      <UiIcon class="ui_icon__card" icon-name="organizer"></UiIcon
      >{{ meetup.organizer.name }}
    </div>
    <div class="mdl-card__supporting-text">
      <UiIcon class="ui_icon__card" icon-name="location"></UiIcon
      >{{ meetup.place }}
    </div>
    <div class="mdl-card__supporting-text">
      <UiIcon class="ui_icon__card" icon-name="calendar"></UiIcon
      >{{ meetup.date }} ( {{ daysBeforeTheEvent }} )
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
      if (moment(eventDate).format('DD') > moment(dateNow).format('DD')) {
        return `Через ${moment(eventDate - dateNow).format('DDD')} дн.`;
      }
      if (moment(eventDate).format('DD') === moment(dateNow).format('DD')) {
        return 'Мероприятие состоится сегодня';
      }
      if (moment(eventDate).format('DD') < moment(dateNow).format('DD')) {
        return 'Мероприятие прошло';
      }
      return '';
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/_constants.scss';
.meetup_info {
  width: 100%;
  .mdl-card__supporting-text {
    margin-bottom: -15px;
    font-size: 1.1em;
    color: $FONT_COLOR_DARK;
  }
  .ui_icon__card {
    width: 32px;
    margin-right: 25px;
  }
}
</style>
