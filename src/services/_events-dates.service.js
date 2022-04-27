export function getEventsDates(array) {
  return array.map(item => {
    return {
      id: item.id,
      date: item.dateUnix,
      title: item.title,
    };
  });
}
