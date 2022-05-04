import { createStore } from 'vuex';
import { moduleMain } from '@/store/modules/moduleMain';
import { moduleCreating } from '@/store/modules/moduleCreating';
export default createStore({
  modules: {
    main: moduleMain,
    creating: moduleCreating,
  },
});
