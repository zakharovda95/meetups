<template>
  <div class="agenda-item-form">
    <div class="row-1">
      <UiDropdown
        :options="options"
        :model-value="currentAgendaItem.type"
        @update:model-value="updateAgendaType"
      />
      <UiButton><UiIcon class="trash" icon-name="trash" /></UiButton>
    </div>
    <div class="row-2">
      <UiLabel class="startsAt" label="Начало">
        <UiInputDate
          type="time"
          :model-value="currentAgendaItem.startsAt"
          @update:model-value="updateAgendaStartsAt"
        />
      </UiLabel>
      <UiLabel class="endsAt" label="Окончание">
        <UiInputDate
          type="time"
          :model-value="currentAgendaItem.endsAt"
          @update:model-value="updateAgendaEndsAt"
        />
      </UiLabel>
    </div>
    <div class="row-3">
      <UiLabel :label="labelType">
        <UiInput
          :model-value="currentAgendaItem.title"
          @update:model-value="updateAgendaTitle"
        />
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
    agendaId: {
      type: String,
      required: true,
      validator: agenda => agenda !== '',
    },
  },
  data: () => ({
    options: agendaItemsOptions,
    currentValue: 'registration',
  }),
  mounted() {
    this.currentAgendaItem.type = this.currentValue;
  },
  methods: {
    updateAgendaType(event) {
      this.$store.dispatch('updateAgendaType', [event, this.agendaId]);
    },
    updateAgendaStartsAt(event) {
      this.$store.dispatch('updateAgendaStartsAt', [event, this.agendaId]);
    },
    updateAgendaEndsAt(event) {
      this.$store.dispatch('updateAgendaEndsAt', [event, this.agendaId]);
    },
    updateAgendaTitle(event) {
      this.$store.dispatch('updateAgendaTitle', [event, this.agendaId]);
    },
  },
  computed: {
    agenda() {
      return this.$store.state.creating.meetupForm.agenda;
    },
    currentAgendaItem() {
      let currentItem = null;
      this.agenda.forEach(item => {
        if (this.agendaId === item.id) {
          currentItem = item;
        }
      });
      return currentItem;
    },
    labelType() {
      return this.currentValue === 'talk' || this.currentValue === 'other'
        ? 'Тема'
        : 'Нестандартный текст (необязательно)';
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
