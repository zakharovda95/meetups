<template>
  <UiLoading v-if="loading" />
  <div class="meetup_info" v-else>
    <div class="mdl-card__supporting-text">
      <UiIcon class="ui_icon__card" icon-name="organizer"></UiIcon
      >{{ meetup.organizer }}
    </div>
    <div class="mdl-card__supporting-text">
      <UiIcon class="ui_icon__card" icon-name="location"></UiIcon
      >{{ meetup.place }}
    </div>
    <div class="mdl-card__supporting-text">
      <UiIcon class="ui_icon__card" icon-name="calendar"></UiIcon
      >{{ meetup.date }}
    </div>
  </div>
</template>
<script>
import UiIcon from '@/components/ui/UiIcon';
import UiLoading from '@/components/ui/UiLoading';
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
      return this.$store.state.main.isLoading;
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/constants';
.meetup_info {
  width: 100%;
  .mdl-card__supporting-text {
    margin-bottom: -15px;
    font-family: JetBrainMono-Bold, sans-serif;
    font-size: 1.1em;
    color: $footer-color;
  }
  .ui_icon__card {
    width: 32px;
    margin-right: 25px;
  }
}
</style>
