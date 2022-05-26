/** Формы создания и редактирования встречь **/
import { uuid } from 'vue-uuid';
import moment from 'moment';

export const meetupDefaultForm = {
  id: uuid.v1(),
  imageId: null,
  image: null,
  imageName: null,
  organizer: {
    uid: '',
    name: '',
  },
  title: '',
  date: moment().format('YYYY-MM-DD'),
  place: '',
  description: '',
  agenda: [],
};

export const agendaItemDefaultForm = {
  id: uuid.v1(),
  type: 'registration',
  title: '',
  speaker: '',
  description: '',
  language: '',
  startsAt: '07:00',
  endsAt: '08:00',
};
/** Опции дропдауна и нейминг иконок **/
export const agendaItemsOptions = [
  {
    value: 'registration',
    name: 'Регистрация',
  },
  {
    value: 'opening',
    name: 'Открытие',
  },
  {
    value: 'break',
    name: 'Перерыв',
  },
  {
    value: 'coffee',
    name: 'Coffee Break',
  },
  {
    value: 'closing',
    name: 'Закрытие',
  },
  {
    value: 'afterparty',
    name: 'Afterparty',
  },
  {
    value: 'talk',
    name: 'Доклад',
  },
  {
    value: 'other',
    name: 'Другое',
  },
];

export const agendaLangOptions = [
  {
    value: 'EN',
    name: 'EN',
  },
  {
    value: 'RU',
    name: 'RU',
  },
];

export const agendaItemIcons = {
  registration: 'clipboard',
  opening: 'clock',
  talk: 'dialog',
  break: 'bell',
  coffee: 'cup',
  closing: 'close',
  afterparty: 'moon',
  other: 'list',
};
