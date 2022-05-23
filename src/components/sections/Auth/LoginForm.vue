<template>
  <div class="login-form mdl-shadow--2dp">
    <h3>Войдите</h3>
    <Form @submit="login">
      <UiLabel class="login-field" label="Email">
        <UiInput
          name="email"
          :rules="validateEmail"
          type="email"
          v-model="userData.email"
        />
        <ErrorMessage name="email" class="error" />
      </UiLabel>
      <UiLabel label="Пароль">
        <UiInput
          name="password"
          :rules="validatePassword"
          type="password"
          v-model="userData.password"
        />
        <ErrorMessage name="password" class="error" />
      </UiLabel>
      <UiButton class="login-button" type="submit" variant="bgMain">
        Войти
      </UiButton>
      <p>
        Нет аккаунта?
        <UiLink class="registration-link" :to="{ name: 'registration' }">
          Зарегистрируйтесь
        </UiLink>
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
import { Form, ErrorMessage } from 'vee-validate';
import {
  validateEmail,
  validatePassword,
} from '@/services/_validation.servisce';
import {
  setLocalStorageData,
  updateToken,
} from '@/services/_local-storage.service';
export default {
  name: 'LoginForm',
  components: { UiButton, UiInput, UiLink, UiLabel, Form, ErrorMessage },
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
    validateEmail(value) {
      return validateEmail(value);
    },
    validatePassword(value) {
      return validatePassword(value);
    },
    async login() {
      const isSuccess = await fbLogin(
        this.userData.email,
        this.userData.password,
      );
      if (isSuccess === 'auth/user-not-found') {
        this.$toast.error('Неверный логин/пароль');
      }
      if (isSuccess === 'auth/wrong-password') {
        this.$toast.error('Неверный пароль');
      } else {
        setLocalStorageData('user_token', isSuccess.uid);
        await this.$store.dispatch('isUserAuthorized');
        await this.$router.push({ name: 'meetups' });
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
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
      font-family: Roboto, sans-serif;
    }

    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      .error {
        color: $ERROR_COLOR;
        font-size: 0.7rem;
        font-family: Roboto, sans-serif;
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
      font-family: Roboto, sans-serif;
    }
    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      .error {
        color: $ERROR_COLOR;
        font-size: 0.7rem;
        font-family: Roboto, sans-serif;
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
        font-family: Roboto, sans-serif;

        .registration-link {
          color: $MAIN_COLOR;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
