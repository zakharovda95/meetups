<template>
  <UiInput
    :type="type"
    ref="input"
    :value="modelValue"
    @input="modelValueProxy = $event.target.value"
  ></UiInput>
</template>
<script>
import UiInput from '@/components/ui/UiInput';
import moment from 'moment';
export default {
  name: 'UiInputDate',
  components: { UiInput },
  props: {
    type: {
      type: String,
      default: 'date',
    },
    modelValue: {
      type: String,
    },
  },
  computed: {
    modelValueProxy: {
      get() {
        if (!this.modelValue) {
          return '';
        }
        if (this.type === 'date') {
          return moment(this.modelValue).utc().format('YYYY-MM-DD');
        }
        if (this.type === 'time') {
          return moment.utc(this.modelValue).utc().format('HH:mm');
        }
        if (this.type === 'datetime-local') {
          return moment.utc(this.modelValue).utc().format('YYYY-MM-DDTHH:mm');
        }
        return false;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>
<style scoped lang="scss"></style>
