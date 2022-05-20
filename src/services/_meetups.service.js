/** Сортировка по значению инпута **/
export function filterMeetupsByInput(array, inputValue) {
  return array.filter(item => {
    return item.title.toUpperCase().includes(inputValue.toUpperCase());
  });
}

/** Сортировка будущих и прошедших мероприятий **/
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

/** Сортировка митапов которые я организую/учавствую **/
export function filterMeetupsInWhichIOrganizeOrParticipate(
  meetups,
  userMeetups,
) {
  return meetups.filter(item => {
    for (const elem of userMeetups) {
      if (item.id === elem) {
        return true;
      }
    }
  });
}
