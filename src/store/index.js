import { createStore } from 'vuex';
import { moduleMain } from '@/store/modules/moduleMain';
import { moduleCreating } from '@/store/modules/moduleCreating';
import { moduleEditing } from '@/store/modules/moduleEditing';
export default createStore({
  modules: {
    main: moduleMain,
    creating: moduleCreating,
    editing: moduleEditing,
  },
});
