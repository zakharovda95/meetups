<template>
  <div class="registration-form">
    <h3>Зарегистрируйтесь</h3>
    <form ref="form">
      <UiLabel class="login-field" label="Email">
        <UiInput required type="email" v-model="userData.email" />
      </UiLabel>
      <UiLabel label="Логин">
        <UiInput required v-model="userData.login" />
      </UiLabel>
      <UiLabel label="Пароль">
        <UiInput required type="password" v-model="userData.password" />
      </UiLabel>
      <UiLabel label="Повторите пароль">
        <UiInput required type="password" v-model="userData.passwordRepeat" />
      </UiLabel>
      <UiCheckbox required v-model="userData.isConfirmation">
        Я согласен с условиями
      </UiCheckbox>
      <UiButton
        :disabled="!userData.isConfirmation"
        type="submit"
        @click.prevent="registration"
        class="register-button"
        variant="bgBlue"
      >
        Зарегистрироваться
      </UiButton>
      <p>
        Уже есть аккаунт? <UiLink class="login-link" to="/">Войдите</UiLink>
      </p>
    </form>
  </div>
</template>
<script>
import UiLabel from '@/components/ui/UiLabel';
import UiInput from '@/components/ui/UiInput';
import UiLink from '@/components/ui/UiLink';
import UiButton from '@/components/ui/UiButton';
import UiCheckbox from '@/components/ui/UiCheckbox';
import { register } from '@/requesters/firebase/_firebase.auth.requesters';
import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';

export default {
  name: 'RegistrationForm',
  components: { UiButton, UiInput, UiCheckbox, UiLink, UiLabel },
  data: () => ({
    userData: {
      email: '',
      login: '',
      password: '',
      passwordRepeat: '',
      isConfirmation: false,
    },
  }),
  methods: {
    async registration() {
      const response = await register(
        this.userData.email,
        this.userData.password,
      );
      const user = {
        info: {
          uid: response.uid,
          name: this.userData.login,
        },
      };
      await setFirebaseData('users/', user);
      await this.$store.dispatch('getUsers');
      await this.$router.push({ name: 'login' });
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .registration-form {
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

    .register-button {
      margin-top: 25px;
    }

    p {
      font-family: 'JetBrainMono-Light', sans-serif;
      font-size: 1.4em;
      color: #3535ad;
      margin-top: 25px;

      .login-link {
        font-family: 'JetBrainMono-Light', sans-serif;
        color: #687ade;
        text-decoration: underline;
      }
    }
  }
}
@media (min-width: 1020px) {
  .registration-form {
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
    .register-button {
      margin-top: 25px;
    }
    p {
      font-family: 'JetBrainMono-Light', sans-serif;
      font-size: 1.4em;
      color: #3535ad;
      margin-top: 25px;
      .login-link {
        font-family: 'JetBrainMono-Light', sans-serif;
        color: #687ade;
        text-decoration: underline;
      }
    }
  }
}
</style>
