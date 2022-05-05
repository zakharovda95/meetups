<template>
  <div class="create-page">
    <CreateView />
  </div>
</template>
<script>
import CreateView from '@/components/sections/CreationAndEditingComponents/CreateView.vue';
export default {
  name: 'CreatePage',
  components: { CreateView },
};
</script>
<style scoped lang="scss">
.create-page {
  display: flex;
  justify-content: center;
}
</style>
