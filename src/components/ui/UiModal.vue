<template>
  <div class="ui-modal mdl-shadow--8dp" @click="close">
    <div class="layout">
      <div class="content" @click.stop>
        <div class="close">
          <UiButton variant="default" @click="close"> Закрыть </UiButton>
        </div>
        <p>{{ header }}</p>
        <UiLink variant="nav-link" :to="{ name: 'login' }">Вход</UiLink>
        <UiLink variant="nav-link" :to="{ name: 'registration' }">
          Регистрация
        </UiLink>
      </div>
    </div>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
import UiButton from '@/components/ui/UiButton';
export default {
  name: 'UiModal',
  components: {
    UiLink,
    UiButton,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  emits: ['update:closeModal'],
  methods: {
    close() {
      this.$emit('update:closeModal');
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
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
      .close {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-bottom: 20px;
      }
      p {
        text-align: center;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
