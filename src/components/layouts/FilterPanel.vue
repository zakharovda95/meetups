<template>
  <div class="filter-panel mdl-shadow--2dp">
    <div class="radio" v-show="!currentRouteIsCalendar">
      <UiRadio
        @update:model-value="updateRadioValue"
        :model-value="radioModel"
        value="all"
        name="filter-panel"
        id="all"
        checked
      >
        Все
      </UiRadio>
      <UiRadio
        @update:model-value="updateRadioValue"
        :model-value="radioModel"
        value="past"
        name="filter-panel"
        id="past"
      >
        Прошедшие
      </UiRadio>
      <UiRadio
        @update:model-value="updateRadioValue"
        :model-value="radioModel"
        value="future"
        name="filter-panel"
        id="future"
      >
        Ожидаемые
      </UiRadio>
    </div>
    <div class="input" v-show="!currentRouteIsCalendar">
      <UiInput
        placeholder="Поиск..."
        @update:model-value="updateInput"
        :model-value="inputValue"
        name="''"
      />
    </div>
    <div class="toggle">
      <UiLink variant="nav-link" :to="{ name: 'meetups' }">Список</UiLink>
      <UiLink variant="nav-link" :to="{ name: 'calendar' }"> Календарь </UiLink>
    </div>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink.vue';
import UiInput from '@/components/ui/UiInput.vue';
import UiRadio from '@/components/ui/UiRadio.vue';
export default {
  name: 'FilterPanel',
  components: {
    UiLink,
    UiInput,
    UiRadio,
  },
  computed: {
    inputValue() {
      return this.$store.state.meetups.sortingParams.inputValue;
    },
    radioModel() {
      return this.$store.state.meetups.sortingParams.radioButtonValue;
    },
    currentRouteIsCalendar() {
      return this.$route.name === 'calendar';
    },
  },
  methods: {
    updateInput(value) {
      this.$store.dispatch('updateInputValue', value);
    },
    updateRadioValue(value) {
      this.$store.dispatch('updateRadioValue', value);
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
@media (max-width: 1019px) {
  .filter-panel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
    flex-wrap: wrap;
    background-color: $ITEMS_COLOR;
    border-radius: 0 24px 24px 24px;
    width: 91%;
    min-height: 90px;
    .radio {
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrainMono-Light', sans-serif;
    }
    .input {
      display: flex;
      align-self: center;
      margin-left: 5px;
      font-family: 'JetBrainMono-Light', sans-serif;
    }
    .toggle {
      display: flex;
      align-self: center;
      align-items: center;
      margin-right: 5px;
      font-family: 'JetBrainMono-Light', sans-serif;
    }
  }
}
@media (min-width: 1020px) {
  .filter-panel {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    flex-wrap: wrap;
    background-color: $ITEMS_COLOR;
    border-radius: 0 24px 24px 24px;
    width: 50%;
    min-height: 80px;
    .radio,
    .input {
      display: flex;
      align-self: center;
      margin-left: 5px;
      font-family: 'JetBrainMono-Light', sans-serif;
    }
    .toggle {
      display: flex;
      align-self: center;
      align-items: center;
      margin-right: 5px;
      font-family: 'JetBrainMono-Light', sans-serif;
    }
  }
}
</style>
