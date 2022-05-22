<template>
  <img class="ui-icon" :alt="iconName" :src="icon?.url" />
</template>
<script>
export default {
  name: 'UiIcon',
  props: {
    iconName: {
      type: String,
      required: true,
      validator: name => name !== '',
    },
  },
  computed: {
    icons() {
      return this.$store.state.meetups.data.icons;
    },
    icon() {
      return this.icons.find(icon => icon.name.includes(this.iconName));
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
</style>
