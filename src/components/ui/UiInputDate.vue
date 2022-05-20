<template>
  <input
    class="ui-input-date"
    :type="type"
    ref="input"
    :value="modelValue"
    @input="modelValueProxy = $event.target.value"
  />
</template>
<script>
import moment from 'moment';
import UiInput from '@/components/ui/UiInput';
export default {
  name: 'UiInputDate',
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
<style scoped lang="scss">
@import '../../assets/styles/_constants.scss';
.ui-input-date {
  border: 3px solid $UI_COLOR;
  border-radius: 18px;
  padding: 5px 5px 5px 15px;
  font-size: 1.2em;
  max-width: 70vw;
  background: $ITEMS_COLOR;
}
</style>
