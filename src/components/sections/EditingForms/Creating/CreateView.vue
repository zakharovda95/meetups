<template>
  <div class="create-view">
    <h3>Создайте митап</h3>
    <UiImageUploader
      class="uploader"
      :loading="isLoading"
      @select="selectImage"
      @remove="removeImage"
    />
    <CreateForm class="forms" :loading="isLoading" />
    <div class="agenda-item-group">
      <h3>Программа</h3>
      <CreateAgendaItemForm
        v-for="agenda in meetupForm.agenda"
        :key="agenda.id"
        :loading="isLoading"
        class="agenda-forms"
        :agenda-id="agenda.id"
      />
      <div class="add-button">
        <UiButton :disabled="isLoading" variant="blue" @click="addAgendaItem">
          + Добавить пункт программы
        </UiButton>
      </div>
    </div>
    <div class="creation-buttons">
      <UiButton :disabled="isLoading" variant="bgBlue" @click="createMeetup"
        >Создать</UiButton
      >
      <UiButton :disabled="isLoading" variant="bgRed" @click="cancel"
        >Отменить</UiButton
      >
    </div>
  </div>
</template>
<script>
import UiImageUploader from '@/components/sections/EditingForms/ImageUploader';
import CreateForm from '@/components/sections/EditingForms/Creating/CreateForm';
import UiButton from '@/components/ui/UiButton';
import CreateAgendaItemForm from '@/components/sections/EditingForms/Creating/CreateAgendaItemForm';
import {
  getStorageDataLink,
  uploadImage,
} from '@/requesters/firebase/_firebase.storage.requesters';
import { mapActions } from 'vuex';
export default {
  name: 'CreateView',
  components: {
    CreateAgendaItemForm,
    UiImageUploader,
    UiButton,
    CreateForm,
  },
  data: () => ({
    file: null,
    isLoading: false,
  }),
  computed: {
    meetupForm() {
      return this.$store.state.creating.meetupForm;
    },
  },
  methods: {
    ...mapActions(['addAgendaItem', 'uploadImage', 'resetMeetupForm']),
    selectImage(file) {
      this.file = file;
    },
    async uploadImg() {
      try {
        const res = await uploadImage('/covers/', this.file);
        const path = res.metadata.fullPath;
        const url = await getStorageDataLink(path);
        this.uploadImage({ url, file: this.file });
      } catch (err) {
        this.$toast.error('Ошибка123' + err);
      }
    },
    removeImage() {
      this.file = null;
    },
    cancel() {
      this.file = null;
      this.$router.push({ name: 'meetups' });
      this.$toast.error('Создание митапа отменено');
      this.resetMeetupForm();
    },
    async createMeetup() {
      this.isLoading = true;
      if (this.file) {
        await this.uploadImg();
      }
      await this.$store.dispatch('createMeetup');
      await this.$router.push({
        name: 'meetup',
        params: { meetupId: this.meetupForm.id },
      });
      this.resetMeetupForm();
      await this.$toast.success('Митап создан!');
      this.isLoading = false;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .create-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin-top: 24px;
    background: white;
    padding: 10px;
    h3 {
      font-family: JetBrainMono-Bold, sans-serif;
      color: #3535ad;
      text-align: center;
    }
    .forms {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .uploader {
      width: 100%;
    }
    .agenda-forms {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .creation-buttons {
      display: flex;
      align-self: center;
    }
  }
}
@media (min-width: 1020px) {
  .create-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin-top: 24px;
    background: white;
    padding: 10px;
    h3 {
      font-family: JetBrainMono-Bold, sans-serif;
      color: #3535ad;
    }
    .forms {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .uploader {
      width: 100%;
    }
    .agenda-forms {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .creation-buttons {
      display: flex;
      align-self: center;
    }
  }
}
</style>
