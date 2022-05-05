<template>
  <div class="agenda-item-form">
    <div class="row-1">
      <UiDropdown
        :options="options"
        type="Тип"
        :model-value="currentAgendaItem.type"
        @update:model-value="updateAgendaType"
      />
      <UiIcon class="trash" icon-name="trash" />
    </div>
    <div class="row-2">
      <UiLabel class="startsAt" label="Начало">
        <UiInputDate
          type="time"
          placeholder="08:00"
          :model-value="currentAgendaItem.startsAt"
          @update:model-value="updateAgendaStartsAt"
        />
      </UiLabel>
      <UiLabel class="endsAt" label="Окончание">
        <UiInputDate
          type="time"
          placeholder="09:00"
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
    <div class="talk-group" v-if="currentAgendaItem.type === 'talk'">
      <div class="row-4">
        <UiLabel label="Докладчик">
          <UiInput
            :model-value="currentAgendaItem.speaker"
            @update:model-value="updateAgendaSpeaker"
          />
        </UiLabel>
      </div>
      <div class="row-5">
        <UiDropdown
          :options="langOptions"
          type="Язык"
          :model-value="currentAgendaItem.language"
          @update:model-value="updateAgendaLanguage"
        />
      </div>
    </div>
    <div class="row-6" v-if="agendaType">
      <UiLabel label="Описание">
        <UiInput
          multiline
          :model-value="currentAgendaItem.description"
          @update:model-value="updateAgendaDescription"
        />
      </UiLabel>
    </div>
  </div>
</template>
<script>
import UiIcon from '@/components/ui/UiIcon';
import {
  agendaItemsOptions,
  agendaLangOptions,
} from '@/services/_agenda.service';
import UiDropdown from '@/components/ui/UiDropdown';
import UiInputDate from '@/components/ui/UiInputDate';
import UiInput from '@/components/ui/UiInput';
import UiLabel from '@/components/ui/UiLabel';
export default {
  name: 'AgendaItemForm',
  components: { UiDropdown, UiIcon, UiInputDate, UiLabel, UiInput },
  props: {
    agendaId: {
      type: String,
      required: true,
      validator: agenda => agenda !== '',
    },
  },
  data: () => ({
    options: agendaItemsOptions,
    langOptions: agendaLangOptions,
  }),
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
    updateAgendaSpeaker(event) {
      this.$store.dispatch('updateAgendaSpeaker', [event, this.agendaId]);
    },
    updateAgendaLanguage(event) {
      this.$store.dispatch('updateAgendaLanguage', [event, this.agendaId]);
    },
    updateAgendaDescription(event) {
      this.$store.dispatch('updateAgendaDescription', [event, this.agendaId]);
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
      return this.currentAgendaItem.type === 'talk' ||
        this.currentAgendaItem.type === 'other'
        ? 'Тема'
        : 'Нестандартный текст (необязательно)';
    },
    agendaType() {
      return (
        this.currentAgendaItem.type === 'talk' ||
        this.currentAgendaItem.type === 'other'
      );
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .agenda-item-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid blue;
    .row-1,
    .row-5 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 15px;
      margin-left: 5px;
      .trash {
        width: 32px;
        margin-right: 30px;
      }
    }
    .row-2 {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 15px;
      .startsAt {
        width: 35vw;
      }
      .endsAt {
        width: 35vw;
      }
    }
    .row-3,
    .row-4,
    .row-6 {
      margin-left: 15px;
    }
  }
}
@media (min-width: 1020px) {
  .agenda-item-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid blue;
    .row-1,
    .row-5 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 15px;
      margin-left: 5px;
      .trash {
        width: 32px;
        margin-right: 30px;
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
    .row-3,
    .row-4,
    .row-6 {
      margin-left: 15px;
      width: 90%;
    }
  }
}
</style>
