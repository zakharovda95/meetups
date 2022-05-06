<template>
  <div class="image-uploader">
    <label
      class="preview"
      :class="uploaderClass"
      :style="{ 'background-image': bgImage }"
    >
      <span class="text">{{ text }}</span>
      <input
        type="file"
        ref="input"
        accept="image/*"
        class="input"
        v-bind="$attrs"
        :disabled="loading"
        @change="selectImage"
        @click="removeImg"
      />
    </label>
  </div>
</template>

<script>
import {
  getStorageDataLink,
  uploadImage,
  removeImage,
} from '@/requesters/firebase/_firebase.storage.requesters';

export default {
  name: 'UiImageUploader',
  emits: ['select', 'upload', 'error', 'remove'],
  props: {
    preview: String,
  },
  data: () => ({
    loading: false,
    url: undefined,
  }),
  created() {
    if (this.preview) {
      this.url = this.preview;
    }
  },
  methods: {
    selectImage() {
      const file = this.$refs.input.files[0];
      this.$emit('select', file);
      this.uploadImg(file);
    },
    async uploadImg(file) {
      try {
        this.loading = true;
        const res = await uploadImage('/covers/', file);
        const path = res.metadata.fullPath;
        const url = await getStorageDataLink(path);
        this.url = url;
        this.$emit('upload', { url, file });
        this.$toast.success('Картинка загружена!');
      } catch (err) {
        this.$emit('error', err);
        this.$toast.error('Ошибка' + err);
      } finally {
        this.loading = false;
      }
    },

    async removeImg(event) {
      if (this.url) {
        event.preventDefault();
        this.loading = true;
        const file = this.$refs.input.files[0];
        await removeImage('/covers/', file);
        this.$emit('remove');
        this.url = undefined;
        this.loading = false;
        this.$toast.success('Картинка удалена!');
      }
      this.$emit('remove');
      this.$refs.input.value = null;
    },
  },
  computed: {
    uploaderClass() {
      return {
        'loading': this.loading,
      };
    },
    bgImage() {
      if (this.url) {
        return `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${this.url})`;
      } else {
        return `linear-gradient( 0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://firebasestorage.googleapis.com/v0/b/meetups-ddc9b.appspot.com/o/covers%2Fmeetups_card__background.jpg?alt=media&token=744441d9-c81e-4332-82a5-f41e5cc96b58')`;
      }
    },
    text() {
      if (!this.url && !this.loading) {
        return 'Загрузить изображение';
      }
      if (this.loading) {
        return 'Загрузка...';
      }
      if (this.url && !this.loading) {
        return 'Удалить изображение';
      }
      return '';
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../../assets/styles/constants';
.image-uploader {
  display: flex;

  .input {
    opacity: 0;
    height: 0;
  }

  .preview {
    background-size: cover;
    background-position: center;
    border: 2px solid white;
    transition: 0.2s border-color;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 380px;
    height: 228px;
  }

  .text {
    color: white;
    font-family: 'JetBrainMono-Light', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
}
.preview:hover {
  border-color: blue;
}
.loading {
  cursor: no-drop;
}
</style>
