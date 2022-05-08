<template>
  <div class="registration-form">
    <h3>Зарегистрируйтесь</h3>
    <form>
      <UiLabel class="login-field" label="Email">
        <UiInput type="email" v-model="userData.email" />
      </UiLabel>
      <UiLabel label="Логин"><UiInput v-model="userData.login" /></UiLabel>
      <UiLabel label="Пароль">
        <UiInput type="password" v-model="userData.password" />
      </UiLabel>
      <UiLabel label="Повторите пароль">
        <UiInput type="password" v-model="userData.passwordRepeat" />
      </UiLabel>
      <UiCheckbox v-model="userData.isConfirmation">
        Я согласен с условиями
      </UiCheckbox>
      <UiButton class="register-button" variant="bgBlue">
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