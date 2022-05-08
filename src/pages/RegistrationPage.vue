<template>
  <div class="registration-page">
    <RegistrationForm />
  </div>
</template>
<script>
import RegistrationForm from '@/components/sections/Auth/RegistrationForm';
export default {
  name: 'RegistrationPage',
  components: { RegistrationForm },
  data: () => ({}),
};
</script>
<style scoped lang="scss">
.registration-page {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
