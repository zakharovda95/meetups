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
  </div>
</template>
<script>
import ImageUploader from '@/components/sections/EditingForms/ImageUploader';
import EditForm from '@/components/sections/EditingForms/Editing/EditForm';
import { mapActions } from 'vuex';
export default {
  name: 'EditView',
  components: {
    ImageUploader,
    EditForm,
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
    ...mapActions(['getEditableMeetup']),
    selectImage(file) {
      this.file = file;
    },
    removeImage() {
      this.file = null;
    },
  },
};
</script>
<style scoped lang="scss"></style>
