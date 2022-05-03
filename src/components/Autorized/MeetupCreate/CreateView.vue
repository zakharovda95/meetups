<template>
  <div class="create-view">
    <UiImageUploader
      :preview="preview"
      @upload="uploadUrl"
      @remove="removeUrl"
    />
  </div>
</template>
<script>
import UiImageUploader from '@/components/Autorized/MeetupCreate/ImageUploader';
export default {
  name: 'CreateView',
  components: { UiImageUploader },
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
<style scoped lang="scss"></style>
