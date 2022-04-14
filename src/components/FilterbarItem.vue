<template>
  <div class="filterbar-wrapper">
    <div class="filterbar-wrapper-button-group">
      <UiLink variant="filter-button-link" to="/">Все</UiLink>
      <UiLink variant="filter-button-link" to="/">Прошедшие</UiLink>
      <UiLink variant="filter-button-link" to="/">Ожидаемые</UiLink>
    </div>
    <div class="filterbar-wrapper-input-group">
      <UiInput
        class="meetups__filterer__ui_input"
        placeholder="Поиск"
        @update:model-value="updateInput"
        :model-value="inputValue"
      />
    </div>
    <div class="filterbar-wrapper-toggle-group">
      <UiLink variant="nav-link" to="/">Список</UiLink>
      <UiLink variant="nav-link" to="/">Календарь</UiLink>
    </div>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink.vue';
import UiInput from '@/components/ui/UiInput.vue';
export default {
  name: 'FilterBar',
  components: {
    UiLink,
    UiInput,
  },
  computed: {
    inputValue() {
      return this.$store.state.main.inputValue;
    },
  },
  methods: {
    updateInput(payload) {
      this.$store.dispatch('updateInputValue', payload);
    },
  },
};
</script>
<style scoped lang="scss">
@import '../assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .filterbar-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    flex-wrap: wrap;
    background-color: $navbar-color-white;
    width: 100%;
    min-height: 90px;
    .filterbar-wrapper-button-group,
    .filterbar-wrapper-input-group {
      display: flex;
      align-self: center;
      margin-left: 5px;
      margin-top: 5px;
    }
    .filterbar-wrapper-toggle-group {
      display: flex;
      align-self: center;
      align-items: center;
      margin-right: 5px;
    }
  }
}
@media (min-width: 1020px) {
  .filterbar-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    flex-wrap: wrap;
    background-color: whitesmoke;
    width: 50%;
    min-height: 80px;
    .filterbar-wrapper-button-group,
    .filterbar-wrapper-input-group {
      display: flex;
      align-self: center;
      margin-left: 5px;
    }
    .filterbar-wrapper-toggle-group {
      display: flex;
      align-self: center;
      align-items: center;
      margin-right: 5px;
    }
  }
}
</style>
