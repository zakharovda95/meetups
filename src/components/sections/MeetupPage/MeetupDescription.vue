<template>
  <h4>Подробности:</h4>
  <div class="meetup-description">{{ meetup.description }}</div>
</template>
<script>
export default {
  name: 'MeetupDescription',
  computed: {
    meetup() {
      return this.$store.getters.meetup;
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
h4 {
  font-family: 'Comic Sans MS', sans-serif;
}
</style>
