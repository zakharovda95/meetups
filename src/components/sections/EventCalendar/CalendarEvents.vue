<template>
  <div class="event-calendar-item-events" v-if="events.length">
    <UiLink
      variant="calendar-link"
      v-for="event in events"
      :key="event.id"
      :to="{ name: 'meetup', params: { meetupId: event.id } }"
    >
      {{ event.title }}
    </UiLink>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
export default {
  name: 'CalendarEvents',
  components: {
    UiLink,
  },
  props: {
    events: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style scoped lang="scss"></style>
