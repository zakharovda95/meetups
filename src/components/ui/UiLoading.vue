<template>
  <div class="ui-loading">
    <h2>ИДЕТ ЗАГРУЗКА...</h2>
  </div>
</template>
<script>
export default {
  name: 'UiLoading',
};
</script>
<style scoped lang="scss">
.ui-loading {
  @import '../../assets/styles/_constants.scss';
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
}
</style>
