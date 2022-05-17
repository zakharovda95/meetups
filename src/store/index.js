import { createStore } from 'vuex';
import { moduleMeetupsStore } from '@/store/modules/module-meetups.store';
import { moduleCreatingStore } from '@/store/modules/module-creating.store';
import { moduleEditingStore } from '@/store/modules/module-editing.store';
import { moduleUserStore } from '@/store/modules/module-user.store';
import { moduleCalendarStore } from '@/store/modules/module-calendar.store';

export default createStore({
  modules: {
    meetups: moduleMeetupsStore,
    creating: moduleCreatingStore,
    editing: moduleEditingStore,
    user: moduleUserStore,
    calendar: moduleCalendarStore,
  },
});
