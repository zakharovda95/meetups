<template>
  <div class="image-uploader">
    <label class="image-uploader__preview">
      <span class="image-uploader__text">123</span>
      <input
        type="file"
        ref="input"
        accept="image/*"
        class="image-uploader__input"
        v-bind="$attrs"
        @change="uploadImage"
      />
    </label>
  </div>
</template>

<script>
import { uploadImage } from '@/requesters/firebase/_firebase.storage.requesters';
import { getStorageDataLink } from '@/requesters/firebase/_firebase.storage.requesters';
export default {
  name: 'UiImageUploader',
  props: {
    preview: String,
    uploader: Function,
  },
  methods: {
    async uploadImage() {
      const file = this.$refs.input.files[0];
      const res = await uploadImage('/covers/', file);
      const link = await getStorageDataLink(res.metadata.fullPath);
      console.log(link);
    },
  },
};
</script>

<style scoped>
/*.image-uploader {*/
/*  //background-image: var(--bg-url);*/
/*}*/
/*.image-uploader__input {*/
/*  opacity: 0;*/
/*  height: 0;*/
/*}*/
/*.image-uploader__preview {*/
/*  //--bg-url: ;*/
/*  background-size: cover;*/
/*  background-position: center;*/
/*  background-image: linear-gradient(*/
/*      0deg,*/
/*      rgba(0, 0, 0, 0.4),*/
/*      rgba(0, 0, 0, 0.4)*/
/*    ),*/
/*  // border: 2px solid var(--blue-light);*/
/*  border-radius: 8px;*/
/*  transition: 0.2s border-color;*/
/*  cursor: pointer;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  max-width: 512px;*/
/*  height: 228px;*/
/*}*/
/*.image-uploader__text {*/
/*  color: white;*/
/*  font-family: 'Nunito', sans-serif;*/
/*  font-weight: 600;*/
/*  font-size: 20px;*/
/*  line-height: 28px;*/
/*}*/
/*.image-uploader__preview:hover {*/
/*  border-color: blue;*/
/*}*/
/*.image-uploader__preview.image-uploader__preview-loading {*/
/*  cursor: no-drop;*/
/*}*/
</style>
