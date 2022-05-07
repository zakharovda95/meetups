import { uuid } from 'vue-uuid';

export const defaultMeetupForm = {
  id: uuid.v1(),
  imageId: null,
  image: null,
  imageFile: null,
  organizer: '123',
  title: '',
  date: '',
  place: '',
  description: '',
  agenda: [],
};

export const defaultMeetupAgendaItemForm = {
  id: uuid.v1(),
  type: 'registration',
  title: '',
  speaker: '',
  description: '',
  language: '',
  startsAt: '07:00',
  endsAt: '08:00',
};
