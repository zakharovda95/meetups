<template>
  <div class="filter-panel">
    <div class="radio">
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
    <div class="input">
      <UiInput
        placeholder="Поиск"
        @update:model-value="updateInput"
        :model-value="inputValue"
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
      return this.$store.state.main.inputValue;
    },
    radioModel() {
      return this.$store.state.main.meetupSortParam;
    },
  },
  methods: {
    updateInput(payload) {
      this.$store.dispatch('updateInputValue', payload);
    },
    updateRadioValue(payload) {
      this.$store.dispatch('updateRadioValue', payload);
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/styles/constants';
@media (max-width: 1019px) {
  .filter-panel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;
    flex-wrap: wrap;
    background-color: $navbar-color-white;
    width: 100%;
    min-height: 90px;
    .radio {
      display: flex;
      justify-content: space-between;
    }
    .input {
      display: flex;
      align-self: center;
      margin-left: 5px;
    }
    .toggle {
      display: flex;
      align-self: center;
      align-items: center;
      margin-right: 5px;
    }
  }
}
@media (min-width: 1020px) {
  .filter-panel {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    flex-wrap: wrap;
    background-color: whitesmoke;
    width: 50%;
    min-height: 80px;
    .radio,
    .input {
      display: flex;
      align-self: center;
      margin-left: 5px;
    }
    .toggle {
      display: flex;
      align-self: center;
      align-items: center;
      margin-right: 5px;
    }
  }
}
</style>
