<template>
  <div class="login-page">
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from '@/components/sections/Auth/LoginForm';
export default {
  name: 'LoginPage',
  components: { LoginForm },
};
</script>
<style scoped lang="scss">
.login-page {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
