<template>
  <div class="edit-agenda-item-form">
    <div class="row-1">
      <UiDropdown
        :options="options"
        type="Тип"
        :disabled="loading"
        :model-value="currentAgendaItem.type"
        @update:model-value="editAgendaType([$event, agendaId])"
      />
      <UiIcon
        @click="removeEditableAgendaItem(agendaId)"
        class="trash"
        icon-name="trash"
      />
    </div>
    <div class="row-2">
      <UiLabel class="startsAt" label="Начало">
        <UiInputDate
          type="time"
          :disabled="loading"
          :model-value="currentAgendaItem.startsAt"
          @update:model-value="editAgendaStartsAt([$event, agendaId])"
        />
      </UiLabel>
      <UiLabel class="endsAt" label="Окончание">
        <UiInputDate
          type="time"
          :disabled="loading"
          :model-value="currentAgendaItem.endsAt"
          @update:model-value="editAgendaEndsAt([$event, agendaId])"
        />
      </UiLabel>
    </div>
    <div class="row-3">
      <UiLabel :label="labelType">
        <UiInput
          name="title"
          :disabled="loading"
          :model-value="currentAgendaItem.title"
          @update:model-value="editAgendaTitle([$event, agendaId])"
        />
      </UiLabel>
    </div>
    <div class="talk-group" v-if="currentAgendaItem.type === 'talk'">
      <div class="row-4">
        <UiLabel label="Докладчик">
          <UiInput
            name="speaker"
            :disabled="loading"
            :model-value="currentAgendaItem.speaker"
            @update:model-value="editAgendaSpeaker([$event, agendaId])"
          />
        </UiLabel>
      </div>
      <div class="row-5">
        <UiDropdown
          :options="langOptions"
          type="Язык"
          :disabled="loading"
          :model-value="currentAgendaItem.language"
          @update:model-value="editAgendaLanguage([$event, agendaId])"
        />
      </div>
    </div>
    <div class="row-6" v-if="agendaType">
      <UiLabel label="Описание">
        <UiInput
          multiline
          name="description"
          :disabled="loading"
          :model-value="currentAgendaItem.description"
          @update:model-value="editAgendaDescription([$event, agendaId])"
        />
      </UiLabel>
    </div>
  </div>
</template>
<script>
import {
  agendaItemsOptions,
  agendaLangOptions,
} from '@/services/_agenda.service';
import UiDropdown from '@/components/ui/UiDropdown';
import UiLabel from '@/components/ui/UiLabel';
import UiInputDate from '@/components/ui/UiInputDate';
import UiInput from '@/components/ui/UiInput';
import UiIcon from '@/components/ui/UiIcon';
import { mapActions } from 'vuex';

export default {
  name: 'EditAgendaItemForm',
  components: {
    UiDropdown,
    UiLabel,
    UiInputDate,
    UiInput,
    UiIcon,
  },
  data: () => ({
    options: agendaItemsOptions,
    langOptions: agendaLangOptions,
  }),
  props: {
    agendaId: {
      type: String,
      required: true,
      validator: agenda => agenda !== '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    agenda() {
      return this.$store.state.editing.editableMeetup.agenda;
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
  methods: {
    ...mapActions([
      'editAgendaType',
      'editAgendaStartsAt',
      'editAgendaEndsAt',
      'editAgendaTitle',
      'editAgendaSpeaker',
      'editAgendaLanguage',
      'editAgendaDescription',
      'removeEditableAgendaItem',
    ]),
  },
};
</script>
<style scoped lang="scss">
@import '../../../../assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .edit-agenda-item-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid $MAIN_COLOR;
    border-radius: 0 24px 24px 24px;
    margin-top: 25px;
    .row-1,
    .row-5 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 15px;
      margin-left: 5px;
      .trash {
        width: 28px;
        margin-right: 30px;
        cursor: pointer;
        padding: 5px;
        border-radius: 3px;
        margin-top: -10px;
      }
      .trash:active {
        background: rgba(42, 48, 87, 0.3);
      }
    }
    .row-2 {
      display: flex;
      flex-wrap: wrap;
      width: 95%;
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
      width: 90%;
      margin-left: 15px;
    }
  }
}
@media (min-width: 1020px) {
  .edit-agenda-item-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid $MAIN_COLOR;
    border-radius: 0 24px 24px 24px;
    margin-top: 25px;
    .row-1,
    .row-5 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 15px;
      margin-left: 5px;
      .trash {
        width: 28px;
        margin-right: 30px;
        cursor: pointer;
        padding: 5px;
        border-radius: 3px;
      }
      .trash:active {
        background: rgba(42, 48, 87, 0.3);
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
