<template>
  <div class="registration-form mdl-shadow--2dp">
    <h3>Зарегистрируйтесь</h3>
    <Form @submit="registration">
      <UiLabel label="Email">
        <UiInput
          name="email"
          :rules="validateEmail"
          type="email"
          v-model.trim="userData.email"
        />
        <ErrorMessage name="email" class="error" />
      </UiLabel>
      <UiLabel label="Логин">
        <UiInput
          name="login"
          :rules="validateLogin"
          v-model.trim="userData.login"
        />
        <ErrorMessage name="login" class="error" />
      </UiLabel>
      <UiLabel label="Пароль">
        <UiInput
          name="password"
          :rules="validatePassword"
          type="password"
          v-model.trim="userData.password"
        />
        <ErrorMessage class="error" name="password" />
      </UiLabel>
      <UiLabel label="Повторите пароль">
        <UiInput
          name="passwordRepeat"
          :rules="validatePasswordRepeat"
          type="password"
          v-model.trim="userData.passwordRepeat"
        />
        <ErrorMessage name="passwordRepeat" class="error" />
      </UiLabel>
      <UiCheckbox required v-model="userData.isConfirmation">
        Я согласен с условиями
      </UiCheckbox>
      <UiButton
        :disabled="!userData.isConfirmation"
        :class="{ disabled: !userData.isConfirmation }"
        type="submit"
        class="register-button"
        variant="bgMain"
      >
        Зарегистрироваться
      </UiButton>
      <p>
        Уже есть аккаунт?
        <UiLink class="login-link" :to="{ name: 'login' }">Войдите</UiLink>
      </p>
    </Form>
  </div>
</template>
<script>
import UiLabel from '@/components/ui/UiLabel';
import UiInput from '@/components/ui/UiInput';
import UiLink from '@/components/ui/UiLink';
import UiButton from '@/components/ui/UiButton';
import UiCheckbox from '@/components/ui/UiCheckbox';
import { fbRegister } from '@/requesters/firebase/_firebase.auth.requesters';
import { fbSetData } from '@/requesters/firebase/_firebase.database.requesters';
import { ErrorMessage, Form } from 'vee-validate';
import {
  validateEmail,
  validateLogin,
  validatePassword,
  validatePasswordRepeat,
} from '@/services/_validation.servisce';
export default {
  name: 'RegistrationForm',
  components: {
    UiButton,
    UiInput,
    UiCheckbox,
    UiLink,
    UiLabel,
    Form,
    ErrorMessage,
  },

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
    validateEmail(value) {
      return validateEmail(value);
    },
    validateLogin(value) {
      return validateLogin(value);
    },
    validatePassword(value) {
      return validatePassword(value);
    },
    validatePasswordRepeat(value) {
      return validatePasswordRepeat(value, this.userData.password);
    },
    async registration() {
      try {
        const response = await fbRegister(
          this.userData.email,
          this.userData.password,
        );
        const userForm = {
          uid: response.uid,
          name: this.userData.login,
          email: response.email,
          meetups: {
            participant: ['Как участник'],
            organizer: ['Как организатор'],
          },
        };
        await fbSetData('users/' + response.uid, userForm);
        await this.$router.push({ name: 'login' });
        await this.$toast.success('Регистрация прошла успешно!');
      } catch (error) {
        this.$toast.error(
          'Пожалуйста повторите еще раз! Firebase`у что то не понравилось:(' +
            <br /> +
            error,
        );
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
@media (max-width: 1019px) {
  .registration-form {
    display: flex;
    flex-direction: column;
    margin: 25px;
    width: 90%;
    padding: 25px;
    background: white;
    text-align: center;
    border-radius: 0 25px 25px 25px;

    h3 {
      color: $FONT_COLOR_DARK;
      font-family: 'JetBrainMono-Light', sans-serif;
    }

    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      .error {
        color: $ERROR_COLOR;
        font-size: 0.7rem;
        font-family: 'JetBrainMono-Light', sans-serif;
      }
      .register-button {
        margin-top: 25px;
      }
      .disabled {
        background: $DISABLED_COLOR;
        color: $FONT_COLOR_LIGHT;
        cursor: no-drop;
      }

      p {
        font-size: 1.4em;
        color: $FONT_COLOR_DARK;
        margin-top: 25px;
        font-family: 'JetBrainMono-Light', sans-serif;

        .login-link {
          color: $MAIN_COLOR;
          text-decoration: underline;
        }
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
    border-radius: 0 25px 25px 25px;
    h3 {
      color: $FONT_COLOR_DARK;
      font-family: 'JetBrainMono-Light', sans-serif;
    }
    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      .error {
        color: $ERROR_COLOR;
        font-size: 0.7rem;
        font-family: 'JetBrainMono-Light', sans-serif;
      }
      .register-button {
        margin-top: 25px;
      }
      .disabled {
        background: $DISABLED_COLOR;
        color: $FONT_COLOR_LIGHT;
        cursor: no-drop;
      }
      p {
        font-size: 1.4em;
        color: $FONT_COLOR_DARK;
        margin-top: 25px;
        font-family: 'JetBrainMono-Light', sans-serif;
        .login-link {
          color: $MAIN_COLOR;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
