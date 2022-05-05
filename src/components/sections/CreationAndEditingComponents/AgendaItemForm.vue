<template>
  <div class="agenda-item-form">
    <div class="row-1">
      <UiDropdown :options="options" v-model="agendaItemForm.type" />
      <UiButton @click="remove"
        ><UiIcon class="trash" icon-name="trash"
      /></UiButton>
    </div>
    <div class="row-2">
      <UiLabel class="startsAt" label="Начало">
        <UiInputDate type="time" v-model="agendaItemForm.startsAt" />
      </UiLabel>
      <UiLabel class="endsAt" label="Окончание">
        <UiInputDate type="time" v-model="agendaItemForm.endsAt" />
      </UiLabel>
    </div>
    <div class="row-3">
      <UiLabel :label="labelType">
        <UiInput v-model="agendaItemForm.title" />
      </UiLabel>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import UiIcon from '@/components/ui/UiIcon';
import { agendaItemsOptions } from '@/services/_agenda.service';
import UiDropdown from '@/components/ui/UiDropdown';
import UiInputDate from '@/components/ui/UiInputDate';
import UiInput from '@/components/ui/UiInput';
import UiLabel from '@/components/ui/UiLabel';
export default {
  name: 'AgendaItemForm',
  components: { UiDropdown, UiIcon, UiButton, UiInputDate, UiLabel, UiInput },
  props: {
    agendaItem: {
      type: Object,
    },
  },
  data: () => ({
    options: agendaItemsOptions,
    currentValue: 'registration',
  }),
  watch: {
    agendaItemProxy: {
      deep: true,
      immediate: true,
      handler() {
        console.log(this.agendaItemProxy);
      },
    },
    currentValue: {
      deep: true,
      immediate: true,
      handler() {
        this.agendaItemProxy.type = this.currentValue;
      },
    },
  },
  computed: {
    agendaItemForm() {
      return this.$store.state.creating.agendaItemForm;
    },
    labelType() {
      return this.currentValue === 'talk' || this.currentValue === 'other'
        ? 'Тема'
        : 'Нестандартный текст (необязательно)';
    },
  },
  methods: {
    remove(id) {
      this.$store.dispatch('removeAgendaItem', id);
    },
  },
};
</script>
<style scoped lang="scss">
.agenda-item-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid blue;
  .row-1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    .trash {
      width: 32px;
    }
  }
  .row-2 {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 15px;
    .startsAt {
      width: 20vw;
    }
    .endsAt {
      width: 20vw;
    }
  }
}
</style>
