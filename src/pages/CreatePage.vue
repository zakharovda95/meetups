<template>
  <div class="create-page">
    <CreateView />
  </div>
</template>
<script>
import CreateView from '@/components/sections/EditingForms/Creating/CreateView.vue';
export default {
  name: 'CreatePage',
  components: { CreateView },
  methods: {
    guard() {
      if (!this.$store.state.user.data.userInfo) {
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
.create-page {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
