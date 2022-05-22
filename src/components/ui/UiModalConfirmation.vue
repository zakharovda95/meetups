<template>
  <UiModal @update:close-modal="$emit('update:closeModal')">
    <div class="ui-modal-confirmation">
      <h4 class="text"><slot /></h4>
      <div class="buttons">
        <UiButton
          class="agree"
          @click="$emit('update:confirmation', true)"
          variant="bgMain"
        >
          ДА
        </UiButton>
        <UiButton
          class="disagree"
          @click="$emit('update:confirmation', false)"
          variant="bgWrong"
        >
          НЕТ
        </UiButton>
      </div>
    </div>
  </UiModal>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
import UiModal from '@/components/ui/UiModal';

export default {
  name: 'UiModalConfirmation',
  components: {
    UiModal,
    UiButton,
  },
  emits: ['update:confirmation', 'update:closeModal'],
  data: () => ({}),
};
</script>

<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
.ui-modal-confirmation {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  .text {
    margin-bottom: 20px;
  }
  .buttons {
    margin-bottom: 20px;
  }
}
</style>
