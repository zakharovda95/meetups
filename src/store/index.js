import { createStore } from 'vuex';
import { moduleMain } from '@/store/modules/moduleMain';
export default createStore({
  modules: {
    main: moduleMain,
  },
});
