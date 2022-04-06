<template>
  <img class="ui_icon" :alt="iconName" :src="iconSrc" />
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
    iconSrc() {
      let url = '';
      this.icons.forEach(item => {
        if (item.name.includes(this.iconName)) {
          url = item.url;
        }
      });
      return url;
    },
  },
};
</script>
<style scoped lang="scss"></style>
