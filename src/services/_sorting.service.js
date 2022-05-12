export function filterMeetupsByInput(array, inputValue) {
  return array.filter(item => {
    return item.title.toUpperCase().includes(inputValue.toUpperCase());
  });
}

export function sortMeetupsByDate(array, option) {
  return array.filter(item => {
    const nowDate = Date.now();
    const elemDate = item.dateUnix;

    switch (option) {
      case 'future':
        return nowDate < elemDate;
      case 'past':
        return nowDate > elemDate;
      case 'all':
        return item;
      default:
        return item;
    }
  });
}

export function getMeetupsIOrganizedOrParticipate(array, options) {
  console.log(array, options);
  return array.filter(item => {
    return options.map(elem => elem === item.id);
  });
}
