<template>
  <UiInput
    :type="type"
    v-model="formattedDate"
    @input="$emit('update:modelValue', $event.target.valueAsNumber)"
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
    formattedDate() {
      if (!this.modelValue) {
        return '';
      }
      if (this.type === 'date') {
        return moment(this.modelValue).utc().format('YYYY-MM-DD');
      }
      if (this.type === 'time') {
        if (this.$attrs.step && +this.$attrs.step % 60 !== 0) {
          return moment.utc(this.modelValue).utc().format('HH:mm');
        } else {
          return moment.utc(this.modelValue).utc().format('HH:mm');
        }
      }
      if (this.type === 'datetime-local') {
        return moment.utc(this.modelValue).utc().format('YYYY-MM-DDTHH:mm');
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>
