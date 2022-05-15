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
        :disabled="loading"
        @change="selectImage"
        @click="removeImg"
      />
    </label>
  </div>
</template>

<script>
import { DEFAULT_IMAGE } from '@/assets/styles/_constants';

export default {
  name: 'UiImageUploader',
  emits: ['select', 'error', 'remove'],
  props: {
    preview: String,
    loading: Boolean,
  },
  inheritAttrs: false,
  data: () => ({
    url: undefined,
  }),
  mounted() {
    if (this.preview) {
      this.url = this.preview;
    }
  },
  methods: {
    selectImage() {
      const file = this.$refs.input.files[0];
      this.url = URL.createObjectURL(file);
      this.$emit('select', file);
      this.$toast.success('Картинка загружена!');
    },

    async removeImg(event) {
      if (this.url) {
        event.preventDefault();
        this.$emit('remove');
        this.url = undefined;
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
      return this.url
        ? `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${this.url})`
        : `linear-gradient( 0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${DEFAULT_IMAGE})`;
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
