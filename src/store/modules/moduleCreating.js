export const moduleCreating = {
  state: () => ({
    meetupForm: {
      id: Date.now() - 2,
      organizer: '123',
      image: '',
      imageId: Date.now() - 1,
      title: '',
      date: '',
      place: '',
      description: '',
      agenda: [],
    },
  }),
};
