<template>
  <div class="create-view">
    <h3>Создайте митап</h3>
    <div class="creation-form">
      <form>
        <UiLabel label="Заголовок">
          <UiInput v-model="meetupForm.title" required />
        </UiLabel>
        <UiLabel label="Дата мероприятия">
          <UiInputDate v-model="meetupForm.date" />
        </UiLabel>
        <UiLabel label="Место проведения">
          <UiInput v-model="meetupForm.place" />
        </UiLabel>
        <UiLabel label="Описание">
          <UiInput multiline v-model="meetupForm.description" />
        </UiLabel>
      </form>
    </div>
    <UiImageUploader
      class="uploader"
      :preview="preview"
      @upload="uploadUrl"
      @remove="removeUrl"
    />
    <AgendaItemForm class="agenda-item"></AgendaItemForm>
    <div class="creation-buttons">
      <UiButton variant="bgBlue" @click="create">Создать</UiButton>
      <UiButton variant="bgRed" @click="cancel">Отменить</UiButton>
    </div>
  </div>
</template>
<script>
import UiImageUploader from '@/components/Autorized/ComponetnsForCreating/ImageUploader';
import UiInput from '@/components/ui/UiInput';
import UiInputDate from '@/components/ui/UiInputDate';
import UiLabel from '@/components/ui/UiLabel';
import UiButton from '@/components/ui/UiButton';
import { removeImage } from '@/requesters/firebase/_firebase.storage.requesters';
import { setFirebaseData } from '@/requesters/firebase/_firebase.database.requesters';
import AgendaItemForm from '@/components/Autorized/MeetupCreate/AgendaItemForm';
export default {
  name: 'CreateView',
  components: {
    AgendaItemForm,
    UiImageUploader,
    UiLabel,
    UiInput,
    UiInputDate,
    UiButton,
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
    uploadUrl(url) {
      console.log(url);
      this.meetupForm.imageId = url.url;
      this.meetupForm.image = url.url;
      this.meetupForm.file = url.file;
    },
    removeUrl() {
      this.meetupForm.imageId = null;
      this.meetupForm.image = null;
    },
    async cancel() {
      if (this.meetupForm.image) {
        console.log(this.meetupForm.image);
        await removeImage('/covers/', this.meetupForm.image);
      }
      this.meetupForm = {};
      await this.$router.push({ name: 'meetups' });
    },
    async create() {
      await setFirebaseData('meetups/' + this.meetupForm.id, this.meetupForm);
      await this.$router.push({ name: 'meetups' });
    },
  },
};
</script>
<style scoped lang="scss">
.create-view {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 24px;
  background: white;
  padding: 10px;
  h3 {
    font-family: JetBrainMono-Bold, sans-serif;
    color: #3535ad;
  }
  .creation-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .uploader {
    width: 100%;
  }
  .agenda-item {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .creation-buttons {
    display: flex;
    align-self: center;
  }
}
</style>
