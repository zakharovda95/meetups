<template>
  <div class="login-form mdl-shadow--2dp">
    <h3>Войдите</h3>
    <Form @submit="check">
      <UiLabel class="login-field" label="Email">
        <UiInput type="email" v-model="userData.email" />
      </UiLabel>
      <UiLabel label="Пароль">
        <UiInput type="password" v-model="userData.password" />
      </UiLabel>
      <UiButton class="login-button" variant="bgMain" @click="logIn">
        Войти
      </UiButton>
      <p>
        Нет аккаунта?
        <UiLink class="registration-link" to="/">Зарегистрируйтесь</UiLink>
      </p>
    </Form>
  </div>
</template>
<script>
import UiLabel from '@/components/ui/UiLabel';
import UiInput from '@/components/ui/UiInput';
import UiLink from '@/components/ui/UiLink';
import UiButton from '@/components/ui/UiButton';
import { fbLogin } from '@/requesters/firebase/_firebase.auth.requesters';
import { Form } from 'vee-validate';
export default {
  name: 'LoginForm',
  components: { UiButton, UiInput, UiLink, UiLabel, Form },
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
      await fbLogin(this.userData.email, this.userData.password);
      await this.$router.push({ name: 'meetups' });
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/_constants.scss';
@media (max-width: 1019px) {
  .login-form {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 25px;
    width: 90%;
    height: 50vh;
    padding: 25px;
    background: white;
    text-align: center;
    border-radius: 0 25px 25px 25px;

    h3 {
      color: $FONT_COLOR_DARK;
    }

    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
    }

    .login-button {
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: 25px;
      width: 150px;
    }
    .login-button:hover {
      background-color: $FONT_COLOR_DARK;
      color: $FONT_COLOR_LIGHT;
    }

    p {
      font-size: 1.4em;
      color: $FONT_COLOR_DARK;
      margin-top: 25px;

      .registration-link {
        color: $MAIN_COLOR;
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
    width: 30%;
    height: 50vh;
    padding: 25px;
    background: white;
    text-align: center;
    align-self: center;
    border-radius: 0 25px 25px 25px;
    h3 {
      color: $FONT_COLOR_DARK;
    }
    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
    }
    .login-button {
      display: flex;
      justify-content: center;
      align-self: center;
      margin-top: 25px;
      width: 150px;
    }
    .login-button:hover {
      background-color: $FONT_COLOR_DARK;
      color: $FONT_COLOR_LIGHT;
    }
    p {
      font-size: 1.4em;
      color: $FONT_COLOR_DARK;
      margin-top: 25px;

      .registration-link {
        color: $MAIN_COLOR;
        text-decoration: underline;
      }
    }
  }
}
</style>
