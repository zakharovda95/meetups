<template>
  <div class="registration-form mdl-shadow--2dp">
    <h3>Зарегистрируйтесь</h3>
    <form>
      <UiLabel class="login-field" label="Email">
        <UiInput type="email" v-model="userData.email" />
      </UiLabel>
      <UiLabel label="Логин">
        <UiInput v-model="userData.login" />
      </UiLabel>
      <UiLabel label="Пароль">
        <UiInput type="password" v-model="userData.password" />
      </UiLabel>
      <UiLabel label="Повторите пароль">
        <UiInput type="password" v-model="userData.passwordRepeat" />
      </UiLabel>
      <UiCheckbox required v-model="userData.isConfirmation">
        Я согласен с условиями
      </UiCheckbox>
      <UiButton
        :disabled="!userData.isConfirmation"
        type="submit"
        @click.prevent="registration"
        class="register-button"
        variant="bgMain"
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
import { fbRegister } from '@/requesters/firebase/_firebase.auth.requesters';
import { fbSetData } from '@/requesters/firebase/_firebase.database.requesters';

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
      const response = await fbRegister(
        this.userData.email,
        this.userData.password,
      );
      console.log(response);
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
