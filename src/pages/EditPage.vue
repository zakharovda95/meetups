<template>
  <div class="create-page">
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
.create-page {
  display: flex;
  justify-content: center;
}
</style>
