<template>
  <div class="edit-view">
    <h3>Редактирование митапа</h3>
    <div class="uploader">
      <ImageUploader
        class="uploader"
        :loading="isLoading"
        :preview="editableMeetup.image"
        @select="selectImage"
        @remove="removeImage"
      />
    </div>
    <EditForm class="forms" :loading="isLoading" />
    <div class="agenda">
      <h3>Программа</h3>
      <EditAgendaItemForm
        v-for="agenda in editableMeetup.agenda"
        :key="agenda.id"
        :loading="isLoading"
        class="agenda-item"
        :agenda-id="agenda.id"
      />
      <div class="add-button">
        <UiButton
          :disabled="isLoading"
          variant="default"
          @click="addAgendaItemToEditableMeetup"
        >
          + Добавить пункт программы
        </UiButton>
      </div>
    </div>
    <div class="editing-buttons">
      <UiButton :disabled="isLoading" variant="bgWrong" @click="editMeetup">
        Сохранить
      </UiButton>
      <UiButton :disabled="isLoading" variant="bgMain" @click="cancel">
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
  fbGetStorageDataLink,
  fbRemoveImage,
  fbUploadImage,
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
    ...mapActions(['getEditableMeetup', 'addAgendaItemToEditableMeetup']),
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
        await fbRemoveImage('/covers/' + this.editableMeetup.imageName);
        const res = await fbUploadImage('/covers/', this.file);
        const path = res.metadata.fullPath;
        this.editableMeetup.image = await fbGetStorageDataLink(path);
        this.editableMeetup.imageId = this.$uuid.v1();
        this.editableMeetup.imageName = res.metadata.name;
      } catch (err) {
        console.log(err);
        this.$toast.error('Что то пошло не так!');
      }
    },
    async editMeetup() {
      this.isLoading = true;
      if (this.file) {
        await this.uploadImg();
      }
      await this.$store.dispatch('editMeetup');
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
@import '~@/assets/styles/_constants.scss';
@import '~@/assets/fonts/_fonts.css';
@media (max-width: 1019px) {
  .edit-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin-top: 24px;
    background: $ITEMS_COLOR;
    padding: 10px;
    border-radius: 0 24px 24px 24px;
    h3 {
      color: $FONT_COLOR_DARK;
      text-align: center;
      font-family: 'JetBrainMono-Bold', sans-serif;
    }
    .forms {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .uploader {
      width: 100%;
      margin: 0 auto;
    }
    .agenda {
      width: 80%;
      margin: 0 auto;
      .add-button {
        display: flex;
        justify-content: center;
        margin: 24px 0;
      }
    }
    .editing-buttons {
      display: flex;
      align-self: center;
      margin-left: 20px;
    }
  }
}
@media (min-width: 1020px) {
  .edit-view {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 24px;
    background: $ITEMS_COLOR;
    padding: 10px;
    border-radius: 0 34px 34px 34px;
    h3 {
      color: $FONT_COLOR_DARK;
      text-align: center;
      font-family: 'JetBrainMono-Bold', sans-serif;
    }
    .forms {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
    }
    .uploader {
      width: 80%;
      margin: 0 auto;
    }
    .agenda {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      .add-button {
        margin: 24px 0;
      }
    }
    .editing-buttons {
      display: flex;
      align-self: center;
    }
  }
}
</style>
