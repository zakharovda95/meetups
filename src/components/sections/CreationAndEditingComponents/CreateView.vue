<template>
  <div class="create-view">
    <h3>Создайте митап</h3>
    <UiImageUploader
      class="uploader"
      @upload="uploadImage"
      @remove="removeImage"
    />
    <CreateForm class="forms" />
    <div class="agenda-item-group">
      <h3>Программа</h3>
      <AgendaItemForm
        class="agenda-forms"
        v-for="agenda in meetupForm.agenda"
        :key="agenda.id"
        :agenda-id="agenda.id"
      />
      <div class="add-button">
        <UiButton variant="blue" @click="addAgendaItem">
          + Добавить пункт программы
        </UiButton>
      </div>
    </div>
    <div class="creation-buttons">
      <UiButton variant="bgBlue" @click="create">Создать</UiButton>
      <UiButton variant="bgRed" @click="cancel">Отменить</UiButton>
    </div>
  </div>
</template>
<script>
import UiImageUploader from '@/components/sections/CreationAndEditingComponents/ImageUploader';
import CreateForm from '@/components/sections/CreationAndEditingComponents/CreateForm';
import UiButton from '@/components/ui/UiButton';
// import { removeImage } from '@/requesters/firebase/_firebase.storage.requesters';
// import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
import AgendaItemForm from '@/components/sections/CreationAndEditingComponents/AgendaItemForm';
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
  }),
  computed: {
    meetupForm() {
      return this.$store.state.creating.meetupForm;
    },
  },
  methods: {
    addAgendaItem() {
      this.$store.dispatch('addAgendaItem');
    },
    uploadImage(url) {
      this.$store.dispatch('uploadImage', url);
    },
    removeImage() {
      this.$store.dispatch('removeImage');
    },
    // async cancel() {
    //   if (this.meetupForm.image) {
    //     console.log(this.meetupForm.image);
    //     await removeImage('/covers/', this.meetupForm.image);
    //   }
    //   this.meetupForm = {};
    //   await this.$router.push({ name: 'meetups' });
    // },
    // async create() {
    //   await setFirebaseData('meetups/' + this.meetupForm.id, this.meetupForm);
    //   await this.$router.push({ name: 'meetups' });
    // },
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
