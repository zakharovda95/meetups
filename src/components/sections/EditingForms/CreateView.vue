<template>
  <div class="create-view" :class="loadingClass">
    <h3>Создайте митап</h3>
    <UiImageUploader
      :loading="isLoading"
      class="uploader"
      @select="selectImage"
      @remove="removeImage"
    />
    <CreateForm class="forms" :loading="isLoading" />
    <div class="agenda-item-group">
      <h3>Программа</h3>
      <AgendaItemForm
        class="agenda-forms"
        v-for="agenda in meetupForm.agenda"
        :key="agenda.id"
        :agenda-id="agenda.id"
        :loading="isLoading"
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
import CreateForm from '@/components/sections/EditingForms/CreateForm';
import UiButton from '@/components/ui/UiButton';
import AgendaItemForm from '@/components/sections/EditingForms/AgendaItemForm';
import {
  getStorageDataLink,
  uploadImage,
} from '@/requesters/firebase/_firebase.storage.requesters';
//import { removeImage } from '@/requesters/firebase/_firebase.storage.requesters';
export default {
  name: 'CreateView',
  components: {
    AgendaItemForm,
    UiImageUploader,
    UiButton,
    CreateForm,
  },
  data: () => ({
    preview: null,
    file: null,
    isLoading: false,
  }),
  created() {
    this.$store.dispatch('initMeetupForm');
  },
  computed: {
    meetupForm() {
      return this.$store.state.creating.meetupForm;
    },
    loadingClass() {
      return {
        'loading': this.isLoading,
      };
    },
  },
  methods: {
    addAgendaItem() {
      this.$store.dispatch('addAgendaItem');
    },
    selectImage(file) {
      this.file = file;
    },
    async uploadImage() {
      try {
        const res = await uploadImage('/covers/', this.file);
        const path = res.metadata.fullPath;
        const url = await getStorageDataLink(path);
        this.$store.dispatch('uploadImage', { url, file: this.file });
      } catch (err) {
        this.$toast.error('Ошибка123' + err);
      }
    },
    removeImage() {
      this.file = null;
      //this.$store.dispatch('removeImage');
    },
    cancel() {
      //await removeImage('/covers/', this.file);
      this.file = null;
      this.$router.push({ name: 'meetups' });
      this.$toast.error('Создание митапа отменено');
      this.$store.dispatch('resetMeetupForm');
    },
    async createMeetup() {
      this.isLoading = true;
      if (this.file) {
        await this.uploadImage();
      }
      await this.$store.dispatch('createMeetup');
      await this.$router.push({
        name: 'meetup',
        params: { meetupId: this.meetupForm.id },
      });
      await this.$toast.success('Митап создан!');
      await this.$store.dispatch('resetMeetupForm');
      this.isLoading = false;
    },
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 1019px) {
  .loading {
    background: #444343;
  }
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
    .loading {
      background: #444343;
    }
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
    .loading {
      cursor: no-drop;
    }
  }
}
</style>
