<template>
  <div class="edit-page">
    <EditView />
  </div>
</template>
<script>
import EditView from '@/components/sections/EditingForms/Editing/EditView.vue';
export default {
  name: 'EditPage',
  components: { EditView },
  computed: {
    isUserAuthorized() {
      return this.$store.state.user.data.isUserAuthorized;
    },
  },
  methods: {
    guard() {
      if (!this.isUserAuthorized) {
        this.$router.replace({ name: 'meetups' });
      }
    },
  },
  created() {
    this.guard();
  },
};
</script>
<style scoped lang="scss">
.edit-page {
  display: flex;
  justify-content: center;
}
</style>
