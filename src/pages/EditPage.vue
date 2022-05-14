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
};
</script>
<style scoped lang="scss">
.edit-page {
  display: flex;
  justify-content: center;
}
</style>
