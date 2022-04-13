<template>
  <h4>Описание:</h4>
  <div class="meetup_description">{{ meetup.description }}</div>
</template>
<script>
export default {
  name: 'MeetupDescription',
  props: {
    meetup: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped lang="scss"></style>
