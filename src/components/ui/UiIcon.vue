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
      return this.$store.state.main.mainPageIcons;
    },
    icon() {
      return this.icons.find(icon => icon.name.includes(this.iconName));
    },
  },
};
</script>
<style scoped lang="scss"></style>
