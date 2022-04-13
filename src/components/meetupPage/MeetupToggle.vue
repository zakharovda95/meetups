<template>
  <div class="meetup_toggle_group">
    <ui-button variant="blue">
      <router-link class="main_link" to="/description">Описание</router-link>
    </ui-button>
    <ui-button variant="blue">
      <router-link class="main_link" to="/agenda">Программа</router-link>
    </ui-button>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
export default {
  name: 'MeetupToggle',
  components: {
    UiButton,
  },
};
</script>
<style scoped lang="scss">
.meetup_toggle_group {
  display: flex;
  background: whitesmoke;
  padding: 10px;
  .main_link {
    text-decoration: none;
    color: blue;
  }
}
</style>
