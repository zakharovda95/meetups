<template>
  <div class="create-view">
    <h3>Создайте митап</h3>
    <div class="row">
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
      <div class="creation-buttons">
        <UiButton variant="bgBlue" @click="create">Создать</UiButton>
        <UiButton variant="bgRed" @click="cancel">Отменить</UiButton>
      </div>
    </div>
    <UiImageUploader
      class="uploader"
      :preview="preview"
      @upload="uploadUrl"
      @remove="removeUrl"
    />
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
export default {
  name: 'CreateView',
  components: { UiImageUploader, UiLabel, UiInput, UiInputDate, UiButton },
  data: () => ({
    preview: null,
    meetupForm: {
      id: Date.now() - 2,
      organizer: '123',
      image: '',
      imageId: Date.now() - 1,
      title: '',
      date: '',
      place: '',
      description: '',
      agenda: [],
    },
  }),
  methods: {
    uploadUrl(url) {
      console.log(url);
      this.meetupForm.imageId = url.url;
      this.meetupForm.image = url.file;
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
      await setFirebaseData('meetups/', this.meetupForm);
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
  .row {
    display: flex;
    justify-content: space-between;
    .creation-form {
      display: flex;
      flex-direction: column;
      width: 60%;
    }
    .creation-buttons {
      display: flex;
      flex-direction: column;
      align-self: center;
    }
  }
  .uploader {
    width: 100%;
  }
}
</style>
