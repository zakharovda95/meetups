<template>
  <div class="meetup-toggle mdl-shadow--2dp">
    <UiLink variant="nav-link" :to="{ name: 'description' }">
      Подробности
    </UiLink>
    <UiLink variant="nav-link" :to="{ name: 'agenda' }">Программа</UiLink>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
export default {
  name: 'MeetupToggle',
  components: {
    UiLink,
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
.meetup-toggle {
  display: flex;
  margin: 24px 0;
  padding-left: 12px;
  background: $ITEMS_COLOR;
  border-radius: 0 24px 24px 24px;
  font-family: 'Comic Sans MS', sans-serif;
}
</style>
