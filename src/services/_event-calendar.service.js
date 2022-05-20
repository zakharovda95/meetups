import moment from 'moment';

export const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

/** Извлечение дат мероприятий из массива митапов **/
export function getEventsDates(array) {
  return array.map(event => {
    return {
      id: event.id,
      date: event.dateUnix,
      title: event.title,
    };
  });
}

/** Форматирование дат мероприятий **/
export function formatEventDates(events) {
  return events.map(event => {
    return {
      id: event.id,
      title: event.title,
      date: {
        day: +moment(event.date).format('D'),
        month: +moment(event.date).format('M'),
        year: +moment(event.date).format('YYYY'),
      },
    };
  });
}

/** Формирование массива дней месяца **/
export function getDaysInMonthArray(year, month) {
  let monthDate = moment([year, month]).startOf('month');
  return [...Array(monthDate.daysInMonth())].map((_, i) => {
    return {
      day: i + 1,
      events: [],
    };
  });
}

/** Расчет дня недлели с которого начинается месяц **/
export function getWeekdayMonthBegin(year, month) {
  if (+moment([year, month]).startOf('month').format('d') === 0) {
    return 7;
  }
  return moment([year, month]).startOf('month').format('d');
}
