<template>
  <h4>Описание:</h4>
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
@import '~@/assets/fonts/_fonts.css';
h4 {
  font-family: 'JetBrainMono-Bold', sans-serif;
}
</style>
