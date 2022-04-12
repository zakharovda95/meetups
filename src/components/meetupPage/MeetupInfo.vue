<template>
  <ui-loading v-if="loading" />
  <div class="meetup_info" v-else>
    <div class="mdl-card__supporting-text">
      <ui-icon class="ui_icon__card" icon-name="organizer"></ui-icon
      >{{ meetup.organizer }}
    </div>
    <div class="mdl-card__supporting-text">
      <ui-icon class="ui_icon__card" icon-name="location"></ui-icon
      >{{ meetup.place }}
    </div>
    <div class="mdl-card__supporting-text">
      <ui-icon class="ui_icon__card" icon-name="calendar"></ui-icon
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
@import '../../assets/styles/_constants.scss';
.meetup_info {
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
