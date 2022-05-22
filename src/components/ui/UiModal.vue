<template>
  <div class="ui-modal mdl-shadow--8dp" @click="close">
    <div class="layout">
      <div class="content" @click.stop>
        <div class="close">
          <UiButton variant="default" @click="close">Закрыть</UiButton>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/UiButton';
export default {
  name: 'UiModal',
  components: {
    UiButton,
  },
  emits: ['update:closeModal'],
  methods: {
    close() {
      document.body.style.overflow = 'auto';
      this.$emit('update:closeModal');
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
@media (max-width: 1019px) {
  .ui-modal {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    .layout {
      display: flex;
      width: 100%;
      height: 100%;
      background: $MODAL_LAYOUT;
      justify-content: center;
      .content {
        display: flex;
        flex-direction: column;
        align-self: center;
        background: $ITEMS_COLOR;
        border-radius: 0 24px 24px 24px;
        border: 4px solid $MAIN_COLOR;
        max-width: 85%;
        font-family: 'JetBrainMono-Light', sans-serif;
        .close {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          margin-bottom: 20px;
          margin-right: 12px;
          font-family: JetBrainMono-Light sans-serif;
        }
      }
    }
  }
}
@media (min-width: 1020px) {
  .ui-modal {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    .layout {
      display: flex;
      width: 100%;
      height: 100%;
      background: $MODAL_LAYOUT;
      justify-content: center;
      .content {
        display: flex;
        flex-direction: column;
        align-self: center;
        background: $ITEMS_COLOR;
        width: 40vw;
        height: 30vh;
        border-radius: 0 24px 24px 24px;
        border: 4px solid $MAIN_COLOR;
        font-family: 'JetBrainMono-Light', sans-serif;
        .close {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          margin-bottom: 20px;
          margin-right: 12px;
          font-family: 'JetBrainMono-Light', sans-serif;
        }
      }
    }
  }
}
</style>
