export const calcAccurateHours = (date) => {
  return date.getHours() + date.getMinutes() / 60;
};
