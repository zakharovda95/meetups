<template>
  <div class="filterbar-wrapper">
    <div class="filterbar-wrapper-button-group">
      <ui-button variant="bgBlue">Все</ui-button>
      <ui-button variant="bgBlue">Прошедшие</ui-button>
      <ui-button variant="bgBlue">Ожидаемые</ui-button>
    </div>
    <div class="filterbar-wrapper-input-group">
      <ui-input
        class="meetups__filterer__ui_input"
        placeholder="Поиск"
        @update:model-value="updateInput"
        :model-value="inputValue"
      ></ui-input>
    </div>
    <div class="filterbar-wrapper-toggle-group">
      <ui-button variant="blue">
        <router-link class="main_link" to="/">Список</router-link>
      </ui-button>
      <ui-button variant="blue">
        <router-link class="main_link" to="/calendar">Календарь</router-link>
      </ui-button>
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
  .meetups__filterer {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    flex-wrap: wrap;
    background-color: whitesmoke;
    width: 100%;
    min-height: 80px;
    .meetups__filterer__button_group,
    .meetups__filterer__input_group {
      display: flex;
      align-self: center;
      margin-left: 5px;
    }
    .meetups__filterer__toggle_group {
      display: flex;
      align-self: center;
      align-items: center;
      margin-right: 5px;
      .main_link {
        text-decoration: none;
        color: $main-color;
      }
    }
  }
}
</style>
