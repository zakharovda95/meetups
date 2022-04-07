<template>
  <div class="meetups__filterer mdl-shadow--2dp">
    <div class="meetups__filterer__button_group">
      <ui-button variant="bgBlue">Все</ui-button>
      <ui-button variant="bgBlue">Прошедшие</ui-button>
      <ui-button variant="bgBlue">Ожидаемые</ui-button>
    </div>
    <div class="meetups__filterer__input_group">
      <ui-input></ui-input>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import UiInput from '@/components/ui/UiInput';
export default {
  name: 'FilterBar',
  components: {
    UiButton,
    UiInput,
  },
};
</script>
<style scoped lang="scss">
.meetups__filterer {
  z-index: 1000;
  display: flex;
  margin-top: 100px;
  flex-wrap: wrap;
  background-color: whitesmoke;
  width: 100%;
  min-height: 80px;
  .meetups__filterer__button_group,
  .meetups__filterer__input_group {
    display: flex;
    align-self: center;
    margin-left: 10px;
  }
}
</style>
