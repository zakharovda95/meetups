<template>
  <div class="create-view">
    <h3>Создайте митап</h3>
    <div class="creation-form">
      <MeetupCreationForm />
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
import UiImageUploader from '@/components/Autorized/MeetupCreate/ImageUploader';
import MeetupCreationForm from '@/components/Autorized/MeetupCreate/MeetupCreationForm';
export default {
  name: 'CreateView',
  components: { MeetupCreationForm, UiImageUploader },
  data: () => ({
    preview: null,
  }),
  methods: {
    uploadUrl(url) {
      console.log(url);
    },
    removeUrl(url) {
      console.log(url);
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
    width: 60%;
  }
  .uploader {
    width: 100%;
  }
}
</style>
