<template>
  <div class="registration-form mdl-shadow--2dp">
    <h3>Зарегистрируйтесь</h3>
    <Form @submit="registration">
      <UiLabel class="login-field" label="Email">
        <UiInput
          name="email"
          :rules="validateEmail"
          type="email"
          v-model.trim="userData.email"
        />
        <ErrorMessage name="email" class="error" />
      </UiLabel>
      <UiLabel label="Логин">
        <UiInput name="login" v-model.trim="userData.login" />
        <ErrorMessage name="login" class="error" />
      </UiLabel>
      <UiLabel label="Пароль">
        <UiInput
          name="password"
          type="password"
          v-model.trim="userData.password"
        />
        <ErrorMessage class="error" name="password" />
      </UiLabel>
      <UiLabel label="Повторите пароль">
        <UiInput
          name="passwordRepeat"
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
        type="submit"
        class="register-button"
        variant="bgMain"
      >
        Зарегистрироваться
      </UiButton>
      <p>
        Уже есть аккаунт? <UiLink class="login-link" to="/">Войдите</UiLink>
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
import { validateEmail } from '@/services/_validation.servisce';
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
      } catch (error) {
        this.errors = error;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import '../../../assets/styles/_constants.scss';
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
    }

    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      .error {
        color: red;
        font-size: 0.7rem;
      }
    }

    .register-button {
      margin-top: 25px;
    }

    p {
      font-size: 1.4em;
      color: $FONT_COLOR_DARK;
      margin-top: 25px;

      .login-link {
        color: $MAIN_COLOR;
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
    border-radius: 0 25px 25px 25px;
    h3 {
      color: $FONT_COLOR_DARK;
    }
    form {
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      .error {
        color: red;
        font-size: 0.7rem;
      }
    }
    .register-button {
      margin-top: 25px;
    }
    p {
      font-size: 1.4em;
      color: $FONT_COLOR_DARK;
      margin-top: 25px;
      .login-link {
        color: $MAIN_COLOR;
        text-decoration: underline;
      }
    }
  }
}
</style>
