<template>
  <div class="edit-view">
    <h3>Редактирование митапа</h3>
    <ImageUploader
      class="uploader"
      :loading="isLoading"
      :preview="editableMeetup.image"
      @select="selectImage"
      @remove="removeImage"
    />
    <EditForm class="meetup-form" :loading="isLoading" />
    <h3>Программа</h3>
    <EditAgendaItemForm
      v-for="agenda in editableMeetup.agenda"
      :key="agenda.id"
      :loading="isLoading"
      class="agenda-form"
      :agenda-id="agenda.id"
    />
    <div class="add-button">
      <UiButton
        :disabled="isLoading"
        variant="blue"
        @click="addAgendaItemToEditableMeetup"
      >
        + Добавить пункт программы
      </UiButton>
    </div>
    <div class="editing-buttons">
      <UiButton :disabled="isLoading" variant="bgBlue" @click="editMeetup">
        Сохранить
      </UiButton>
      <UiButton :disabled="isLoading" variant="bgRed" @click="cancel">
        Отменить
      </UiButton>
    </div>
  </div>
</template>
<script>
import ImageUploader from '@/components/sections/EditingForms/ImageUploader';
import EditForm from '@/components/sections/EditingForms/Editing/EditForm';
import { mapActions } from 'vuex';
import EditAgendaItemForm from '@/components/sections/EditingForms/Editing/EditAgendaItemForm';
import UiButton from '@/components/ui/UiButton';
import {
  getStorageDataLink,
  uploadImage,
} from '@/requesters/firebase/_firebase.storage.requesters';
export default {
  name: 'EditView',
  components: {
    EditAgendaItemForm,
    ImageUploader,
    EditForm,
    UiButton,
  },
  data: () => ({
    file: null,
    isLoading: false,
  }),
  created() {
    this.getEditableMeetup(this.meetupId);
  },
  computed: {
    meetupId() {
      return this.$route.params.meetupId;
    },
    editableMeetup() {
      return this.$store.state.editing.editableMeetup;
    },
  },
  methods: {
    ...mapActions([
      'getEditableMeetup',
      'addAgendaItemToEditableMeetup',
      'editMeetup',
    ]),
    selectImage(file) {
      this.file = file;
    },
    removeImage() {
      this.file = null;
    },
    cancel() {
      this.file = null;
      this.$router.push({ name: 'meetups' });
      this.$toast.error('Редактирование митапа отменено');
    },
    async uploadImg() {
      try {
        const res = await uploadImage('/covers/', this.file);
        const path = res.metadata.fullPath;
        const url = await getStorageDataLink(path);
        this.uploadImage({ url, file: this.file });
      } catch (err) {
        this.$toast.error('Ошибка' + err);
      }
    },
    async editMeetup() {
      this.isLoading = true;
      if (this.file) {
        await this.uploadImg();
      }
      await this.editMeetup();
      await this.$router.push({
        name: 'meetup',
        params: { meetupId: this.meetupId },
      });
      await this.$toast.success('Редактирование завершено!');
      this.isLoading = false;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .edit-view {
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
    .meetup-form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .uploader {
      width: 100%;
    }
    .agenda-form {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .editing-buttons {
      display: flex;
      align-self: center;
    }
  }
}
@media (min-width: 1020px) {
  .edit-view {
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
    .meetup-form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .uploader {
      width: 100%;
    }
    .agenda-form {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .editing-buttons {
      display: flex;
      align-self: center;
    }
  }
}
</style>
