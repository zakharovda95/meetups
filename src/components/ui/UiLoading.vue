<template>
  <div class="ui_loading">
    <div
      class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'UiLoading',
};
</script>
<style scoped lang="scss">
.ui_loading {
  @import '../../assets/styles/_constants.scss';
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 87vh;
}
</style>
