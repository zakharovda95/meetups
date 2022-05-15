<template>
  <div class="meetup-toggle">
    <UiLink variant="nav-link" :to="{ name: 'description' }">Описание</UiLink>
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
.meetup-toggle {
  display: flex;
  margin-bottom: 25px;
  margin-top: 25px;
  background: whitesmoke;
}
</style>
