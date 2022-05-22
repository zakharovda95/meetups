<template>
  <div class="ui-contacts">
    <UiLink
      class="contact-link"
      tag="a"
      target="_blank"
      href="https://github.com/zakharovda95"
    >
      <UiIcon id="github" icon-name="github" />
    </UiLink>
    <UiLink
      class="contact-link"
      tag="a"
      target="_blank"
      href="https://vk.com/id625689222"
    >
      <UiIcon id="vk" icon-name="vk" />
    </UiLink>
    <UiLink
      class="contact-link"
      tag="a"
      target="_blank"
      href="https://www.instagram.com/something_get_wrong/"
    >
      <UiIcon id="instagram" icon-name="instagram" />
    </UiLink>
  </div>
</template>
<script>
import UiLink from '@/components/ui/UiLink';
import UiIcon from '@/components/ui/UiIcon';

export default {
  name: 'UiContacts',
  components: { UiLink, UiIcon },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
.ui-contacts {
  position: fixed;
  top: 40vh;
  left: 40px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid $MAIN_COLOR;
  padding: 7px;
  border-radius: 8px;
  background: $ITEMS_COLOR;
  .contact-link {
    margin: 0 auto;
    #github,
    #vk,
    #instagram {
      display: flex;
      align-self: center;
      width: 64px;
    }
    #github,
    #vk {
      margin-bottom: 20px;
    }
    @keyframes shake-link {
      0% {
        transform: translate(0px, 1px);
      }
      33% {
        transform: translate(1px, 2px);
      }
      66% {
        transform: translate(2px, 1px);
      }
      100% {
        transform: translate(1px, 0px);
      }
    }
    #github:hover,
    #vk:hover,
    #instagram:hover {
      animation: shake-link 0.2s infinite alternate;
    }
  }
}
</style>
