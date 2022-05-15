<template>
  <div class="login-form">
    <h3>Войдите</h3>
    <form>
      <UiLabel class="login-field" label="Email">
        <UiInput type="email" v-model="userData.email" />
      </UiLabel>
      <UiLabel label="Пароль">
        <UiInput type="password" v-model="userData.password" />
      </UiLabel>
      <UiButton class="login-button" variant="bgBlue" @click="logIn">
        Войти
      </UiButton>
      <p>
        Нет аккаунта?
        <UiLink class="registration-link" to="/">Зарегистрируйтесь</UiLink>
      </p>
    </form>
  </div>
</template>
<script>
import UiLabel from '@/components/ui/UiLabel';
import UiInput from '@/components/ui/UiInput';
import UiLink from '@/components/ui/UiLink';
import UiButton from '@/components/ui/UiButton';
import { fbLogin } from '@/requesters/firebase/_firebase.auth.requesters';
export default {
  name: 'LoginForm',
  components: { UiButton, UiInput, UiLink, UiLabel },
  mounted() {
    this.$toast.show('Вы можете зайти под демо пользователем');
  },
  data: () => ({
    userData: {
      email: '',
      password: '',
    },
  }),
  methods: {
    async logIn() {
      const userData = await fbLogin(
        this.userData.email,
        this.userData.password,
      );
      await this.$store.dispatch('setUserInfo', userData);
      await this.$router.push({ name: 'meetups' });
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .login-form {
    display: flex;
    flex-direction: column;
    margin: 25px;
    width: 90%;
    padding: 25px;
    background: white;
    text-align: center;

    h3 {
      font-family: 'JetBrainMono-Light', sans-serif;
      color: #3535ad;
    }

    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
    }

    .login-button {
      margin-top: 25px;
    }

    p {
      font-family: 'JetBrainMono-Light', sans-serif;
      font-size: 1.4em;
      color: #3535ad;
      margin-top: 25px;

      .registration-link {
        font-family: 'JetBrainMono-Light', sans-serif;
        color: #687ade;
        text-decoration: underline;
      }
    }
  }
}
@media (min-width: 1020px) {
  .login-form {
    display: flex;
    flex-direction: column;
    margin: 25px;
    width: 40%;
    padding: 25px;
    background: white;
    text-align: center;
    h3 {
      font-family: 'JetBrainMono-Light', sans-serif;
      color: #3535ad;
    }
    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
    }
    .login-button {
      margin-top: 25px;
    }
    p {
      font-family: 'JetBrainMono-Light', sans-serif;
      font-size: 1.4em;
      color: #3535ad;
      margin-top: 25px;
      .registration-link {
        font-family: 'JetBrainMono-Light', sans-serif;
        color: #687ade;
        text-decoration: underline;
      }
    }
  }
}
</style>
